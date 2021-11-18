import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import '../component/MainPage/Button.css';
import img_plug from "../img/img_plug.svg";
import img_plug_white from "../img/img_plug_white.svg";
import img_focus from "../img/img_focus.svg";
import img_focus_green from "../img/img_focus_green.svg";
import img_menu1 from "../img/img_menu1.png";
import img_menu2 from "../img/img_menu2.png";
import img_search from "../img/img_search.png";
import img_search_active from "../img/img_search_active.png";
import {PopUp} from "../component/PopUp/PopUp";

/*global kakao*/

const markers = []
const resultMarker = []
const resultOverlay = []
let map;

export const MainPage = () => {
    const [plug, setPlug] = useState(false);
    const [focus, setFocus] = useState(false);
    const [select, setSelect] = useState('') // 어떤 팝업창을 띄울지 -> table 또는 plug, 팝업을 띄우지 않을 때는 ''
    const [searchTable, setSearchTable] = useState('선택 안함')
    const [searchPlug, setSearchPlug] = useState('선택 안함')

    useEffect(()=>{
        myLocate();
    }, [])

    const getState = (state) => {
        setSelect(state);
    }

    const getSearchTable = (searchTable) => {
        setSearchTable(searchTable)
    }

    const getSearchPlug = (searchPlug) => {
        setSearchPlug(searchPlug)
    }

    const myLocate = () => {
        markers.pop()
        let container = document.getElementById('map');
        let options = {
            // 국민대 37.610189448398906, 126.99703140609459
            center: new kakao.maps.LatLng(37.610189448398906, 126.99703140609459),
            level: 5
        };

        // 현재 위치
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                let lat = position.coords.latitude,
                    lon = position.coords.longitude;

                let locPosition = new kakao.maps.LatLng(lat, lon)
                displayMyLocate(locPosition);
            });
        } else {
            let locPosition = new kakao.maps.LatLng(37.5677463677699, 126.9153946742084)
            displayMyLocate(locPosition);
        }

        map = new kakao.maps.Map(container, options);

        function displayMyLocate(locPosition) {
            let imageSrc = 'https://user-images.githubusercontent.com/54919662/140506553-d8210702-d80a-4348-97bd-1ed9df1eb937.png', // 마커이미지의 주소입니다
                imageSize = new kakao.maps.Size(42, 42), // 마커이미지의 크기입니다
                imageOption = {offset: new kakao.maps.Point(20, 20)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

            let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
                markerPosition = new kakao.maps.LatLng(37.54699, 127.09598); // 마커가 표시될 위치입니다

            // 마커를 생성합니다.
            new kakao.maps.Marker({
                map: map,
                position: locPosition,
                image : markerImage,
            });

            map.setCenter(locPosition);
        }
    }

    const clickFocus = async () => {
        setFocus(!focus)
        if (focus) {
            setPlug(false);
            await myLocate();
            // setFocus(true)
        }
    }

    const clickPlug = () => {
        setPlug(!plug)

        let ps = new kakao.maps.services.Places(map);

        // 카테고리로 카페 검색
        ps.categorySearch('CE7', placesSearchCB, {useMapBounds: true});

        // 키워드 검색 완료 시 호출되는 콜백함수
        function placesSearchCB(data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {
                for (let i = 0; i < data.length; i++) {
                    if (!plug) displayMarker(data[i]);
                    else removeMarker()
                }
            }
        }

        function displayMarker(place) {
            // 마커를 생성하고 지도에 표시합니다
            let position = new kakao.maps.LatLng(place.y, place.x);

            let imageSrc = 'https://user-images.githubusercontent.com/54919662/140638676-3e057f62-9685-43c1-a97b-8b982621a1cc.png', // 마커이미지의 주소입니다
                imageSize = new kakao.maps.Size(36, 36), // 마커이미지의 크기입니다
                imageOption = {offset: new kakao.maps.Point(18, 30)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

            let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
                markerPosition = new kakao.maps.LatLng(37.54699, 127.09598); // 마커가 표시될 위치입니다

            let marker = new kakao.maps.Marker({
                map: map,
                position: position,
                image : markerImage,
            });

            resultMarker.push(marker)

            let content = '<div class="customoverlay">' +
                '    <span class="title">10</span>' +
                '</div>';

            // 커스텀 오버레이를 생성합니다
            let customOverlay = new kakao.maps.CustomOverlay({
                map: map,
                position: position,
                content: content,
                yAnchor: 1
            });

            resultOverlay.push(customOverlay)
        }

        function removeMarker() {
            for ( let i = 0; i < resultMarker.length; i++ ) {
                resultMarker[i].setMap(null);
                resultOverlay[i].setMap(null);
            }
            resultMarker.pop()
            resultOverlay.pop()
        }
    }

    return <>
        <Map id={"map"}>
            <PlugButton bg={plug?"#4AD395":"#FFFFFF"} onClick={()=>clickPlug()}>
                {plug?
                    <WhitePlugIcon/>
                    :
                    <PlugIcon/>
                }
            </PlugButton>
            <FocusButton onClick={()=>clickFocus()}>
                {focus?
                    <FocusIcon/>
                    :
                    <GreenFocusIcon/>
                }
            </FocusButton>

            <Menu>
                <EachMenu border={searchTable==='선택 안함'?0:'#4AD395 3px solid'} margin={[10,5]} onClick={()=>{setSelect('table')}} background={false}>
                    <img className="img_table" src={img_menu1} alt="table"/>
                    <MenuLabel>테이블: {searchTable}</MenuLabel>
                </EachMenu>
                <EachMenu border={searchPlug==='선택 안함'?0:'#4AD395 3px solid'} margin={[0,0]} onClick={()=>{setSelect('plug')}} background={false}>
                    <img className="img_outlet" src={img_menu2} alt="outlet"/>
                    <MenuLabel>콘센트: {searchPlug}</MenuLabel>
                </EachMenu>
                <EachMenu border={0} margin={[5,10]} background={!(searchTable === '선택 안함' || searchPlug === '선택 안함')}>
                    {!(searchTable === '선택 안함' || searchPlug === '선택 안함')?
                        <img className="img_search" src={img_search_active} alt="search"/>
                        :
                        <img className="img_search" src={img_search} alt="search"/>
                    }
                </EachMenu>
            </Menu>
        </Map>

        {select === 'table'?
            <PopUp state={'table'} getState={getState} getSearchTable={getSearchTable}/>
            :
            <>
                {select === 'plug'?
                    <PopUp state={'plug'} getState={getState} getSearchPlug={getSearchPlug}/>
                    :
                    null
                }
            </>
        }
    </>
}

const Map = styled.div`
  width : 100vw;
  height : 100vh;
`

const PlugIcon = styled.img.attrs({
    src : img_plug
})`
  width : 40px;
  height : 40px;
  margin : auto;
`

const WhitePlugIcon = styled.img.attrs({
    src : img_plug_white
})`
  width : 40px;
  height : 40px;
  margin : auto;
`

const PlugButton = styled.div`
  position: absolute;
  width: 70px;
  height: 70px;
  right: 20px;
  top: 20px;
  background: ${props=>props.bg};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  z-index : 2;

  display : flex;
  justify-content: center;
`

const FocusIcon = styled.img.attrs({
    src : img_focus
})`
  width: 30px;
  height: 30px;
  margin : auto;
`

const GreenFocusIcon = styled.img.attrs({
    src : img_focus_green
})`
  width: 30px;
  height: 30px;
  margin : auto;
`

const FocusButton = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  left: 20px;
  bottom: 200px;

  background: #FFFFFF;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  z-index : 2;

  display : flex;
  justify-content: center;
`

const Menu = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  max-width: 388px;
  width : 90%;
  height: 140px;
  bottom: 50px;
  background: rgba(238, 238, 238, 0.92);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display : flex;
  justify-content: space-around;
  align-items : center;
  z-index : 2;
`

const EachMenu = styled.button`
  width: 110px;
  height: 110px;
  background: ${props=>props.background? '#4AD395':'rgba(255, 255, 255, 0.92)'};
  border-radius: 10px;
  z-index : 2;
  margin-left : ${props=>props.margin[0]}px;
  margin-right : ${props=>props.margin[1]}px;
  border: ${props=>props.border};
`

const MenuLabel = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #000000;
`
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
import {useHistory} from "react-router-dom";
import {findCafe} from '../API';

/*global kakao*/

const markers = []
const resultMarker = []
const resultOverlay = []
const cafe = []
let map,locPosition;
let clickOverlay;

export const MainPage = () => {
    const history = useHistory();

    const [plug, setPlug] = useState(false);
    const [focus, setFocus] = useState(false);
    const [select, setSelect] = useState('') // 어떤 팝업창을 띄울지 -> table 또는 plug, 팝업을 띄우지 않을 때는 ''
    const [searchTable, setSearchTable] = useState('선택 안함')
    const [searchPlug, setSearchPlug] = useState('선택 안함')
    const [cafeInfo, setCafeInfo] = useState({
        id : '',
        condition : {},
        name : '',
        openTime : '',
        closeTime : '',
        tableInfo : {},
        img : {},
    })
    const [result, setResult] = useState({});

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

    window.cafeInfo = cafeInfo;
    window.moveDetail = (place) => {
        window.cafeInfo = place;
        history.push({
            pathname: '/detail',
            state : place,
        })
    }


    const myLocate = () => {
        markers.pop()
        let container = document.getElementById('map');
        let options = {
            // 국민대 37.610189448398906, 126.99703140609459
            center: new kakao.maps.LatLng(37.610189448398906, 126.99703140609459),
            level: 5
        };

        locPosition = new kakao.maps.LatLng(37.610189448398906, 126.99703140609459)

        // 현재 위치
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                let lat = position.coords.latitude,
                    lon = position.coords.longitude;

                locPosition = new kakao.maps.LatLng(lat, lon)
                displayMyLocate(locPosition);
            });
        }

        map = new kakao.maps.Map(container, options);
        displayMyLocate(locPosition)

        function displayMyLocate(locPosition) {
            let imageSrc = 'https://user-images.githubusercontent.com/54919662/140506553-d8210702-d80a-4348-97bd-1ed9df1eb937.png', // 마커이미지의 주소입니다
                imageSize = new kakao.maps.Size(42, 42), // 마커이미지의 크기입니다
                imageOption = {offset: new kakao.maps.Point(20, 20)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

            let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)

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
        }
    }

    const clickPlug = () => {
        setPlug(!plug)
        findCafe(locPosition.La,locPosition.Ma,'all','all').then(r=>setResult(r.data));
        for (let i=0; i<result.length; i++){
            if (!plug) displayMarker('DB',result[i], 'all', 'all');
            else{
                removeMarker();
                cafe.pop();
            }
        }

        let ps = new kakao.maps.services.Places(map);

        // 카테고리로 카페 검색
        ps.categorySearch('CE7', placesSearchCB, {useMapBounds: true});

        // 키워드 검색 완료 시 호출되는 콜백함수
        function placesSearchCB(data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {
                for (let i = 0; i < data.length; i++) {
                    if (!plug) displayMarker('kakao',data[i], -1, -1);
                    else {
                        removeMarker()
                        cafe.pop()
                    }
                }
            }
        }
    }

    function displayMarker(type, place, table, plug) {
        let correct = true;
        let imageSrc, markerPosition, content, clickContent;
        if (type === 'DB'){
            cafe.push(place.name.replaceAll(" ", ""))
            imageSrc = 'https://user-images.githubusercontent.com/54919662/140638676-3e057f62-9685-43c1-a97b-8b982621a1cc.png' // 마커이미지의 주소입니다
            markerPosition = new kakao.maps.LatLng(place.location.coordinates[1], place.location.coordinates[0]); // 마커가 표시될 위치입니다
            content = '<div class="customoverlay">' +
                      `    <span class="title">${place.totalOfTables}</span>` +
                      '</div>';
            clickContent = `<div class="overlay" onclick="moveDetail(cafeInfo)">` +
                           '    <div class="content">' +
                           '        <div class="text">' +
                           `            <div class="name">${place.name}</div>`+
                           `            <div class="time">${setTime(place.openTime)}부터</div>` +
                           `            <div class="time">${setTime(place.closeTime)}까지</div>` +
                           '        </div>' +
                           `        <div><img class="infoImg" src=${place.images}/></div>`+
                           '    </div>' +
                           '</div>';
        }
        else if (type === 'kakao'){
            let cafeName = place.place_name.replaceAll(" ", "");
            for (let i=0;i<cafe.length;i++){
                if (cafe[i] === cafeName) correct = false;
            }
            imageSrc = 'https://user-images.githubusercontent.com/54919662/147122611-014a3332-57fa-4a77-8107-f926705117a4.png' // 마커이미지의 주소입니다
            markerPosition = new kakao.maps.LatLng(place.y, place.x); // 마커가 표시될 위치입니다
            content = '<div class="customoverlay">' +
                      `    <span class="title"></span>` +
                      '</div>';
            clickContent = `<div class="overlay" onclick="moveDetail(cafeInfo)">` +
                           '    <div class="content">' +
                           '        <div class="text">' +
                           `            <div class="name">${place.place_name}</div>`+
                           `            <div class="time"><img class="contentImg1" src="https://user-images.githubusercontent.com/54919662/147132679-ac5844fb-d768-43a6-a0c9-332b622e6e41.png"/>${place.road_address_name}</div>` +
                           `            <div class="time"><img class="contentImg2" src="https://user-images.githubusercontent.com/54919662/147132750-31a80170-5ace-4afa-ad3a-e2c4995792ef.png"/>${place.phone? place.phone:'없음'}</div>` +
                           '        </div>' +
                           '    </div>' +
                           '</div>';
        }
        if (correct) {
            let imageSize = new kakao.maps.Size(36, 36), // 마커이미지의 크기입니다
                imageOption = {offset: new kakao.maps.Point(18, 30)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

            let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)

            let marker = new kakao.maps.Marker({
                map: map,
                position: markerPosition,
                image: markerImage,
            });

            resultMarker.push(marker)

            // 커스텀 오버레이를 생성합니다
            let customOverlay = new kakao.maps.CustomOverlay({
                map: map,
                position: markerPosition,
                content: content,
                yAnchor: 1
            });
            resultOverlay.push(customOverlay)

            // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
            kakao.maps.event.addListener(marker, 'click', function () {
                setCafeInfo({
                    id: place._id,
                    condition: [table, plug],
                    name: place.name ? place.name : place.place_name,
                    openTime: place.openTime ? setTime(place.openTime) : null,
                    closeTime: place.closeTime ? setTime(place.closeTime) : null,
                    address: place.road_address_name ? place.road_address_name : null,
                    phone: place.phone ? place.phone : null,
                    tableInfo: place.tables ? place.tables : null,
                    img: place.images ? place.images : null,
                    url: place.place ? place.place : place.place_url,
                })

                if (clickOverlay !== undefined) clickOverlay.setMap(null);
                clickOverlay = new kakao.maps.CustomOverlay({
                    content: clickContent,
                    map: map,
                    position: marker.getPosition()
                });
                clickOverlay.setMap(map);
            });
        }
    }

    function removeMarker() {
        for ( let i = 0; i < resultMarker.length; i++ ) {
            resultMarker[i].setMap(null);
            resultOverlay[i].setMap(null);
        }
        resultMarker.pop()
        resultOverlay.pop()
        if (clickOverlay !== undefined) clickOverlay.setMap(null);
    }

    const clickSearch = (table, plug) => {
        console.log(table, plug);
        removeMarker()
        if (!(searchTable === '선택 안함' || searchPlug === '선택 안함')) {
            if (table === '싱글') table = 'single';
            else if (table === '더블') table = 'double';
            else if (table === '바') table = 'bar';
            else if (table === '상관 없음') table = -1;

            if (plug === '1개 이상') plug = 1;
            else if (plug === '2개 이상') plug = 2;
            else if (plug === '3개 이상') plug = 3;
            else if (plug === '상관 없음') plug = -1;
        }
        findCafe(locPosition.La,locPosition.Ma,table, plug).then(r=>setResult(r.data));
        console.log(result);

        for (let i = 0; i < result.length; i++) {
            if (plug) displayMarker('DB',result[i], table, plug);
            else removeMarker()
        }
    }

    const setTime = (time) => {
        let s_time = time.split(':')
        let n_time = ""
        if (parseInt(s_time[0]) < 12) n_time += "AM " + s_time[0] + ":" + s_time[1];
        else if (parseInt(s_time[0]) === 12) n_time += "PM " + s_time[0] + ":" + s_time[1];
        else if (parseInt(s_time[0]) === 24) n_time += "AM 00:" + s_time[1];
        else {
            n_time += parseInt(s_time[0])-12 + ":" + s_time[1];
            n_time = "PM " + n_time;
        }
        return n_time
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
                <EachMenu border={0} margin={[5,10]} background={!(searchTable === '선택 안함' || searchPlug === '선택 안함')} onClick={()=>!(searchTable === '선택 안함' || searchPlug === '선택 안함')?clickSearch(searchTable, searchPlug):null}>
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
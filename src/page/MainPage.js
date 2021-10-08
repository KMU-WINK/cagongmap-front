import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import {SelectMenu} from "../component/MainPage/SelectMenu";
import img_plug from "../img/img_plug.svg";
import img_plug_white from "../img/img_plug_white.svg";
import img_focus from "../img/img_focus.svg";
import img_focus_green from "../img/img_focus_green.svg";

/*global kakao*/
const markers = []
const result = []
let map;

export const MainPage = () => {
    const [plug, setPlug] = useState(false);
    const [focus, setFocus] = useState(false);
    let infowindow = new kakao.maps.InfoWindow({zIndex:1});

    useEffect(()=>{
        myLocate();
    }, [])

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
            // 마커를 생성합니다.
            new kakao.maps.Marker({
                map: map,
                position: locPosition
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
            let marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(place.y, place.x)
            });

            result.push(marker)
            // 마커에 클릭이벤트를 등록
            kakao.maps.event.addListener(marker, 'click', function () {
                // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
                infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
                infowindow.open(map, marker);
            });
        }

        function removeMarker() {
            for ( let i = 0; i < result.length; i++ ) {
                result[i].setMap(null);
            }
            result.pop()
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
            <SelectMenu/>
        </Map>

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
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  z-index : 2;

  display : flex;
  justify-content: center;
`

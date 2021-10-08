import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import {SelectMenu} from "../component/MainPage/SelectMenu";
import img_plug from "../svg/img_plug.svg";
import img_plug_white from "../svg/img_plug_white.svg";
import img_focus from "../svg/img_focus.svg";
import img_focus_green from "../svg/img_focus_green.svg";

/*global kakao*/
const markers = []
const result1 = []
const result2 = []
let map;

export const MainPage = () => {
    const [plug, setPlug] = useState(false);
    const [focus, setFocus] = useState(false);
    let ps;
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
            let marker = new kakao.maps.Marker({
                map: map,
                position: locPosition
            });

            map.setCenter(locPosition);
        }

        // 지도를 클릭했을때 클릭한 위치에 마커를 추가하도록 지도에 클릭이벤트를 등록합니다
        kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
            // 클릭한 위치에 마커를 표시합니다
            addMarker(mouseEvent.latLng);
        });

        // 지도에 표시된 마커 객체를 가지고 있을 배열입니다

        // // 마커 하나를 지도위에 표시합니다
        //     addMarker(new kakao.maps.LatLng(37.610189448398906, 126.99703140609459));

        // 마커를 생성하고 지도위에 표시하는 함수입니다
        function addMarker(position) {

            // 마커를 생성합니다
            let marker = new kakao.maps.Marker({
                position: position
            });

            // 마커가 지도 위에 표시되도록 설정합니다
            marker.setMap(map);

            // 생성된 마커를 배열에 추가합니다
            markers.push(marker);
        }


    }

    const clickFocus = () => {
        setFocus(!focus)
        if (focus) myLocate();
    }

    const clickPlug = () => {
        setPlug(!plug)
        console.log(plug)

        console.log(markers)

        let ps = new kakao.maps.services.Places(map);

        // 카테고리로 은행을 검색합니다
       ps.categorySearch('CE7', placesSearchCB, {useMapBounds: true});

        // 키워드 검색 완료 시 호출되는 콜백함수 입니다
        function placesSearchCB(data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {
                for (let i = 0; i < data.length; i++) {
                    if (plug) displayMarker(data[i]);
                    else displayMarker(data[i])
                }
            }
        }

        console.log(result1)

        function displayMarker(place) {
            // 마커를 생성하고 지도에 표시합니다
            let marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(place.y, place.x)
            });

            result1.push(marker)
            // 마커에 클릭이벤트를 등록합니다
            kakao.maps.event.addListener(marker, 'click', function () {
                // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
                infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
                infowindow.open(map, marker);
            });
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
  z-index : 10;
  
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
  z-index : 10;

  display : flex;
  justify-content: center;
`

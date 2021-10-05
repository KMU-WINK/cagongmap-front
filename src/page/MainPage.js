import React, {useEffect, useState} from 'react'
import {SelectMenu} from "../component/MainPage/SelectMenu";

/*global kakao*/

export const MainPage = () => {
    useEffect(()=>{
        let container = document.getElementById('map');
        let options = {
            // 국민대 37.610189448398906, 126.99703140609459
            center: new kakao.maps.LatLng(37.610189448398906, 126.99703140609459),
            level: 5
        };

        // 현재 위치
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(function(position){
                let lat = position.coords.latitude,
                    lon = position.coords.longitude;

                let locPosition = new kakao.maps.LatLng(lat, lon)
                displayMarker(locPosition);
            });
        }
        else{
            let locPosition = new kakao.maps.LatLng(37.5677463677699,126.9153946742084)
            displayMarker(locPosition);
        }
        let map = new kakao.maps.Map(container, options);

        const displayMarker = (locPosition) => {
            // 마커를 생성합니다.
            let marker = new kakao.maps.Marker({
                map: map,
                position: locPosition
            });

            map.setCenter(locPosition);
        }
    }, [])

    return <>

        <div id="map" style={{width:"100vw", height:"100vh"}}></div>

        <SelectMenu/>
    </>
}

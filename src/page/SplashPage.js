import React from "react";
import Group1 from '../img/Group1.png';
import './SplashPage.css';
export const SplashPage = () => {

    return <>
        <div className="SplashPage">
            <img className="logoimg" alt="logo" src={Group1} />
            <div className="SplashPageText">
                서비스 이용을 원하신다면 화면을 클릭해주세요
            </div>
        </div>
    </>
}

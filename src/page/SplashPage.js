import React from "react";
import {useHistory} from "react-router-dom";
import Group1 from '../img/Group1.png';
import './SplashPage.css';

export const SplashPage = () => {
    const history = useHistory();

    return <div className="Body">
        <div className="SplashPage" onClick={()=>{history.push('/main')}}>
            <img className="logoimg" alt="logo" src={Group1} />
            <div className="SplashPageText">
                서비스 이용을 원하신다면 화면을 클릭해주세요
            </div>
        </div>
    </div>
}

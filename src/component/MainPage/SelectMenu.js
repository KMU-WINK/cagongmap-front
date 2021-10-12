import React from "react";
import img_menu1 from '../../img/img_menu1.png';
import img_menu2 from '../../img/img_menu2.png';
import img_search from '../../img/img_search.png';
import './Button.css'

export const SelectMenu = () => {

    return <>
        <div className="container_menu">
            <button className="table" id = "table">
                <img className="img_table" src ={img_menu1} alt = "table"/> <br/><br/>
                <label className="label_table" for="table"> 테이블: 선택 안함 </label>
            </button>
            <button className="outlet" id = "outlet">
                <img className="img_outlet" src ={img_menu2} alt = "outlet"/> <br/><br/>
                <label className="label_outlet" for="outlet"> 콘센트: 선택 안함 </label>
            </button>
            <button className="search">
                <img className="img_search" src ={img_search} alt = "search"/>
            </button>
        </div>
    </>
}

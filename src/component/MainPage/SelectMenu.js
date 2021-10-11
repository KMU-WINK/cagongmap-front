import React from "react";
import img_menu1 from '../../img/img_menu1.png';
import img_menu2 from '../../img/img_menu2.png';
import img_search from '../../img/img_search.png';
import './Button.css'

export const SelectMenu = () => {

    return <>
        <div className="container_menu">
            <button className="table"> <img src ={img_menu1} alt = "table"/> <br/> 테이블 </button>
            <button className="outlet"> <img src ={img_menu2} alt = "outlet"/> <br/> 콘센트 </button>
            <button className="search"> <img src ={img_search} alt = "search"/> </button>
        </div>        
    </>
}

export default SelectMenu;

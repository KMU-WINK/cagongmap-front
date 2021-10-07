import React from 'react';
import img_menu1 from './Images/img_menu1.png';
import img_menu2 from './Images/img_menu2.png';
import img_search from './Images/img_search.png';

export const SelectMenu = () => {
    const btnStyle = {
        
      };

    
    return <>

    <div>
        <button style = {btnStyle}> <img src ={img_menu1} alt = "img_menu1"></img></button>
        <button> <img src ={img_menu2} alt = "img_menu2"></img> </button>
        <button> <img src ={img_search} alt = "img_search"></img></button>
    </div>
    </>
}

export default SelectMenu;

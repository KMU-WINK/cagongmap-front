import React from "react";
import img_menu1 from './Images/img_menu1.png';
import img_menu2 from './Images/img_menu2.png';
import img_search from './Images/img_search.png';


export const SelectMenu = () => {

    const parentStyle = {
        position: "absolute",
        left: "8%",
        bottom: "15px",
        color: "white",
        padding: "10px",
        width: "80%",
        height: "15%",
        backgroundColor: "gray"
      };

      const styleFirst = {
        float: "left",
        width: "33%",
        height: "100%",
        padding: "10px 0px",
        backgroundColor: "rgba(255, 255, 255, 0.05)"
      };
      const styleSecond = {
        float: "left",
        width: "33%",
        height: "100%",
        padding: "10px 0px",
        backgroundColor: "green",
      };
      const styleThird = {
        float: "left",
        width: "33%",
        height: "100%",
        padding: "10px 0px",
        backgroundColor: "red"
      };

    return <>
    
    <div>
        <div style={parentStyle}>
            <button style={styleFirst}> <img src ={img_menu1} alt = "table" width="50%" height="90%" /> <br/> 테이블 </button>
            <button style={styleSecond}> <img src ={img_menu2} alt = "outlet" width="50%" height="90%" /> <br/> 콘센트 </button>
            <button style={styleThird}> <img src ={img_search} alt = "search" width="50%" height="90%" /> </button>
        </div>
    </div>
 
    

    </>
}

export default SelectMenu;

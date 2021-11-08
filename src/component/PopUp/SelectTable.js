import './SelectTable.css';
import React, {useEffect, useState} from 'react'
import img_menu1 from "../../img/img_menu1.png";
import img_bartable from "../../img/img_bartable.png";
import img_anything from "../../img/img_anything.png";

export const SelectTable = () => {
  const [currentClick, setCurrentClick] = useState(null);
  const [prevClick, setPrevClick] = useState(null);
  let storage = localStorage;
  
  const GetClick = (e) => {
  setCurrentClick(e);
  };


  useEffect(
    (e) => {
      if (currentClick !== null) {
        let currentbtn = document.querySelector(`#${currentClick}`);
        let currentlabel = document.querySelector(`label[id=${currentClick}]`);
        storage.setItem('table', currentClick)
        currentbtn.style.border = "3px solid #4AD395";
        currentlabel.style.color = "#4AD395";
      }
      if (prevClick !== null) {
        let prevbtn = document.querySelector(`#${prevClick}`);
        let prevlabel = document.querySelector(`label[id=${prevClick}]`)
        prevbtn.style.border = "3px solid #C4C4C4";
        prevlabel.style.color = "#000000"
      }
      setPrevClick(currentClick);
    },
    [currentClick]
  );
  
  const hoverin = (e) => {
    let currentbtn = document.querySelector(`#${e}`);
    let currentlabel = document.querySelector(`label[id=${e}]`);
    currentbtn.style.border = "3px solid #4AD395";
    currentlabel.style.color = "#4AD395";
    };
  
  const hoverout = (e) => {
    if (currentClick === e) {
      GetClick(e)
    } else {
      let currentbtn = document.querySelector(`#${e}`);
      let currentlabel = document.querySelector(`label[id=${e}]`)
      currentbtn.style.border = "3px solid #C4C4C4";
      currentlabel.style.color = "#000000"
    }

    };

    return <>
          <button className="singletable" id="singletable" onMouseOver={() => hoverin('singletable')} onMouseOut={() => hoverout('singletable')} onClick={() => GetClick('singletable')}>
            <img className="img_singletable" src={img_menu1} alt="singletable"/>
            <label className="label_singletable" id="singletable" htmlFor="table"> 싱글테이블(1~2인) </label>
          </button>
          <button className="doubletable" id="doubletable" onMouseOver={() => hoverin('doubletable')} onMouseOut={() => hoverout('doubletable')} onClick={() => GetClick('doubletable')}>
            <img className="img_doubletable1" src={img_menu1} alt="doubletable"/>
            <img className="img_doubletable2" src={img_menu1} alt="doubletable"/>
            <label className="label_doubletable" id="doubletable" htmlFor="table"> 더블테이블(1~4인) </label>
          </button>
          <button className="bartable" id="bartable" onMouseOver={() => hoverin('bartable')} onMouseOut={() => hoverout('bartable')} onClick={() => GetClick('bartable')}>
            <img className="img_bartable" src={img_bartable} alt="bartable"/>
            <label className="label_bartable" id="bartable" htmlFor="table"> 바 테이블(n인) </label>
          </button>
          <button className="anything" id="anything" onMouseOver={() => hoverin('anything')} onMouseOut={() => hoverout('anything')} onClick={() => GetClick('anything')}>
            <img className="img_anything" src={img_anything} alt="anything"/>
            <label className="label_anything" id="anything" htmlFor="table"> 상관 없어요! </label>
          </button>
          
          
    </>
}


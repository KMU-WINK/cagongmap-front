import './SelectTable.css';
import React, {useState} from 'react'
import img_menu1 from "../../img/img_menu1.png";
import img_bartable from "../../img/img_bartable.png";
import img_anything from "../../img/img_anything.png";

export const SelectTable = () => {
  const [select, setSelect] = useState('')
  const getState = (state) => {
    setSelect(state);
  }
  
    return <>
          <button className="singletable" id="singletable" onClick={() => setSelect('singletable')}>
            <img className="img_singletable" src={img_menu1} alt="singletable"/>
            <label className="label_singletable" htmlFor="table"> 싱글 테이블(1~2인) </label>
          </button>
          <button className="doubletable" id="doubletable" onClick={() => setSelect('doubletable')}>
            <img className="img_doubletable1" src={img_menu1} alt="doubletable"/>
            <img className="img_doubletable2" src={img_menu1} alt="doubletable"/>
            <label className="label_doubletable" htmlFor="table"> 더블테이블(1~4인) </label>
          </button>
          <button className="bartable" id="bartable" onClick={() => setSelect('bartable')}>
            <img className="img_bartable" src={img_bartable} alt="bartable"/>
            <label className="label_bartable" htmlFor="table"> 바 테이블(n인) </label>
          </button>
          <button className="anything" id="bartable" onClick={() => setSelect('anything')}>
            <img className="img_anything" src={img_anything} alt="anything"/>
            <label className="label_anything" htmlFor="table"> 상관 없어요! </label>
          </button>

          {select === 'singletable'?
            console.log('single')
            :
            <>
            {select === 'doubletable'?
                console.log('double')
                :
                <>
                {select === 'bartable'?
                console.log('bartable')
                :
                <>
                  {select === 'anything'?
                  console.log('anything')
                  :
                  null
                  }</>
                }</>
            }</>
          }
    </>
}


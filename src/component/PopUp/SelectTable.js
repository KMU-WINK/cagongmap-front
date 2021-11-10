import './SelectTable.css';
import styled from "styled-components";
import React, {useEffect, useState} from 'react'
import img_menu1 from "../../img/img_menu1.png";
import img_barTable from "../../img/img_bartable.png";
import img_anything from "../../img/img_anything.png";

export const SelectTable = ({value, getValue}) => {
    const [currentClick, setCurrentClick] = useState(value);
  
    const GetClick = (val) => {
        setCurrentClick(val);
        getValue(val)
      };

    const activeHandler = (val) => {
        return val === currentClick;
    };

    return <>
          <Each onClick={() => GetClick('싱글')} active={activeHandler('싱글')}>
              <img className="img_singletable" src={img_menu1} alt="singletable"/>
              <Label active={activeHandler('싱글')}> 싱글테이블(1~2인) </Label>
          </Each>
          <Each onClick={() => GetClick('더블')} active={activeHandler('더블')}>
              <img className="img_doubletable1" src={img_menu1} alt="doubletable"/>
              <img className="img_doubletable2" src={img_menu1} alt="doubletable"/>
              <Label active={activeHandler('더블')}> 더블테이블(1~4인) </Label>
          </Each>
          <Each onClick={() => GetClick('바')} active={activeHandler('바')}>
              <img className="img_bartable" src={img_barTable} alt="bartable"/>
              <Label active={activeHandler('바')}> 바 테이블(n인) </Label>
          </Each>
          <Each onClick={() => GetClick('상관 없음')} active={activeHandler('상관 없음')}>
              <img className="img_anything" src={img_anything} alt="anything"/>
              <Label active2={activeHandler('상관 없음')}> 상관 없어요! </Label>
          </Each>
    </>
}

const Label = styled.div`
  width: 183px;
  height: 28px;
  margin: auto;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
`

const Each = styled.button`
  max-width: 310px;
  width: 90%;
  height: 70px;
  margin : 10px auto auto auto;
  display: flex;
  
  background: #FFFFFF;
  box-sizing: border-box;
  border-radius: 20px;  
  border: ${props => (props.active ? "3px solid #4AD395" : "3px solid #C4C4C4")};
  color: ${props => (props.active ? "#4AD395" : "#C4C4C4")};
  
  :hover {
    color: #4AD395;
    border: 3px solid #4AD395;
  }
`

import styled from "styled-components";
import img_menu2 from "../../img/img_menu2.png";
import React, {useState} from "react";
import "../MainPage/Button.css"


export const SelectPlug = ({value, getValue}) => {
    const [buttonIndex, setButtonIndex] = useState(value);
    const buttonClick = (idx) => {
        setButtonIndex(idx);
        getValue(idx)
    };

    const activeHandler = (idx) => {
        return idx === buttonIndex;
    };

    return <>
        <div>
            <PlugImg src={img_menu2}/>
            <PlugText>콘센트: {buttonIndex}개 이상</PlugText>
            <ButtonBox>
                <PlugSelect onClick={() => buttonClick(1)}
                            active={activeHandler(1)}>1</PlugSelect>
                <PlugSelect onClick={() => buttonClick(2)}
                            active={activeHandler(2)}>2</PlugSelect>
                <PlugSelect onClick={() => buttonClick(3)}
                            active={activeHandler(3)}>3+</PlugSelect>
            </ButtonBox>
        </div>
    </>
}

const PlugImg = styled.img`
  width: 128px;
  height: 128px;
  display: block;
  margin: auto;
`
const PlugText = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  color: #000000;
  margin-top: 30px;
  text-align: center;
`

const PlugSelect = styled.button`
  width: 90px;
  height: 90px;
  background: #FFFFFF;
  border: ${(props) => (props.active ? "3px solid #4AD395" : "3px solid #C4C4C4")};
  box-sizing: border-box;
  border-radius: 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  color: ${(props) => (props.active ? "#4AD395" : "#C4C4C4")};
  margin-top: 30px;
  margin-left: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  :hover {
    color: #4AD395;
    border: 3px solid #4AD395;
  }
`
const ButtonBox = styled.div`
    margin-left: 19px;
`

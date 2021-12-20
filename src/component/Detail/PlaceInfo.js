import styled from "styled-components";
import React, {useState} from "react";
import {useLocation} from "react-router-dom";

export const PlaceInfo = (props) => {
    const location = useLocation();
    console.log(location.state);

    return <>
        <Container mode={props.mode}>
            <div>
                <CafeName> {location.state.name} </CafeName>
                <TimeText> {location.state.openTime}부터 {location.state.closeTime}까지 </TimeText>
            </div>
            <PlaceButton onClick={()=>window.open(location.state.url, "_blank")}>NAVER PLACE</PlaceButton>
        </Container>
    </>
}

const Container = styled.div`
  width : ${props=>props.mode === "m" ?'90%':'70%'};
  display : flex;
  margin : 30px auto 30px auto;
  justify-content: space-between;
  align-items: center;
`

const CafeName = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  color: #000000;
  margin-bottom : 5px;

`
const TimeText = styled.div`
  //width: 224px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #808080;
`

const PlaceButton = styled.button`
  width: 110px;
  height: 66px;
  background: #4AD395;
  border: none;
  border-radius: 10px;
  
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: white;
  line-height: 21px;
  text-align: center;
  

`
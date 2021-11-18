import styled from "styled-components";
import React, {useState} from "react";

export const PlaceInfo = () => {
    const cafename = useState("Starbucks")
    const start = useState("00:00");
    const end = useState("00:00");
    return <>
        <Container>
            <CafeBox>
                <div>
                    <CafeName> {cafename} </CafeName>
                    <TimeText> {start}부터 {end}까지 </TimeText>
                </div>
                {/*<div>hello</div>*/}
                <PlaceButton>NAVER PLACE</PlaceButton>
            </CafeBox>
        </Container>
    </>
}

const Container = styled.div`
  margin:30px 231px 0 231px;
  //width:80%;
  padding-bottom:27px;
  border-bottom:2px solid black;
`


const CafeBox = styled.div`
  //margin:0 231px 0 231px;
  //margin-top: 20px;
  //display: block;
  display:flex;
  //flex-direction: column;
  justify-content: space-between;
  
`
const CafeName = styled.div`
  width: 290px;
  //height: 35px;
  left: 231px;
  //top: 140px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  //line-height: 35px;

  color: #000000;

`
const TimeText = styled.div`
  //display: inline;
  margin-top:10px;
  width: 224px;
  height: 21px;
  left: 20px;
  //top: 334px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
`

const PlaceButton = styled.button`
  width: 110px;
  height: 66px;
  left: 298px;
  top: 289px;
  background: #4AD395;
  border: 1px solid #000000;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: white;
  line-height: 21px;
  text-align: center;

`
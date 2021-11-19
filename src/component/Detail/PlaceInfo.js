import styled from "styled-components";
import React, {useState} from "react";

export const PlaceInfo = (props) => {
    const cafename = useState("스타벅스")
    const start = useState("AM 0900");
    const end = useState("PM 10:00");
    return <>
        <Container>
            <div>
                <CafeName> {cafename} </CafeName>
                {props.mode === "m" ?
                    <div>
                        <TimeText> {start}부터</TimeText>
                        <TimeText>{end}까지 </TimeText>

                    </div>
                    :
                    <TimeText> {start}부터 {end}까지 </TimeText>
                }
            </div>
            <PlaceButton>NAVER PLACE</PlaceButton>
        </Container>
    </>
}

const Container = styled.div`
  width : 70%;
  display : flex;
  margin : 30px auto auto auto;
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
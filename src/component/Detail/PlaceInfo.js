import styled from "styled-components";
import React from "react";
import {useLocation} from "react-router-dom";

export const PlaceInfo = (props) => {
    const location = useLocation();
    const url =  location.state.url

    return <>
        <Container mode={props.mode}>
            <div>
                <CafeName> {location.state.name} </CafeName>
                {location.state.openTime ?
                    <TimeText> {location.state.openTime}부터 {location.state.closeTime}까지 </TimeText>
                    :
                    <>
                        <TimeText>{location.state.address}</TimeText>
                        {location.state.phone?
                            <TimeText>{location.state.phone}</TimeText>
                            : null
                        }
                    </>
                }
            </div>
            {location.state.openTime ?
                <PlaceButton color={'#4AD395'} onClick={() => window.open(url,"_blank")}>NAVER PLACE</PlaceButton>
                :
                <PlaceButton color={'#feeb1b'} onClick={() => window.open(url, "_blank")}>KAKAO MAP</PlaceButton>
            }
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
  font-size: 28px;
  color: #000000;
  margin-bottom : 5px;

`
const TimeText = styled.div`
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
  background: ${props=>props.color};
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

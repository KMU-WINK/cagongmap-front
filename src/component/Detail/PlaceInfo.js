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
                    <div>
                        <Text>
                            <LocImg src={'https://user-images.githubusercontent.com/54919662/147132679-ac5844fb-d768-43a6-a0c9-332b622e6e41.png'}/>
                            <TimeText>{location.state.address}</TimeText>
                        </Text>
                        {location.state.phone?
                            <Text>
                                <TellImg src={'https://user-images.githubusercontent.com/54919662/147132750-31a80170-5ace-4afa-ad3a-e2c4995792ef.png'}/>
                                <TimeText>{location.state.phone}</TimeText>
                            </Text>
                            : null
                        }
                    </div>
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
const Text = styled.div`
  display : flex;
`

const LocImg = styled.img`
  width : 20px;
  height : 20px;
  margin-right : 5px;
`

const TellImg = styled.img`
  width : 17px;
  height : 17px;
  margin-right : 7px;
`
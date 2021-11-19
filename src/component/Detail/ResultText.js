import styled from "styled-components";
import React, {useState} from "react";
import img_result from '../../img/img_result.svg'

export const ResultText = (props) => {
    const resultnum = useState(0);

    return <>
        <ResultBox mode={props.mode}>
            {props.mode === "m"?
                <>
                    <div>
                        <ResultSelect>선택한 조건에 만족하는</ResultSelect>
                        <ResultSelect>테이블은 <Color>{resultnum}개</Color>입니다.</ResultSelect>
                    </div>
                    <MapImg/>
                </>
                :
                <>
                    <ResultSelect>선택한 조건에 만족하는 테이블은 <Color>{resultnum}개</Color>입니다.</ResultSelect>
                    <MapImg/>
                </>
            }
        </ResultBox>
    </>
}

const ResultBox = styled.div`
  width : 70%;
  margin : 30px auto auto auto;
  display : flex;
  justify-content: ${props=>props.mode === "m"? 'space-between':'center'};
`
const ResultSelect = styled.div`
  //height: 42px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  color: #000000;
  display : flex;
  align-items: center;
`

const Color = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  color: #4AD395;
`

const MapImg = styled.img.attrs({
    src : img_result
})`
  width : 50px;
  height : 50px;
  margin-left : 50px;
`
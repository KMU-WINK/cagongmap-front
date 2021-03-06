import styled from "styled-components";
import React from "react";
import img_result from '../../img/img_result.svg'

export const ResultText = (props) => {

    return <>
        <ResultBox mode={props.mode}>
            {props.mode === "m"?
                <>
                    <div>
                        <ResultSelect>선택한 조건에 만족하는</ResultSelect>
                        <ResultSelect>테이블은 <Color color={props.resultNum!=0?'#4AD395':'#feeb1b'}>{props.resultNum}개</Color>입니다.</ResultSelect>
                    </div>
                    <MapImg/>
                </>
                :
                <>
                    <ResultSelect>선택한 조건에 만족하는 테이블은 <Color color={props.resultNum!=0?'#4AD395':'#feeb1b'}>{props.resultNum}개</Color>입니다.</ResultSelect>
                    <MapImg/>
                </>
            }
        </ResultBox>
    </>
}

const ResultBox = styled.div`
  width : ${props=>props.mode==='m'?'90%':'70%'};
  margin : 25px auto 20px auto;
  display : flex;
  justify-content: ${props=>props.mode === "m"? 'space-between':'center'};
`
const ResultSelect = styled.div`
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
  color: ${props=>props.color};
  margin-left : 4px;
`

const MapImg = styled.img.attrs({
    src : img_result
})`
  width : 50px;
  height : 50px;
  margin-left : 50px;
`
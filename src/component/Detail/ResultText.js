import styled from "styled-components";
import React, {useState} from "react";

export const ResultText = () => {
    const resultnum = useState(0);

    return <>
        <ResultBox>
            <ResultSelect>선택한 조건에 만족하는 테이블은 {resultnum}개 입니다.</ResultSelect>
        </ResultBox>
    </>
}

const ResultBox = styled.div`
  margin:30px 231px 0 231px;
`
const ResultSelect = styled.div`
  @media (min-width:0px) and (max-width:430px)
  { width:180px;
  }
  height: 42px;
  //left: 20px;
  //top: 412px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #000000;

`

const MapImg = styled.img`
  width: 50px;
  height: 50px;
  left: 352px;
  top: 408px;
`
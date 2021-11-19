import styled from "styled-components";
import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import left_arrow from "../../img/left_arrow.png";

export const BackBtn = () => {
    const history = useHistory();
    return <>
        <BackButton onClick={()=>{history.push('/main')}}>
            <BackBtn_img/>
        </BackButton>
    </>
}

const BackButton = styled.div`
    position: absolute;
    width: 30px;
    height: 30px;
    left: 15px;
    top: 15px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    z-index : 4;
`
const BackBtn_img = styled.img.attrs({
    src : left_arrow
})`
    width: 15px;
    height: 15px;
`
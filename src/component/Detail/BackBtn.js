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
    width: 40px;
    height: 40px;
    left: 20px;
    top: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
`
const BackBtn_img = styled.img.attrs({
    src : left_arrow
})`
    width: 20px;
    height: 20px;
`
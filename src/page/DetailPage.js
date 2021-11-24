import styled from "styled-components";
import {MobileView, BrowserView} from "react-device-detect";
import {BackBtn} from "../component/Detail/BackBtn";
import {ImageCarousel} from "../component/Detail/ImageCarousel";
import {PlaceInfo} from "../component/Detail/PlaceInfo";
import {Result} from "../component/Detail/Result";
import {ResultText} from "../component/Detail/ResultText";
import {Header} from "../component/Detail/Header";

export const DetailPage = (props) => {
    return <>
        <MobileView>
            <BackBtn/>
            <ImageCarousel mode={"m"}/>
            <PlaceInfo mode={"m"}/>
            <Line width={"90%"}/>
            <ResultText mode={"m"}/>
            <Line width={"90%"}/>
            <Result mode={"m"}/>
        </MobileView>

        <BrowserView>
            <Header/>
            <PlaceInfo mode={"w"}/>
            <ImageCarousel mode={"w"}/>
            <ResultText mode={"w"}/>
            <Line width={"80%"}/>
            <Result mode={"w"}/>
        </BrowserView>
    </>
}

const Line = styled.div`
  width : ${props=>props.width};
  margin : 15px auto auto auto;
  border: 1px solid #C4C4C4;
`
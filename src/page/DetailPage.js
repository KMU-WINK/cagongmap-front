import {MobileView, BrowserView} from "react-device-detect";
import {BackBtn} from "../component/Detail/BackBtn";
import {ImageCarousel} from "../component/Detail/ImageCarousel";
import {PlaceInfo} from "../component/Detail/PlaceInfo";
import {Result} from "../component/Detail/Result";
import {ResultText} from "../component/Detail/ResultText";
import {Header} from "../component/Detail/Header";

export const DetailPage = () => {
    return <>
        <MobileView>
            <BackBtn/>
            <ImageCarousel mode={"m"}/>
            <PlaceInfo mode={"m"}/>
            <ResultText mode={"m"}/>
            <Result mode={"m"}/>
        </MobileView>

        <BrowserView>
            <Header/>
            <PlaceInfo mode={"w"}/>
            <ImageCarousel mode={"w"}/>
            <ResultText mode={"w"}/>
            <Result mode={"w"}/>
        </BrowserView>
    </>
}
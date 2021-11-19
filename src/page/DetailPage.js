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
            <ImageCarousel/>
            <PlaceInfo mode={"m"}/>
            <ResultText mode={"m"}/>
            <Result/>
        </MobileView>

        <BrowserView>
            <Header/>
            <PlaceInfo/>
            <ImageCarousel/>
            <ResultText/>
            <Result/>
        </BrowserView>
    </>
}
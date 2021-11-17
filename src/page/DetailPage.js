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
            {/*<div>DetailPage입니다Mobile</div>*/}
            <BackBtn/>
            <ImageCarousel mode={"m"}/>
            <PlaceInfo/>
            <ResultText/>
            <Result mode={"m"}/>
        </MobileView>

        <BrowserView>
            {/*<div>DetailPage입니다Web</div>*/}
            <Header/>
            <PlaceInfo/>
            <ImageCarousel mode={"w"}/>
            <ResultText/>
            <Result mode={"w"}/>
        </BrowserView>
    </>
}

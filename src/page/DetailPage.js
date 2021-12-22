import styled from "styled-components";
import {MobileView, BrowserView} from "react-device-detect";
import {BackBtn} from "../component/Detail/BackBtn";
import {ImageCarousel} from "../component/Detail/ImageCarousel";
import {PlaceInfo} from "../component/Detail/PlaceInfo";
import {Result} from "../component/Detail/Result";
import {ResultText} from "../component/Detail/ResultText";
import {Header} from "../component/Detail/Header";
import {useLocation} from "react-router-dom";
import single_0 from "../img/type/single_0.svg";
import single_1 from "../img/type/single_1.svg";
import single_2 from "../img/type/single_2.svg";
import double_0 from "../img/type/double_0.svg";
import double_1 from "../img/type/double_1.svg";
import double_2 from "../img/type/double_2.svg";
import double_3 from "../img/type/double_3.svg";
import bar_0 from "../img/type/bar_0.svg";
import bar_1 from "../img/type/bar_1.svg";
import bar_2 from "../img/type/bar_2.svg";
import bar_3 from "../img/type/bar_3.svg";

export const DetailPage = (props) => {
    const location = useLocation();
    const tableInfo = location.state.tableInfo;
    const conTable = location.state.condition[0];
    const conPlug = location.state.condition[1];
    let resultNum = 0;

    const result = [
        {img : single_0, table: '싱글', plug: 0, count: 0, active: false},
        {img : single_1, table: '싱글', plug: 1, count: 0, active: false},
        {img : single_2, table: '싱글', plug: 2, count: 0, active: false},
        {img : double_0, table: '더블', plug: 0, count: 0, active: false},
        {img : double_1, table: '더블', plug: 1, count: 0, active: false},
        {img : double_2, table: '더블', plug: 2, count: 0, active: false},
        {img : double_3, table: '더블', plug: '3+', count: 0, active: false},
        {img : bar_0, table: '바', plug: 0, count: 0, active: false},
        {img : bar_1, table: '바', plug: 1, count: 0, active: false},
        {img : bar_2, table: '바', plug: 2, count: 0, active: false},
        {img : bar_3, table: '바', plug: '3+', count: 0, active: false},
    ]

    // 각 테이블 수 세팅
    if (tableInfo) {
        tableInfo.map(data => {
            if (data.typeOfTable === "single") {
                result[data.countOfPlugs].count = data.countOfTables;
            } else if (data.typeOfTable === "double") {
                result[3 + data.countOfPlugs].count = data.countOfTables;
            } else if (data.typeOfTable === "bar") {
                result[7 + data.countOfPlugs].count = data.countOfTables;
            }
        })

        // 조건에 맞는 값 -> active
        if (conTable === 'all' && conPlug === 'all') {
            for (let i = 0; i < result.length; i++) result[i].active = true;
        } else {
            if (conTable === "single" || conTable === -1) {
                for (let i = conPlug; i < 3; i++) result[i].active = true;
            }
            if (conTable === "double" || conTable === -1) {
                for (let i = conPlug; i < 4; i++) result[i + 3].active = true;
            }
            if (conTable === "bar" || conTable === -1) {
                for (let i = conPlug; i < 4; i++) result[i + 7].active = true;
            }
        }

        for (let i = 0; i < result.length; i++) {
            if (result[i].active) resultNum += result[i].count;
        }
    }


    return <>
        <MobileView>
            <BackBtn/>
            <ImageCarousel mode={"m"}/>
            <PlaceInfo mode={"m"}/>
            <Line width={"90%"}/>
            <ResultText mode={"m"} resultNum={resultNum}/>
            <Line width={"90%"}/>
            <Result mode={"m"} result={result} resultNum={resultNum}/>
        </MobileView>

        <BrowserView>
            <Header resultNum={resultNum}/>
            <PlaceInfo mode={"w"}/>
            <ImageCarousel mode={"w"}/>
            <ResultText mode={"w"} resultNum={resultNum}/>
            <Line width={"80%"}/>
            <Result mode={"w"} result={result} resultNum={resultNum}/>
        </BrowserView>
    </>
}

const Line = styled.div`
  width : ${props=>props.width};
  margin : 15px auto auto auto;
  border: 1px solid #C4C4C4;
`
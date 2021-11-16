import styled from "styled-components";
import img_plug from "../../img/img_plug.svg";

export const Header = () => {
    return <>
        <PlugIcon/>
        <HeaderLabel>CAGONG-MAP</HeaderLabel>
    </>
}

const PlugIcon = styled.img.attrs({
    src : img_plug
})`
    position: absolute;
    width: 50px;
    height: 50px;
    left: 231px;
    top: 25px;
`
const HeaderLabel = styled.div`
    position: absolute;
    width: 198px;
    height: 35px;
    left: 301px;
    top: 32px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 35px;

    color: #4AD395;
`
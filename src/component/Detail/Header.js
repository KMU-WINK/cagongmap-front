import styled from "styled-components";
import img_plug from "../../img/img_plug.svg";

export const Header = () => {
    return <>
    <Headercontainer>
        <PlugIcon/>
        <HeaderLabel>CAGONG-MAP</HeaderLabel>
    </Headercontainer>
    </>
}

const Headercontainer = styled.div`
    display:flex;
    justify-content: flex-start;
`
const PlugIcon = styled.img.attrs({
    src : img_plug
})`
    width: 50px;
    height: 50px;
    margin-left: 231px;
    margin-top: 25px;
`
const HeaderLabel = styled.div`
    width: 198px;
    height: 35px;
    margin-left: 20px;
    margin-top: 32px;
    
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 35px;

    color: #4AD395;
`
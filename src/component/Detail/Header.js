import styled from "styled-components";
import img_plug from "../../img/img_plug.svg";

export const Header = () => {
    return <>
        <Headercontainer>
            <PlugIcon/>
            <HeaderLabel>CAGONG-MAP</HeaderLabel>
        </Headercontainer>
        <Line/>
    </>
}

const Headercontainer = styled.div`
    display:flex;
    justify-content: flex-start;
    width : 70%;
    margin : auto;
`
const PlugIcon = styled.img.attrs({
    src : img_plug
})`
    width: 50px;
    height: 50px;
    margin-top: 12px;
    margin-bottom : 12px;
`
const HeaderLabel = styled.div`
    width: 198px;
    height: 35px;
    margin-left: 20px;
    margin-top: 22px;
    
    font-family: Roboto;
    font-style: normal;
    font-weight: 800;
    font-size: 30px;
    line-height: 35px;

    color: #4AD395;
`

const Line = styled.div`
  position: absolute;
  width: 100%;
  
  border: 1px solid #C4C4C4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
import styled from "styled-components";

export const EachResult = (props) => {
    return <Each>
        <Box active={props.active}>
            <Center><TypeImg src={props.img}/></Center>
            <TypeText>{props.table} 테이블</TypeText>
            <TypeText>콘센트 {props.plug}개</TypeText>
        </Box>
        <Count active={props.active}>{props.count}개</Count>
    </Each>
}
const Each = styled.div`
  width : 100px;
  height : 100px;
  margin: auto;
`

const Box = styled.div`
  width: 100%;
  height: 100%;

  background: #FFFFFF;
  border: ${props=>props.active?"1px solid #4AD395":"1px solid #C4C4C4"};
  box-sizing: border-box;
  border-radius: 10px;
`

const Center = styled.div`
  margin-top : 16px;
  margin-bottom : 10px;
  display : flex;
  justify-content: center;
`

const TypeImg = styled.img`
  height: 35px;
`

const TypeText = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #000000;
`

const Count = styled.div`
  margin-top : 15px;
  text-align : center;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: ${props=> props.active?'#4AD395':'#000000'};
`
import styled from "styled-components";
import {EachResult} from "./EachResult";

export const Result = (props) => {
    console.log(props)
    return <>
        <Wrap mode={props.mode}>
            <TableText>테이블</TableText>
            {props.resultNum != 0 ?
                <List>
                    {props.result.map((data) =>
                        <EachResult key={data.img} active={data.active} img={data.img} table={data.table}
                                    plug={data.plug} count={data.count}/>
                    )}
                </List>
                :
                <None>아직 데이터가 없습니다ㅜㅅㅜ</None>
            }
        </Wrap>
     </>
}

const Wrap = styled.div`
  width : ${props=>props.mode==="m"? "91%":"70%"};
  margin : 30px auto auto auto;
`

const TableText = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
  margin-bottom : 30px;
  margin-left : 5px;
`

const List = styled.div`
  display : grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, auto));
  row-gap: 50px;
  column-gap: 20px;
  margin-bottom : 100px;
`

const None = styled.div`
  display : flex;
  justify-content: center;
`
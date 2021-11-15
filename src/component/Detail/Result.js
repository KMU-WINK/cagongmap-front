import styled from "styled-components";
import {EachResult} from "./EachResult";
import single_0 from '../../img/type/single_0.svg';
import single_1 from '../../img/type/single_1.svg';
import single_2 from '../../img/type/single_2.svg';
import double_0 from '../../img/type/double_0.svg';
import double_1 from '../../img/type/double_1.svg';
import double_2 from '../../img/type/double_2.svg';
import double_3 from '../../img/type/double_3.svg';
import double_4 from '../../img/type/double_4.svg';
import bar_0 from '../../img/type/bar_0.svg';
import bar_1 from '../../img/type/bar_1.svg';
import bar_2 from '../../img/type/bar_2.svg';
import bar_3 from '../../img/type/bar_3.svg';

export const Result = () => {
    const dummy = {
        "result" : [
            {img : single_1, table: '싱글', plug: 1, count: 3, active: true},
            {img : single_2, table: '싱글', plug: 2, count: 2, active: true},
            {img : double_1, table: '더블', plug: 1, count: 0},
            {img : double_2, table: '더블', plug: 2, count: 10},
            {img : double_3, table: '더블', plug: 3, count: 0},
            {img : double_4, table: '더블', plug: 4, count: 0},
            {img : bar_1, table: '바', plug: 1, count: 0},
            {img : bar_2, table: '바', plug: 2, count: 2},
            {img : bar_3, table: '바', plug: '3+', count: 2},
            {img : single_0, table: '싱글', plug: 0, count: 10},
            {img : double_0, table: '더블', plug: 0, count: 4},
            {img : bar_0, table: '바', plug: 0, count: 1},
        ]
    }

    return <>
        <Wrap>
            <TableText>테이블</TableText>
            <List row={3}>
                {dummy.result.map((data) =>
                    <EachResult active={data.active} img={data.img} table={data.table} plug={data.plug} count={data.count}/>
                )}
            </List>
        </Wrap>
     </>
}

const Wrap = styled.div`
  width : 90%;
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
`

const List = styled.div`
  display : grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, auto));
  row-gap: 50px;
  column-gap: 20px;
`
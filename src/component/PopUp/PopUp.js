import styled from "styled-components";
import img_closeBtn from "../../img/img_closeBtn.png";
import { SelectTable } from "./SelectTable";
import {SelectPlug} from "./SelectPlug";
import {useState} from "react";

export const PopUp = ({state, getState, getSearchTable, getSearchPlug}) => {
    const [value, setValue] = useState(0)

    const getValue = (value) => {
        setValue(value);
        if (state === 'table') getSearchTable(value);
        else if (state === 'plug') getSearchPlug(value+'개 이상');
    }

    const clickSelect = () => {
        if (value !== 0) getState('')
    }

    return <>
        <OpacityView>
            <Modal>
                <CloseDiv>
                    <CloseIcon onClick={()=>getState('')}/>
                </CloseDiv>

                <Wrap>
                    {state === 'table'?
                        <>
                            <SelectTable value={0} getValue={getValue}/>
                        </>
                        :
                        <>
                        {state === 'plug'?
                            <SelectPlug value={0} getValue={getValue}/>
                            :
                            null
                        }
                        </>
                    }
                </Wrap>

                <ButtonDiv>
                    <ConfirmBtn color={value===0?['#C4C4C4','#FFF','#C4C4C4']:['#4AD395','#4AD395','#FFF']} onClick={()=>clickSelect()}>선택하기</ConfirmBtn>
                </ButtonDiv>
            </Modal>
        </OpacityView>
    </>
}

const OpacityView = styled.div`
  width : 100%;
  height : 100vh;
  position : fixed;
  display : flex;
  left : 0;
  right:0;
  top : 0;
  bottom : 0;
  z-index : 5;
  background : rgba(196, 196, 196, 0.7);
`

const Modal = styled.div`
  width: 388px;
  height: 500px;
  margin : auto;
  background: #ffffff;
  border-radius: 20px;
  z-index : 5;
`
const CloseDiv = styled.div`
  //display : flex;
  margin-top : 20px;
  margin-left : 348px;
  //z-index : 10;
`

const CloseIcon = styled.img.attrs({
    src : img_closeBtn
})`
  width: 20px;
  height: 20px;
  //z-index : 20;
`

const ButtonDiv = styled.div`
  display : flex;
  justify-items: center;
  margin : auto;
  
`

const ConfirmBtn = styled.button`
  width: 310px;
  height: 60px;
  margin : 40px auto auto auto;
  background: ${props=>props.color[1]};
  border-radius: 10px;
  border : ${props=>props.color[0]} 3px solid;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 60px;
  text-align : center;
  
  color: ${props=>props.color[2]};

`

const Wrap = styled.div`
  z-index : 20;
`
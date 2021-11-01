import styled from "styled-components";
import img_closeBtn from "../../img/img_closeBtn.png";
import { SelectTable } from "./SelectTable";
import {SelectPlug} from "./SelectPlug";
import {useState} from "react";

export const PopUp = ({state, getState}) => {
    const [type, setType] = useState(state)
    return <>
        <OpacityView>
            <Modal>
                <CloseDiv>
                    <CloseIcon onClick={()=>getState('')}/>
                </CloseDiv>

                <Wrap>
                    {type === 'table'?
                        <>
                            <SelectTable/>
                        </>
                        :
                        <>
                        {type === 'plug'?
                            <SelectPlug/>
                            :
                            null
                        }
                        </>
                    }
                </Wrap>

                <ConfirmBtn onClick={()=>getState('')}>선택하기</ConfirmBtn>
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

const ConfirmBtn = styled.div`
  width: 310px;
  height: 60px;
  margin : 40px auto auto auto;
  background: #4AD395;
  border-radius: 10px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 60px;
  text-align : center;
  
  color: #FFFFFF;

`

const Wrap = styled.div`
  z-index : 20;
`
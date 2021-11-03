import styled from "styled-components";
import './SelectTable.css';
import img_menu1 from "../../img/img_menu1.png";

export const SelectTable = () => {
    return <>
       
          <button className="singletable">
            <img className="img_singletable" src={img_menu1} alt="table"/>
            <label className="label_singletable" htmlFor="table"> 싱글 테이블(1~2인) </label>
          </button>
          <button className="doubletable">
            <img className="img_singletable" src={img_menu1} alt="table"/>
            <label className="label_singletable" htmlFor="table"> 더블테이블(1~4인) </label>
          </button>
          <button className="bartable">
            <img className="img_singletable" src={img_menu1} alt="table"/>
            <label className="label_singletable" htmlFor="table"> 바 테이블(n인) </label>
          </button>
          <button className="anything">
            <img className="img_singletable" src={img_menu1} alt="table"/>
            <label className="label_singletable" htmlFor="table"> 상관 없어요! </label>
          </button>
    </>
}

const Text = styled.div`
  font-size : 20px;
`

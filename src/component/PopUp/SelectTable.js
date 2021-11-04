import './SelectTable.css';
import img_menu1 from "../../img/img_menu1.png";
import img_bartable from "../../img/img_bartable.png";
import img_anything from "../../img/img_anything.png";

export const SelectTable = () => {
    return <>
       
          <button className="singletable">
            <img className="img_singletable" src={img_menu1} alt="singletable"/>
            
            <label className="label_singletable" htmlFor="table"> 싱글 테이블(1~2인) </label>
          </button>
          <button className="doubletable">
            <img className="img_doubletable1" src={img_menu1} alt="doubletable"/>
            <img className="img_doubletable2" src={img_menu1} alt="doubletable"/>
            <label className="label_doubletable" htmlFor="table"> 더블테이블(1~4인) </label>
          </button>
          <button className="bartable">
            <img className="img_bartable" src={img_bartable} alt="bartable"/>
            <label className="label_bartable" htmlFor="table"> 바 테이블(n인) </label>
          </button>
          <button className="anything">
            <img className="img_anything" src={img_anything} alt="anything"/>
            <label className="label_anything" htmlFor="table"> 상관 없어요! </label>
          </button>
    </>
}
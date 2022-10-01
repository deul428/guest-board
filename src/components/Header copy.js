import { Link } from "react-router-dom";
import { useState } from "react";
import { useApplicationContext } from '../Contexts/Context';
import headerImg from "../imgRe/headerImg.png"

function Header() {
  const { setListParams } = useApplicationContext();
  const [isSelect, setSelect] = useState("");

  // const test01 = "<Link to='/list'><h1 className={'text textFiction' + (idx == isSelect ? ' selected' : '')} value={idx} onClick={(e)=> {depthList('fic', e)}}>fiction</h1></Link>"

  // var test = <div dangerouslySetInnerHTML={{ __html: test01 }} ></div>;
  let dataTest = ['fiction', 'art', 'video', 'review'];

  // var linkPattern = '/list';


  //클릭하면 depthList로 파라미터 넘겨 줌 -> 지금 클릭된 파라미터가 뭔지 확인, ListParams로 넘겨 줘서 전역에서 사용
  // const depthList = (params, e) => { 
  function depthList(params, e){
    var leaveParams;
    switch (params) {
      case 0: 
        leaveParams = 'fic';
        break;
      case 1:
        leaveParams = 'art';
        break;
      case 2:
        leaveParams = 'vdo';
        break;
      case 3:
        leaveParams = 'rvw';
        break;
    } 
    setListParams(leaveParams);
		
    console.log(params, leaveParams);
    e.preventDefault();

    setSelect((prev) => {
      console.log(e.target, e.target.parentElement.children);
      for (var i=0; i<4; i++){
        e.target.parentElement.children[i].classList.remove('selected');
        console.log("작업 중...");
      }
      // e.target.parentElement.children.classList.remove(' selected');
      e.target.classList.add('selected');
      return e.target;
    });

    
    if (params == 2) {
      // linkPattern = '/lineup';
    } 
	};


  //%%%%버튼 누르면 색 변경 https://devlog.jwgo.kr/2018/10/23/how-to-add-conditionally-classname-in-react/


  return (
    <header>
      <img src={headerImg} 
      alt='intro image'
      />
      <div className='textArea'>
        {dataTest.map((item, idx) => {
          return ( 
            // <Link to={linkPattern}>
              <h1
              value={idx}
              className={"text " + (idx == isSelect ? "selected" : "")}
              onClick={(e)=>{depthList(idx, e)}}
              >
                {item}
              </h1>
            // </Link>
          )
        })}
        {/* 
        <Link to="/list">
          <h1 className={'text textFiction' + (idx == isSelect ? ' selected' : '')}
          value={idx}
          onClick={(e)=>{depthList('fic', e)}}>fiction</h1>
        </Link>
        <Link to="/list">
          <h1 className={'text textArt' + (idx == isSelect ? ' selected' : '')} 
          value={idx}
          onClick={(e)=>{depthList('art', e)}}>art</h1>
        </Link>
        <Link to="/lineup">
          <h1 className='text textVideo'
          value={idx}
          onClick={(e)=>{depthList('vdo', e)}}>video</h1>
        </Link>
        <Link to="/list">
          <h1 className='text textReview'
          value={idx}
          onClick={(e)=>{depthList('rvw', e)}}>review</h1>
        </Link> 
        */}
      </div>
    </header>
  );
}

export default Header;

import { Link } from "react-router-dom";
import { useState } from "react";
import { useApplicationContext } from '../Contexts/Context';
import headerImg from "../imgRe/headerImg.png"
import headerImgMbil from "../imgRe/headerImgMbil.png"

function Header() {
  const { setListParams } = useApplicationContext();
  const [isSelect, setSelect] = useState("");


  let dataTest = ['fiction', 'art', 'video', 'review'];

  var linkPattern = '/list';


  //클릭하면 depthList로 파라미터 넘겨 줌 -> 지금 클릭된 파라미터가 뭔지 확인, ListParams로 넘겨 줘서 전역에서 사용
  // const depthList = (params, e) => { 
  function depthList(params, e){
    //데이터 핸들링
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
      let siblings = e.target.parentElement.parentElement.getElementsByClassName('text');
      console.log(e.target, siblings);
      //타겟의 형제들 순회하면서 selected 클래스 remove
      for (var i=0; i<siblings.length; i++){
        siblings[i].classList.remove('selected');
      }
      //타겟에 selected 클래스 추가
      e.target.classList.add('selected');
      return e.target;
    });

    
    if (leaveParams == 'vdo') {
      linkPattern = '/lineup';
    } 
	};


  //%%%%버튼 누르면 색 변경 https://velog.io/@boyfromthewell/React-%EA%B0%81%EA%B0%81%EC%9D%98-%EB%B2%84%ED%8A%BC-%ED%81%B4%EB%A6%AD%EC%8B%9C-%EC%83%89%EC%83%81-%EB%B3%80%EA%B2%BD-map%EC%9C%BC%EB%A1%9C-%EB%A0%8C%EB%8D%94%EB%A7%81-%ED%95%9C-%EA%B2%BD%EC%9A%B0

  return (
    <header>
      <img src={headerImg} 
      className="imgDefault"
      alt='intro image'
      />
      <img src={headerImgMbil}
      alt='intro image'
      className="imgMbil"
      style={{display: "none"}}
      />
      <div className='textArea'>
        {dataTest.map((item, idx) => {
          return ( 
            <Link to={linkPattern}>
              <h1
              value={idx}
              className={"text "}
              onClick={(e)=>{depthList(idx, e)}}
              >
                {item}
              </h1>
            </Link>
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

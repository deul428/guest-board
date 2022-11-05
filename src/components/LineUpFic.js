import { Link } from "react-router-dom";
import { useApplicationContext } from '../Contexts/Context';
import Header from "./Header";
import React from 'react';

function LineUpFic({item}) {
  const { listParams, cntryParams } = useApplicationContext();

  // router, useLocation으로 상세 페이지 구현 https://bmy1320.tistory.com/entry/React-Router-useLocation-%EB%A5%BC-%ED%86%B5%ED%95%B4-%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B5%AC%ED%98%84

  var currentField = listParams;
  switch (currentField) {
    case 'fic': currentField = 'FICTION';
    break;
    case 'art': currentField = 'ART';
    break;
    case 'vdo': currentField = 'VIDEO';
    break;
    case 'rvw': currentField = 'REVIEW';
    break;
  }
  var currentCntry = cntryParams;
  switch (currentCntry) {
    case 'kor': currentCntry = 'KOREAN';
    break;
    case 'abd': currentCntry = 'ABROAD';
    break;
  }

  //lineup으로 들어온 파라미터가 vdo이면 kor/abd 문구 display: none;
  var isShown = 'none';
  if ((listParams == 'vdo' && cntryParams == 'kor') || (listParams == 'vdo' &&cntryParams == 'abd')) {
    isShown = 'none';
  } else {
    isShown = 'inline-block';
  }

  function DataSet() {
    // console.log("props \nLine up detail component:: " + listParams + " "+ cntryParams);
    var listArr = [];
    var cntry;

    if (listParams == 'fic'){
      cntry = 0;
    } else if (listParams == 'art') {
      cntry = 1;
    } else if (listParams == 'vdo') { //vdo는 하나니까 하드코딩
      cntry = 2;
      listArr = item[2][1];
    } else if (listParams == 'rvw') {
      cntry = 3;
    }
    if (cntryParams == 'kor') {
      listArr = item[cntry][0];
    } else { 
      listArr = item[cntry][1];
    }

    // console.log("current arr " + cntryParams + ":: ", listArr);

    //station으로 파라미터 연결
    //listArr가 10보다 길 경우 데이터 반으로 쪼개서 핸들링
    var listArr01;
    var listArr02;    
    var printArr = [];

    if (listArr.length >= 10) {
      listArr01 = listArr.slice(0, listArr.length/2);
      listArr02 = listArr.slice(listArr.length/2, listArr.length);
      printArr.push(
        <div className="LUWrap LUWrapFicKor">
          <div className="h2Area">
            <h2>{ currentField }<span className="cntryArea" style={{ display: isShown }}>&nbsp;&#45;&nbsp;{ currentCntry }</span></h2>
          </div>
          <div className="itemArea itemFicKor">
            <div className="lineups lineups01">
              {listArr01.map((itemParams, idx) => {
                return ( 
                  <div className="lineup">
                    <Link to={`/lineup/${itemParams.id}`} state={{ item: item[cntry], id: itemParams.id }}>
                      <h1>{itemParams.station}</h1>
                    </Link>
                  </div>
                  )
              })}
            </div>
            <div className="lineups lineups02">
              {listArr02.map((itemParams, idx) => {
                return ( 
                  <div className="lineup">
                    <Link to={`/lineup/${itemParams.id}`} state={{ item: item[cntry], id: itemParams.id }}>
                      <h1>{itemParams.station}</h1>
                    </Link>
                  </div>
                  )
              })}
            </div>
          </div>
        </div>
      );
    } else { 
      printArr.push(
        <div className="LUWrap">
          <div className="h2Area">
            <h2>{ currentField }<span className="cntryArea" style={{ display: isShown }}>&nbsp;&#45;&nbsp;{ currentCntry }</span></h2>
          </div>
          <div className="itemArea">
            <div className="lineups">
              {listArr.map((itemParams, idx) => {
                return ( 
                  <div className="lineup lineupLong">
                    <Link to={`/lineup/${itemParams.id}`} state={{ item: item[cntry], id: itemParams.id }}>
                      <h1>{itemParams.station}</h1>
                    </Link>
                  </div>
                  )
              })}
            </div>
          </div>
        </div>
      );
    }
    return printArr;
    
  }
// https://velog.io/@ksung1889/React-8 < for문 안에 html 출력 

  return (
    <div className="LUArea commonBg">
      <Header />
      { DataSet() }
    </div>
  );
}

export default LineUpFic;

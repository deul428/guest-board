import { Link } from "react-router-dom";
import { useApplicationContext } from '../Contexts/Context';
import Header from "./Header";
import React from 'react';

function LineUpFic({item}) {
  const { listParams, cntryParams } = useApplicationContext();

  // router, useLocation으로 상세 페이지 구현 https://bmy1320.tistory.com/entry/React-Router-useLocation-%EB%A5%BC-%ED%86%B5%ED%95%B4-%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B5%AC%ED%98%84

  function DataSet() {
    console.log("line up detail component:: " + listParams + " "+ cntryParams);
    var printArr = [];
    var listArr = [];
    var cntry;

    if (listParams == 'fic'){
      cntry = 0;
    } else if (listParams == 'art') {
      cntry = 1;
    } else if (listParams == 'vdo') { //vdo는 하나니까 하드코딩
      cntry = 2;
      listArr = item[2][0];
    }
    if (cntryParams == 'kor') {
      listArr = item[cntry][0];
      console.log(listArr);
    } else { 
      listArr = item[cntry][1];
    }
    
    console.log("current arr " + cntryParams + ":: ", listArr);

    var titleName;
    for(titleName of listArr){
      printArr.push(
        <div className="lineupItem">
          <Link to={`/lineup/${titleName.id}`} state={{ item: item[cntry], id: titleName.id }}>
            <h1>{titleName.station}</h1>
          </Link>
        </div>
      )
    }
    return printArr;
  }
// https://velog.io/@ksung1889/React-8 < for문 안에 html 출력 

  return (
    <div className="LUArea commonBg">
      <Header />
      <div className="h2Area">
        <h2>{ listParams } &#45; { cntryParams }</h2>
      </div>
      <div className="itemArea itemLong">
        { DataSet() }
      </div>
      
      <div className="commonDotted"></div>
    </div>
  );
}

export default LineUpFic;

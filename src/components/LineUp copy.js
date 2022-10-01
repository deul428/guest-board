import React from 'react';
import { useApplicationContext } from '../Contexts/Context';

import LineUpFic from "./LineUpFic";
import LineUpArt from "./LineUpArt";
import LineUpVdo from "./LineUpVdo";
import LineUpRvw from "./LineUpRvw";


//%%%% 0929 지금 하위 컴포넌트가 달라서 헤더가 계속 재렌더링되는 바람에 색을 못 잡음.. 씨발

function LineUp({datas}) {
  const { listParams, cntryParams } = useApplicationContext();
  // console.log('LineUp:: ', listParams, cntryParams);

  var currentField = listParams;
  var currentCntry = cntryParams;

  var item = datas;
  console.log(listParams, cntryParams);
  return <LineUpFic item={item}/>
  //lineup에서 fic/art/vdo 나눔
  switch (currentField) {
    case 'fic': 
    currentField = 'FICTION'; 
    return <LineUpFic item={item[0]}/>
    case 'art': 
    currentField = 'ART';
    return <LineUpArt item={item[1]}/>
    case 'vdo': 
    currentField = 'VIDEO';
    return <LineUpVdo item={item[2]}/>
    case 'rvw': 
    currentField = 'REVIEW';
    return <LineUpRvw />
  }
}

export default LineUp;

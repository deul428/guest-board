import React from 'react';
import { useApplicationContext } from '../Contexts/Context';

import LineUpFic from "./LineUpFic";


function LineUp({datas}) {
  const { listParams, cntryParams } = useApplicationContext();
  var item = datas;
  // console.log(listParams, cntryParams);
  return <LineUpFic item={item}/>
}

export default LineUp;

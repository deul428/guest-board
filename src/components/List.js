import { Link } from "react-router-dom";
import { useApplicationContext } from '../Contexts/Context';
import Header from "./Header";

function List() {
  const { listParams, setcntryParams } = useApplicationContext();

  const depthLineUp = (params, e) => {
    setcntryParams(params);
    // e.preventDefault();
    console.log('List:: ', listParams, params);
  };


  //listParams 값이 비디오면 kor 클래스 display none
  var isShown = 'none';
  if (listParams == 'vdo') {
    isShown = 'none';
  } else {
    isShown = 'block';
  }

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

  return (
    <div className="listArea commonBg">
      <Header />
      <div className="h2Area">
        <h2>{ currentField }</h2>
      </div>
      <div className="listItemArea">
        <div className="listKor" style={{ display: isShown }} onClick={(e)=>{depthLineUp('kor', e)}}>
          <Link to="/lineup">
              <img src={process.env.PUBLIC_URL + 'assets/img/03_LIST_KOR.jpg'} 
              className='listItem listKor'
              alt='list item kor'
              />
          </Link>
        </div>
        <div className="listAbd" onClick={(e)=>{depthLineUp('abd', e)}}>
          <Link to="/lineup">
            <img src={process.env.PUBLIC_URL + 'assets/img/03_LIST_ABD.jpg'} 
            className='listItem listAbd'
            alt='list item abd'
            />
          </Link>
        </div>
      </div>
      <div className="commonDotted"></div>
    </div>
  );
}

export default List;

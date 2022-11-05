import { Link } from "react-router-dom";
import { useApplicationContext } from '../Contexts/Context';

function Index() {
  const { setListParams, setcntryParams } = useApplicationContext();

  const depthList = (params, e) => {
		setListParams(params);
    e.preventDefault();
    if (params == 'vdo') {
      setcntryParams(()=>'abd');
    }
	};
  //context API https://andwinter.tistory.com/327

  return (
    <div className='indexArea commonBg'>
      <div className="indexWrap">
        <div className='h2Area'>
          <h2>Check your seat number</h2>
        </div>
        <div className='imgArea animationOpacityIndex'>
          <table>
            <tbody>
              <tr>
                <td onClick={(e)=>{depthList('fic', e)}}>
                  <Link to="/list">
                    <img src={process.env.PUBLIC_URL + '/assets/img/02_INDEX_fic.jpg'} 
                    className='mainImg mainFic'
                    alt='Fiction list image'
                    />
                  </Link>
                </td>
                <td onClick={(e)=>{depthList('art', e)}}>
                  <Link to="/list">
                    <img src={process.env.PUBLIC_URL + '/assets/img/02_INDEX_art.jpg'} 
                    className='mainImg mainArt'
                    alt='Art list image'
                    />
                  </Link>
                </td>
              </tr>
              <tr>
                {/* 하나라서 바로 lineup으로 넘겨 줘야 함 */}
                <td onClick={(e)=>{depthList('vdo', e)}}> 
                  <Link to="/lineup">
                    <img src={process.env.PUBLIC_URL + '/assets/img/02_INDEX_vdo.jpg'} 
                    className='mainImg mainVdo'
                    alt='Video list image'
                    />
                  </Link>
                </td>
                <td onClick={(e)=>{depthList('rvw', e)}}>
                  <Link to="/list">
                    <img src={process.env.PUBLIC_URL + '/assets/img/02_INDEX_rvw.jpg'} 
                    className='mainImg mainRvw'
                    alt='Review list image'
                    />
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='footerArea'>
          <img src={process.env.PUBLIC_URL + '/assets/img/01_INTRO_mini.png'} 
          className='footerImg'
          alt='intro footer'
          />
        </div>
      </div>   
    </div>
  );
}

export default Index;

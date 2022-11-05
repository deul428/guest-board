import { Link } from "react-router-dom";

function Intro() {
  return (
    <div className='introArea commonBg'>
      <Link to="/index">
        <div className='imgArea'>
          <img src={process.env.PUBLIC_URL + '/assets/img/01_INTRO_logo.png'} 
          className="imgLogo animationOpacity"
          alt='intro image'
          />
        </div>
        <div className='footerArea'>
          <img src={process.env.PUBLIC_URL + '/assets/img/01_INTRO_mini.png'} 
          className='footerImg'
          alt='intro footer'
          />
        </div>
      </Link>
    </div>
  );
}

export default Intro;

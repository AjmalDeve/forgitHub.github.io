import logo from '../src/logo/logo.png';
import BascButtons from './BtnForabout';
function About() {
    return (
      <>
      <div className="contanierOfAbout">
        <div className="left">
          <div className="mai">
      <p className="in">THIS IS ME</p>
      <h1 className='info_name'>AJMAL DEVELOPER</h1>
      <p className='info_para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, similique.</p>
      <BascButtons className="info_btn" name="Hire Me"/>
      </div>
        </div>

        <div className="right">
          <div className="pro_logo">
        <img src={logo} width="120px" alt="" />
        </div>
        </div>
      </div>
      
      </>
    );
  }
  
  export default About;
  
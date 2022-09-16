import LinkedInIcon from '@mui/icons-material/LinkedIn';
  import YouTubeIcon from '@mui/icons-material/YouTube';
  import InstagramIcon from '@mui/icons-material/Instagram';
  import BasicButtons from './Btn';
  import  BasicTextFields  from './Input';
function Footer() {
    return (
      <>

      <div className="footer">
        <div className="up">
          <div className="box">
            <h3>Ajmal hassan</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, praesentium!</p>
          </div>
      
            {/* <input type="text" /> */}
          {/* <div className="box">
            <h3 className='subs'>subscribe for updates</h3>
            <div className="sub">
            <BasicTextFields  />
            <BasicButtons 
            name="Subscribe" 
            />
            </div>
          </div> */}

          <div className="box">
            <h3>Follow us</h3>
            <div className="icons"> 
            <i  className='icon1'>
            <LinkedInIcon  fontSize='large' className='icon2' />
            </i>
            <i  className='icon1'>
            <YouTubeIcon fontSize='large' className='icon2'/>
            </i>
            <i  className='icon1'>
            <InstagramIcon fontSize='large' className='icon2'/>
            </i>
            </div>
          </div>
          <div className="box">
            <h3>Call us</h3>
            +929999999999
          </div>
        </div>
      
      <div className="line"></div>

        <div className="dwon">
          <div className="boxTow">
            <p className="copyrightinfo">
              2022 AjmalDeve All Rights Reserved
            </p>
          </div>
          <div className="boxTow">
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
  
  export default Footer;
  
import ImgMediaCard from './Cords';
import ImgOne from './logo/one.jpg';
import ImgTwo from './logo/two.jpg';
import ImgThree from './logo/three.jpg';
import ImgFour from './logo/four.jpg';
function Services() {
    return (
      <>
      <div className="service_content">
        <div className="wrapp">
          <h2 className="service_heading">
            Our service
          </h2>
          <div className="boxs">
          <ImgMediaCard className="box" name="Web Develpment" img={ImgOne} />
          <ImgMediaCard className="box" name="Web Design" img={ImgTwo}/>
          <ImgMediaCard className="box" name="App Develpment" img={ImgThree}/>
          <ImgMediaCard className="box"name="Software Develpment" img={ImgFour}/>
          {/* <ImgMediaCard /> */}
          {/* <ImgMediaCard /> */}
          </div>
        </div>
      </div>
      <div className="extra">
        
        </div>
      </>
    );
  }
  
  export default Services;
  
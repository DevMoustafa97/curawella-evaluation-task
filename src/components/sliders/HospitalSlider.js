import React from 'react';
import Slider from "react-slick";
import Img1 from '../../assets/1.jpeg'
import Img2 from '../../assets/2.jpeg'
import Img3 from '../../assets/3.jpeg'
import Img4 from '../../assets/4.jpeg'
import Img5 from '../../assets/5.jpeg'

// carousel stuff
function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <i className="fas fa-chevron-circle-right arrow-carousel" 
    style = {{...style,fontSize:'30px',color:'gray',position:"absolute",bottom:'45%',right:"5%",zIndex:1}}
    onClick={onClick}
    ></i>
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <i className="fas fa-chevron-circle-left arrow-carousel" 
    style = {{...style,fontSize:'30px',color:'gray',position:"absolute",bottom:'45%',left:"5%",zIndex:1}}
    onClick={onClick}
    ></i>
    
  );
}

const settings = {
  autoplay: true,
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed:300,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};
// end carousel stuff


function HospitalSlider() {
  return (
      <Slider {...settings} >
          <div>
            <img src={Img1} alt="من داخل المستشفى" width="690px" height="280px" />
          </div>
          <div>
            <img src={Img2} alt="من داخل المستشفى" width="690px" height="280px" />
          </div>
          <div>
            <img src={Img3} alt="من داخل المستشفى" width="690px" height="280px" />
          </div>
          <div>
            <img src={Img4} alt="من داخل المستشفى" width="690px" height="280px" />
          </div>
          <div>
            <img src={Img5} alt="من داخل المستشفى" width="690px" height="280px" />
          </div>
        </Slider>
  )
}

export default HospitalSlider

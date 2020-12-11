import React from "react";
import Slider from "react-slick";
import doctor from "../../assets/doctor.PNG"
export default function DoctorsSlider() {
  function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
      <i className = "fas fa-chevron-circle-right arrow-carousel" 
          style = {{...style,fontSize:'30px',color:'gray',position:"absolute",bottom:'50%',right:"-3%"}}
          onClick={onClick}
      ></i>

    );
  }
  
  function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
      <i className = "fas fa-chevron-circle-left arrow-carousel" 
          style = {{...style,fontSize:'30px',color:'gray',position:"absolute",bottom:'50%',left:"-3%",}}
          onClick={onClick}
      ></i>
    );
  }
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <Slider {...settings}>
      <div>
        <div className="card" style={{width: "18rem"}}>
            <div className="d-flex align-items-center justify-content-center">
              <img src={doctor} className="card-img-top card-img" alt="doctor" />
            </div>
          <div className="card-body">
            <h5 className="card-title">اميرة محمود</h5>
            <p className="card-text">اخصائي انف واذن وحنجرة</p>
            <div className="card-date-time">
              <p>الاثنين-الخميس<i className="far fa-calendar-alt"></i></p>
              <p>4PM-8PM<i className="far fa-clock"></i></p>
            </div>
          </div>
        </div>  
      </div>
      <div>
      <div className="card" style={{width: "18rem"}}>
            <div className="d-flex align-items-center justify-content-center">
              <img src={doctor} className="card-img-top card-img" alt="doctor" />
            </div>
          <div className="card-body">
            <h5 className="card-title">اميرة محمود</h5>
            <p className="card-text">اخصائي انف واذن وحنجرة</p>
            <div className="card-date-time">
              <p>الاثنين-الخميس<i className="far fa-calendar-alt"></i></p>
              <p>4PM-8PM<i className="far fa-clock"></i></p>
            </div>
          </div>
        </div>  
      </div>
      <div>
      <div className="card" style={{width: "18rem"}}>
            <div className="d-flex align-items-center justify-content-center">
              <img src={doctor} className="card-img-top card-img" alt="doctor" />
            </div>
          <div className="card-body">
            <h5 className="card-title">اميرة محمود</h5>
            <p className="card-text">اخصائي انف واذن وحنجرة</p>
            <div className="card-date-time">
              <p>الاثنين-الخميس<i className="far fa-calendar-alt"></i></p>
              <p>4PM-8PM<i className="far fa-clock"></i></p>
            </div>
          </div>
        </div>  
      </div>
      <div>
      <div className="card" style={{width: "18rem"}}>
            <div className="d-flex align-items-center justify-content-center">
              <img src={doctor} className="card-img-top card-img" alt="doctor" />
            </div>
          <div className="card-body">
            <h5 className="card-title">اميرة محمود</h5>
            <p className="card-text">اخصائي انف واذن وحنجرة</p>
            <div className="card-date-time">
              <p>الاثنين-الخميس<i className="far fa-calendar-alt"></i></p>
              <p>4PM-8PM<i className="far fa-clock"></i></p>
            </div>
          </div>
        </div>  
      </div>
      <div>
      <div className="card" style={{width: "18rem"}}>
            <div className="d-flex align-items-center justify-content-center">
              <img src={doctor} className="card-img-top card-img" alt="doctor" />
            </div>
          <div className="card-body">
            <h5 className="card-title">اميرة محمود</h5>
            <p className="card-text">اخصائي انف واذن وحنجرة</p>
            <div className="card-date-time">
              <p>الاثنين-الخميس<i className="far fa-calendar-alt"></i></p>
              <p>4PM-8PM<i className="far fa-clock"></i></p>
            </div>
          </div>
        </div>  
      </div>
      <div>
      <div className="card" style={{width: "18rem"}}>
            <div className="d-flex align-items-center justify-content-center">
              <img src={doctor} className="card-img-top card-img" alt="doctor" />
            </div>
          <div className="card-body">
            <h5 className="card-title">اميرة محمود</h5>
            <p className="card-text">اخصائي انف واذن وحنجرة</p>
            <div className="card-date-time">
              <p>الاثنين-الخميس<i className="far fa-calendar-alt"></i></p>
              <p>4PM-8PM<i className="far fa-clock"></i></p>
            </div>
          </div>
        </div>  
      </div>
    </Slider>
  );
}
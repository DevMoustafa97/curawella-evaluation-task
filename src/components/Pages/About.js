import React from 'react'
import HospitalSlider from '../sliders/HospitalSlider'
import DoctorsSlider from '../sliders/DoctorsSlider'
import Map from '../../assets/Map.PNG'

export default function About() {
  return (
    <div className="container arab">
      <div className="row d-flex flex-sm-col-reverse   justify-content-between">
        <div className="col col-sm-12 col-md-5 mt-4 mb-4">
          <HospitalSlider />
        </div>
      <div className="arab col-sm-12 col-md-7 mt-4">
        <h2>مستشفى الاندلسية</h2>
        <p dir="rtl">هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. </p>
        <h2>تواصل معنا</h2>
        <p>ارقام الهاتف</p>
        <div>
          <div><p>01234567899<i className="fas fa-phone ml-3 content-icon"></i></p></div>
          <div><p>01234567899<i className="fas fa-phone ml-3 content-icon"></i></p></div>
        </div>
        <div className="mt-2">
          <p>العنوان</p>
          <div>
            <p dir="rtl"><i className="fas fa-map-marker-alt ml-3 content-icon"></i>35 محمد بهاء الدين ,سموحة, سيدي جابر</p>
          </div>
          <div>
          {/* <SimpleMap /> */}
          <a href="https://www.google.com/maps/place/35+%D9%85%D8%AD%D9%85%D8%AF+%D8%A8%D9%87%D8%A7%D8%A1+%D8%A7%D9%84%D8%AF%D9%8A%D9%86+%D8%A7%D9%84%D8%BA%D9%88%D8%B1%D9%8A%D8%8C+%D8%B9%D8%B2%D8%A8%D8%A9+%D8%B3%D8%B9%D8%AF%D8%8C+%D8%B3%D9%8A%D8%AF%D9%8A+%D8%AC%D8%A7%D8%A8%D8%B1%D8%8C+%D8%A7%D9%84%D8%A5%D8%B3%D9%83%D9%86%D8%AF%D8%B1%D9%8A%D8%A9%E2%80%AD/@31.2178227,29.9449526,17z/data=!3m1!4b1!4m5!3m4!1s0x14f5c493b6d5afe1:0xad39644bc6eef83e!8m2!3d31.2178227!4d29.9427639" target="_blank">
            <img src={Map} alt="العنوان على الخريطة" width="500px"/>
          </a>
          </div>
        </div>
      </div>
    </div>
    <div className="row mt-3">
      <h2>الاطباء</h2>
      <DoctorsSlider />
    </div>
  </div>
  )
}

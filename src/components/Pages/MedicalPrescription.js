import React,{useState} from 'react'
import Img from '../../assets/dwaa.PNG'
export default function MedicalPrescription({location}) {
  console.log(location.pathname)
  const [show, setShow] = useState(false)
  const showDiagnosis = ()=>{
    setShow(!show)
    console.log(show)
  }
  
  return (
      <div className="row">
        <div className="col">
          <div className={`prescription arab ml-5 ${show?'':'d-none'}`}>
            <p>د/اميرة محمود</p>
            <p>اخصائي انف واذن وحنجرة</p>
            <div className="diagnosis mt-4">
              <div className="label">
                التشخيص
              </div>
              <p>التهاب رئوي</p>
            </div>
            <div className="diagnosis mt-4">
              <div className="label">
                الادوية
              </div>
              <div className= "element">
                <span dir="rtl">2/يوم</span>
                <div>
                  Macrolide antibiotics
                <img src={Img} alt="دواء" width="40px" height="40px"/>
                </div>
              </div>
              <div className= "element">
                <span dir="rtl">2/يوم</span>
                <div>
                  Macrolide antibiotics
                <img src={Img} alt="دواء" width="40px" height="40px"/>
                </div>
              </div>
              <div className= "element">
                <span dir="rtl">2/يوم</span>
                <div>
                  Macrolide antibiotics
                <img src={Img} alt="دواء" width="40px" height="40px"/>
                </div>
              </div>
              <div className= "element">
                <span dir="rtl">2/يوم</span>
                <div>
                  Macrolide antibiotics
                <img src={Img} alt="دواء" width="40px" height="40px"/>
                </div>
              </div>
            </div>
            <div className="diagnosis mt-4">
              <div className="label">
                التحاليل
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <button className="btn">ارفاق صورة <i class="fas fa-upload"></i></button>
                <span dir="rtl">لتحليل صورة دم كاملة (CBC)</span>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <button className="btn">ارفاق صورة <i class="fas fa-upload"></i></button>
                <span dir="rtl">لتحليل صورة دم كاملة (CBC)</span>
              </div>
            </div>
            <div className="diagnosis mt-4">
              <div className="label">
                الاشعة
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <button className="btn">ارفاق صورة <i class="fas fa-upload"></i></button>
                <span dir="rtl">اشعة مقطعية (CT)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row dr" onClick={showDiagnosis}>
            <div className="col-4 arab dr-date">
              23
              <br/>
              يوليو
            </div>
            <div className="col-8 arab">
              <p>د/اميرة محمود<i className="fas fa-stethoscope"></i></p>
              <p className="pr-4">اخصائي انف واذن وحنجرة</p>
              <p>التهاب رئوي<i className="fas fa-notes-medical"></i></p>
            </div>
          </div>
          <div className="row dr" onClick={showDiagnosis}>
            <div className="col-4 arab dr-date">
              <p>23</p>
              <p>يوليو</p>
            </div>
            <div className="col-8 arab">
              <p>د/اميرة محمود<i className="fas fa-stethoscope"></i></p>
              <p className="pr-4">اخصائي انف واذن وحنجرة</p>
              <p>التهاب رئوي<i className="fas fa-notes-medical"></i></p>
            </div>
          </div>
          <div className="row dr" onClick={showDiagnosis}>
            <div className="col-4 arab dr-date">
              <p>23</p>
              <p>يوليو</p>
            </div>
            <div className="col-8 arab">
              <p>د/اميرة محمود<i className="fas fa-stethoscope"></i></p>
              <p className="pr-4">اخصائي انف واذن وحنجرة</p>
              <p>التهاب رئوي<i className="fas fa-notes-medical"></i></p>
            </div>
          </div>
          <div className="row dr" onClick={showDiagnosis}>
            <div className="col-4 arab dr-date">
              <p>23</p>
              <p>يوليو</p>
            </div>
            <div className="col-8 arab">
              <p>د/اميرة محمود<i className="fas fa-stethoscope"></i></p>
              <p className="pr-4">اخصائي انف واذن وحنجرة</p>
              <p>التهاب رئوي<i className="fas fa-notes-medical"></i></p>
            </div>
          </div>
          <div className="row dr" onClick={showDiagnosis}>
            <div className="col-4 arab dr-date">
              <p>23</p>
              <p>يوليو</p>
            </div>
            <div className="col-8 arab" onClick={showDiagnosis}>
              <p>د/اميرة محمود<i className="fas fa-stethoscope"></i></p>
              <p className="pr-4">اخصائي انف واذن وحنجرة</p>
              <p>التهاب رئوي<i className="fas fa-notes-medical"></i></p>
            </div>
          </div>
        </div>

      </div>
  )
}

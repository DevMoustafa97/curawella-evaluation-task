import React from 'react'

export default function Footer() {
  return (
    <footer className="row mt-5 pt-5">
      <div className="col-4 col-sm-12 col-md-3 offset-md-1 ">
        <h3>نشرة البريد الالكتروني</h3>
        <p>اشترك معنا ببريدك الالكتروني للحصول على احدث الاخبار</p>
        <div class="input-group mb-3">
        <div class="input-group-prepend">
        <button class="btn" type="button" id="button-addon1">اشترك</button>
        </div>
        <input type="email" class="form-control" placeholder="البريد الالكتروني" aria-label="Example text with button addon" aria-describedby="button-addon1" />
        </div>
        <h3>تابعنا على</h3>
        <div className="social-icons mt-4">
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-facebook"></i>
        </div>
      </div>
      <div className="col-2 col-sm-12 col-md-2">
        <h3>معلومات عننا</h3>
        <ul>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">شروط الاستخدام</a></li>
          <li><a href="#">سياسة الخصوصية</a></li>
        </ul>
      </div>
      <div className="col-2 col-sm-12 col-md-2">
        <h3>روابط سريعة</h3>
        <ul>
          <li><a href="#">الرئيسية</a></li>
          <li><a href="#">عن المستشفى</a></li>
          <li><a href="#">ارسال طلب</a></li>
          <li><a href="#">الوصفات الطبية</a></li>
          <li><a href="#">محفظتي</a></li>
          <li><a href="#">تواصل معنا</a></li>
        </ul>
      </div>
      <div className="col-4 col-sm-12 col-md-3">
        <p>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء.</p>
      </div>
      <div className="row copyright">
        <p>جميع الحقوق محفوظة <i className="fa fa-copyright"></i> </p>
      </div>
    </footer>
  )
}

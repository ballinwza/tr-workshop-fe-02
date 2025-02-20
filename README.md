<p align="center">
  <a href="" rel="noopener">
 <img width=204px height=201px src="https://i.pinimg.com/originals/22/e6/cc/22e6cc48795a2c55e7b8eed39d0c5034.gif" alt="Project logo"></a>
</p>

<h3 align="center">Tradon Fullstack Workshop</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()

</div>

---

<p align="center"> Poster board web application.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Feature](#getting_started)
- [Structure](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

เว็บสำหรับสร้างกระทู้ และแสดงความคิดเห็น มีระบบสมาชิกอย่างง่ายทำด้วย JWT
Frontend framework ใช้ NextJs Backend framwork ใช้ NestJs

## 🏁 Feature <a name = "getting_started"></a>

- ระบบกระทู้
    - แสดงผลกระทู้ทั้งหมด
    - สามารถสร้างกระทู้ได้แต่ต้อง login ก่อนเท่านั้น
    - สามารถกดที่กระทู้เพื่อเข้าไปดูรายละเอียดด้านใน
    - <span style="color:#eb9430">สามารถลบกระทู้ได้ (ยังไม่เสร็จ)</span>
    - <span style="color:#eb9430">สามารถแก้ไขกระทู้ได้ (ยังไม่เสร็จ)</span>
    - <span style="color:#eb9430">ระบบดูกระทู้ทั้งหมดที่ user สร้างไว้ (ยังไม่เสร็จ)</span>
- ระบบค้นหา
    - <span style="color:#eb9430">ค้นหาตามหมวดหมู่ community (ยังไม่เสร็จ)</span>
    - <span style="color:#eb9430">ค้นหาตามหมวดหมู่ community + keyword (ยังไม่เสร็จ)</span>
- ระบบสมาชิก
    - login ได้ด้วย username ที่ผมต้อง generate ให้
    - <span style="color:#A0C878">logout สามารถ logout ได้ (เพิ่มเข้ามา)</span>
    - มีการเก็บ cookie ต้องเปิด cookie consent ของ browser ก่อนใช้งาน หรือเข้า icognito mode
- รองรับ responsive design ที่ 768px
- <span style="color:#eb9430">ระบบแสดงความคิดเห็น (ยังไม่เสร็จ)</span>

## 🥊 Structure

- FrontEnd / ใช้เป็น hexagonal architecture
    - แบ่งส่วนที่เป็น business model กับ external ออกจากกันอย่างชัดเจน <br/>
      <span style="color:#A0C878">ข้อดี - คือสามารถเปลี่ยน external ได้โดยไม่ต้องแก้ไข model หลักเลย เช่น ถ้าต้องเปลี่ยนไปใช้ SQL สิ่งที่ต้องทำมีแค่ repository ที่ต้องเชื่อมต่อกับ SQL นอกนั้นยังใช้งานได้เหมือนเดิม</span> <br/>
      <span style="color:#eb9430">ข้อเสีย - ต้องร่ายรำโครงสร้างเยอะ ใช้เวลานานกว่าจะได้ feature แต่ละตัว ที่จริงไม่เหมาะกับโปรเจ็คขนาดเล็ก</span>
- BackEnd / ใช้เป็น Modular architecture
    - แบ่งระบบออกเป็นชั้นทำให้ง่ายต่อการดูแล ปรับปรุง ต่อเติม และแบ่งหน้าที่การทำงานชัดเจน แต่ผม modify เพิ่มไปนิดหน่อยในส่วน abstractor กับ repositoty อยากให้มันมีหน้าที่ชัดเจน และลดข้อผิดพลาดในการเรียกใช้ service <br/>
      <span style="color:#A0C878">ข้อดีที่เลือก - Nest ใข้ architecture นี้อยู่แล้วทำให้สานต่อได้ง่าย ไม่ต้องเสียเวลารำเยอะ แต่ละ module ทำงานแยกออกจากกันโดยอิสระ ทำให้เวลาแก้ไข module นึงจะไม่กระทบกับ module อื่น </span> <br/>
      <span style="color:#eb9430">ข้อเสีย - โครงสร้างซับซ้อน mentenance ค่อนข้างยาก ถ้าไม่วาง structure ให้ดีตั้งแต่แรก เช่นรูปแบบการ return การ handle error interface ให้ดีจะพันกันยุ่งปวดหัวมาก น่าจะใช้ MVC ดีกว่า</span>

## 🔧 Deployment <a name = "deployment"></a>

- Frontend
    - Domain https://tr-workshop-fe-02.vercel.app
    - Repository https://github.com/ballinwza/tr-workshop-fe-02
- Backend
    - Domain https://tr-workshop-be-01.onrender.com
    - Repository https://github.com/ballinwza/tr-workshop-be-01
-

## 🎈 Usage <a name="usage"></a>

- สามารถเข้าไปทดสอบที่ [Click ตรงนี้](https://tr-workshop-fe-02.vercel.app) ได้เลย username ที่ใช้จะแนบไปให้ใน email

## ⛏️ Built Using <a name = "built_using"></a>

- [MongoDB](https://www.mongodb.com/) - Database
- [Mongoose](https://mongoosejs.com/) - ODM Library
- [NestJs](https://docs.nestjs.com/) - Server Framework
- [NextJs](https://nextjs.org/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Swagger](https://swagger.io/) - Generator Api document
- [AntD](https://ant.design/) - UI library
- [EmotionCss](https://emotion.sh/docs/install) - Styler CSS-in-Js for runtime css like animaiton
- [HeadlessUI](https://headlessui.com/) - UI library for complex customize component
- [TailwindCss](https://tailwindcss.com/) - Css styler in class

- Utils Library
    - prettier / จัดการ code ให้เป็นระเบียบ
    - husky / ใช้ run CI command ก่อน push เข้า Git
    - bcryptjs / สำหรับ encode และตรวจสอบการเข้ารหัส
    - class-validator / ตรวจสอบ type
    - cookie-parser / ตัวแปลง cookie จาก http ให้อยู่ในรูป object
    - zustand / state managment

## ✍️ Authors <a name = "authors"></a>

- [Ball](https://github.com/ballinwza) - More Information about me

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- ยังมีอีกหลาย feature ที่ยังทำไม่เสร็จ รวมทั้งยังไม่ได้เขียน test case, docker เพราะเวลาไม่พอ

- ถ้าเป็นไปได้อยากขอโอกาสทำ feature ที่เหลือให้ครบแล้วค่อยตรวจอีกรอบ เพราะทำแล้วสนุกดีอยากท้าทายตัวเอง อยากทำให้สำเร็จ

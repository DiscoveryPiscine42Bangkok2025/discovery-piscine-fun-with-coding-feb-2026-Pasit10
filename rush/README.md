# Rush Project - 42 Bangkok

เว็บไซต์แนะนำทีมและพอร์ตโฟลิโอของนักศึกษา 42 Bangkok ที่สร้างขึ้นสำหรับ Rush Project

## 📋 เกี่ยวกับโปรเจกต์

Rush Project เป็นเว็บไซต์แนะนำทีมที่ประกอบด้วยนักศึกษา 2 คน ที่มีความหลงใหลในเทคโนโลยี เกม และดนตรี พัฒนาด้วย HTML, CSS (Tailwind CSS) และ JavaScript

## 👥 สมาชิกในทีม

- **Thanapat Koedpiam (tkoedpia)** - นักศึกษาวิทยาการคอมพิวเตอร์ที่รักการนอนและการกิน
- **Pasit Malarat (pasmalar)** - นักศึกษาวิทยาการคอมพิวเตอร์ที่สนใจเรียนรู้เทคโนโลยีใหม่และแก้ปัญหาผ่านการเขียนโค้ด

## ✨ ฟีเจอร์

- 🌓 **Dark/Light Mode** - รองรับทั้งธีมสว่างและมืด พร้อมบันทึกการตั้งค่าด้วย Cookie
- 📱 **Responsive Design** - ใช้งานได้ดีบนทุกอุปกรณ์
- 🎨 **Modern UI** - ออกแบบด้วย Tailwind CSS พร้อม Backdrop Blur และ Gradient Effects
- ⚡ **Smooth Animations** - เอฟเฟกต์การเคลื่อนไหวที่ลื่นไหล
- 🔗 **Individual Portfolios** - หน้าพอร์ตโฟลิโอส่วนตัวสำหรับแต่ละสมาชิก

## 🚀 การใช้งาน

1. เปิดไฟล์ `index.html` ในเว็บเบราว์เซอร์
2. หรือใช้ Live Server สำหรับการพัฒนา:
   ```bash
   # ติดตั้ง Live Server (ถ้ายังไม่มี)
   npm install -g live-server
   
   # รันเซิร์ฟเวอร์
   live-server
   ```

## 📁 โครงสร้างโปรเจกต์

```
.
├── index.html              # หน้าหลัก
├── script.js              # JavaScript สำหรับ theme toggle และ navigation
├── styles.css             # Custom CSS styles
├── tailwind.config.js     # Tailwind CSS configuration
├── assets/                # รูปภาพและไอคอน
│   ├── favicon.ico
│   ├── pasmalar.png
│   └── tkoedpia.png
├── pasmalar/              # พอร์ตโฟลิโอของ Pasit
│   └── index.html
└── tkoedpia/              # พอร์ตโฟลิโอของ Thanapat
    └── index.html
```

## 🛠️ เทคโนโลยีที่ใช้

- **HTML5** - โครงสร้างเว็บไซต์
- **CSS3** - การจัดรูปแบบ
- **Tailwind CSS** - CSS Framework
- **JavaScript (Vanilla)** - การทำงานแบบ Interactive
- **Google Fonts (Inter)** - Typography

## 🎨 ธีมสี

### Light Mode
- Background: `#f9fafb` (gray-50)
- Text: `#111827` (gray-900)
- Accent: Gradient from gray-900 to gray-700

### Dark Mode
- Background: `#211d25`
- Text: `#e5e5e5`
- Accent: Gradient from white to gray-300

## 📝 ฟีเจอร์เด่น

### หน้าหลัก (index.html)
- Hero Section พร้อมคำแนะนำทีม
- Member Cards แบบ Interactive
- About Section
- Navigation Bar แบบ Fixed พร้อม Backdrop Blur

### หน้าพอร์ตโฟลิโอส่วนตัว
- Profile Section
- Projects Showcase
- Contact Information
- Social Links (GitHub, Email)

## 🔧 การปรับแต่ง

### เปลี่ยนธีมเริ่มต้น
แก้ไขใน `script.js`:
```javascript
if (!savedTheme) {
  html.classList.add('dark'); // เปลี่ยนเป็น 'light' สำหรับธีมสว่าง
  setCookie('theme', 'dark', 365);
}
```

### เพิ่มสมาชิกใหม่
เพิ่ม Card ใหม่ใน section `#members` ของ `index.html` และสร้างโฟลเดอร์พอร์ตโฟลิโอใหม่

## 📄 License

© 2026 tkoedpia and pasmalar. All Rights Reserved.

## 📧 ติดต่อ

- **Thanapat Koedpiam**: tkoedpia@student.42bangkok.com
- **Pasit Malarat**: pasmalar@student.42bangkok.com

// script.js -- โค้ดสำหรับจัดการฟอร์มล็อกอิน

document.addEventListener('DOMContentLoaded', function() {
    // หาฟอร์มล็อกอิน
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        // เมื่อกด submit ฟอร์ม (กดปุ่มล็อกอิน)
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault(); // ป้องกันฟอร์ม reload หน้าเว็บ
            const email = document.getElementById('email').value;
            // ตรวจสอบรูปแบบอีเมลง่ายๆ
            if (email && email.includes('@')) {
                document.getElementById('login-msg').textContent = `เข้าสู่ระบบด้วยอีเมล: ${email}`;
            } else {
                document.getElementById('login-msg').textContent = "กรุณากรอกอีเมลที่ถูกต้อง";
            }
        });
    }
});
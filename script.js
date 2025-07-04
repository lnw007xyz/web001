document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            if (email && email.includes('@')) {
                document.getElementById('login-msg').textContent = `เข้าสู่ระบบด้วยอีเมล: ${email}`;
                // ตัวอย่าง: สามารถเปลี่ยนเป็น redirect ไปหน้าอื่นได้ เช่น
                // window.location.href = "about.html";
            } else {
                document.getElementById('login-msg').textContent = "กรุณากรอกอีเมลที่ถูกต้อง";
            }
        });
    }
});
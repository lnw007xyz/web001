document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            if (email && email.includes('@')) {
                document.getElementById('login-msg').textContent = `เข้าสู่ระบบด้วยอีเมล: ${email}`;
            } else {
                document.getElementById('login-msg').textContent = "กรุณากรอกอีเมลที่ถูกต้อง";
            }
        });
    }
});
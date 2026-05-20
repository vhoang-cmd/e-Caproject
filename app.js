const passwordInput = document.getElementById('password');
const strengthBar = document.getElementById('strength-bar');
const strengthText = document.getElementById('strength-text');
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {
    // Thay đổi kiểu từ password sang text và ngược lại
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    
    // Thay đổi icon con mắt (nếu bạn muốn)
    this.innerText = type === 'password' ? '👨‍🦯' : '🙈';
});

passwordInput.addEventListener('input', () => {
    const val = passwordInput.value;
    let strength = 0;

    // Logic kiểm tra đơn giản
    if (val.length > 5) strength += 33;
    if (val.match(/[A-Z]/) && val.match(/[0-9]/)) strength += 33;
    if (val.length > 10) strength += 34;

    // Cập nhật giao diện
    strengthBar.style.width = strength + '%';

    if (strength < 40) {
        strengthBar.style.backgroundColor = '#ff4d4d'; // Đỏ (Yếu)
        strengthText.innerText = '弱い (Yếu)';
        strengthText.style.color = '#ff4d4d';
    } else if (strength < 80) {
        strengthBar.style.backgroundColor = '#ffd700'; // Vàng (Trung bình)
        strengthText.innerText = '普通 (Bình thường)';
        strengthText.style.color = '#ffd700';
    } else {
        strengthBar.style.backgroundColor = '#2ecc71'; // Xanh lá (Mạnh - Đúng ý bạn)
        strengthText.innerText = '強い (Mạnh)';
        strengthText.style.color = '#2ecc71';
    }
});
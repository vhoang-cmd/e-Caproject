const passwordInput = document.getElementById('password');
const strengthBar = document.getElementById('strength-bar');
const strengthText = document.getElementById('strength-text');
const togglePassword = document.querySelector('#togglePassword');



togglePassword.addEventListener('click', function () {

    const type = passwordInput.getAttribute('type') === 'password'
        ? 'text'
        : 'password';

    passwordInput.setAttribute('type', type);

    this.innerText = type === 'password' ? '👁️' : '🙈';
});

passwordInput.addEventListener('input', () => {
    const val = passwordInput.value;
    let strength = 0;

    // Logic kiểm tra đơn giản
    if (val.length >= 4) strength += 40;
    if (val.match(/[A-Z]/) && val.match(/[0-9]/)) strength += 30;
    if (val.length > 10) strength += 34;

    
    strengthBar.style.width = strength + '%';

    if (strength <= 40) {
        strengthBar.style.backgroundColor = '#ff4d4d'; // Đỏ (Yếu)
        strengthText.innerText = '弱い';
        strengthText.style.color = '#ff4d4d';
    } else if (strength < 75) {
        strengthBar.style.backgroundColor = '#ffd700'; // Vàng (Trung bình)
        strengthText.innerText = '普通 ';
        strengthText.style.color = '#ffd700';
    } else {
        strengthBar.style.backgroundColor = '#2ecc71'; // Xanh lá (Mạnh - Đúng ý bạn)
        strengthText.innerText = '強い';
        strengthText.style.color = '#2ecc71';
    }
});
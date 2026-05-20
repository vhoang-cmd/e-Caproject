public interface PaymentService {
    // 1. Set cứng phí VAT là 10% (Hằng số)
    double VAT_RATE = 0.1; 

    // 2. Định nghĩa các "điều khoản" hành động
    // Bất kỳ phương thức thanh toán nào cũng phải có 2 hàm này
    void processPayment(double rawAmount);
    
    double calculateTotal(double rawAmount);
}
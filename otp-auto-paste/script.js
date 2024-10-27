// OTP Script

window.addEventListener('DOMContentLoaded', (event) => {
    const otpInputs = document.querySelectorAll('.otp-input');

    // Focus on next input automatically after typing
    otpInputs.forEach((input, index) => {
        input.addEventListener('input', () => {
            if (input.value.length === 1 && index < otpInputs.length - 1) {
                otpInputs[index + 1].focus();
            }
        });

        // Handle the paste event on the first input
        if (index === 0) {
            input.addEventListener('paste', (event) => {
                const pasteData = event.clipboardData.getData('text');
                const otpArray = pasteData.split('');

                // Fill the inputs with the pasted OTP
                otpInputs.forEach((input, i) => {
                    input.value = otpArray[i] || ''; // Fill inputs up to the length of the OTP
                });

                // Move focus to the last input automatically after paste
                if (pasteData.length === otpInputs.length) {
                    otpInputs[otpInputs.length - 1].focus();
                }
            });
        }
    });

    // Handle backspace to move focus back
    otpInputs.forEach((input, index) => {
        input.addEventListener('keydown', (e) => {
            if (e.key === "Backspace" && input.value === "" && index > 0) {
                otpInputs[index - 1].focus();
            }
        });
    });
});
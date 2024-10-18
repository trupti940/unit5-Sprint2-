import React, { useState, useRef } from 'react';

function App() {
  const OTPInput = ({ length = 6 }) => {
    const [otp, setOtp] = useState(Array(length).fill(''));
    const inputRefs = useRef([]);

    // Handle digit input
    const handleInputChange = (e, index) => {
      const { value } = e.target;

      if (!isNaN(value) && value.length === 1) {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move focus to the next input box
        if (index < length - 1) {
          inputRefs.current[index + 1].focus();
        }
      }
    };

    // Handle backspace key
    const handleBackspace = (e, index) => {
      if (e.key === 'Backspace' && otp[index] === '') {
        if (index > 0) {
          inputRefs.current[index - 1].focus();
        }
      }
    };

    // Handle paste event
    const handlePaste = (e) => {
      const pasteData = e.clipboardData.getData('text').split('').slice(0, length);

      if (pasteData.every(char => !isNaN(char))) {
        setOtp([...pasteData, ...Array(length - pasteData.length).fill('')]);

        // Move focus to the last filled box
        inputRefs.current[pasteData.length - 1]?.focus();
      }
    };

    // Submit the OTP
    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`Entered OTP is: ${otp.join('')}`);
    };

    return (
      <form onSubmit={handleSubmit}>
        <div className="otp-input-container" onPaste={handlePaste}>
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleInputChange(e, index)}
              onKeyDown={(e) => handleBackspace(e, index)}
              ref={(el) => (inputRefs.current[index] = el)}
              style={{ width: '40px', marginRight: '10px', textAlign: 'center' }}
            />
          ))}
        </div>
        <button type="submit" disabled={otp.includes('')}>
          Submit
        </button>
      </form>
    );
  };

  return <OTPInput />;
}

export default App;
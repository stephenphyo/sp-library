const generateOTP = (length=6) => {

    var OTP = '';

    for (let i = 0; i < length; i++) {
        OTP = OTP + Math.floor(Math.random() * 10);
    }

    return OTP;
};

module.exports = generateOTP;
// Validates an Israeli ID number using the modified Luhn algorithm
const validateTZ = (id) => {
    if (!/^\d{9}$/.test(id)) return false;
    const sum = id.split('').reduce((acc, digit, i) => {
        let val = parseInt(digit) * (i % 2 === 0 ? 1 : 2);
        if (val >= 10) val -= 9;
        return acc + val;
    }, 0);
    return sum % 10 === 0;
};

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* Checks if a phone number matches Israeli mobile format (05X-XXXXXXX)
   Accepts formats: 052-1234567, 0521234567 */
const validatePhone = (phone) => {
    return /^05\d[-]?\d{7}$/.test(phone);
};

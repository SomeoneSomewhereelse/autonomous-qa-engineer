// Calculates total amount including Israeli VAT (17%)
function calculateTotal(amount) {
    return amount * 1.17;
}

const formatCurrency = (amount, currency = 'ILS') => {
    return `${currency} ${amount.toFixed(2)}`;
};

/* Processes a payment transaction and returns a confirmation object
   with transaction ID, timestamp, and status */
function processPayment(card, amount) {
    return {
        transactionId: crypto.randomUUID(),
        timestamp: new Date().toISOString(),
        amount,
        status: 'pending'
    };
}

const refund = (transactionId) => {
    return { transactionId, status: 'refunded' };
};

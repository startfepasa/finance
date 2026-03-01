// app.js

// Transaction management
let transactions = [];

// Load transactions from LocalStorageunction loadTransactions() {
    const storedTransactions = localStorage.getItem('transactions');
    if (storedTransactions) {
        transactions = JSON.parse(storedTransactions);
    }
}

// Save transactions to LocalStorageunction saveTransactions() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Add a transactionunction addTransaction(transaction) {
    transactions.push(transaction);
    saveTransactions();
    updateUI();
}

// Calculate total
function calculateTotal() {
    return transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
}

// Update dynamic UIunction updateUI() {
    const totalElement = document.getElementById('total');
    totalElement.innerText = `Total: $${calculateTotal().toFixed(2)}`;

    const transactionsContainer = document.getElementById('transactions');
    transactionsContainer.innerHTML = '';
    transactions.forEach(transaction => {
        const transactionElement = document.createElement('div');
        transactionElement.innerText = `${transaction.date}: $${transaction.amount}`;
        transactionsContainer.appendChild(transactionElement);
    });
}

// Initial setup
loadTransactions();
updateUI();

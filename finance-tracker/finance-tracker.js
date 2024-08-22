document.addEventListener('DOMContentLoaded', () => {
    const transactionForm = document.getElementById('transactionForm');
    const totalIncomeEl = document.getElementById('totalIncome');
    const totalExpensesEl = document.getElementById('totalExpenses');
    const totalSavingsEl = document.getElementById('totalSavings');
    const financeChartEl = document.getElementById('financeChart');

    let transactions = [];
    let totalIncome = 0;
    let totalExpenses = 0;

    const updateBalance = () => {
        totalIncome = transactions
            .filter(transaction => transaction.type === 'income')
            .reduce((acc, transaction) => acc + transaction.amount, 0);
        totalExpenses = transactions
            .filter(transaction => transaction.type === 'expense')
            .reduce((acc, transaction) => acc + transaction.amount, 0);
        totalSavings = totalIncome - totalExpenses;

        totalIncomeEl.textContent = `$${totalIncome.toFixed(2)}`;
        totalExpensesEl.textContent = `$${totalExpenses.toFixed(2)}`;
        totalSavingsEl.textContent = `$${totalSavings.toFixed(2)}`;

        updateChart();
    };

    const updateChart = () => {
        const ctx = financeChartEl.getContext('2d');
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Income', 'Expenses', 'Savings'],
                datasets: [{
                    label: 'Financial Overview',
                    data: [totalIncome, totalExpenses, totalSavings],
                    backgroundColor: ['#28a745', '#dc3545', '#ffc107']
                }]
            }
        });
    };

    transactionForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const description = document.getElementById('description').value;
        const amount = parseFloat(document.getElementById('amount').value);
        const type = document.getElementById('type').value;

        const transaction = { description, amount, type };
        transactions.push(transaction);

        updateBalance();

        transactionForm.reset();
    });

    updateChart();
});

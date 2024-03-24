$(document).ready(function() {
    let balance = 0;

    function updateBalance(amount) {
        balance += amount;
        $('#balance').text('Balance: $' + balance.toFixed(2));
    }

    $('#addTransaction').click(function() {
        const type = $('#type').val();
        const amount = parseFloat($('#amount').val());
        const description = $('#description').val();

        if (isNaN(amount) || amount === 0 || description === '') {
            alert('Please enter valid amount and description.');
            return;
        }

        if (type === 'expense') {
            updateBalance(-amount);
        } else {
            updateBalance(amount);
        }

        const transaction = `<li>${type.toUpperCase()}: $${amount.toFixed(2)} - ${description}</li>`;
        $('#transactions').append(transaction);

        // Clear input fields
        $('#amount').val('');
        $('#description').val('');
    });
});

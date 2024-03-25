$(document).ready(function() {
    $('#nameForm').submit(function(event) {
        event.preventDefault();

        var userName = $('#userName').val().trim();
        if (userName === '') {
            alert('Please enter your name.');
            return;
        }

        $('#nameForm').hide();
        $('#mainPage').show();
        $('#userGreeting').text('Hello, ' + userName);
    });

    $('#incomeForm').submit(function(event) {
        event.preventDefault();

        var amount = parseFloat($('#incomeAmount').val());
        var description = $('#incomeDescription').val();

        if (isNaN(amount) || amount <= 0 || description === '') {
            alert('Please enter valid amount and description.');
            return;
        }

        $('#incomeModal').modal('hide');

        var transaction = '<p class="income"><strong>Income:</strong> Rp ' + amount.toFixed(2) + ' - ' + description + '</p>';
        $('.box:eq(1)').append(transaction);

        var balance = parseFloat($('.box:eq(0) p').text().replace('Rp ', ''));
        var newBalance = balance + amount;
        $('.box:eq(0) p').text('Rp ' + newBalance.toFixed(2));
    });

    $('#expenseForm').submit(function(event) {
        event.preventDefault();

        var amount = parseFloat($('#expenseAmount').val());
        var description = $('#expenseDescription').val();

        if (isNaN(amount) || amount <= 0 || description === '') {
            alert('Please enter valid amount and description.');
            return;
        }

        $('#expenseModal').modal('hide');

        var transaction = '<p class="expense"><strong>Expense:</strong> Rp ' + amount.toFixed(2) + ' - ' + description + '</p>';
        $('.box:eq(1)').append(transaction);

        var balance = parseFloat($('.box:eq(0) p').text().replace('Rp ', ''));
        var newBalance = balance - amount;
        $('.box:eq(0) p').text('Rp ' + newBalance.toFixed(2));
    });
});

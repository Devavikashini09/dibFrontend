// script.js

document.getElementById('logoutBtn').addEventListener('click', function() {
    // Perform logout actions
    alert('Logged out successfully!');
  });
  
  document.getElementById('transferForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const recipient = document.getElementById('recipient').value;
    const amount = document.getElementById('amount').value;
    
    // Perform fund transfer actions (simulated)
    alert(`Transferred $${amount} to ${recipient} successfully!`);
    
    // Reset form
    document.getElementById('recipient').value = '';
    document.getElementById('amount').value = '';
    
    // Update balance (simulated)
    updateBalance(amount, 'withdrawn');
    updateTransactionHistory(amount, 'withdrawn');
  });
  
  function updateBalance(amount, type) {
    const balanceElement = document.getElementById('balance');
    let balance = parseFloat(balanceElement.textContent.replace('Balance: $', ''));
    amount = parseFloat(amount);
    
    if (type === 'deposited') {
      balance += amount;
    } else if (type === 'withdrawn') {
      balance -= amount;
    }
    
    balanceElement.textContent = `Balance: $${balance}`;
  }
  
  function updateTransactionHistory(amount, type) {
    const transactionsList = document.getElementById('transactionsList');
    const transactionItem = document.createElement('li');
    
    if (type === 'deposited') {
      transactionItem.textContent = `$${amount} deposited on ${getCurrentDate()}`;
    } else if (type === 'withdrawn') {
      transactionItem.textContent = `$${amount} withdrawn on ${getCurrentDate()}`;
    }
    
    transactionsList.prepend(transactionItem);
  }
  
  function getCurrentDate() {
    const date = new Date();
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
  }
  
document.getElementById("createAccountBtn").addEventListener("click", function() {
    document.getElementById("accountCreationForm").style.display = "block";
});

document.getElementById("createAccountBtn").addEventListener("click", function getCustomerData() {
    fetch('http://localhost:9090/customers', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(msg => populateTable(msg));
});

function populateTable(msg) {
    const tbody = document.getElementById('customerBody'); // Corrected ID
    tbody.innerHTML = ''; // Clear existing rows
    msg.forEach(customer => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${customer.id}</td>
            <td>${customer.accountType}</td>
            <td>${customer.first_name}</td>
            <td>${customer.last_name}</td>
            <td>${customer.mobile_no}</td>
            <td>${customer.gender}</td>
            <td>${customer.address}</td>
            <td>${customer.city}</td>
            <td>${customer.state}</td>
            <td>${customer.country}</td>
            <td>${customer.email}</td>
            <td>${customer.date_of_birth}</td>
            <td>${customer.customer_id}</td>
            <td>${customer.initial_balance}</td>
            <td><button class="selectBtn">Select</button></td>`; // Changed ID to class
        tbody.appendChild(row);
    });
}

// Event delegation for the select button
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("selectBtn")) {
        const row = event.target.closest("tr");
        const accountNumber = row.cells[0].textContent;
        const balance = row.cells[14].textContent;
        const accountType = row.cells[1].textContent;
        const openingDate = new Date().toISOString().slice(0, 10); // Assuming opening date is today
        createAccount(accountNumber, balance, accountType, openingDate);
    }
});

function createAccount(accountNumber, balance, accountType, openingDate) {
    // Simulate account creation on the backend
    fetch('http://localhost:9090/accounts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                accountNumber,
                balance,
                accountType,
                openingDate
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data); // Log the response to see what data is returned
            console.log(`Account created successfully`);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

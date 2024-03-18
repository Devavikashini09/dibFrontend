document.getElementById("customerTable").addEventListener('click', function getCustomerData() {
    fetch('http://localhost:9090/customers', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(msg => populateTable(msg));

    function populateTable(msg) {
        const tbody = document.getElementById('customerBody');
        tbody.innerHTML = ''; // Clear existing rows

        msg.forEach(customer => {
            const row = document.createElement('tr');
            const column = document.createElement('td'); // Change button to td, as it seems you want a regular cell here
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
            `;
            column.innerHTML = "select";
            row.appendChild(column);
            tbody.appendChild(row);
        });
    }
});

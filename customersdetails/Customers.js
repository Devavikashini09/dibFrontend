document.getElementById("createAccountBtn").addEventListener("click", function() {
    document.getElementById("accountCreationForm").style.display = "block";
});

document.getElementById("accountForm").addEventListener("click", function(event) {
    event.preventDefault();
    const accounttype = document.getElementById("accounttype").value;
    const first_name = document.getElementById("first_name").value;
    const last_name = document.getElementById("last_name").value;
    const mobile_no = document.getElementById("mobile_no").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;
    const gender = document.getElementById("gender").value;
    const date_of_birth = document.getElementById("date_of_birth").value;
    const customer_id = document.getElementById("customer_id").value;
    const initialBalance = parseFloat(document.getElementById("initialBalance").value);
    console.log("binded");
    if (!isNaN(initialBalance)) {
        createAccount(accounttype, first_name, last_name, mobile_no, email, address, city, state, country, gender, date_of_birth, customer_id, initialBalance);
        document.getElementById("transactionSection").style.display = "block";
        updateBalance(initialBalance);
    }
});



function createAccount(accounttype, first_name, last_name, mobile_no, email, address, city, state, country, gender, date_of_birth, customer_id, initialBalance) {
    // Simulate account creation on the backend
    fetch('http://localhost:9090/customers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
             accounttype,
             first_name,
             last_name,
             mobile_no,
             email,
             address,
             city,
             state,
             country,
             gender,
             date_of_birth,
             customer_id,
             initialBalance
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); // Log the response to see what data is returned
        // Adjust the following log based on the actual structure of the response
        console.log(`Account created successfully`);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}


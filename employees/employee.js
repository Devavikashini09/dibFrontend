// script.js

document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const first_name = document.getElementById('firstName').value;
    const last_name = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const position = document.getElementById('position').value;
    const address = document.getElementById('address').value;
    const mobile_no = document.getElementById('mobileNo').value;
    const employee_id = document.getElementById('employeeId').value;
    const gender = document.getElementById('gender').value;
  
    const formData = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      position: position,
      address: address,
      mobile_no: mobile_no,
      employee_id: employee_id,
      gender: gender
    };
  
    fetch('http://localhost:9090/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      // Handle response from the server
      console.log('Employee registration successful:', data);
      // Optionally, redirect to another page or display a success message
    })
    .catch(error => {
      console.error('Error registering employee:', error);
      // Handle error, display an error message to the user, etc.
    });
  });
  
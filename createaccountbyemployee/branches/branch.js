// script.js

document.getElementById('locationForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;
  
    const formData = {
      name: name,
      address: address,
      city: city,
      state: state,
      country: country
    };
  
    fetch('http://localhost:9090/branches', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      // Handle response from the server
      console.log('Location registration successful:', data);
      // Optionally, redirect to another page or display a success message
    })
    .catch(error => {
      console.log('Error registering location:', error);
      // Handle error, display an error message to the user, etc.
    });
    window.location.href="login.html";
  });
  
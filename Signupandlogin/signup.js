// script.js

document.getElementById('signup').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const username = document.getElementById('username').value;
  const Password = document.getElementById('password').value;


  const formData = {
    email:email,
    username:username,
    Password:Password
  };

  fetch('http://localhost:9090/signup', {
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

// Listen for the form submission event
document.getElementById('createAccountForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent the default form submission

    // Get the email and password values from the form
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if email and password are not empty
    if (!email || !password) {
        alert('Please fill in both fields');
        return;
    }

    // Send the data to the backend
    fetch('/create-account', {
        method: 'POST',  // Sending a POST request
        headers: {
            'Content-Type': 'application/json',  // We are sending JSON data
        },
        body: JSON.stringify({ email, password }),  // Send the email and password as a JSON object
    })
    .then(response => response.json())  // Convert response to JSON
    .then(data => {
        // Show success or error message based on the response
        if (data.success) {
            document.getElementById('message').innerText = 'Account created successfully!';
        } else {
            document.getElementById('message').innerText = 'Error creating account!';
        }
    })
    .catch(error => {
        console.error('Error:', error);  // Log any errors
    });
});

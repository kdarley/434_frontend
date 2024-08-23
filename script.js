document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('textForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        
        // Get the text from the textarea
        const text = document.getElementById('textInput').value;
        
        // Make a POST request to send the data as JSON
        fetch('http://52.3.252.142:8080/predict', { // Flask server endpoint
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },  // Set content type to JSON
            body: JSON.stringify({ description: text })  // Convert text to JSON
        })
        .then(response => response.json())  // Expecting a JSON response
        .then(data => {
            console.log('Server Response:', data); // Log the server's response
            // Update the UI to display the predicted price
            document.getElementById('responseOutput').textContent = `Predicted Price: $${data.price}`;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
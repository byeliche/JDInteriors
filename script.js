document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for contacting us!');
    this.reset();
});

// Show the modal after 10 seconds
setTimeout(() => {
    const modal = document.getElementById('get-in-touch-modal');
    modal.style.display = 'flex';
}, 10000); // 10000ms = 10 seconds

// Close the modal when the close button is clicked
document.querySelector('.close-btn').addEventListener('click', () => {
    const modal = document.getElementById('get-in-touch-modal');
    modal.style.display = 'none';
});

// Optional: Close the modal if the user clicks outside the modal content
window.addEventListener('click', (e) => {
    const modal = document.getElementById('get-in-touch-modal');
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Handle the form submission inside the modal
document.getElementById('modal-get-in-touch-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for getting in touch!');
    const modal = document.getElementById('get-in-touch-modal');
    modal.style.display = 'none'; // Close the modal after submission
    this.reset(); // Reset the form fields
});
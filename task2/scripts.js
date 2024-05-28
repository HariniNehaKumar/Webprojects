document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_dantxtc', 'template_ipfhqza', this)
        .then(function() {
            alert('Message sent successfully!');
        }, function(error) {
            alert('Failed to send the message. Please try again later.');
        });
});



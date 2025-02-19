document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const messageAlert = document.getElementById('message-alert');
    emailjs.send("service_wg9pb0l", "template_y65n1u8", {
        from_name: document.getElementById("name").value,
        email_id: document.getElementById("email").value,
        message: document.getElementById("message").value
    }, 'fHJypfrjvJ5EF-Rhr')
        .then(function (response) {
            messageAlert.innerHTML = "Message sent successfully !!"
            messageAlert.style.color = 'green';
        }, function (error) {
           messageAlert.innerHTML =  "Failed to send email. Try again!";
           messageAlert.style.color = 'red';
        });
});
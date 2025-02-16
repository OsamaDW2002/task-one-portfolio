document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    emailjs.send("service_wg9pb0l", "template_y65n1u8", {
        from_name: document.getElementById("name").value,
        email_id: document.getElementById("email").value,
        message: document.getElementById("message").value
    }, 'fHJypfrjvJ5EF-Rhr')
        .then(function (response) {
            alert("Email sent successfully!");
            console.log("SUCCESS!", response.status, response.text);
        }, function (error) {
            alert("Failed to send email. Try again!");
            console.log("FAILED...", error);
        });
});
function sendMail(contactForm) {
    emailjs.send("service_zz2p4jo", "K1G7S19", {
        "form_name": contactForm.name.value,
        "form_email": contactForm.emailaddress.value,
        "form_phone": contactForm.phone.value,
        "form_message": contactForm.message.value
    });

    then(function (response) {
            console.log("SUCCESS", response);
        },
        function (error) {
            console.log("FAILED", error)
        
    });
}
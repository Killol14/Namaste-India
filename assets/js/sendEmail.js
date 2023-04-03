

function sendMail() {
    var params = {
        name: document.getElementById("fullName").value,
        email: document.getElementById("emailaddress").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
    };
const serviceID = "service_g15k8l9";
const templateID = "template_mbyihn6";

emailjs.send(serviceID,templateID,params).then((res) => {
    document.getElementById("fullName").value ="";
    document.getElementById("emailaddress").value ="";
    document.getElementById("phone").value ="";
    document.getElementById("message").value ="";
    console.log(res);
    alert("your message sent successfully");
})
.catch((err) => console.log(err));
}
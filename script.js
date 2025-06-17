function sendMail() {
    let parms = { 
        namea : document.getElementById('name').value,
        time : document.getElementById('time').value,
        email : document.getElementById('email').value,
        subject : document.getElementById('subject').value,
        message : document.getElementById('message').value,
    }

     let farms = { 
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        subject : document.getElementById('subject').value,
    }


    if (parms.namea === "" || parms.time === "" || parms.email === "" || parms.subject === "" || parms.message === "") {
        alert("Please fill in all fields.");
    }else {
     emailjs.send("service_g0j7ucv", "template_z9l9ufd", parms).then(function(response) {
        alert('Email sent successfully!', response.status, response.text);
    }, function(error) {
        console.error('Failed to send email:', error);
        alert('Failed to send email. Please try again later.');
    });

     emailjs.send("service_g0j7ucv", "template_zt4uw41", farms);        
     
    }
   
document.getElementById('wpforms-form-9510').reset();
}
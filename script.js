document.addEventListener('DOMContentLoaded', function() {
    const form= document.getElementById('registration-form');
    const feedbackDiv= document.getElementById('form-feedback');


    form.addEventListener('submit', function(event) {
        event.preventDefault();

        //username
        const username= document.getElementById('username').value.trim();
        
        //email
        const email= document.getElementById('email').value.trim();
        
        //password
        const password= document.getElementById('password').value.trim();
    

        let isValid= true;
        const messages= [];

        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be more than 3 letters.");
        }

        if (!email.includes("@") || !email.includes(".") ) {
            isValid = false;
            messages.push("Enter valid email");
        }

        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be atleast 8 characters");
        }

        //deplaying feedback
        feedbackDiv.style.display= "block";

        if (isValid == true) {
            feedbackDiv.textContent= "Registration successful!";
            feedbackDiv.style.color= "#28a745";
        }
        else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color= "#dc3545";
        }

        

    });
});

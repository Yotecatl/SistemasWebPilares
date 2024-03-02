const email = document.getElementById("mail");

email.addEventLister("input", function(event){
    if (email.validity.typeMismatch){
        email.setCustomValidity(
            "¡Se esperaba una direción de correo electrónico!"
        );
    } else {
        email.setCustomValidity("");
    }
    
});
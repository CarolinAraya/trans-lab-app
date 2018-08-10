const register = () => {
   
        const emailValue = document.getElementById("register-email").value;
        const passwordValue = document.getElementById("register-password").value;
        
        firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)
            .then(() => {
                console.log("Usuario registrado");
            })
            .catch((error) => {
                console.log("Error de firebase > " + error.code);
                console.log("Error de firebase, mensaje > " + error.message);
            });
}
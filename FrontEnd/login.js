// function verifierString() {
//     let email = "edezfrdeza"; //document.getElementById(email).value
//     let password = "rfrfefdd"; //document.getElementById(password).value

//     if (typeof email && password === "string") {
//         console.log("Bien joué !")
//     } else {
//         console.log("Tu t'es trompé loser")
//     }


// verifierString()




const verif = {
    "email": "string",
    "password": "string"
}

    fetch("http://localhost:5678/api/users/login", {
        method: "POST",
        body: JSON.stringify(verif),
        headers: {"Content-Type": "application/json"}
    })

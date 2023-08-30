// function verifierString() {
//     let email = "edezfrdeza"; //document.getElementById(email).value
//     let password = "rfrfefdd"; //document.getElementById(password).value

//     if (typeof email && password === "string") {
//         console.log("Bien joué !")
//     } else {
//         console.log("Tu t'es trompé loser")
//     }


// verifierString()

const formulaire = document.getElementById('login')

formulaire.addEventListener('submit', async function(event) {
    event.preventDefault()

    const email = document.getElementById('email').value
    const motdepasse = document.getElementById('password').value

    console.log('Email : ', email)
    console.log('Mot de passe : ', motdepasse)

    const donnees = {
        "email": "user@example.com",
        "password": "motdepasse"
    }
    try {
        const response = await fetch("http://localhost:5678/api/users/login", {
            method: "POST",
            body: JSON.stringify(donnees),
            headers: {"Content-Type": "application/json"}
            })

        if (!response.ok) {
            throw new Error('La requête a échoué')
        }

        const data = await response.json()
        console.log('Réponse du serveur : ', data)

    } catch (error) {
        console.log('Erreur : ', error)
    }
    

    // .then(response => response.json())
    // .then(data => {
    //     // Traitez la réponse du serveur ici
    //     console.log('Réponse du serveur : ', data);
    // })
    // .catch(error => {
    //     // Gérez les erreurs ici
    //     console.error('Erreur : ', error);
    // });

})






// Ce script permet de pouvoir se connecter au site, d'accéder au mode éditeur et stocke le token
// dans le localStorage si la connexion est réussie, sinon renvoie un message d'erreur


    // Sélectionne l'élément qui affichera les erreurs de connexion
    const erreur = document.querySelector('.login p')

    const formulaire = document.getElementById('login')

    // Ajoute un écouteur d'événements pour gérer la soumission du formulaire
    formulaire.addEventListener('submit', async function(event) {
        event.preventDefault()

         // Récupérez les valeurs de l'e-mail et du mot de passe à partir des champs de formulaire
        const email = document.getElementById('email').value
        const motdepasse = document.getElementById('password').value

        erreur.style.display = 'none'

         // Permet de créer un objet de données à envoyer au serveur
        const donnees = {
            "email": email,
            "password": motdepasse
        }

        try {
            // Effectue une requête POST au serveur pour se connecter
            const response = await fetch("http://localhost:5678/api/users/login", {
                method: "POST",
                body: JSON.stringify(donnees),
                headers: {"Content-Type": "application/json"}
            })

            if (!response.ok) {
                throw new Error('La requête a échoué')
            }

            const token = await response.json()
            localStorage.setItem('token', JSON.stringify(token))
            erreur.style.display = 'none'
            //permet d'ouvrir la nouvelle page dans le même onglet
            window.location.href = "index.html"

        } catch (error) {
            // Affiche l'erreur en html
            throw new Error(erreur.style.display = 'block')
        }

    })
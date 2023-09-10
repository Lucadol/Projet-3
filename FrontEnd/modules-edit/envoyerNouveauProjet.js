export function envoyerNouveauProjet() {

    const tokenData = localStorage.getItem('token')
    // Parse la chaine JSON en un objet JavaScript
    const tokenObjet = JSON.parse(tokenData)
    const token = tokenObjet.token
    const userId = tokenObjet.userId

    console.log(token)

    const formulaire = document.getElementById("ajout-projet");
    const valider = document.getElementById("valider");

    const inputImage = document.getElementById("image_uploads");
    const inputTitre = document.querySelector(".input-blanc[type='text']");
    const selectCategorie = document.getElementById("category");

     // Fonction pour vérifier si tous les champs sont remplis
     function tousLesChampsSontRemplis() {
        // Assure que les variables sont définies avant d'accéder à leurs propriétés
        const imageValue = inputImage ? inputImage.value.trim() : '';
        const titreValue = inputTitre ? inputTitre.value.trim() : '';
        const categorieValue = selectCategorie ? selectCategorie.value.trim() : '';

        return imageValue !== '' && titreValue !== '' && categorieValue !== '';
    }

    // Événement de changement pour les champs du formulaire
    formulaire.addEventListener("input", () => {
        // Activer ou désactiver le bouton en fonction du remplissage du formulaire
        const champsRemplis = tousLesChampsSontRemplis();
        valider.disabled = !champsRemplis;

        // Ajouter ou supprimer la classe "disabled" en fonction de l'état du bouton
        if (valider.disabled === true) {
            // valider.classList.add("disabled");
            valider.classList.remove("active");
        } else {
            valider.classList.remove("disabled");
            valider.classList.add("active");
        }
    });

    formulaire.addEventListener('submit', async function(event) {
        event.preventDefault()

        const image = document.getElementById("image_uploads").value
        const title = document.querySelector(".input-blanc[type='text']").value
        const categoryValue = document.getElementById("category").value

        // let categoryId

        // // Utilisation d'une instruction if-else pour mapper categoryValue à categoryId
        // if (categoryValue === "Objets") {
        //     categoryId = 1
        // } else if (categoryValue === "Appartements") {
        //     categoryId = 2
        // } else if (categoryValue === "Hôtels & restaurants") {
        //     categoryId = 3
        // } else {
        //     // Gérer d'autres cas si nécessaire
        //     categoryId = 0 // Par exemple, une valeur par défaut
        // }

        const reponse = await fetch("http://localhost:5678/api/works")
        let gallery = await reponse.json()
        
        // Trouve l'ID la plus élevée dans la liste
        let highestId = 0;
        for (const item of gallery) {
            if (item.id > highestId) {
                highestId = item.id;
            }
        }

        let id = highestId + 1

        
    const donnees = {
        "id": id,
        "title": title,
        "imageUrl": image,
        "categoryId": categoryValue,
        "userId": userId,
        // "category": {
        //     "id": categoryId,
        //     "name": categoryValue
        // }
    }

    console.log(donnees)

    try {
        const response = await fetch("http://localhost:5678/api/works", {
            method: "POST",
            body: JSON.stringify(donnees),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })

        if(!response.ok) {
            throw new Error('La requête a échoué')
        }

        console.log('Envoi réussi')

    } catch (error) {
        console.error("Erreur lors de l'envoi :", error)
    }

    })

}
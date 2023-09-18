// Permet d'envoyer un nouveau projet à l'API et de l'intégrer
// dynamiquement au DOM

export function envoyerNouveauProjet() {

    const tokenData = localStorage.getItem('token')
    // Parse la chaine JSON en un objet JavaScript
    const tokenObjet = JSON.parse(tokenData)
    const token = tokenObjet.token

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

        const formData = new FormData(formulaire)
        const image = inputImage.files[0]
        const title = document.querySelector(".input-blanc[type='text']").value
        const categoryValue = document.getElementById("category").value


        formData.append("image", image)
        formData.append("title", title)
        formData.append("category", parseInt(categoryValue, 10))

        console.log([...formData])

        try {
            const response = await fetch("http://localhost:5678/api/works", {
                method: "POST",
                body: formData,
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
    
            if(!response.ok) {
                throw new Error('La requête a échoué')
            }

            // // Fermer la modale
            const modal = document.querySelector('.modal'); // Sélectionner la modale par son identifiant
            if (!modal) return; // Si la modale n'est pas trouvée, retourner
            // e.preventDefault();
            modal.style.display = "none";


            // Générer le projet dans la galerie
            const sectionGallery = document.querySelector(".gallery")
            const pieceElement1 = document.createElement("figure")
            pieceElement1.classList.add("image-div")

            const imageElement = document.createElement("img")

            // Créer une URL d'objet blob à partir du fichier
            const imageUrl = URL.createObjectURL(image)
            imageElement.src = imageUrl

            const titleElement = document.createElement("figcaption")
            titleElement.innerText = title

            sectionGallery.appendChild(pieceElement1)
            pieceElement1.appendChild(imageElement)
            pieceElement1.appendChild(titleElement)


            // Générer le projet dans la modale
            const sectionGallery2 = document.querySelector(".gallery-edit")
            const pieceElement2 = document.createElement("figure")

            const imageDiv = document.createElement("div")
            imageDiv.classList.add("image-div")
            imageDiv.classList.add("imageModale")

            // Crée une icône de poubelle
            const poubelleElement = document.createElement('i')
            poubelleElement.classList.add("fas", "fa-trash-can")

            // Crée une icône de flèche
            const flecheElement = document.createElement('i')
            flecheElement.classList.add("fa-solid", "fa-arrows-up-down-left-right")

            // Crée un élément <p> pour le bouton "éditer"
            const editElement = document.createElement("p")
            editElement.innerText = "éditer"

            // Crée un élément <img> pour afficher l'image
            const imageElementModal = document.createElement("img")
            imageElementModal.src = imageUrl

            // Ajoute l'image, les icônes et le bouton "éditer" au conteneur d'image
            imageDiv.appendChild(imageElementModal) // Ajoute l'élément img ici
            imageDiv.appendChild(poubelleElement)
            imageDiv.appendChild(flecheElement)

            // Ajoute le conteneur d'image et le bouton "éditer" à l'élément <figure>
            pieceElement2.appendChild(imageDiv)
            pieceElement2.appendChild(editElement)

            // Ajoute l'élément <figure> à la galerie
            sectionGallery2.appendChild(pieceElement2)

            // Affiche la flèche lors du survol
            pieceElement2.addEventListener('mouseenter', () => {
                flecheElement.style.display = 'block' // Affiche la flèche
            });

            // Masque la flèche lorsque la souris quitte l'article
            pieceElement2.addEventListener('mouseleave', () => {
                flecheElement.style.display = 'none' // Cache la flèche
            });

    
        } catch (error) {
            console.error("Erreur lors de l'envoi :", error)
        }
    
        })

}
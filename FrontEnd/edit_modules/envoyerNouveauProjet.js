import { genererGalerie } from "../portfolio_modules/genererGalerie";
import { genererGalerieSansTitre } from "./galerieModal.js";

export function envoyerNouveauProjet() {

    const tokenData = localStorage.getItem('token')
    // Parse la chaine JSON en un objet JavaScript
    const tokenObjet = JSON.parse(tokenData)
    const token = tokenObjet.token
    // const userId = tokenObjet.userId

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



    // const inputImage = document.getElementById("image_uploads");

    // inputImage.addEventListener("change", function (e) {
    // const selectedFile = e.target.files[0];

    // if (selectedFile) {
    //     const reader = new FileReader();

    //     reader.onload = function (e) {
    //     // Le contenu du fichier est accessible ici
    //     const fileContent = e.target.result;
    //     // Vous pouvez faire quelque chose avec le contenu du fichier, par exemple l'afficher dans une image
    //     // document.getElementById("image-preview").src = fileContent;
    //     };

    //     reader.readAsDataURL(selectedFile);
    // }
    // });



    formulaire.addEventListener('submit', async function(event) {
        event.preventDefault()

        const formData = new FormData(formulaire)
        const image = inputImage.files[0]
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

        // // Convertir categoryId en nombre entier
        // categoryValue = parseInt(categoryValue)


        formData.append("image", image)
        formData.append("title", title)
        formData.append("category", parseInt(categoryValue, 10))

        console.log([...formData])

        try {
            const response = await fetch("http://localhost:5678/api/works", {
                method: "POST",
                body: formData,
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`
                }
            })
    
            if(!response.ok) {
                throw new Error('La requête a échoué')
            }
    
            console.log('Envoi réussi')

            // Fermer la modale
            modal.style.display = "none"
            
            const reponse = await fetch("http://localhost:5678/api/works")
            let newGallery = await reponse.json()

            // Ajouter le projet à la galerie
            genererGalerie(newGallery)

            // Ajouter le projet à la galerie modale
            genererGalerieSansTitre(newGallery)

    
        } catch (error) {
            console.error("Erreur lors de l'envoi :", error)
        }
    
        })


    //     await fetch('http://localhost:5678/api/works', {
    //         method: "POST",
    //         body: formData,
    //         headers: {
    //             "Content-Type": "multipart/form-data",
    //             "Authorization": `Bearer ${token}`
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err))
    // })
}

// }
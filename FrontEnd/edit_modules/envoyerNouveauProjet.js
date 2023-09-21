// Permet d'envoyer un nouveau projet à l'API et de l'intégrer
// dynamiquement au DOM

import { fermerModal } from "./fermerModal.js";
import { genererProjetDansGalerieEtModal } from "./genererProjetDansGalerieEtModal.js";
import { tousLesChampsSontRemplis } from "./tousLesChampsSontRemplis.js";

export function envoyerNouveauProjet() {

    const tokenData = localStorage.getItem('token')
    // Parse la chaine JSON en un objet JavaScript
    const tokenObjet = JSON.parse(tokenData)
    const token = tokenObjet.token

    const formulaire = document.getElementById("ajout-projet");
    const valider = document.getElementById("valider");

    const inputImage = document.getElementById("image_uploads");

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
            fermerModal()

            // Générer le projet dans la galerie et la modale
            genererProjetDansGalerieEtModal(image, title)
    
        } catch (error) {
            console.error("Erreur lors de l'envoi :", error)
        }
    
        })

}
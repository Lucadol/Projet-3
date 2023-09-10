// async function recupererTravaux () {
//     const response = await fetch("http://localhost:5678/api/works");
//     const data = await response.json();
//     return data;
//   };

// Permet d'importer toutes les fonctions dont j'ai besoin
import { boutonFilter } from "./modules-portfolio/filtres.js";
import { genererGalerie } from "./modules-portfolio/galerie.js";
import { boutonVert } from "./modules-portfolio/bouton.js";
import { genererGalerieSansTitre } from "./modules-edit/galerie-edit.js";
import { genererModal } from "./modules-edit/modal.js";
import { genererIndexAvecToken } from "./modules-portfolio/token.js";
import { afficherModal2 } from "./modules-edit/modal2.js";
import { file } from "./modules-edit/file.js";
import { envoyerNouveauProjet } from "./modules-edit/envoyerNouveauProjet.js";


// let gallery = window.localStorage.getItem('gallery')
// if (gallery === null){
const reponse = await fetch("http://localhost:5678/api/works")
let gallery = await reponse.json()
// } else {
//     gallery = JSON.parse(gallery)
// }

// recupererTravaux()

// Génère la galerie principale
genererGalerie(gallery)
// Génère la galerie dans la modale
genererGalerieSansTitre(gallery)


// Génère la modale
genererModal()

// Permet le filtre grâce aux boutons
boutonFilter(".btn-tous")
boutonFilter(".btn-objets", 1)
boutonFilter(".btn-appartements", 2)
boutonFilter(".btn-hotels", 3)

// Permet de maintenir un bouton vert même après le click
boutonVert()

// Permet de générer la page en mode éditeur ou en mode visiteur en fonction de la présence du token ou non
genererIndexAvecToken()


afficherModal2()

file()

envoyerNouveauProjet()





// Il faudrait que quand je clique sur l'icone ça récupère l'id et que ça l'envoie
// à la méthode delete pour le supprimer
function supprimerProjet() {

    const poubelles = document.querySelectorAll('.fas')
    const tokenData = localStorage.getItem('token')
    // Parse la chaine JSON en un objet JavaScript
    const tokenObjet = JSON.parse(tokenData)
    const token = tokenObjet.token

    // console.log(token)

    // Parcourir toutes les icones de poubelle
    poubelles.forEach(poubelle => {
        poubelle.addEventListener('click', async function(event) {
            event.preventDefault()

            // Récupère l'id de l'image à partir de l'attribut image-id
            const imageId = this.closest('.image-div').getAttribute('image-id')
            console.log('ID de l\'image :', imageId)

            // Je peux utiliser ici imageId pour supprimer un projet
            try {
                const response = await fetch(`http://localhost:5678/api/works/${imageId}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization":`Bearer ${token}`
                    }
                })

                if(!response.ok) {
                    throw new Error('La requête a échoué')
                }

                // Suppression réussie
                console.log('Suppression réussie')

                const imageDiv = document.querySelector(`[image-id="${imageId}"]`)
                if (imageDiv) {
                    const figureElement = imageDiv.closest('figure') // Trouve l'élément <figure> parent de l'image-div
                    if (figureElement) {
                        figureElement.remove() //Supprime l'élement figure du DOM
                    } else {
                        console.warn(`Elément <figure> avec image-id ${imageId} non trouvé`)
                    }
                } else {
                    console.warn(`Elément avec image-id ${imageId} non trouvé`)
            }
                

            } catch (error) {
                console.error('Erreur lors de la suppresion :', error)
            }

        })
    })
}

supprimerProjet()

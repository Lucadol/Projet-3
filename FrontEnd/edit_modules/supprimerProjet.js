// import { genererGalerie } from "../portfolio_modules/genererGalerie"

// Permet de récupérer les travaux sur l'api
// const reponse = await fetch("http://localhost:5678/api/works")
// let gallery = await reponse.json()

export function supprimerProjet() {

    const poubelles = document.querySelectorAll('.fas')
    const tokenData = localStorage.getItem('token')
    // Parse la chaine JSON en un objet JavaScript
    const tokenObjet = JSON.parse(tokenData)
    const token = tokenObjet.token

    // Supprimer visuellement les projets de la galerie :


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
                modal.style.display = null
                
            } catch (error) {
                console.error('Erreur lors de la suppresion :', error)
            }

        })
    })
}
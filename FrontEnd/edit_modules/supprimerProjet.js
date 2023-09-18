// Permet de supprimer un projet de l'API et 
// modifie dynamiquement le DOM

export function supprimerProjet() {

    const poubelles = document.querySelectorAll('.fas')
    const tokenData = localStorage.getItem('token')
    // Parse la chaine JSON en un objet JavaScript
    const tokenObjet = JSON.parse(tokenData)
    const token = tokenObjet.token

    // Parcourir toutes les icones de poubelle
    poubelles.forEach(poubelle => {
        poubelle.addEventListener('click', async function(event) {
            event.preventDefault()

            // Récupère l'id de l'image à partir de l'attribut image-id
            const imageId = this.closest('.image-div').getAttribute('image-id')

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


                // Supprimer l'élément de la galerie principale
                const galleryImageToRemove = document.querySelector(`[image-id2="${imageId}"]`);
                if (galleryImageToRemove) {
                    const galleryFigure = galleryImageToRemove.closest('figure');
                    if (galleryFigure) {
                        galleryFigure.remove();
                    }
                } else {
                    console.warn(`Elément avec image-id ${imageId} non trouvé dans la galerie principale`);
                }

                
                // Supprimer l'élément de la modale
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
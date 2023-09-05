// Génère une galerie
export function genererGalerieSansTitre(data) {
    // Sélectionne l'élément HTML qui servira de conteneur pour la galerie
    const sectionGallery = document.querySelector(".gallery-edit")

    for (let i = 0; i < data.length; i++) {
        
        const article = data[i]
        
        // Crée un élément <figure>
        const pieceElement = document.createElement("figure")

        // Crée un conteneur <div> pour l'image et les icônes
        const imageDiv = document.createElement("div")
        imageDiv.classList.add("image-div")


        imageDiv.setAttribute('image-id', article.id)


        const imageElement = document.createElement("img")
        imageElement.src = article.imageUrl

        // Crée une icône de poubelle
        const poubelleElement = document.createElement('i')
        poubelleElement.classList.add("fas", "fa-trash-can")

        // Crée une icône de flèche
        const flecheElement = document.createElement('i')
        flecheElement.classList.add("fa-solid", "fa-arrows-up-down-left-right")

        // Crée un élément <p> pour le bouton "éditer"
        const editElement = document.createElement("p")
        editElement.innerText = "éditer"

        // Ajoute l'image, les icônes et le bouton "éditer" au conteneur d'image
        imageDiv.appendChild(imageElement)
        imageDiv.appendChild(poubelleElement)
        imageDiv.appendChild(flecheElement)

        // Ajoute le conteneur d'image et le bouton "éditer" à l'élément <figure>
        pieceElement.appendChild(imageDiv)
        pieceElement.appendChild(editElement)

        // Ajoute l'élément <figure> à la galerie
        sectionGallery.appendChild(pieceElement)

        // Affiche la flèche lors du survol
        pieceElement.addEventListener('mouseenter', () => {
            flecheElement.style.display = 'block' // Affiche la flèche
        });

        // Masque la flèche lorsque la souris quitte l'article
        pieceElement.addEventListener('mouseleave', () => {
            flecheElement.style.display = 'none' // Cache la flèche
        });
    }
}
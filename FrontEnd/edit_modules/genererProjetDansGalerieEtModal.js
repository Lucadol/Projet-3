export function genererProjetDansGalerieEtModal(image, title) {
    // Générer le projet dans la galerie
    const sectionGallery = document.querySelector(".gallery")
    const pieceElement1 = document.createElement("figure")
    pieceElement1.classList.add("image-div")

    const imageElement = document.createElement("img")
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

    const poubelleElement = document.createElement('i')
    poubelleElement.classList.add("fas", "fa-trash-can")

    const flecheElement = document.createElement('i')
    flecheElement.classList.add("fa-solid", "fa-arrows-up-down-left-right")

    const editElement = document.createElement("p")
    editElement.innerText = "éditer"

    const imageElementModal = document.createElement("img")
    imageElementModal.src = imageUrl

    imageDiv.appendChild(imageElementModal)
    imageDiv.appendChild(poubelleElement)
    imageDiv.appendChild(flecheElement)

    pieceElement2.appendChild(imageDiv)
    pieceElement2.appendChild(editElement)

    sectionGallery2.appendChild(pieceElement2)

    pieceElement2.addEventListener('mouseenter', () => {
        flecheElement.style.display = 'block'
    });

    pieceElement2.addEventListener('mouseleave', () => {
        flecheElement.style.display = 'none'
    });
}
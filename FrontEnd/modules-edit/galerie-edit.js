export function genererGalerieSansTitre(data){
    for (let i = 0; i < data.length; i++) {
        const article = data[i]

        const sectionGallery = document.querySelector(".gallery-edit")
        const pieceElement = document.createElement("figure")

        const imageElement = document.createElement("img")
        imageElement.src = article.imageUrl

        const editElement = document.createElement("p")
        editElement.innerText = "éditer"

        sectionGallery.appendChild(pieceElement)
        pieceElement.appendChild(imageElement)
        pieceElement.appendChild(editElement)

        }
    }
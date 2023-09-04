export function genererGalerieSansTitre(data){
    const sectionGallery = document.querySelector(".gallery-edit")
    for (let i = 0; i < data.length; i++) {
        const article = data[i]
        
        const pieceElement = document.createElement("figure")

        const imageDiv = document.createElement("div")
        imageDiv.classList.add("image-div")

        const imageElement = document.createElement("img")
        imageElement.src = article.imageUrl

        const poubelleElement = document.createElement('i')
        poubelleElement.classList.add("fas", "fa-trash-can")

        const editElement = document.createElement("p")
        editElement.innerText = "éditer"

        imageDiv.appendChild(imageElement)
        imageDiv.appendChild(poubelleElement)

        pieceElement.appendChild(imageDiv)
        pieceElement.appendChild(editElement)

        sectionGallery.appendChild(pieceElement)

        }
    }
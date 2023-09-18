// Permet de custom l'ajout de photo

let fileTypes = ["image/jpeg", "image/pjpeg", "image/png"];

export function validFileType(file) {
  for (let i = 0; i < fileTypes.length; i++) {
    if (file.type === fileTypes[i]) {
      return true;
    }
  }

  return false;
}


export function returnFileSize(number) {
    if (number < 1024) {
      return number + " octets";
    } else if (number >= 1024 && number < 1048576) {
      return (number / 1024).toFixed(1) + " Ko";
    } else if (number >= 1048576) {
      return (number / 1048576).toFixed(1) + " Mo";
    }
  }


export function updateImageDisplay() {

    const input = document.querySelector(".fond-photo input")
    const fondPhoto = document.querySelector(".fond-photo")

    //Supprime l'élément img existant s'il y en a un
    const existingImage = fondPhoto.querySelector("img");
    if (existingImage) {
        fondPhoto.removeChild(existingImage);
    }
  
    let curFiles = input.files;
    if (curFiles.length > 0 && validFileType(curFiles[0])) {
        const image = document.createElement("img");
        image.src = window.URL.createObjectURL(curFiles[0]);

        // Ajoute la classe CSS à l'image si nécessaire
        image.classList.add("image-preview");

        // Ajoute l'image à la div "fond-photo"
        fondPhoto.appendChild(image);

         // Lorsque l'image est ajoutée, ajoutez la classe "image-affichee" pour supprimer le padding
        fondPhoto.classList.add("image-affichee");

         // Sélectionne les éléments avec la classe "label-file" et masquez-les
         const labels = document.querySelectorAll(".label-file");
         labels.forEach(label => {
             label.style.display = "none";
         });
    }
}  

export function file() {

    const input = document.querySelector(".fond-photo input")

    // Permet de laisser l'élément interactif (comparé à visibility: hidden et display: none)
    input.style.opacity = 0

    input.addEventListener("change", updateImageDisplay)

}
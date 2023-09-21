const inputImage = document.getElementById("image_uploads");
const inputTitre = document.querySelector(".input-blanc[type='text']");
const selectCategorie = document.getElementById("category");

  // Fonction pour vérifier si tous les champs sont remplis
export function tousLesChampsSontRemplis() {
  // Assure que les variables sont définies avant d'accéder à leurs propriétés
  const imageValue = inputImage ? inputImage.value.trim() : '';
  const titreValue = inputTitre ? inputTitre.value.trim() : '';
  const categorieValue = selectCategorie ? selectCategorie.value.trim() : '';

  return imageValue !== '' && titreValue !== '' && categorieValue !== '';
}
export function envoyerNouveauProjet() {

    const formulaire = document.getElementById("ajout-projet");
    const valider = document.getElementById("valider");

    const inputImage = document.getElementById("image_uploads");
    const inputTitre = document.querySelector(".input-blanc[type='text']");
    const selectCategorie = document.getElementById("category");

     // Fonction pour vérifier si tous les champs sont remplis
     function tousLesChampsSontRemplis() {
        // Assurez-vous que les variables sont définies avant d'accéder à leurs propriétés
        const imageValue = inputImage ? inputImage.value.trim() : '';
        const titreValue = inputTitre ? inputTitre.value.trim() : '';
        const categorieValue = selectCategorie ? selectCategorie.value.trim() : '';

        return imageValue !== '' && titreValue !== '' && categorieValue !== '';
    }

    // Événement de changement pour les champs du formulaire
    formulaire.addEventListener("input", () => {
        // Activez ou désactivez le bouton en fonction du remplissage du formulaire
        const champsRemplis = tousLesChampsSontRemplis();
        valider.disabled = !champsRemplis;

        // Ajoutez ou supprimez la classe "disabled" en fonction de l'état du bouton
        if (valider.disabled === true) {
            // valider.classList.add("disabled");
            valider.classList.remove("active");
        } else {
            valider.classList.remove("disabled");
            valider.classList.add("active");
        }
    });
}
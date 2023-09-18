// Cette fonction permet de garder le bouton vert après qu'on ait cliqué dessus

export function boutonVert() {
    const boutons = document.querySelectorAll(".vert");
    let dernierBoutonClique = null

    const boutonTous = document.querySelector(".btn-tous")
    boutonTous.classList.add("bouton-clique")

    boutons.forEach((bouton) => {
        bouton.addEventListener("click", function () {
        // Retirer la classe "bouton-clique" de tous les boutons
        boutons.forEach((b) => {
            b.classList.remove("bouton-clique");
        });
    
        // Ajouter la classe "bouton-clique" uniquement au bouton actuel
        bouton.classList.add("bouton-clique");
    
        // Mettre à jour la variable du dernier bouton cliqué
        dernierBoutonClique = bouton;
        });
    });
}
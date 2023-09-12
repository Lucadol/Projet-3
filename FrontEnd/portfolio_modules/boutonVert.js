export function boutonVert() {
    const boutons = document.querySelectorAll(".vert");
    let dernierBoutonClique = null // Remplacez ".votre-bouton" par le sélecteur de votre bouton

    const boutonTous = document.querySelector(".btn-tous")
    boutonTous.classList.add("bouton-clique")

    boutons.forEach((bouton) => {
        bouton.addEventListener("click", function () {
        // Retirez la classe "bouton-clique" de tous les boutons
        boutons.forEach((b) => {
            b.classList.remove("bouton-clique");
        });
    
        // Ajoutez la classe "bouton-clique" uniquement au bouton actuel
        bouton.classList.add("bouton-clique");
    
        // Mettez à jour la variable du dernier bouton cliqué
        dernierBoutonClique = bouton;
        });
    });
}
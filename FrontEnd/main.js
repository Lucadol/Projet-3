// Permet d'importer toutes les fonctions dont j'ai besoin
import { boutonFiltre } from "./portfolio_modules/boutonFiltre.js";
import { genererGalerie } from "./portfolio_modules/genererGalerie.js";
import { boutonVert } from "./portfolio_modules/boutonVert.js";
import { genererGalerieModal } from "./edit_modules/genererGalerieModal.js";
import { genererModal } from "./edit_modules/genererModal.js";
import { genererIndexAvecToken } from "./portfolio_modules/genererIndexAvecToken.js";
import { afficherModal2 } from "./edit_modules/afficherModal2.js";
import { file } from "./edit_modules/file.js";
import { envoyerNouveauProjet } from "./edit_modules/envoyerNouveauProjet.js";
import { supprimerProjet } from "./edit_modules/supprimerProjet.js";

// Permet de générer la page en mode éditeur ou en mode visiteur en fonction de la présence du token ou non
genererIndexAvecToken()


// Permet de récupérer les travaux sur l'api
const reponse = await fetch("http://localhost:5678/api/works")
let gallery = await reponse.json()

const modeEditeur = genererIndexAvecToken()

if (modeEditeur) {
// Partie 2 : Modale

// Génère la galerie principale
genererGalerie(gallery)

 // Permet d'ouvrir la modale
 genererModal()


// Génère la galerie dans la modale
genererGalerieModal(gallery)

// Permet d'afficher la modale 2 et de cacher la modale 1
afficherModal2()

// Permet de customiser l'envoi de fichier
file()

// Permet de supprimer un projet
supprimerProjet()

// Permet d'envoyer un nouveau projet (pas encore fini)
envoyerNouveauProjet()


} else {
// Partie 1 : Page principale

// Génère la galerie principale
genererGalerie(gallery)

// Permet le filtre grâce aux boutons
boutonFiltre(".btn-tous")
boutonFiltre(".btn-objets", 1)
boutonFiltre(".btn-appartements", 2)
boutonFiltre(".btn-hotels", 3)

// Permet de maintenir un bouton vert même après le click
boutonVert()
}







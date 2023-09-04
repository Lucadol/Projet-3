// async function recupererTravaux () {
//     const response = await fetch("http://localhost:5678/api/works");
//     const data = await response.json();
//     return data;
//   };

// Permet d'importer toutes les fonctions dont j'ai besoin
import { boutonFilter } from "./modules-portfolio/filtres.js";
import { genererGalerie } from "./modules-portfolio/galerie.js";
import { boutonVert } from "./modules-portfolio/bouton.js";
import { genererGalerieSansTitre } from "./modules-edit/galerie-edit.js";
import { genererModal } from "./modules-edit/modal.js";


let gallery = window.localStorage.getItem('gallery')
if (gallery === null){
    const reponse = await fetch("http://localhost:5678/api/works")
    gallery = await reponse.json()
} else {
    gallery = JSON.parse(gallery)
}


// const header = document.querySelector('.bande-noire')
// header.style.display = 'flex'

// const buttons = document.querySelector('.button-container')
// buttons.style.display = 'flex'

// const titre = document.querySelector('.titre')
// titre.style.display = 'flex'

// const titre1 = document.querySelector('.titre1')
// titre1.style.display = 'none'



// Génère la galerie principale
genererGalerie(gallery)
// Génère la galerie dans la modale
genererGalerieSansTitre(gallery)
// Génère la modale
genererModal()

// Permet le filtre grâce aux boutons
boutonFilter(".btn-tous")
boutonFilter(".btn-objets", 1)
boutonFilter(".btn-appartements", 2)
boutonFilter(".btn-hotels", 3)

// Permet de maintenir un bouton vert même après le click
boutonVert()

// localStorage.removeItem('token')
const token = localStorage.getItem('token')

if (token) {
    document.querySelector('.bande-noire').style.display = 'flex'
    document.querySelector('.titre-edit').style.display = 'flex'
    document.querySelector('.titre1').style.display = 'none'
} else {
    document.querySelector('.bande-noire').style.display = 'none'
    document.querySelector('.titre-edit').style.display = 'none'
    document.querySelector('.titre1').style.display = 'block'
}
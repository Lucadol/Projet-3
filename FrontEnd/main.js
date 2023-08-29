// async function recupererTravaux () {
//     const response = await fetch("http://localhost:5678/api/works");
//     const data = await response.json();
//     return data;
//   };

import { boutonFilter } from "./modules/filtres.js";
import { genererGalerie } from "./modules/galerie.js";
import { boutonVert } from "./modules/bouton.js";


let gallery = window.localStorage.getItem('gallery')
if (gallery === null){
    const reponse = await fetch("http://localhost:5678/api/works")
    gallery = await reponse.json()
} else {
    gallery = JSON.parse(gallery)
}


genererGalerie(gallery)


boutonFilter(".btn-tous")
boutonFilter(".btn-objets", 1)
boutonFilter(".btn-appartements", 2)
boutonFilter(".btn-hotels", 3)


boutonVert()


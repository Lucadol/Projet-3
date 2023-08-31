// import { boutonFilter } from "./modules/filtres.js";
import { genererGalerie } from "./modules-edit/galerie-edit";

let gallery = window.localStorage.getItem('gallery')
if (gallery === null){
    const reponse = await fetch("http://localhost:5678/api/works")
    gallery = await reponse.json()
} else {
    gallery = JSON.parse(gallery)
}

genererGalerie(gallery)
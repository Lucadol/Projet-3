// Cette fonction permet de filtrer la galerie en fonction de l'élément passé en param1

import { genererGalerie } from "./genererGalerie.js"


const reponse = await fetch("http://localhost:5678/api/works")
let gallery = await reponse.json()


export function boutonFiltre(param1, param2) {
    const boutonFilter1 = document.querySelector(param1)
    boutonFilter1.addEventListener("click", function () {

        let filter = gallery;

        if (param2 !== undefined) {
            filter = gallery.filter(function (data) {
                return data.categoryId === param2;
            });
        }

        document.querySelector(".gallery").innerHTML = "";
        genererGalerie(filter)
    })
}
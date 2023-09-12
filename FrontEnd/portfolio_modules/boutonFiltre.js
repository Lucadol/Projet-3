import { genererGalerie } from "./genererGalerie.js"

// let gallery = window.localStorage.getItem('gallery')
// if (gallery === null){
const reponse = await fetch("http://localhost:5678/api/works")
let gallery = await reponse.json()
// }else{
//     gallery = JSON.parse(gallery)
// }


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




// const boutonFilterTous = document.querySelector(".btn-tous")
// boutonFilterTous.addEventListener("click", function () {
//     document.querySelector(".gallery").innerHTML = "";
//     genererGalerie(gallery)
//     })

// const boutonFilterObjets = document.querySelector(".btn-objets")
// boutonFilterObjets.addEventListener("click", function() {
//     const filterObjets = gallery.filter(function (data) {
//         return data.categoryId === 1
//     })
//     document.querySelector(".gallery").innerHTML = "";
//     genererGalerie(filterObjets);
// })

// const boutonFilterAppartements = document.querySelector(".btn-appartements")
// boutonFilterAppartements.addEventListener("click", function() {
//     const filterAppartements = gallery.filter(function (data) {
//         return data.categoryId === 2
//     })
//     document.querySelector(".gallery").innerHTML = "";
//     genererGalerie(filterAppartements);
// })

// const boutonFilterHotels = document.querySelector(".btn-hotels")
// boutonFilterHotels.addEventListener("click", function() {
//     const filterHotels = gallery.filter(function (data) {
//         return data.categoryId === 3
//     })
//     document.querySelector(".gallery").innerHTML = "";
//     genererGalerie(filterHotels);
// })
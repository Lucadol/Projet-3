export function afficherModal2() {

    document.querySelector('.div2').style.display = 'none'

    const bouton = document.getElementById("ajout-photo")
    bouton.addEventListener("click", function () {

        document.querySelector('.div2').style.display = 'block'
        document.querySelector('.div1').style.display = 'none'

    })

    const fleche = document.getElementById("fleche")
    fleche.addEventListener("click", function () {

        document.querySelector('.div2').style.display = 'none'
        document.querySelector('.div1').style.display = 'block'

    })

}
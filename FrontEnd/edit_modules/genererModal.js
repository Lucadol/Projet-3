// Génère la modale, permet également d'ouvrir et de fermer la modale

export function genererModal() {

    // Création d'une modale
    let modal = null

    // Ouvrir la modale
    const openModal = function (e) {
        e.preventDefault()
        modal = document.querySelector(e.target.getAttribute('href'))
        modal.style.display = null
        modal.removeAttribute('aria-hidden')
        modal.setAttribute('aria-modal', 'true')
        modal.addEventListener('click', closeModal)
        modal.querySelector('.js-modal-close').addEventListener('click', closeModal)
        modal.querySelector('.js-modal-close-photo').addEventListener('click', closeModal)
        modal.querySelector('.js-modal-stop').addEventListener('click', stopPropagation)
    }

    // Fermer la modale
    const closeModal = function (e) {
        if (modal === null) return
            e.preventDefault()
            modal.style.display = "none"
            modal.setAttribute('aria-hidden', 'true')
            modal.removeAttribute('aria-modal')
            modal.removeEventListener('click', closeModal)
            modal.querySelector('.js-modal-close').removeEventListener('click', closeModal)
            modal.querySelector('.js-modal-close-photo').removeEventListener('click', closeModal)
            modal.querySelector('.js-modal-stop').removeEventListener('click', stopPropagation)
            modal = null
    }

    // Empecher de fermer la modale quand on clique dessus
    const stopPropagation = function (e) {
        e.stopPropagation()
    }

    // // Permet d'ouvrir la modale
    document.querySelectorAll('.js-modal').forEach(a => {
        a.addEventListener('click', openModal)
    })

    // // Permet de fermer la modale en cliquant sur Echap
    window.addEventListener('keydown', function (e) {
        if (e.key === "Escape" || e.key === "Esc")
        closeModal(e)
    })

}
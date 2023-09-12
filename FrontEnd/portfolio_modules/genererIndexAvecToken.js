export function genererIndexAvecToken() {
// cette ligne de code est utilisée pour réinitialiser la page en mode visiteur
// localStorage.removeItem('token')

// stocke le token dans le localStorage et permet de savoir si la page doit être chargée
// en mode éditeur ou en mode visiteur
    const token = localStorage.getItem('token')

    // charge la page en mode éditeur
    if (token) {
        document.querySelector('.bande-noire').style.display = 'flex'
        document.querySelector('.titre-edit').style.display = 'flex'
        document.querySelector('.titre1').style.display = 'none'
        document.getElementById('login').style.display = 'none'
        const logout = document.getElementById('logout')
        logout.style.display = 'flex'

        logout.addEventListener("click", () => {
            localStorage.removeItem('token')
        })
        
    // charge la page en mode visiteur
    } else {
        document.querySelector('.bande-noire').style.display = 'none'
        document.querySelector('.titre-edit').style.display = 'none'
        document.querySelector('.titre1').style.display = 'block'
        document.getElementById('login').style.display = 'flex'
        document.getElementById('logout').style.display = 'none'
    }
}
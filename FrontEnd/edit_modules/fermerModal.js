export function fermerModal() {
    const modal = document.querySelector('.modal');
    if (!modal) return;
    modal.style.display = "none";
}
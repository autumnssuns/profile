function setModalOpen(open) {
  const modal = document.getElementsByClassName('modal')[0];
  modal.style.display = open ? 'flex' : 'none';
  const closeIcon = document.getElementsByClassName('close')[0];
  closeIcon.addEventListener('click', () => setModalOpen(false));
}

function loadPage() {
  const shareIcon = document.getElementsByClassName('share')[0];
  shareIcon.addEventListener('click', () => setModalOpen(true));
}

window.onload = loadPage;
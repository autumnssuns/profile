function setModalOpen(open) {
  const modal = document.getElementsByClassName('modal')[0];
  modal.style.display = open ? 'flex' : 'none';
  const closeIcon = document.getElementsByClassName('close')[0];
  closeIcon.addEventListener('click', () => setModalOpen(false));
  // Also close modal when clicking outside of it
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      setModalOpen(false);
    }
  });
  // Or when pressing the escape key
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setModalOpen(false);
    }
  });
}

function loadPage() {
  const shareIcon = document.getElementsByClassName('share')[0];
  shareIcon.addEventListener('click', () => setModalOpen(true));
}

window.onload = loadPage;
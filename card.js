function toggleCard(card) {
  // Se já tiver outro aberto, fecha ele
  const aberto = document.querySelector('.card.expandido');

  if (aberto && aberto !== card) {
    aberto.classList.remove('expandido');
  }

  // Alternar o card clicado
  card.classList.toggle('expandido')
}
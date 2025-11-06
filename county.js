

function playSound() {
  const sound = document.getElementById("clickSound");
  sound.currentTime = 0;
  sound.play();
}


document.addEventListener('DOMContentLoaded', () => {
  let lastScrollTop = 0;

  document.addEventListener('scroll', () => {
    const container = document.querySelector('.stack-cards-container');
    const cards = document.querySelectorAll('.stack-cards__item');
    const containerRect = container.getBoundingClientRect();
    const scrollPosition = window.scrollY;
    lastScrollTop = scrollPosition <= 0 ? 0 : scrollPosition;

    const progress = Math.min(1, Math.max(0, (scrollPosition - containerRect.top + window.innerHeight) / (containerRect.height + window.innerHeight)));
    const numCards = cards.length;
    const cardsToShow = Math.floor(progress * numCards);

    for (let i = 0; i < numCards; i++) {
      const card = cards[i];
      if (i >= numCards - cardsToShow) {
        card.classList.add('slide-up');
      } else {
        card.classList.remove('slide-up');
      }
    }
  });
});
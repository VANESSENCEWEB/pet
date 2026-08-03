  // Fav toggle
  document.querySelectorAll('.a-card-fav').forEach(btn => {
    btn.addEventListener('click', e => { e.stopPropagation(); btn.classList.toggle('liked'); });
  });
  // PetMatch step interaction
  document.querySelectorAll('.pm-step').forEach(step => {
    step.addEventListener('click', () => {
      document.querySelectorAll('.pm-step').forEach(s => s.classList.remove('active'));
      step.classList.add('active');
    });
  });

  (function initPetStage() {
  const stage = document.querySelector('.pet-stage');
  const bubbles = [...document.querySelectorAll('.pet-bubble')];
  const dotsWrap = document.getElementById('petStageDots');
  if (!stage || !bubbles.length || !dotsWrap) return;

  let index = bubbles.findIndex(b => b.classList.contains('is-active'));
  if (index < 0) index = 0;

  bubbles.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'pet-stage-dot' + (i === index ? ' is-active' : '');
    dot.setAttribute('aria-label', `Ver pet ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  });

  const dots = [...dotsWrap.querySelectorAll('.pet-stage-dot')];

  function goTo(next) {
    index = next;
    bubbles.forEach((b, i) => b.classList.toggle('is-active', i === index));
    dots.forEach((d, i) => d.classList.toggle('is-active', i === index));
    stage.dataset.theme = bubbles[index].dataset.color || 'mint';
  }

  setInterval(() => goTo((index + 1) % bubbles.length), 3200);
})();
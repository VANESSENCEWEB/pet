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

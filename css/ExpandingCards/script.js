const panels = document.querySelectorAll('.panel');

// add event listener
panels.forEach( (panel) => {
  panel.addEventListener('click', () => {
    resetActive();
    panel.classList.add('active');
  })
});

const resetActive = () => {
  panels.forEach( (panel) => {
    panel.classList.remove('active');
  });
};

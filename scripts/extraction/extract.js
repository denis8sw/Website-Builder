

extractBtn.addEventListener('click', () => {
  const theEl = document.querySelectorAll('.allelements');
  var allElements = ""
  theEl.forEach(paragraph => {
    allElements += paragraph.outerHTML;
  });

  localStorage.setItem("Website Code", allElements);
});


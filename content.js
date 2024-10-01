function adjustFontWeight() {
  const elements = document.querySelectorAll('*');
  elements.forEach(element => {
    const computedStyle = window.getComputedStyle(element);
    if (computedStyle.fontWeight === '700') {
      element.style.fontWeight = '100';
    }
  });
}

// Run the function when the page loads
adjustFontWeight();

// Use a MutationObserver to handle dynamically loaded content
const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.type === 'childList') {
      adjustFontWeight();
    }
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

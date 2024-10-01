function adjustFontWeight() {
  const primaryColumn = document.querySelector('[data-testid="primaryColumn"]');
  if (primaryColumn) {
    const elements = primaryColumn.querySelectorAll('*');
    elements.forEach(element => {
      const computedStyle = window.getComputedStyle(element);
      if (computedStyle.fontWeight === '700') {
        element.style.fontWeight = '100';
      }
    });
  }
}

adjustFontWeight();

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

// Add event listener for navigation changes
document.addEventListener('visibilitychange', adjustFontWeight);

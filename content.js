function adjustFontWeight() {
  const primaryColumn = document.querySelector('[data-testid="primaryColumn"]');
  if (primaryColumn) {
    // Select all tweet text elements
    const tweetTextElements = primaryColumn.querySelectorAll('[data-testid="tweetText"]');
    
    tweetTextElements.forEach(tweetElement => {
      const boldElements = tweetElement.querySelectorAll('*');
      boldElements.forEach(element => {
        const computedStyle = window.getComputedStyle(element);
        if (computedStyle.fontWeight === '700') {
          element.style.fontWeight = '100';
        }
      });
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

document.addEventListener('visibilitychange', adjustFontWeight);

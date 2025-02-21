(function() {
    const targetPattern = /^https:\/\/github\.com\/[^\/]+\/[^\/]+\/(tree|blob)\/.+/;

    if (!targetPattern.test(window.location.href)) {
      return;
    }

    document.addEventListener('keydown', function(event) {
      if (event.key !== '.') {
        return;
      }

      const target = event.target;
      const isInputField = target && target.isContentEditable || target.tagName === 'INPUT' || target.tagName === 'TEXTAREA';
      
      // Block the period key event if the target is not an input field.
      if (!isInputField) {
        event.preventDefault();
        event.stopPropagation();
        // Optional: log for debugging purposes.
        console.log("Blocked period key input.");
      }
    }, true);
  })();
  

document.addEventListener('DOMContentLoaded', function() {
    // Main screen buttons
    document.querySelectorAll('.button-group button').forEach(button => {
        button.addEventListener('click', function() {
            const type = button.getAttribute('data-type');
            chrome.storage.local.set({ generatorType: type }, function() {
                if (chrome.runtime.lastError) {
                    console.error("Error setting storage: ", chrome.runtime.lastError);
                } else {
                    window.location.href = 'generator.html';
                }
            });
        });
    });
});

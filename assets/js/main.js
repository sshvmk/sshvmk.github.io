console.log('👋🏻 hello from Hugo and imgios!');

function detectThemePreferences() {
    let themeClasses = ["text-dark"];
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        themeClasses = ["text-light", "dark"];
    }
    document.body.classList.add(themeClasses);
}

detectThemePreferences();
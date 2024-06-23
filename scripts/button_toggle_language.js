document.getElementById('toggle').addEventListener('change', function () {
    if (this.checked) {
        document.documentElement.lang = 'id';
        isTranslated = true; // Set global flag to true for Indonesian
    } else {
        document.documentElement.lang = 'en';
        isTranslated = false; // Set global flag to false for English
    }
    // Update the currently displayed hadith based on the new language setting
    if (currentHadith) {
        const hadithElement = document.getElementById('hadith');
        hadithElement.innerText = isTranslated ? currentHadith.translation : currentHadith.hadith;
    }
});

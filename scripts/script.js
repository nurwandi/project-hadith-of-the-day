let hadiths = [];
let currentHadith = null; // hadith reference
let isTranslated = false; // hadith translation

document.addEventListener('DOMContentLoaded', function () {
    const nextHadithButton = document.getElementById('next-hadith');
    const copyButton = document.getElementById('copy');
    const hadithElement = document.getElementById('hadith');

    // hadith from json
    fetch('https://660xiqnvc8.execute-api.us-west-2.amazonaws.com/production/hadith')
        .then(response => response.json())
        .then(data => {
            hadiths = data;
            showRandomHadith();
        })
        .catch(error => {
            console.error('Error loading hadiths:', error);
            hadithElement.innerText = 'Failed to load hadith...';
        });

    if (nextHadithButton) {
        nextHadithButton.addEventListener('click', showRandomHadith);
    }

    if (copyButton) {
        copyButton.addEventListener('click', function () {
            var hadithText = hadithElement.textContent;
            navigator.clipboard.writeText(hadithText)
                .then(() => {
                    alert('Hadith copied successfully!');
                })
                .catch(err => {
                    console.error('Failed to copy: ', err);
                });
        });
    }
});

function showRandomHadith() {
    const hadithElement = document.getElementById('hadith');
    const referenceElement = document.getElementById('reference');

    // Fade out the hadith and reference
    hadithElement.style.opacity = 0;
    referenceElement.style.opacity = 0;

    setTimeout(() => {
        if (hadiths.length > 0) {
            const randomIndex = Math.floor(Math.random() * hadiths.length);
            currentHadith = hadiths[randomIndex];
            hadithElement.innerText = isTranslated ? currentHadith.translation : currentHadith.hadith;
            referenceElement.innerText = currentHadith.reference;
        } else {
            hadithElement.innerText = 'Load the hadith...';
            referenceElement.innerText = '';
        }
        hadithElement.style.opacity = 1;
        referenceElement.style.opacity = 1;
    }, 500);
}

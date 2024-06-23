let hadiths = [];
let currentHadith = null; // Menyimpan hadith saat ini untuk referensi
let isTranslated = false; // Menyimpan status terjemahan

document.addEventListener('DOMContentLoaded', function () {
    // Memastikan elemen ada sebelum menambahkan event listener
    const nextHadithButton = document.getElementById('next-hadith');
    const copyButton = document.getElementById('copy');
    const hadithElement = document.getElementById('hadith');

    // Memuat hadiths dari file JSON
    fetch('https://660xiqnvc8.execute-api.us-west-2.amazonaws.com/production/hadith')
        .then(response => response.json())
        .then(data => {
            hadiths = data;
            showRandomHadith(); // Tampilkan hadith pertama setelah data dimuat
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

    // Hapus interval dan referensi terkait updateButtonColor()
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
            // Menampilkan hadith berdasarkan status terjemahan
            hadithElement.innerText = isTranslated ? currentHadith.translation : currentHadith.hadith;
            referenceElement.innerText = currentHadith.reference;
        } else {
            hadithElement.innerText = 'Load the hadith...';
            referenceElement.innerText = '';
        }
        // Fade in the new hadith and reference
        hadithElement.style.opacity = 1;
        referenceElement.style.opacity = 1;
    }, 500); // Adjust time as needed
}

let hadiths = [];

// Load hadiths from JSON file
fetch('hadiths.json')
    .then(response => response.json())
    .then(data => {
        hadiths = data;
        showRandomHadith();
    })
    .catch(error => {
        console.error('Error loading hadiths:', error);
        document.getElementById('hadith').innerText = 'Failed to load hadith...';
    });

document.getElementById('next-hadith').addEventListener('click', showRandomHadith);

function showRandomHadith() {
    const hadithElement = document.getElementById('hadith');
    const referenceElement = document.getElementById('reference');

    // Fade out the hadith and reference
    hadithElement.style.opacity = 0;
    referenceElement.style.opacity = 0;

    setTimeout(() => {
        if (hadiths.length > 0) {
            const randomIndex = Math.floor(Math.random() * hadiths.length);
            const selectedHadith = hadiths[randomIndex];
            hadithElement.innerText = selectedHadith.hadith;
            referenceElement.innerText = selectedHadith.reference;
        } else {
            hadithElement.innerText = 'Load the hadith...';
            referenceElement.innerText = '';
        }
        // Fade in the new hadith and reference
        hadithElement.style.opacity = 1;
        referenceElement.style.opacity = 1;
    }, 500); // Adjust time as needed
}

document.addEventListener('DOMContentLoaded', function () {
    var copyButton = document.getElementById('copy');
    var hadithElement = document.getElementById('hadith');

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
});

const colors = ['#4F6F52', '#2D3250', '#38419D', '#163020', '#7B66FF', '#22092C', '#164863', '#3D0C11', '#F31559'];

function updateButtonColor() {
    const nextHadithButton = document.getElementById('next-hadith');
    const copyTextElement = document.getElementById('copy');
    const svgPathElement = document.getElementById('mySvgPath');
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    nextHadithButton.style.backgroundColor = randomColor;
    copyTextElement.style.color = randomColor;
    svgPathElement.setAttribute('fill', randomColor);
}

setInterval(updateButtonColor, 5000);
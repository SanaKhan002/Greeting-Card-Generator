document.getElementById('generateCard').addEventListener('click', function () {
    const message = document.getElementById('messageInput').value;
    const cardMessage = document.getElementById('cardMessage');
    const selectedFont = document.getElementById('fontSelect').value;
    const selectedFontSize = document.getElementById('fontSizeSelect').value;
    const selectedColor = document.getElementById('colorSelect').value;
    const selectedBackgroundColor = document.getElementById('backgroundColorSelect').value;
    const textAlignment = document.getElementById('textAlignment').value;
    const imagePosition = document.getElementById('imagePosition').value;
    const borderStyle = document.getElementById('borderStyle').value;
    const borderColor = document.getElementById('borderColor').value;
    const hasTextShadow = document.getElementById('textShadow').checked;
    const selectedSticker = document.getElementById('stickersSelect').value;

    cardMessage.textContent = message || 'Your Message Here!';
    cardMessage.style.fontFamily = selectedFont;
    cardMessage.style.fontSize = selectedFontSize;
    cardMessage.style.color = selectedColor;
    cardMessage.style.textAlign = textAlignment;
    cardMessage.style.textShadow = hasTextShadow ? '2px 2px 2px rgba(0, 0, 0, 0.5)' : 'none';

    const greetingCard = document.getElementById('greetingCard');
    greetingCard.style.backgroundColor = selectedBackgroundColor;
    greetingCard.style.border = borderStyle === 'none' ? 'none' : `2px ${borderStyle} ${borderColor}`;

    const imageUpload = document.getElementById('imageUpload');
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = '';

    if (imageUpload.files.length > 0) {
        const file = imageUpload.files[0];
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.float = imagePosition;
            imageContainer.appendChild(img);
        };
        reader.readAsDataURL(file);
    }

    const stickerContainer = document.getElementById('stickerContainer');
    stickerContainer.innerHTML = '';
    if (selectedSticker) {
        const stickerImg = document.createElement('img');
        stickerImg.src = `stickers/${selectedSticker}.png`;
        stickerContainer.appendChild(stickerImg);
    }

    document.getElementById('controls').style.display = 'none';
    document.getElementById('greetingCard').style.display = 'block';
    document.getElementById('goBack').style.display = 'block';
});

document.getElementById('resetCard').addEventListener('click', function () {
    document.getElementById('messageInput').value = '';
    document.getElementById('cardMessage').textContent = 'Your Message Here!';
    document.getElementById('imageContainer').innerHTML = '';
    document.getElementById('stickerContainer').innerHTML = '';
    document.getElementById('imageUpload').value = '';
    document.getElementById('backgroundColorSelect').value = '#ffffff';
    document.getElementById('textShadow').checked = false;
    document.getElementById('fontSizeSelect').value = '16px';
    document.getElementById('borderStyle').value = 'none';
    document.getElementById('borderColor').value = '#000000';
});

document.getElementById('goBack').addEventListener('click', function () {
    document.getElementById('controls').style.display = 'block';
    document.getElementById('greetingCard').style.display = 'none';
    document.getElementById('goBack').style.display = 'none';
});

$(".custom-file-input").on("change", function() {
    var fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
  });


let 
topTextInput = document.getElementById('exampleFormControlTextarea1'),
bottomTextInput = document.getElementById('exampleFormControlTextarea2'),
topTextSizeInput = document.getElementById('top-text-size-input'),
bottomTextSizeInput = document.getElementById('bottom-text-size-input'),
imageInput = document.getElementById('image-input'),
generateBtn = document.getElementById('generate-btn'),
canvas = document.getElementById('meme-canvas');

function generateMeme (img, topText, bottomText, topTextSize, bottomTextSize) {
    let fontSize;

    canvas.width = img.width;
    canvas.height = img.height;


    ctx.drawImage(img, 0, 0);

    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.textAlign = 'center';

    fontSize = canvas.width * topTextSize;
    ctx.font = fontSize + 'px Impact';
    ctx.lineWidth = fontSize / 20;

    ctx.textBaseline = 'top';
    topText.split('\n').forEach(function (t, i) {
        ctx.fillText(t, canvas.width / 2, i * fontSize, canvas.width);
        ctx.strokeText(t, canvas.width / 2, i * fontSize, canvas.width);
    });

    fontSize = canvas.width * bottomTextSize;
    ctx.font = fontSize + 'px Impact';
    ctx.lineWidth = fontSize / 20;

    ctx.textBaseline = 'bottom';
    bottomText.split('\n').reverse().forEach(function (t, i) { 
        ctx.fillText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
        ctx.strokeText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
    });
}

function init () {
 
    
    ctx = canvas.getContext('2d');

    canvas.width = canvas.height = 0;

    topTextInput.value = 'Top \nText';
    bottomTextInput.value = 'Bottom \nText';

    generateBtn.addEventListener('click', function () {
        let reader = new FileReader();
        reader.onload = function () {
            let img = new Image;
            img.src = reader.result;
            generateMeme(img, topTextInput.value, bottomTextInput.value, topTextSizeInput.value, bottomTextSizeInput.value);
        };
        reader.readAsDataURL(imageInput.files[0]);
    });
}

init();


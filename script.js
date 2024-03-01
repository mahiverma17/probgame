function guessImage() {
    var images = document.getElementsByClassName("image");
    var randomNumber = Math.floor(Math.random() * images.length);
    var selectedImage = images[randomNumber];
    
    var guess = prompt("Guess which image will be selected (Enter a number between 1 and 6):");

    if (guess !== null) {
        var selectedImageId = parseInt(selectedImage.id.substr(5));

        if (parseInt(guess) === selectedImageId) {
            selectedImage.style.margin = "20px"; // Highlight the selected image by adding margin
            document.getElementById("result").innerText = "Congratulations! You guessed correctly!";
        } else {
            document.getElementById("result").innerText = "Sorry, your guess was incorrect. The correct image was: " + selectedImage.querySelector("p").innerText;
        }
    }
}

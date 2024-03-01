
function guessImage() {
    var images = document.getElementsByClassName("image");
    var randomNumber = Math.floor(Math.random() * images.length);
    var selectedImage = images[randomNumber];
    var guessInput = document.getElementById("guessInput").value.trim();

    if (guessInput !== "") {
        var selectedImageId = parseInt(selectedImage.id.substr(5));
        var guessedImage = document.getElementById("image" + guessInput);

        // Remove border from previously highlighted images (if any)
        var highlightedImages = document.querySelectorAll(".image");
        highlightedImages.forEach(function(image) {
            image.style.border = "none";
        });

        // Highlight the randomly selected image in blue
        selectedImage.style.border = "3px solid #0000FF"; // Blue border

        // Highlight the guessed image in red
        if (guessedImage) {
            guessedImage.style.border = "3px solid #FF0000"; // Red border

            // If guessed correctly, highlight both images in green
            if (parseInt(guessInput) === selectedImageId) {
                selectedImage.style.border = "3px solid #00FF00"; // Green border
                document.getElementById("result").innerText = "Congratulations! You guessed correctly!";
            } else {
                document.getElementById("result").innerText = "Sorry, your guess was incorrect. The correct image was: " + selectedImage.querySelector("p").innerText;
            }
        } else {
            document.getElementById("result").innerText = "Please enter a valid guess (1-6).";
        }
    }
}

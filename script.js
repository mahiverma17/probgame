function guessImage() {
    var images = document.getElementsByClassName("image");
    var randomNumber = Math.floor(Math.random() * images.length);
    var selectedImage = images[randomNumber];
    var guessInput = document.getElementById("guessInput").value.trim();

    if (guessInput !== "") {
        var selectedImageId = parseInt(selectedImage.id.substr(5));

        if (parseInt(guessInput) === selectedImageId) {
            // Highlight the selected image by adding blue margins
            selectedImage.style.margin = "20px";
            selectedImage.style.border = "none";
            selectedImage.style.boxShadow = "0 0 10px 5px #0000FF"; // Blue box shadow for correct guess
            document.getElementById("result").innerText = "Congratulations! You guessed correctly!";
        } else {
            // Remove styles from previously selected image (if any)
            selectedImage.style.margin = "";
            selectedImage.style.boxShadow = "none";

            document.getElementById("result").innerText = "Sorry, your guess was incorrect. The correct image was: " + selectedImage.querySelector("p").innerText;
        }
    }
}

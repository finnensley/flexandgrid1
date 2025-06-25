    // Get the audio element
    const guitarAudio = document.getElementById("guitarAudio");

    // Get the button element
    const playGuitar = document.getElementById("playGuitar");

    // Add an event listener to the button
    playGuitar.addEventListener("click", () => {
        // Play the audio when the button is clicked
        guitarAudio.play();
    });

    const vibePage = document.getElementById("vibe");
    vibePage.addEventListener("click", () => {
        vibePage.play();
    }) 
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

    //light/dark theme
    function setTheme(theme) {
        localStorage.setItem("theme", theme);
        document.body.style.background = theme === "dark" ? "rgb(243, 193, 102)" : "#fff";
        document.body.color = theme === "dark" ? "#fff" : "#000";
    }

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        setTheme(savedTheme);
    }

    
# Cleveland2

const hideControls = () => {
  if (isFullscreen && !isVideoPaused) {
    controls.classList.add("hide-controls"); // Add class to hide controls
  }
};


const showControls = () => {
  clearTimeout(controlsTimeout);
  controls.classList.remove("hide-controls"); // Remove class to show controls

  // Start the timeout to hide controls only if the video is playing
  if (isFullscreen && !isVideoPaused) {
    controlsTimeout = setTimeout(hideControls, 1800);
  }
};

const handlePlayPause = (state) => {
  if (state === "play") {
    isVideoPaused = false;
    showControls(); // Show controls when video starts playing
  } else if (state === "pause") {
    isVideoPaused = true;
    showControls(); // Ensure controls remain visible when paused
  }
};

// Add event listeners for play/pause
mainVideo.addEventListener("play", () => handlePlayPause("play"));
mainVideo.addEventListener("pause", () => handlePlayPause("pause"));

container.addEventListener("mouseleave", () => {
  if (isFullscreen && !isVideoPaused) {
    controlsTimeout = setTimeout(hideControls, 1800); // Hide after 1800ms if video is playing
  }
});


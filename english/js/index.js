// Wait for the entire page, including images and assets, to load
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    
    // Add a fade-out effect
    loader.style.opacity = "0";
  
    // After the fade-out, remove the loader
    setTimeout(() => {
      loader.style.display = "none";
    }, 500); // Matches the CSS transition duration
  });
  
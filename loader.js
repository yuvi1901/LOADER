// Wait 3 seconds then hide the loader and show the content
window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".loader").style.display = "none";
    document.getElementById("content").style.display = "block";
  }, 3000); // Change this time if needed
});

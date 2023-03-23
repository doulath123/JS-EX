function isLandscape(width, height) {
    return (width > height);
  }

  let w = 800;
let h = 600;

if (isLandscape(w, h)) {
  console.log("The image is in landscape orientation.");
} else {
  console.log("The image is in portrait orientation.");
}
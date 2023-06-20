// 4.Window Object:

// a. Create a function that opens a new window with a specified URL and dimensions (width and height).

function openNewWindow(url, width, height) {
  const features = `width=${width},height=${height}`;
  const newWindow = window.open(url, "_blank", features);
  return newWindow;
}

// Example usage:
const url = "https://www.example.com";
const width = 800;
const height = 600;
const newWindow = openNewWindow(url, width, height);

// b. Implement the function to open a new window with the URL "https://www.example.com" and dimensions 800x600

function openNewWindow(url, width, height) {
  const features = `width=${width},height=${height}`;
  const newWindow = window.open(url, "_blank", features);
  return newWindow;
}

// Example usage:
const urlResource = "https://www.example.com";
const width2 = 800;
const height2 = 600;
const newWindow2 = openNewWindow(urlResource, width2, height2);

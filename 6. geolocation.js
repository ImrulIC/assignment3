// 6.Geolocation:

// a. Implement a JavaScript function that retrieves the user's current location (latitude and longitude) using the geolocation API.

function getCurrentLocation() {
  if (navigator.geolocation) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude });
        },
        (error) => {
          reject(error);
        }
      );
    });
  } else {
    return Promise.reject(
      new Error("Geolocation is not supported by this browser.")
    );
  }
}

// Example usage:
getCurrentLocation()
  .then((location) => {
    console.log("Latitude:", location.latitude);
    console.log("Longitude:", location.longitude);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

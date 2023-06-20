// 14.AJAX Get Request:
// a. Implement a JavaScript function that sends an AJAX GET request to the following URL: "https://api.example.com/data".

function sendGetRequest() {
  fetch("https://api.example.com/data")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error: " + response.status);
      }
    })
    .then((data) => {
      // Handle the response data
      console.log(data);
    })
    .catch((error) => {
      // Handle any errors
      console.error(error);
    });
}
sendGetRequest();

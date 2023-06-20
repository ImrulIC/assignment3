// 15.AJAX Post Request:
// a. Implement a JavaScript function that sends an AJAX POST request to the following URL: "https://api.example.com/submit".
// b. Send a JSON payload with the following data: { "name": "John Doe", "email": "johndoe@example.com" }

function sendPostRequest() {
  const url = "https://api.example.com/submit";
  const data = {
    name: "John Doe",
    email: "johndoe@example.com",
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error: " + response.status);
      }
    })
    .then((responseData) => {
      // Handle the response data
      console.log(responseData);
    })
    .catch((error) => {
      // Handle any errors
      console.error(error);
    });
}

sendPostRequest();

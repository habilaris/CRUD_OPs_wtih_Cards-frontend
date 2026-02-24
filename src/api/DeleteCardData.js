function deleteCardData(name, age) {
  const URL = "http://localhost:3000/api/admin/delete-card";

  fetch(URL, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, age }),
  })
    .then((response) => {
      console.log("Request made to the server to delete the resource!");
      console.log(response);
      if (!response.ok) {
        console.log("Something went wrong, Status Code:", response.status);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error("An error occurred:", err);
    })
    .finally(() => {
      console.log("Making sure the delete fetch script is fine!");
    });
}

export default deleteCardData;

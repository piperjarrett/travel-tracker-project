const loginSection = document.querySelector(".login");

function fetchData(details) {
  return fetch(`http://localhost:3001/api/v1/${details}`)
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
      loginSection.innerHTML = "";
      loginSection.innerHTML += `<h1 class='error-header'>Sorry, could not load your information</h1>
      <p>Try again later</p>
      `;
    });
}

const promiseAll = (traveler) => {
  const result = Promise.all([
    fetchData(`travelers/${traveler}`),
    fetchData("trips"),
    fetchData("destinations"),
  ]).then((response) => {
    return response;
  });
  return result;
};

const postData = (data) => {
  return fetch("http://localhost:3001/api/v1/trips", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json)
    .then((response) => promiseAll())
    .catch((err) => {
      console.log(err);
      alert(`Something went wrong with your request, Try agin later.`);
    });
};

export { promiseAll };
export { postData };

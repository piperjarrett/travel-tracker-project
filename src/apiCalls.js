function fetchData(details) {
  return fetch(`http://localhost:3001/api/v1/${details}`)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

const promiseAll = () => {
  const result = Promise.all([
    fetchData("travelers"),
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
    .catch((err) => console.log(err));
};

export { promiseAll };
export { postData };

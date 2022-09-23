function fetchData(details) {
  return fetch(`http://localhost:3001/api/v1/${details}`)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

const promisAll = () => {
  result = Promise.all([fetchData("travelers"), fetchData("trips")]).then(
    (reponse) => {
      return response;
    }
  );
  return result;
};

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

export { promiseAll };

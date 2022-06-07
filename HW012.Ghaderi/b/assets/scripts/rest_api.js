// export {get, post, put, del};
function get(API_URL) {
  return fetch(API_URL, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => console.log(err));
}
function post(API_URL, body) {
  return fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(body),
    body: JSON.stringify(body),
  })
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    return data;
  })
  .catch((err) => console.log(err));
}
function put(API_URL, body, item) {
  return fetch(`${API_URL}/${item}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(body),
  })
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    return data;
  })
  .catch((err) => console.log(err));
}
function del(API_URL, item) {
  return fetch(`${API_URL}/${item}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    }
  })
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    return data;
  })
  .catch((err) => console.log(err));
}
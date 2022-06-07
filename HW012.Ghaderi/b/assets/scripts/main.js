// import { get, post, put, del } from "rest_api";
const API_URL = "http://localhost:3000/requests";
function get() {
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
function post(body) {
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
function put(body, item) {
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
function del(item) {
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
////////////////////////////////////////////////////////////////////
const renderPartision = (fName, lName, tell, email) => {
  const partision = document.createElement("ul");
  partision.className =
    "options d-flex justify-content-center align-items-center";
  partision.innerHTML = `<li>${fName}</li>
<li>${lName}</li>
<li>${tell}</li>
<li>${email}</li>
<li><span class="d-flex gap-2 justify-content-center align-items-center">
<button class="editIco inBtn">
  <img src="./assets/icons/edit.svg" alt="edit">
</button>
<button class="deleteIco inBtn">
  <img src="./assets/icons/delete.svg" alt="delete">
</button>
</span></li>`;
  container.appendChild(partision);
};
const createModal = () => {
  const modal = document.createElement();
  modal.className = 'blurContainer-i';
  return modal;
}
const openModal = () => {
  virtualBody.appendChild(createModal());
  virtualBody.classList.add('blurContainer-ii');
};
const closeModal = () => {
  virtualBody.className = "virtualBody d-flex justify-content-center flex-column align-items-center";
  virtualBody.removeChild(virtualBody.lastElementChild);
  virtualBody.removeChild(virtualBody.lastElementChild);
};

const func = ( modalValue, modalBody, closeImage, ) =>{}
////////////////////////////////////////////////////////////////////
persian = {
  0: "۰",
  1: "۱",
  2: "۲",
  3: "۳",
  4: "۴",
  5: "۵",
  6: "۶",
  7: "۷",
  8: "۸",
  9: "۹",
};
function traverse(el) {
  if (el.nodeType == 3) {
    let list = el.data.match(/[0-9]/g);
    if (list != null && list.length != 0) {
      for (let i = 0; i < list.length; i++)
        el.data = el.data.replace(list[i], persian[list[i]]);
    }
  }
  if (el.localName == "input") {
    let listed = el.value.match(/[0-9]/g);
    if (listed != null && listed.length != 0) {
      for (let i = 0; i < listed.length; i++)
        el.value = el.value.replace(listed[i], persian[listed[i]]);
    }
  }
  for (let i = 0; i < el.childNodes.length; i++) {
    traverse(el.childNodes[i]);
  }
}
traverse(document.body);
document.addEventListener("keyup", (e) => {
  if (e.target.localName == "input") {
    let list = e.target.value.match(/[0-9]/g);
    if (list != null && list.length != 0) {
      for (let i = 0; i < list.length; i++)
        e.target.value = e.target.value.replace(list[i], persian[list[i]]);
    }
  }
});
const scripts = document.querySelectorAll("script"),
  virtualBody = document.querySelector(".virtualBody"),
  container = document.querySelector(".container");
const htmlColection = (elm) => {
  console.log(elm.childrens,elm);
  for(let i = 0;i < elm.length;i++){
console.log(elm[i]);
  } 
}
console.log(scripts);
// htmlColection();

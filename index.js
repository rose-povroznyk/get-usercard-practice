'use strict';

const btn = document.querySelector('button');
btn.addEventListener('click', getUser);
function getUser({ target }) {
  fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then(({ results }) => {
      const data = results[0];
      console.log(data);
      const img = data.picture.medium;
      const name = `${data.name.title} ${data.name.first} ${data.name.last}`;
      const email = `Email: ${data.email}`;
      const location = `Adress: ${data.location.country}, ${data.location.state}, ${data.location.street.name} ${data.location.street.number}`;
      const cell = `Phone: ${data.cell}`;
      const parent = target.previousElementSibling;

      createCard(img, name, email, location, cell, parent);
    });
}

function createElement(type, { classNames }, ...childNodes) {
  const elem = document.createElement(type);
  elem.classList.add(...classNames);
  elem.append(...childNodes);
  return elem;
}

function createCard(src, name, email, location, cell, parent) {
  const imgElem = createElement('img', { classNames: ['avatar'] });
  imgElem.src = src;
  const nameElem = createElement('p', { classNames: ['name'] }, name);
  const emailElem = createElement('p', { classNames: ['email'] }, email);
  const locationElem = createElement(
    'p',
    { classNames: ['location'] },
    location
  );
  const cellElem = createElement('p', { classNames: ['cell'] }, cell);
  const card = createElement(
    'div',
    { classNames: ['card-item'] },
    imgElem,
    nameElem,
    emailElem,
    locationElem,
    cellElem
  );
  parent.append(card);
}

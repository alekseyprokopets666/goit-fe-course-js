'use strict';

const form = document.querySelector('.form');
const inputLink = document.querySelector('.input-link');
const btnAddLink = document.querySelector('.btn-add-link');
const cardsList = document.querySelector('.cards-list');
const card = document.querySelector('#card').innerHTML.trim();
const template = Handlebars.compile(card);

btnAddLink.addEventListener('click', addLink);
cardsList.addEventListener('click', delLink)

let savedLinks = JSON.parse(localStorage.getItem("links"));

if (savedLinks === null) {
    savedLinks = [];
}
if (savedLinks) {
    cardsList.innerHTML = template(savedLinks);
}



function addLink(e) {

    const pattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:\/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    if (pattern.test(inputLink.value)) {
        if (savedLinks.some(el => el.url === inputLink.value)) {
            alert("Такой URL уже есть");
            return;
        }

        const obj = {};
        obj.url = inputLink.value;
        savedLinks.unshift(obj);
        localStorage.setItem("links", JSON.stringify(savedLinks));
    } else {
        alert('Invalid URL!');
    }
    return;
}

function delLink(e) {
    const target = e.target;
    const targetDataSet = target.dataset.url;
    const targetParent = target.parentNode;
    targetParent.remove();
    savedLinks = savedLinks.filter(el => el.url !== targetDataSet);    
    localStorage.setItem('links', JSON.stringify(savedLinks));
}
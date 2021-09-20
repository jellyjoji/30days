'use strict';

const button = document.querySelector('form');
button.addEventListener('submit', getNumber);

function getNumber(event){

    event.preventDefault();

    const loadText = "wait a little bit ⏳";
    const number = document.querySelector('input').value;
    const number_fact = document.querySelector('.number-fact');
    number_fact.innerHTML=loadText;

    const url = 'http://numbersapi.com/';

    fetch(url+number)
    .then(response=> response.text())
    .then(text=> number_fact.innerHTML=text);
}
import { template } from 'handlebars';
import data from './data/data.json';
import tmpl from './template/template.hbs';
import './style.css'

const list = document.querySelector('.ulCar');
const lightButt = document.querySelector('.light');
const blackButt = document.querySelector('.black');
const body = document.querySelector('body');

const addTmpl = data.reduce((acc, el) => acc + tmpl(el), '');


list.insertAdjacentHTML('afterbegin', addTmpl)
console.log('list', list, "data", data, "template", tmpl)

lightButt.addEventListener('click', () => {
    body.classList.add('lightTheme')
    body.classList.remove('blackTheme')
})
blackButt.addEventListener('click', () => {
    body.classList.remove('lightTheme')
    body.classList.add('blackTheme')
})



if (body.hasAttribute('class', 'blackTheme')) {
    localStorage.setItem('black', true)
    localStorage.removeItem('white')
}

if (body.hasAttribute('class', 'lightTheme')) {
    localStorage.removeItem('black')
    localStorage.setItem('white', true)
}
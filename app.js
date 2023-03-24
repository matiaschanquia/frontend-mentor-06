
const result = document.querySelector(".result");
const imgs = document.querySelectorAll(".img-rating");
const titles = document.querySelectorAll(".title-rating");
const numbers = document.querySelectorAll(".number-rating");
const mes = document.querySelector(".hig-low");

function editarDOM(data = []) {
    let suma = 0;
    data.forEach((item, indexData) => {
        imgs[indexData].src = item.icon;
        imgs[indexData].alt = item.icon;

        titles[indexData].textContent = item.category;

        numbers[indexData].textContent = item.score;
        suma += item.score;
    });

    const promedio = Math.round(suma / data.length);
    result.textContent = promedio;
    if(promedio >= 65) {
        mes.textContent = "higher";
    } else {
        mes.textContent = "lower";
    }
}


fetch('./data.json')
  .then((response) => response.json())
  .then((json) => editarDOM(json))
  .catch(err => console.log(err));
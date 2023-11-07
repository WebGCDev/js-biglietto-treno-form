//DICHIARAZIONI

const priceForKm = 0.21;
const underDiscount = 20;
const overDiscount = 40;
const name = document.getElementById('name');
const km = document.getElementById('km');
const age = document.getElementById('age');
const minCp = 90000;
const maxCp = 99999;
const btnGener = document.getElementById('btn-gener');
const btnCancel = document.getElementById('cancel');
const displayBlock = document.querySelector('.generated-block');
const errorMessage = document.querySelector('.errorMessage');

btnGener.addEventListener('click', function () {
  if (!isNaN(name.value)) {
    errorMessage.classList.remove('d-none');
    console.log('Error put string value!');
  } else {
    displayBlock.classList.remove('d-none');
    const traveler = name.value;
    const distance = km.value;
    const discountOpz = age.value;
    let price = distance * priceForKm;
    const wagon = Math.floor(Math.random() * 9) + 1;
    const cp = Math.floor(Math.random() * (maxCp - minCp + 1) + minCp);

    if (discountOpz === 'Minorenne') {
      price *= 1 - underDiscount / 100;
      document.querySelector('.discount').innerHTML = 'Sconto ' + discountOpz;
    } else if (discountOpz === 'Over65') {
      price *= 1 - overDiscount / 100;
      document.querySelector('.discount').innerHTML = 'Sconto ' + discountOpz;
    } else {
      document.querySelector('.discount').innerHTML = 'Biglietto Standard';
    }

    document.querySelector('.passenger').innerHTML = traveler;

    document.querySelector('.costo').innerHTML = '€' + price.toFixed(2);

    document.querySelector('.wagon').innerHTML = wagon;

    document.querySelector('.cp').innerHTML = cp;
  }
});

btnCancel.addEventListener('click', function () {
  displayBlock.classList.add('d-none');
  km.value = '';
  name.value = '';
  age.value = 'Minorenne';
  errorMessage.classList.add('d-none');
});

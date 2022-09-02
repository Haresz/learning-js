const newElement = document.createElement('li');
const Daftar = document.getElementById('daftar');
const elementAwal = document.createElement('li');
const itemAwal = document.getElementById('awal');

newElement.innerText = "Selamat menikmati !";
Daftar.appendChild(newElement);
elementAwal.innerText = "Hidupkan kompor";
Daftar.insertBefore(elementAwal, itemAwal)

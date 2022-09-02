const linkDicoding = document.getElementById('dicodingLink');
const linkGoogle = document.getElementById('googleLink');
const buttons = document.getElementsByClassName('button');

// linkDicoding.innerText = 'Belajar pemograman di dicoding';
// linkGoogle.innerText = 'Mencari sesuatu di google';

linkDicoding.innerHTML = "<i>Belajar pemigraman di dicoding</i>";
linkGoogle.innerHTML = "<i>Mencari sesuatu di google</i>"

for (let button of buttons){
    button.childNodes[1].style.borderRadius = '4px';
}
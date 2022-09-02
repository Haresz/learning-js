const chageCaption = new Event ('cangeCaption');

function CustomEventHandler(ev){
    console.log('Event' + ev.type + 'telah dijalankan');
    const caption = document.getElementsById('caption');
    caption.innerText = 'Anda telah membangkitkan ';
}


window.addEventListener('load', function (){
    const tombol = document.getElementById('tombol');
    tombol.addEventListener('changeCaption', CustomEventHandler);
    tombol.addEventListener('click', function() {});
});





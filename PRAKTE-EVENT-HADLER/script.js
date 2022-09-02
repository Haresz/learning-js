function increment(){
    document.getElementById('screen').innerText++;

    if (document.getElementById('screen').innerText == 2) {
        document.getElementById('emot').innerText = "sentiment_dissatisfied";
    }
    else if(document.getElementById('screen').innerText == 3){
        document.getElementById('emot').innerText = "mood";
    }
    else if(document.getElementById('screen').innerText == 4){
        document.getElementById('emot').innerText = "sentiment_very_satisfied";
    }
    else if(document.getElementById('screen').innerText == 5){
        document.getElementById('emot').innerText = "sentiment_very_dissatisfied";
    }
    else if(document.getElementById('screen').innerText == 6){
        document.getElementById('emot').innerText = "sentiment_neutral";
    }
    else if(document.getElementById('screen').innerText == 7){
        document.getElementById('emot').innerText = "add_reaction";
    }
    else if(document.getElementById('screen').innerText == 8){
        document.getElementById('emot').innerText = "mood_bad";
    }
    else if(document.getElementById('screen').innerText == 9){
        document.getElementById('emot').innerText = "sentiment_extremely_dissatisfied";
    }
    else if(document.getElementById('screen').innerText == 10){
        document.getElementById('emot').innerText = "face_retouching_natural";
    }
    else if(document.getElementById('screen').innerText == 11){
        document.getElementById('emot').innerText = "sick";
    }
    else if(document.getElementById('screen').innerText == 12){
        document.getElementById('emot').innerText = "stadia_controller";
    }
    else if(document.getElementById('screen').innerText == 13){
        document.getElementById('emot').innerText = "airplanemode_active";
    }
    else if(document.getElementById('screen').innerText == 14){
        document.getElementById('emot').innerText = "light_mode";
    }
    else if(document.getElementById('screen').innerText == 15){
        document.getElementById('emot').innerText = "smoking_rooms";
    }
    else if(document.getElementById('screen').innerText == 16){
        document.getElementById('emot').innerText = "mode_heat";
    }
    else if(document.getElementById('screen').innerText == 17){
        document.getElementById('emot').innerText = "mode_off_on";
    }
}

document.getElementById('tombol').onclick = increment;
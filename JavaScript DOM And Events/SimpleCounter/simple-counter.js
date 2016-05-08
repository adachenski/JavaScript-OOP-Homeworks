/**
 * Created by Just Nasko on 5/8/2016.
 */
var count = 1,
    btn = document.getElementById('button'),
    btnTop = document.getElementById('button-top'),
    innerScreen = document.getElementById('inner-screen');

function playSound() {
    var sound = document.getElementById("audio");
    sound.play();
}


btn.addEventListener("click",function() {

    var stopCount = document.getElementById("input-stop").value;
    var button = document.getElementById("button");

    innerScreen.innerHTML = count;

    if (count >= stopCount) {
        innerScreen.style.backgroundColor = "red";
        playSound();
    }
    return count++;

});

btnTop.addEventListener("click",function(){
    count=1;
    innerScreen.innerHTML=0;
    innerScreen.style.backgroundColor="lightGreen";
});


//tochevent for smartphones

button.addEventListener('touchstart',function(){

});

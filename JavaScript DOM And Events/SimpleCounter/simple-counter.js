/**
 * Created by Just Nasko on 5/8/2016.
 */
var count = 0;

function playSound() {
    var sound = document.getElementById("audio");
    sound.play();
}
function startCount() {

    var stopCount = document.getElementById("input-stop").value;
    document.getElementById("inner-screen").innerHTML = count;

    if (count >= stopCount) {
        document.getElementById("inner-screen").style.backgroundColor = "red";
        playSound();
    }
    return count++;
}

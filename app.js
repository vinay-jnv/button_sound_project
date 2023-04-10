document.getElementById("li").addEventListener("click", myFunction);

function myFunction() {
    // alert("Left click");
    var audio = new Audio(
        'https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3');
            audio.play();
        
}

document.getElementById("mi").addEventListener("click", myFunction1);

function myFunction1() {
    // alert("middle click");
    var audio = new Audio(
        'https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3');
            audio.play();
        
}

document.getElementById("Ri").addEventListener("click", myFunction2);

function myFunction2() {
    // alert("Right click");
    var audio = new Audio(
        'https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3');
            audio.play();
        
}

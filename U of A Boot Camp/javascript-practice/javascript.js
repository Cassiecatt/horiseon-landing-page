document.getElementById("buttongrow").addEventListener("click", function() {
    //when clicked grows box
    document.getElementById("box").style.height="250px"
});

document.getElementById("buttonblue").addEventListener("click", function() {
    //when clicked changes box color
    document.getElementById("box").style.backgroundColor="blue"
});

document.getElementById("buttonfade").addEventListener("click", function() {
    //when clicked resets button to orignal form
    document.getElementById("box").style.opacity=".5"
});

document.getElementById("buttonreset").addEventListener("click", function() {
    //when clicked resets button to orignal form
    document.getElementById("box").style="height:150px; width:150px; background-color:orange; margin:25px"
});






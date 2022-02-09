var body = document.querySelector("body")
body.style.backgroundColor = "#fff"

function changeColor(){

    var colorBG = "#"
    var possible = "ABCDEF0123456789";
    for (var i = 0; i < 6; i++){
        colorBG += possible.charAt(Math.floor(Math.random()*possible.length))
    }
    var p = document.getElementById("p")
    p.innerText = "HEX COLOR: " + colorBG

    body.style.backgroundColor = colorBG




}
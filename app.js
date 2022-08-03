var img = document.getElementById("myImg")
function on(){
    img.src = 'images/bulbon.png'
}
function off(){
    img.src = 'images/bulboff.png'
}
var imgs = document.getElementById("myImgs")
function stop(){
    imgs.src = 'images/red.png'
}
function wait(){
    imgs.src = 'images/yellow.png' 
} 
function go(){
    imgs.src = 'images/green.png'
}
var character = document.getElementById("character");
var block = document.getElementById("block");
function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    }, 500);
}

var checkDead = setInterval(function(){
    var characterTop = 
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = 
    parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<60 && blockLeft>40 && characterTop==150){
        block.style.animation = "none";
        block.style.display = "none";
        alert("You have lost, refresh the page to try again\n Remember, mouse click to jump")
    }
}, 10);
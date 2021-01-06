// style functions
function addstyle(p){
    p.add("pressed")
    p.remove("pink")
    p.add("red")
}
function removestyle(p) {
    setTimeout(function () {
        p.remove("red");
        p.add("pink");
        p.remove("pressed");
    }, 100);
}


// event listners
    // touch listner
const btnArray = document.querySelectorAll('.drum')
for(var i=0;i<btnArray.length;i++){
    btnArray[i].addEventListener('click', function(){
        play(this.innerHTML)
    })
}
    // press listner
document.addEventListener('keydown',function(event){
    console.log(event.key);
    play(event.key)
})



// player
function play(keyp){
    var audio = new Audio();
        switch (keyp) {
            case "w":
                addstyle(document.querySelector('.crash').classList)
                audio.src="sounds/crash.mp3"
                audio.play()
                removestyle(document.querySelector('.crash').classList)
                break;
            case "a":
                addstyle(document.querySelector('.kick-bass').classList)
                audio.src="sounds/kick-bass.mp3"
                audio.play()
                removestyle(document.querySelector('.kick-bass').classList)
                break;
            case "s":
                addstyle(document.querySelector('.snare').classList)
                audio.src="sounds/snare.mp3"
                audio.play()
                removestyle(document.querySelector('.snare').classList)
                break;
            case "d":
                addstyle(document.querySelector('.tom-1').classList)
                audio.src="sounds/tom-1.mp3"
                audio.play()
                removestyle(document.querySelector('.tom-1').classList)
                break;
            case "j":
                addstyle(document.querySelector('.tom-2').classList)
                audio.src="sounds/tom-2.mp3"
                audio.play()
                removestyle(document.querySelector('.tom-2').classList)
                break;
            case "k":
                addstyle(document.querySelector('.tom-3').classList)
                audio.src="sounds/tom-3.mp3"
                audio.play()
                removestyle(document.querySelector('.tom-3').classList)
                break;
            case "l":
                addstyle(document.querySelector('.tom-4').classList)
                audio.src="sounds/tom-4.mp3"
                audio.play()
                removestyle(document.querySelector('.tom-4').classList)
                break;
            default:
                break;
        }
}


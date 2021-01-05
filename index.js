const btnArray = document.querySelectorAll('.drum')
for(var i=0;i<btnArray.length;i++){
    btnArray[i].addEventListener('click', function() {
        var p = this.classList;
        p.remove("pink")
        setTimeout(5000)
        p.add("red")
        p.add("pressed")
        var audio = new Audio();
        audio.src=`sounds/${this.classList[0]}.mp3`;
        audio.play();
        setTimeout(function(){ p.add("pink");
        p.remove("pressed");}, 300);
    })
}

// var audio = new Audio();
// audio.src="sounds/crash.mp3";
// audio.play(); 

// var date =new Date().toLocaleTimeString();
// var audio = new Audio();
// audio.controls="true"
// audio.innerHTML=
//     '<source src ="sounds/crash.mp3" type="audio/mp3"/><source src ="sounds/snare.mp3" type="audio/mp3"/>'

// document.querySelector('.set').appendChild(audio)


// console.log(date)
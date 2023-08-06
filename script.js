const divs = document.querySelectorAll('div') ;

for(let ele of divs){
    const cl= ele.className ; 
    ele.addEventListener('click', ()=>{
        makesound(cl) ;
        pressed(cl) ;
    })
}


function makesound(name){
    switch (name) {
        case "A":
            var audio= new Audio("./Sounds/clap.wav")
            audio.play()
            break;
        
        case "S":
            var audio= new Audio("./Sounds/clap.wav")
            audio.play()
            break;
        
        case "D":
            var audio= new Audio("./Sounds/kick.wav")
            audio.play()
            break;

        case "F":
            var audio= new Audio("./Sounds/openhat.wav")
            audio.play()
            break;

        case "G":
            var audio= new Audio("./Sounds/boom.wav")
            audio.play()
            break;

        case "H":
            var audio= new Audio("./Sounds/ride.wav")
            audio.play()
            break;

        case "J":
            var audio= new Audio("./Sounds/snare.wav")
            audio.play()
            break;

        case "K":
            var audio= new Audio("./Sounds/tom.wav")
            audio.play()
            break;

        case "L":
            var audio= new Audio("./Sounds/tink.wav")
            audio.play()
            break;

        default:
            break;
    }
}

document.addEventListener('keypress', (event)=>{
    const val= event.key.toUpperCase()

    makesound(val)
    pressed(val)
})

function pressed(name){
    document.querySelector('.' + name).classList.add("clicked")

    setTimeout(()=>{
        document.querySelector('.' + name).classList.remove("clicked")
    }, 200)
}
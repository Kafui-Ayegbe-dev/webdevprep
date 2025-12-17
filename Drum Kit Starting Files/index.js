var btnList = document.querySelectorAll(".drum");

// add event listener to all button objects
for(var i=0; i < btnList.length; i++){
    btnList[i].addEventListener("click",function(){
        var btnInnerHtml = this.innerHTML;

        makeSound(btnInnerHtml);

        buttonAnimation(btnInnerHtml);

    });
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);

})

function makeSound(key){

    var soundList = ['./sounds/crash.mp3',
        './sounds/kick-bass.mp3',
        './sounds/snare.mp3',
        './sounds/tom-1.mp3',
        './sounds/tom-2.mp3',
        './sounds/tom-3.mp3',
        './sounds/tom-4.mp3'
    ]


    switch (key) {
        case 'w':
            var s1 = new Audio(soundList[0]);
            s1.play();
            break;
        case 'a':
            var s2 = new Audio(soundList[1]);
            s2.play();
            break;
        case 's':
            var s3 = new Audio(soundList[2]);
            s3.play();
            break;
        case 'd':
            var s4 = new Audio(soundList[3]);
            s4.play();
            break;
        case 'j':
            var s5 = new Audio(soundList[4]);
            s5.play();
            break;
        case 'k':
            var s6 = new Audio(soundList[5]);
            s6.play();
            break;
        case 'l':
            var s7 = new Audio(soundList[6]);
            s7.play();
            break;
    
        default:
            console.log(keychar)
            break;
    }

    
}

document.addEventListener("keydown", function(event){
    console.log(event.key);
});

function buttonAnimation(key){
    var activeBtn = document.querySelector("." + key);

    activeBtn.classList.add("pressed");

    setTimeout(()=> {
        activeBtn.classList.remove("pressed");
    }, 100);


}
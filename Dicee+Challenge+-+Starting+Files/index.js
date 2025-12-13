
// generates a random number
function randomNumber1(){
    var n = Math.random();

    n = n * 6
    n = Math.floor(n);

    n += 1;
    console.log(n)

    return n;
}

var result1;
result1 = randomNumber1();

document.querySelector(".img1").
setAttribute("src", `./images/dice${result1}.png`);


// generates a random number
function randomNumber2(){
    var n = Math.random();

    n = n * 6
    n = Math.floor(n);

    n += 1;
    console.log(n)

    return n;
}

var result2;
result2 = randomNumber2();

document.querySelector(".img2")
.setAttribute("src", `./images/dice${result2}.png`);


if(result1 === result2){
    document.querySelector("h1").innerText = "Draw!";
}
else if (result1 > result2) {
    document.querySelector("h1").innerText = "🚩Player 1 Wins!";
}
else {
    document.querySelector("h1").innerText = "Player 2 Wins!🚩";
}
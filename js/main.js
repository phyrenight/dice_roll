function randomNumberGenerator(){
    let min = 1;
    let max = 7;
    return Math.floor(Math.random() * (min - max) + max)
}

function displayNumber(){
    console.log(randomNumberGenerator())
}
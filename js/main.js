function randomNumberGenerator(){
    let min = 1;
    let max = 6;
    return Math.floor(Math.random() * (min - max) + max)
}
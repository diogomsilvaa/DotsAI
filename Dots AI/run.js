function createDots(n){
    dots = [];
    for (let i = 0; i < n; i++) {
        dots[i] = new Dot;
        dots[i].show();
    }
    return dots;
}

function moveDots(dots){
    intervals = [];
    for (let i  = 0; i < dots.length; i++) {
        intervals[i] = setInterval(() => {dots[i].move()}, 10);
    }
    setTimeout(() => {
        for (let i = 0; i < dots.length; i++) {
            clearInterval(intervals[i]);
            
        }
    }, 10000);
}


console.log(dotsMap.offsetTop);
console.log(dotsMap.offsetRight);
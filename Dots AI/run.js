function createMap(){
    const map = new DotsMap;
    map.show();
    return map;
}

function createWall(x, y, width, height, map){
    const wall = new Wall(x, y, width, height, map);
    wall.show();
    map.walls.push(wall);
}

function createDots(n, map){
    const dots = [];
    for (let i = 0; i < n; i++) {
        dots[i] = new Dot(map);
        dots[i].show();
    }
    return dots;
}

function moveDots(dots){
    const intervals = [];
    for (let i  = 0; i < dots.length; i++) {
        intervals[i] = setInterval(() => {dots[i].move()}, 10);
    }
    setTimeout(() => {
        for (let i = 0; i < dots.length; i++) {
            clearInterval(intervals[i]);
            
        }
    }, 10000);
}



class Obstacle{
    constructor(x, y, width, height){
        this.pos = [x, y];
        this.width = width;
        this.height = height;
    }

    show(){
        fill(25, 0, 255);
        rect(this.pos[0], this.pos[1], this.width, this.height);
    }
}

function showObstacles(obs){
    for (let i = 0; i < obs.length; i++) {
        obs[i].show();
    }
}
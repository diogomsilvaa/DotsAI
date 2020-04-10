class Goal{
    constructor(x, y){
        this.pos = [x, y];
    }

    show(){
        fill(255, 17, 0);
        rect(this.pos[0], this.pos[1], 10, 10);
    }
}
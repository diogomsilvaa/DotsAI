class Goal{
    constructor(x, y){
        this.pos = [x, y];
    }

    show(){
        fill(252, 3, 3);
        rect(this.pos[0], this.pos[1], 5, 5);
    }
}
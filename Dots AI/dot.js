class Dot{
    constructor(map){
        //map
        this.map = map;
        this.mapRep = this.map.representation;
        //dot attributes
        this.size = 10;
        this.x = this.map.departure.x + 15;
        this.y = this.map.departure.y + 15;
        this.availableMoves = [[0,-1],[0,0],[0,1],[1,-1],[1,0],[1,1],[-1,-1],[-1,0],[-1,1]];
        this.alive = true;
        this.arrived = false;
        //dot representation
        this.color = "green";
        this.representation = document.createElement("span");
        //AI stuff
        this.brain = new Brain;
        this.brain.generateMoves();
    }

    move(){
        this.checkBoundries();
        this.checkWalls();
        this.checkDestiny();
        if(this.brain.step == this.brain.numberSteps){
            this.alive = false;
        }
        if(this.alive && !(this.arrived)){
            this.x += this.brain.getMove()[0];
            this.y += this.brain.getMove()[1];
            this.representation.style.top = `${this.y}px`;
            this.representation.style.left = `${this.x}px`;
            this.brain.step +=1;
        }
    }
    
    checkBoundries(){
        if (this.x > this.mapRep.offsetWidth - 10|| this.x < 0 || this.y >this.mapRep.offsetHeight -10|| this.y < 0){
            this.alive = false;
        }
    }

    checkWalls(){
        for (let i = 0; i < this.map.walls.length; i++){
            const wall = this.map.walls[i];
            if (this.x > wall.x - 10 && this.x < wall.x + wall.width && this.y > wall.y && this.y < wall.y + wall.height){
                this.alive = false;
            }
            
        }
    }

    checkDestiny(){
        const destiny = this.map.destiny;
        if (this.x > destiny.x && this.x < destiny.x + destiny.width && this.y > destiny.y && this.y < destiny.y + destiny.height){
            this.arrived = true;
        }
    }
    
    show(){
        this.representation.style.height = `${this.size}px`
        this.representation.style.width = `${this.size}px`
        this.representation.style.position = "absolute";
        this.representation.style.top = `${this.y}px`;
        this.representation.style.left = `${this.x}px`;
        this.representation.style.backgroundColor = this.color;
        this.representation.style.display = "inline-block";
        this.representation.style.borderRadius = "50%";
        this.mapRep.appendChild(this.representation);
    }
}





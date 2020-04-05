class Dot{
    constructor(map){
        this.map = map;
        this.mapRep = this.map.representation;
        this.size = 10;
        this.x = this.map.departure.x + 15;
        this.y = this.map.departure.y + 15;
        this.alive = true;
        this.color = "green";
        this.representation = document.createElement("span");
    }

    move(){
        this.checkBoundries();
        this.checkWalls();
        if(this.alive){
            this.x += Math.floor(Math.random() * (21)) -10;
            this.y += Math.floor(Math.random() * (21)) -10;
            this.representation.style.top = `${this.y}px`;
            this.representation.style.left = `${this.x}px`;
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





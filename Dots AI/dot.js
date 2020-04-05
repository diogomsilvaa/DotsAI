class Dot{
    constructor(){
        this.size = 10;
        this.x = dotsMap.offsetWidth/2;
        this.y = dotsMap.offsetHeight/2;
        this.alive = true;
        this.color = "green";
        this.representation = document.createElement("span");
    }

    move(){
        this.checkBoundries();
        if(this.alive){
            this.x += Math.floor(Math.random() * (21)) -10;
            this.y += Math.floor(Math.random() * (21)) -10;
            this.representation.style.top = `${this.y}px`;
            this.representation.style.left = `${this.x}px`;
        }
        
    }
    
    checkBoundries(){
        if (this.x > dotsMap.offsetWidth - 10|| this.x < 0 || this.y >dotsMap.offsetHeight -10|| this.y < 0){
            this.alive = false;
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
        dotsMap.appendChild(this.representation);
    }
}





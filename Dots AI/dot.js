class Dot{
    constructor(){
        this.pos = [width/2, height-10]; 
        this.vel = [0, 0];
        this.accel = [0, 0];
        this.brain = new Brain(400);
        this.alive = true;
        this.fitness;
        this.arrived = false;
        this.best = false;
    }

    show(){
        if(this.best){
            fill(255, 0, 0);
            ellipse(this.pos[0], this.pos[1], 20, 20);
        }else{
            fill(0, 153, 0);
            ellipse(this.pos[0], this.pos[1], 8, 8)
        }
    }

    move(){
        if(this.alive){
            this.accel = this.brain.directions[this.brain.step];
            this.vel[0] += this.accel[0]
            this.vel[1] += this.accel[1]
            this.vel[0] = Math.max(Math.min(this.vel[0], 5),-5);
            this.vel[1] = Math.max(Math.min(this.vel[1], 5),-5);
            this.pos[0] += this.vel[0];
            this.pos[1] += this.vel[1];
            this.brain.step++;
        }
        
    }

    update(goal){
        this.show();
        if (this.brain.step >= this.brain.directions.length){
            this.alive = false;
        }
        if(this.pos[0] <= 0 || this.pos[0] > width || this.pos[1] <= 0 || this.pos[1] > height){
            this.alive = false;
        }
        if(this.pos[0] <= goal.pos[0] + 4 && this.pos[0] > goal.pos[0]  && this.pos[1] <= goal.pos[1] + 4 && this.pos[1] > goal.pos[1] ){
            this.alive = false;
            this.arrived = true;
        }
        this.move();
    }
    
    getFitness(goal){
        let distance = Math.round(Math.sqrt(Math.pow((goal.pos[0] + 4 - this.pos[0]),2) + Math.pow((goal.pos[1] + 4 - this.pos[1]),2)));
        if (distance == 0){distance = 1};
        if(this.arrive){
            this.fitness =1/50 + 1/Math.pow(this.brain.step,2);
        }else{
            this.fitness = 1/Math.pow((distance),2);
        }
        return this.fitness;
    }
}
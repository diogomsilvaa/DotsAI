class Dot{
    constructor(){
        this.pos = [width/2, height-50]; 
        this.vel = [0, 0];
        this.accel = [0, 0];
        this.brain = new Brain(1000);
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
        this.accel = this.brain.directions[this.brain.step];
        this.vel[0] += this.accel[0]
        this.vel[1] += this.accel[1]
        this.vel[0] = Math.max(Math.min(this.vel[0], 5),-5);
        this.vel[1] = Math.max(Math.min(this.vel[1], 5),-5);
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
        this.brain.step++;
    }

    update(goal, obs){
        this.show();
        if(this.alive && !this.arrived){
            if(this.pos[0] <= 0 || this.pos[0] > width || this.pos[1] <= 0 || this.pos[1] > height){
                this.alive = false;
                this.obs = true;
            }
            for (let i = 0; i < obs.length; i++) {
                if(this.pos[0] <= obs[i].pos[0] + obs[i].width && this.pos[0] > obs[i].pos[0]  && this.pos[1] <= obs[i].pos[1] + obs[i].height && this.pos[1] > obs[i].pos[1] ){
                    this.alive = false;
                    this.obs = true;
                }
            }
            if(this.pos[0] <= goal.pos[0] +4 && this.pos[0] > goal.pos[0]  && this.pos[1] <= goal.pos[1] + 4 && this.pos[1] > goal.pos[1] ){
                this.alive = false;
                this.arrived = true;
            }
            this.move();
        }
    }
    
    getFitness(goal){
        if(this.arrive){
            this.fitness =1/16 + 10000/Math.pow(this.brain.step,2);
        }else{
            let distance = Math.sqrt(Math.pow((goal.pos[0] + 4 - this.pos[0]),2) + Math.pow((goal.pos[1] + 4 - this.pos[1]),2)).toFixed(5);
            this.fitness = 1/Math.pow((distance),2);
        }
        return this.fitness;
    }
}
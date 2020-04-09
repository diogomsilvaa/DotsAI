class Brain{
    constructor(nSteps){
        this.directions = [];
        this.step = 0;
        this.randomize(nSteps);
    }

    randomize(nSteps){
        for (let i = 0; i < nSteps; i++) {
            this.directions[i] = [Math.random().toFixed(2) * 2 - 1, Math.random().toFixed(2) * 2 - 1];
        }
    }

    clone(brain){
        this.directions = [...brain.directions];
    }

    mutate(mRate){
        for (let i = 0; i < this.directions.length; i++) {
            if(Math.random() < mRate){   
                this.directions[i] = [Math.random().toFixed(2) * 1 - 0.5, Math.random().toFixed(2) * 1 - 0.5];
            }
        }
    }
    
    
}
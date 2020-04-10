class Population{
    constructor(n){
        this.individuals = [];
        this.matingPool = [];
        this.elite =[];
        this.generation = 0;
        this.fitnessSum = 0;
        this.nextGen;
        this.minSteps = 1000;
        this.generate(n);
        
    }

    generate(n){
        for (let i = 0; i < n; i++) {
            this.individuals[i] = new Dot;
        }
    }

    update(goal, obs){
        for (let i = 0; i < this.individuals.length; i++) {
            if(this.individuals[i].brain.step > this.minSteps){
                this.individuals[i].alive = false;
            }
            this.individuals[i].update(goal, obs); 
        }
    }

    getFitness(goal){
        this.fitnessSum = 0;
        for (let i = 0; i < this.individuals.length; i++) {
            this.fitnessSum += this.individuals[i].getFitness(goal);
        }
    }

    allDead(){
        for (let i = 0; i < this.individuals.length; i++) {
            if (this.individuals[i].alive){
                return false;
            }
        }
        return true;
    }

    getParent(){
        const random = Math.random() * this.fitnessSum;
        let sum = 0;
        for (let i = 0; i < this.individuals.length; i++) {
            sum += this.individuals[i].fitness;
            if (sum > random){
                return this.individuals[i];
            }
        }
    }

    yoBabies(p1, p2){
        /*
        const crossPoint1 = Math.floor(Math.random() * 200);
        const crossPoint2 = Math.floor(Math.random() * 200) + 200;
        const offspring1 = new Dot;
        const offspring2 = new Dot;
        offspring1.brain.directions = [];
        offspring2.brain.directions = [];
        for (let i = 0; i < 400; i++) {
            if(i > crossPoint1 && i < crossPoint2){
                offspring1.brain.directions[i] = p2.brain.directions[i];
                offspring2.brain.directions[i] = p1.brain.directions[i];
            }else{
                offspring1.brain.directions[i] = p1.brain.directions[i];
                offspring2.brain.directions[i] = p2.brain.directions[i];
            }
        }
        return [offspring1, offspring2];
        */
        const offspring1 = new Dot;
        const offspring2 = new Dot;
        offspring1.brain.directions = [];
        offspring2.brain.directions = [];
        for (let i = 0; i < 400; i++) {
            if (Math.random() < 0.5){
                offspring1.brain.directions[i] = p2.brain.directions[i];
                offspring2.brain.directions[i] = p1.brain.directions[i];
            }else{
                offspring1.brain.directions[i] = p1.brain.directions[i];
                offspring2.brain.directions[i] = p2.brain.directions[i];
            }
        }
        return [offspring1, offspring2];
    }

    crossover(){
        this.nextGen = [];
        this.getTheBestBoy();
        this.nextGen[0] = new Dot;
        this.nextGen[0].best = true;
        this.nextGen[0].brain.directions = [...this.bestIndividual.brain.directions];
        let i = 1;
        while(i < this.individuals.length){
            const dot = new Dot;
            dot.brain.clone(this.getParent().brain);
            this.nextGen[i] = dot;
            
            i++;
        }
        this.generation++;
    }
    
    mutateTheBoys(){
        for (let i = 1; i < this.nextGen.length; i++) {
            this.nextGen[i].brain.mutate(0.01)
        }
        this.individuals = this.nextGen;
    }
   
    getTheBestBoy(){
        let bestFitness = 0;
        let bestBoy;
        for (let i = 0; i < this.individuals.length; i++) {
            if(this.individuals[i].fitness > bestFitness){
                bestFitness = this.individuals[i].fitness;
                bestBoy = i;
            }
        }
        this.bestIndividual = this.individuals[bestBoy];
        if(this.bestIndividual.arrived){
            this.minSteps = this.bestIndividual.brain.step;
        }
    }

    numberArrived(){
        let res =0;
        for (let i = 0; i < this.individuals.length; i++) {
            if(this.individuals[i].arrived){
                res++;
            }
        }
        console.log(res);
    }
}
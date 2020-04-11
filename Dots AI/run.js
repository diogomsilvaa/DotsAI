let popSize = 1000;


function setup(){
    createCanvas(700, 700);
    frameRate(100);
    theGoal = new Goal(width/2, 20);
    maBoys = new Population(popSize);
    console.log(maBoys);
    obstacles = [/*new Obstacle(0,500,500,50) , new Obstacle(250,300,500,50), new Obstacle(0,125,500,50)*/];
    running = false;
    starting = false;
//-----------------------

}

function draw(){
    if (starting){
        popSize = UI_popSize();
        maBoys = new Population(popSize);
        UI_updateGen(0);
        starting = false;
    }
    background(0);
    theGoal.show();
    showObstacles(obstacles);
    if(running){
        if (maBoys.allDead()){
            maBoys.getFitness(theGoal);
            maBoys.crossover();
            maBoys.mutateTheBoys();
        }else{
            maBoys.update(theGoal, obstacles);
        }
    }else{
        
    }
}



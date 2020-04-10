
function setup(){
    createCanvas(700, 700);
    frameRate(100);
    theGoal = new Goal(width/2, 20);
    maBoys = new Population(1000);
    console.log(maBoys);
    obstacles = [new Obstacle(0,500,500,50) , new Obstacle(250,300,500,50), new Obstacle(0,125,500,50)];
    end = false;
//-----------------------

}

function draw(){
    if(!end){
        background(0);
        theGoal.show();
        showObstacles(obstacles);

        if (maBoys.allDead()){
            maBoys.numberArrived();
            maBoys.getFitness(theGoal);
            maBoys.crossover();
            maBoys.mutateTheBoys();
        }else{
            maBoys.update(theGoal, obstacles);
        }
    }
}



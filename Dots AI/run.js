
function setup(){
    createCanvas(700, 700);
    theGoal = new Goal(width/2 - 10, 10);
    maBoys = new Population(500);
    console.log(maBoys);
    end = false;

}

function draw(){
    if(!end){
        background(0);
        theGoal.show();
        if (maBoys.allDead()){
            maBoys.getFitness(theGoal);
            maBoys.crossover();
            maBoys.mutateTheBoys();
        }else{
            maBoys.update(theGoal);
        }
    }
}



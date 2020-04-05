class Brain{
    constructor(){
        this.moves = [];
        this.step = 0;
        this.numberSteps = 2000;
        this.availableMoves = [[0,-1],[0,0],[0,1],[1,-1],[1,0],[1,1],[-1,-1],[-1,0],[-1,1]];

    }

    generateMoves(){
        for (let i = 0; i < this.numberSteps; i++) {
            this.moves.push(this.availableMoves[Math.floor(Math.random() * 9)])
        }
    }

    getMove(){
        return this.moves[this.step];
    }
}
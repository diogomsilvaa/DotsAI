
class DotsMap{
    constructor(){
        this.color = "black";
        this.width = 1000;
        this.height = 800;
        this.representation = document.createElement("div");
        this.walls = [];
        this.departure = {
            x: 0,
            y: 0
        }
    }

    show(){
        const mapStyle = this.representation.style;
        mapStyle.backgroundColor = this.color;
        mapStyle.width = `${this.width}px`;
        mapStyle.height = `${this.height}px`;
        mapStyle.position = "absolute";
        mapStyle.left = "20%";
        mapStyle.border = "green solid 10px"
        document.body.appendChild(this.representation);
    }

    crateDeparture(x, y){
        this.departure.x = x;
        this.departure.y = y;
        const depRep = document.createElement("span");
        depRep.style.backgroundColor = "red";
        depRep.style.position = "absolute";
        depRep.style.display = "inline-block";
        depRep.style.top = y;
        depRep.style.left = x;
        depRep.style.width = "30px";
        depRep.style.height = "30px";
        this.representation.appendChild(depRep);
    }
}






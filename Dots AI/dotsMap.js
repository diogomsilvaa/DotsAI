
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
        this.destiny = {
            x: 0,
            y: 0, 
            width: 30,
            height: 30
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

    createDeparture(x, y){
        this.departure.x = x;
        this.departure.y = y;
        const depRep = document.createElement("span");
        depRep.style.backgroundColor = "red";
        depRep.style.position = "absolute";
        depRep.style.display = "inline-block";
        depRep.style.top = `${y}px`;
        depRep.style.left = `${x}px`;
        depRep.style.width = "30px";
        depRep.style.height = "30px";
        this.representation.appendChild(depRep);
    }

    createDestiny(x, y){
        this.destiny.x = x;
        this.destiny.y = y;
        const desRep = document.createElement("span");
        desRep.style.backgroundColor = "red";
        desRep.style.position = "absolute";
        desRep.style.display = "inline-block";
        desRep.style.top = `${y}px`;
        desRep.style.left = `${x}px`;
        desRep.style.width = `${this.destiny.width}px`;
        desRep.style.height = `${this.destiny.height}px`;
        desRep.style.border = "yellow 3px solid";
        this.representation.appendChild(desRep);
    }

    
}







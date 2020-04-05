class Wall{
    constructor(x, y, width, height, map){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.map = map.representation;
        this.color = "gray";
        this.representation = document.createElement("span");
    }

    show(){
        this.representation.style.height = `${this.height}px`;
        this.representation.style.width = `${this.width}px`;
        this.representation.style.position = "absolute";
        this.representation.style.top = `${this.y}px`;
        this.representation.style.left = `${this.x}px`;
        this.representation.style.backgroundColor = this.color;
        this.representation.style.display = "inline-block";
        this.representation.style.border = "green 1px solid";
        this.map.appendChild(this.representation);
    }
}
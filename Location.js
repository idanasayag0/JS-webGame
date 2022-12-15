class Location{
    constructor(x, y){ 
        this.x = x;
        this.y = y;
    }
    distanceTo(otherLocation){ // returns the distance between this location and the other location
        return Math.sqrt(Math.pow(this.x - otherLocation.x, 2) + Math.pow(this.y - otherLocation.y, 2));
    }
    //setter and getter
    setX(x){
        this.x = x;
    }
    getX(){
        return this.x;
    }
    setY(y){
        this.y = y;
    }
    getY(){
        return this.y;
    }

}
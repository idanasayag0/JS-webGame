class Item{
    //create default constructor that will generate random items
    constructor(){
        const randomType = ["hp","armor","ad"];
        const randomValue = [-15,-10,-5,5,10,15];
        this.type = randomType[Math.floor(Math.random()*randomType.length)];
        this.value = randomValue[Math.floor(Math.random()*randomValue.length)];
    }
    //Get type/value
    getType(){
        return this.type;
    }
    getValue(){
        return this.value;
    }
}


//create a function that creates a random monster from the json file
function createRandomMonster(){
    let randomMonster = monsterKeys[Math.floor(Math.random() * monsterKeys.length)];
    return monsterList[randomMonster];
}


class Monster{
    constructor(name, hp, attackDamage, armor){ // location is a Location object
        this.name = name;
        this.hp = hp; 
        this.attackDamage = attackDamage; 
        this.armor = armor;  
    }
    attack(target){ // returns the attack damage
        target.takeDamage(this.getAttackDamage());
    }
    takeDamage(damage){ // takes damage and reduces health - armor
        if(damage > this.getArmor()){
            this.hp -= (damage-this.getArmor());
            console.log(this.name + " took " + (damage-this.getArmor()) + " damage!");
        }
        else{
            this.hp -= (damage-1);
            console.log(this.name + " took no damage!");
        }
        console.log(this.name + " has " + this.hp + " health left!")
    }
    isAlive(){ // returns true if health is greater than 0
        return this.hp > 0;
    }

    //setter and getter
    setName(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    setHp(hp){
        this.hp = hp;
    }
    getHp(){
        return this.hp;
    }
    setAttackDamage(attackDamage){
        this.attackDamage = attackDamage;
    }
    getAttackDamage(){
        return this.attackDamage;
    }
    setArmor(armor){
        this.armor = armor;
    }
    getArmor(){
        return this.armor;
    }
    //set x and set y location
    setX(x){
        this.location.x = x;
    }
    getX(){
        return this.location.x;
    }
    setY(y){
        this.location.y = y;
    }
    getY(){
        return this.location.y;
    }
    

}

const monsterList = {
    "Mike": new Monster("Mike", 42, 7, 12),
    "Pikachu": new Monster("Pikachu", 85, 25, 16),
    "Squirtle": new Monster("Squirtle", 60, 12, 2),
    "Charmander": new Monster("Charmander", 60, 4, 2),
    "Bulbasaur": new Monster("Bulbasaur", 60, 6, 3),
    "Eevee": new Monster("Eevee", 60, 7, 1 ),
    "Snorlax": new Monster("Snorlax", 60, 5, 0),
    "Mew": new Monster("Mew", 60, 7, 2),
    "Mewtwo": new Monster("Mewtwo", 60, 10, 5),
    "Gengar": new Monster("Gengar", 60, 10, 3),
    "Gyarados": new Monster("Gyarados", 60, 15, 3),
    "Dragonite": new Monster("Dragonite", 60, 15, 4),
    "Moltres": new Monster("Moltres", 60, 12, 3),
    "Zapdos": new Monster("Zapdos", 60, 13, 2),
    "Articuno": new Monster("Articuno", 60, 8, 4),
}
const monsterKeys = Object.keys(monsterList);
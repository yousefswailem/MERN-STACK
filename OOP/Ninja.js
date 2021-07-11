class Ninja{
    
    constructor(name){
        this.speed = 3;
        this.strength = 3;
        this.name = name;
        this.health = 0;
        
    }
    sayName(){
        console.log(`${this.constructor.name}`);
    }
    showStats(){
        console.log(`${this.constructor.name} his speed ${this.speed} his health ${this.health} his strength ${this.strength}`);
    }
    drinkSake(health){
        this.health+=10;
        
    }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.drinkSake();
ninja1.drinkSake();
ninja1.drinkSake();
ninja1.showStats();

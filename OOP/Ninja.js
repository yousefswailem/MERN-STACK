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
    drinkSake(){
        this.health+=10;
        
    }
}
const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.drinkSake();
// ninja1.drinkSake();
// ninja1.drinkSake();
// ninja1.showStats();

class Sensei extends Ninja{
     constructor(name){
        super(name);
         this.wisdom=10;
         this.speed = 10;
         this.strength =10;
         this.health = 200;
     }
     speakWisdom(){
        const child= super.drinkSake();
         console.log(`here you can get 10 hp`);
     }
     drinkSake(){
         console.log(`new drinkSake`);
     }
}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();

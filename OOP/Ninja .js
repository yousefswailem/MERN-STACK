// parent Ninja class
class Ninja {
    constructor(name,health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        
        console.log(`${this.name} `);
    }

   showStats(){	
console.log(`${this.name} `);
console.log(`${ this.health} `);
console.log(`${ this.speed } `);
console.log(`${ this.strength } `); 
	
}
drinkSake(){
	this.health+=10;
	console.log(`${ this.health} `);
	
	
}

}
const ninja1 = new Ninja("Hyabusa",10);
ninja1.sayName();
ninja1.showStats();



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
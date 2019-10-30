function Ninja(name) {
    var self = this;
    var speed = 3;
    var strength = 3;
    
    this.name = name;
    this.health = 100;
    this.sayName = function() {
        console.log("Hello my name is " + self.name);
        return this;
    }
    this.showStats = function(){
        console.log("My health is " + self.health + ", speed: " + speed + ", strength: " + strength);
        return this;
    }
    this.drinkShake = function(){
        console.log("My health is now: " + (self.health += 10));
        return this;
    }
    this.punch = function(foe){
        if(!(foe instanceof Ninja)){
            console.log(foe + " is not a Ninja");
        }
        else {
            foe.health -= 5;
        console.log(self.name + " was punched by " + foe.name + "and lost " + (self.health - foe.health) +  " Health!");
        }
        return this;
    }
    this.kick = function(foe){
        if(!(foe instanceof Ninja)){
            console.log(foe + "the world is made of change");
        }
        else{
            foe.health = foe.health - (15*strength);
            console.log(foe.name+" was kicked by "+self.name+" and lost "+15*strength+" Health!");
        }
        return this;
    }

}

var redNinja = new Ninja("Bill Gates");
var ninja1 = new Ninja("Hyabusa");
redNinja.kick("string ");
redNinja.punch(ninja1).kick(ninja1);
ninja1.sayName().showStats().drinkShake();
ninja1.showStats();
ninja1.drinkShake();

/////////////// NINJA PART 3 ES6 STYLE///////////////////////
class Ninja {
    constructor(name) {
        // create a private variable that stores a reference to the new object we create
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
        sayName(){
            console.log("Hello my name is " + this.name);
            
        }
        showStats(){
            console.log("Name:" + this.name + ", Health:" + this.health + ", Speed: " + this.speed + ", Strength: " + this.strength);
            
        }
        drinkShake(){
            this.health = this.health + 10;
            console.log("My health is now: " + (this.health + 10));
            
        }
    }
//Sensei bonus//

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        super.drinkShake();
        console.log("I have the wisdom!");
    }
}



////// PROTOTYPE METHOD ////////






function Ninja(name){

    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

    Ninja.prototype.sayName = function(){
        console.log("Hi my name is "+name+"!");
    }

    Ninja.prototype.showStats = function(){
        console.log("Name: "+this.name+", Health: "+this.health+", Speed: "+speed+", Strength: "+strength)
    }

    Ninja.prototype.drinkSake = function(){
        this.health = this.health + 10;
    }

    Ninja.prototype.punch = function(target){
        if(!(target instanceof Ninja)){
			console.log(target + " is not a Ninja!");
		}
		else {
        target.health = target.health - 5;
        console.log(target.name+" was punched by "+this.name+" and lost 5 Health!")
        }
    }

    Ninja.prototype.kick = function(target){
        if(!(target instanceof Ninja)){
			console.log(target + " is not a Ninja!");
		}
		else {
        target.health = target.health - (15*strength);
        console.log(target.name+" was kicked by "+this.name+" and lost "+15*strength+" Health!");
        }
    }
}
/////////////// ------ ////////////////

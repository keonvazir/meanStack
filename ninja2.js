function Ninja(name) {
    
    // create a private variable that stores a reference to the new object we create
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
// ninja1.showStats();
// ninja1.drinkShake();

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

}
// privateMethod();
var ninja1 = new Ninja("Hyabusa");
ninja1.sayName().showStats().drinkShake();
// ninja1.showStats();
// ninja1.drinkShake();

var customObject = {
    name:'California, Eureka',
    onClick:function(myParam){
      console.log("I've been clicked");
      console.log(myParam, "I've been passed by bind");
      console.log(this.name);
    }
  }
  // our behavior on click.

  var newObject = {
    name:"West Virginia,  Montani semper liberi"
  }
  // modify the button method to this:
  $('button').click(customObject.onClick.bind(newObject));
  // our behavior on click.
   $('button').click(customObject.onClick.bind(customObject,"Bind this argument!"));

   //need bower and node and jquery downloaded and included in main.js file for it to work

   //Bind overwrites or creates a new method in the object

   //Think of commas when you hear Call

   //Think of array's when you hear Apply

   function Ninja(name, age){
    this.name = name;
    this.age = age;
    // there could be lots of other stuff here!
  }
  function BlackBelt(name,age){
    //Commas!
    Ninja.call(this,name,age);
    this.belt = 'black';
  }
  function YellowBelt(name,age){
    //ARRAY
    Ninja.apply(this,[name,age]);
    this.belt = 'yellow';
  }
  var yB = new YellowBelt('mike', 40);
  var bB = new BlackBelt('charlie', 29);
  console.log(bB.name);
  console.log(yB.name);

  //Another use of call and apply: allows us to use 'this', without constructing an object with new first

  unction levelUp() {
    console.log(this.name + " has learned a new kata, in " + this.gender + " favorite language: " + this.language);
  }
  var person = {
    name: 'Lisa',
    gender: 'her',
    language: 'JavaScript, duh!'
  };
  levelUp.call(person);

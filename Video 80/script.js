// Classes are like unfilled form which anyone can fill
// Objects are like if someone fill the form then that form is his/her

let king = {
    name: "KingPin",
    age: 28,
    location: "New York"
}; // this is a object
console.log(king);

let devil = {
    name: "Daredevil",
    age: 23
    // Let say I want same location here as well
};

devil.__proto__ = king; // This will set the prototype of devil as king

console.log(devil)
// As you can see below when I try to fetch location in console
// devil.location
// 'New York'
// devil.age
// 23
// devil.name
// 'Daredevil'

// But Setting Prototype Is Not Good Practice Because Don't Add The Property In The Element And Adds All Properties In The Prototype Of The Object Where We Set It.
// So To Overcome This Problem We Use Classes

class people{
    constructor(name, gender, location, superPower, ){
        this.name = name;
        this.gender = gender;
        this.location = location;
        this.superPower = superPower;
    }

    isDefender(){
        if(this.location == "New York"){
            console.log(`Yes, ${this.name} is a Defender`);
        }
        else{
            console.log(`No, ${this.name} is not a Defender`);
        }
    }
    // We can define more function in this class
}

let jassica = new people("Jassica Jhons", "Female", "New York", "Mistirious");
console.log(jassica);
jassica.isDefender();

let nobu = new people("Nobu", "Male", "Tokeyo", "Ninja");
console.log(nobu);
nobu.isDefender();

// Let use extends keyword which is used to inherite one class to another
class marvel extends people{
    constructor(name, gender, location, superPower, type){
        super(name, gender, location, superPower); // This super() will include the constructors of the extended class
        // Although people class comes in the prototype on marvel class but to use constructor we have to use super()
        this.type = type;
    }

    // We can also overwrite any method
}

let spiderMan = new marvel("Spider Man", "Male", "New York", "Spider Sence And Strength", "Hero");
console.log(spiderMan);


// There is one more method know is 'getter and setter' used to get and set properties in any class.

// One more thing, this is how instanceof works:
// nobu instanceof people
// true
// spiderMan instanceof people
// true
// spiderMan instanceof marvel
// true
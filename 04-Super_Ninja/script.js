class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName = () => console.log(`Ninja name is ${ this.name }`);
    showStats = () => console.log(`Ninja name is ${ this.name } with a strength of ${ this.strength }, speed of ${ this.speed }, and health of ${ this.health }.`);
    drinkSake = () => this.health += 10;
}
class Sensei extends Ninja {
    constructor(name, health) {
        super(name, health);
        this.wisdom = 10; 
    }
    speakWisdom = () => this.health += 20;
}

const n1 = new Ninja("Jason", 10);

n1.sayName();
n1.showStats();
n1.drinkSake();
n1.showStats();

//sensei
const n2 = new Sensei("Michael", 20);

n2.showStats();
n2.speakWisdom();
n2.showStats();
console.log(n2.wisdom)
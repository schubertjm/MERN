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

const n1 = new Ninja("Jason", 10);

n1.sayName();
n1.showStats();
n1.drinkSake();
n1.showStats();
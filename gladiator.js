class Gladiator {
    constructor(name, weapon = {Spear, Club, Trident }){
        this.name = name
        this.weapon = weapon

    }
}

const max = new Gladiator("Maximus", "Club");

console.log(max.name);
console.log(max.weapon);
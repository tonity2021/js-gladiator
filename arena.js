class Arena {
    constructor(name){
        this.name = name.charAt(0).toUpperCase() + name.substring(1, 20); 
        

    }
}

const colosseum = new Arena("colosseum");
console.log(colosseum.name);
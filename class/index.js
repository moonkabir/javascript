function Animal(type,live){
    this.type=type;
    this.live=live;
}

class Hu extends Animal{
    constructor(name){
        super("mammal",true)
        this.name=name;
    }
}

var anam=new Hu("moon");

console.log(anam.type);
console.log(anam.name);
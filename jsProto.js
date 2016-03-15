function Dog(name, age, weight, breed) {
  this.name = name;
  this.age = age;
  this.weight = weight;
  this.breed = breed;
}

Dog.prototype.eat = function() {
  this.weight += Math.floor(Math.random() * 2 + 1);
};

Dog.prototype.poop = function() {
  this.weight -= Math.floor(Math.random() * 2 + 1);
};

Dog.prototype.sleep = function() {
  console.log(this.name + ' is sleeping.');
};

Dog.prototype.beg = function() {
  console.log(this.name + ' is begging.');
}

Dog.prototype.act = function() {
  var action = Math.floor(Math.random() * 4 + 1);
  if (action === 1) {
    this.eat();
  } else if (action === 2) {
    this.poop();
  } else if (action === 3) {
    this.sleep();
  } else if (action === 4) {
    this.beg();
  }
};

var jojo = new Dog('Jojo', 7, 72, 'Golden Retriever');
console.log(jojo);
jojo.act();
jojo.act();
console.log(jojo);

function Cat(name, isEvil) {
  this.name = name;
  isEvil = true;
  this.isEvil = isEvil;
  this.happiness = 5;
  this.hunger = 10;
}

Cat.prototype.eatOwnersHomework = function() {
  console.log('Om nom nom calculus ...');
  this.happiness += 1;
  this.hunger += 1;
};

Cat.prototype.poopOutsideLitterBox = function() {
  console.log('THPHPHHPHTHHTTHTPHT smelly. Smelly Cat ...');
  this.happiness += 1;
  this.hunger -= 5;
};

Cat.prototype.batOwnersEye = function() {
  console.log('WHABAMMMMMMMM WAKE UP HEWMAN111! FEED MEEEEEEE!');
  this.happiness += 5;
};

Cat.prototype.sleep = function() {
  console.log("It's finally safe ... for now.");
  this.happiness += 1;
  this.hunger -= 2;
};

Cat.prototype.eat = function() {
  console.log('om nom nom nom. You have pleased your feline overlord.');
  this.happiness += 4;
  this.hunger += 10;
};

Cat.prototype.obeyOwner = function() {
  console.log('Haha this does not happen in real life.');
  this.happiness -= 5;
  this.hunger -=3;
};

Cat.prototype.act = function() {
  if (this.hunger <= 5 || this.happiness <= 5) {
    this.batOwnersEye();
    this.eat();
  } else {
    var action = Math.floor(Math.random() * 8 + 1);
      if (action === 1 || action === 7) {
        this.poopOutsideLitterBox();
      } else if (action === 2) {
        this.eatOwnersHomework();
      } else if (action === 3 || action === 5 || action === 6 || action === 8) {
        this.sleep();
      } else if (action === 4) {
        this.obeyOwner();
      }
    }
  };


var PK = new Cat('PK', false);
console.log(PK);
PK.act();
PK.act();
console.log(PK);

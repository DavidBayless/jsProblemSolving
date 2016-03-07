// var toaster = {
//   // These would be properties of the toaster object.
//   mode: 'toast',
//   time: '4',
//   running: false,
//   pluggedIn: false,
//   color: 'silver metallic',
//
//   // Thid would be a method of the toaster object.
//   toast: function(foodItem) {
//     if (this.pluggedIn) {
//       if(this.time > 6) {
//         return foodItem + ' is burnt';
//       } else if (this.time > 3) {
//         return foodItem + ' is toasted';
//       } else {
//         return foodItem + ' is warm';
//       }
//     }
//   }
//
// }


var Car = function() {

  var wheels = 4;
  var engineOn = false;
  var isFunctional = true;
  var isMoving = false;

  return {
    drive: function(){
      if (engineOn === true && wheels === 4) {
        isMoving = true;
      } else if (wheels !== 4){
        console.log("You don't have enough wheels to drive!");
      } else {
        console.log("Your engine isn't on!");
      }
    },

    brake: function(){
      if (isMoving === true) {
        isMoving === false;
      } else {
        console.log("You're already stopped!");
      }
    },

    turnOn: function(){
      if (isFunctional === true) {
        engineOn = true;
      } else {
        console.log("Your car is broken");
      }
    },

    turnOff: function(){
      if (engineOn === true) {
        engineOn = false;
      } else {
        console.log('Your car is already off!');
      }
    },

    crash: function(driver) {
      if (isMoving === true) {
        isMoving = false;
        isFunctional = false;
        engineOn = false;
        wheels = Math.floor(Math.random() * 5);
        driver.die();
      }
    },

    repair: function() {
      isFunctional = true;
      wheels = 4;
    },

    getWheels: function() {
      return wheels;
    },

    getEngineOn: function() {
      return engineOn;
    },

    getIsFunctional: function() {
      return isFunctional;
    },

    getIsMoving: function() {
      return isMoving;
    }
  }
}

var newCar = new Car();


var Sedan = function() {
  var sedan = Car();

  var doors = 4;
  var size = 'medium-small';

  sedan.getDoors = function(){
    return doors;
  };

  sedan.getSize = function() {
    return size;
  }

  return sedan;
}

var newSedan = new Sedan();



var Camry = function() {
  var camry = Sedan();
  camry.brake = function(driver) {
    var occasionalMovement = Math.floor(Math.random() * 100 + 1);
    if (occasionalMovement > 98) {
      console.log("Your car doesn't stop!");
      this.crash(driver);
    } else {
      console.log("You come to a stop");
    }
  }
  return camry;
}

var myCamry = new Camry();


var People = function() {
  var arms = 2;
  var legs = 2;
  var eyes = 2;
  var isLiving = true;

  return {
    die: function() {
      isLiving = false;
      console.log(this.getName() + ' has died!');
    },
    payTaxes: function() {
      arms--;
      legs--;
    },
    getArms: function() {
      return arms;
    },
    getLegs: function() {
      return legs;
    },
    getEyes: function() {
      return eyes;
    },
    getIsLiving: function() {
      return true;
    }
  }
}

var Person = function(nameVal, ageVal) {
  var person = People();
  var name = nameVal;
  var age = ageVal;

  person.getName = function() {
    return name;
  }

  person.getAge = function() {
    return age;
  }

  return person;
}

var bob = new Person("Bob", 37);

myCamry.turnOn();
myCamry.drive();
myCamry.brake(bob);

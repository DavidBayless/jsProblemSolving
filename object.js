
var Villain = function(name) {
  this.name = name;
};

Villain.prototype.getClass = function() {
  return "Villain";
};

var MovieVillain = function(name, movieName) {
  Villain.call(this, name);
  this.movieName = movieName;
};

MovieVillain.prototype = Object.create(Villain.prototype);
MovieVillain.prototype.constructor = MovieVillain;

MovieVillain.prototype.getClass = function() {
  return "MovieVillain";
};

var Maleficient = function(name, movieName, power) {
  MovieVillain.call(this, name, movieName);
  this.power = power;
};

Maleficient.prototype = Object.create(MovieVillain.prototype);
Maleficient.prototype.constructor = Maleficient;
Maleficient.prototype.getClass = function() {
  return "Maleficient";
};

var myMaleficient = new Maleficient('Maleficient', 'Sleeping Beauty', 'Black Magic and can turn into a Dragon');

console.log(myMaleficient);
console.log(myMaleficient.prototype);
console.log(myMaleficient.getClass());

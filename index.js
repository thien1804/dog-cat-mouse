var Dog = require('./Dog');
var Cat = require('./Cat');
var Mouse = require('./Mouse');

var dog = new Dog('Tom');
var cat = new Cat('meow');
var mouse = new Mouse('Mickey');
dog.eat(cat);

console.log(dog);

console.log('Test pull git');

cat.eat(mouse);
console.log(cat);
try{
	cat.eat(dog);
} catch(err){
	console.log('Error while cat eating a dog');
}

console.log(cat);
'use strcict'

function main () {
  /*** Exercise 1 (Objects and Arrays) ***/
  let myPenguin = {
    name: 'Whiteblack',
    origin: 'Whiteblack the Penguin Sees the World',
    author: 'Margret Rey'
  }
  console.log(`Hello, I'm a penguin and my name is ${myPenguin.name}!`);
  myPenguin.canFly = false;
  myPenguin.chirp = function(){
    console.log('CHIRP CHIRP! Is this what penguins sound like?');
  }
  myPenguin.sayHello = function(){
    console.log(`Hello, I'm a penguin and my name is ${this.name}!`);
  }
  myPenguin.name = 'Penguin McPenguinFace';
  myPenguin.fly = function(){
    (this.canFly) ? console.log('I can fly!') : console.log('No flying for me!');  
  }
  myPenguin.canFly = true;

  console.log(myPenguin.chirp());
  console.log(myPenguin.sayHello());
  console.log(myPenguin.fly());

  /*** Exercise 2 (Objects and Arrays) ***/
  myPenguin.favoriteFoods = ['pizza', 'pasta'];
  console.log(myPenguin.favoriteFoods[1]);
  let firstFavFood = myPenguin.favoriteFoods[0];
  myPenguin.favoriteFoods.push('salad');
  console.log(myPenguin.favoriteFoods.length);
  myPenguin.favoriteFoods[myPenguin.favoriteFoods.length - 1] = 'pineapples';
  let lastFavFood = myPenguin.favoriteFoods[myPenguin.favoriteFoods.length - 1];
  
  for (const prop in myPenguin.favoriteFoods){
    console.log(myPenguin.favoriteFoods[prop]);
  }
  
  /*** Exercise 3 (Objects and Arrays) ***/
  myPenguin.outfit = {
    hat: 'baseball cap',
    shirt: 'Hawaiian shirt',
    pants: 'cargo shorts',
    shoes: 'flip-flops'
  }
  let penguinHatType = myPenguin.outfit.hat;
  console.log(penguinHatType);
  myPenguin.outfit.accessory = 'pocket watch';
  myPenguin.outfit.hat = 'top hat';
  delete myPenguin.outfit.pants;

  for(const prop in myPenguin.outfit){
    console.log(myPenguin.outfit[prop]);
  }

  console.log(myPenguin);
  
  /*** Exercise 4 (Objects and Arrays) ***/
  var gunter = {
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function () {
      console.log("QUACK!!!");
    }
  };
  
  var ramon = {
    name: "Ramón",
    origin: "Happy Feet",
    canFly: true,
    sayHello: function () {
      console.log("Estoy encantado de conocerle.");
    }
  };
  
  var fred = {
    name: "Fred",
    origin: "Sitting Ducks",
    canFly: false,
    sayHello: function () {
      console.log("Hi there!");
    }
  };
  
  let penguins = [gunter, ramon, fred];
  console.log(penguins[0]);
  secondPenguin = penguins[1];
  console.log(penguins[2].name);
  penguins.push(myPenguin);
  console.log(penguins.length);
  penguins[0].canFly = true;
  penguins[0].sayHello();
  
  penguins.forEach(penguin => {
    console.log(penguin.name);
  });

  penguins.forEach(penguin => {
    console.log(penguin.sayHello());
  });

  penguins.forEach(penguin => {
    penguin.numberOfFeet = 2;
  });

  penguins.forEach(penguin => {
    if(penguin.canFly){
      console.log(`${penguin.name} can fly!`);
    }
  });

  console.log(penguins);
};


window.addEventListener('load', main);
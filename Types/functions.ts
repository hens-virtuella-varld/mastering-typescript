function square(num: number): number {
  return num * num;
}

// function greet(person: string) {
//   person * person;
//   return `Hi there, ${person}!`;
// }

const doSomething = (person: string, age: number, isFunny: boolean) => {};
doSomething('ChickenFace', 76, false);

square(2); // 4

function greet(person: string = 'stranger') {
  return `Hi there, ${person}!`;
}

greet('Tom');

function rando(num: number) {
  if (Math.random() < 0.5) {
    return num.toString();
  }
  return num;
}

const colors = ['red', 'orange', 'yellow'];
colors.map((color) => {
  return color.toLocaleUpperCase();
});

function printTwice(msg: string): void {
  console.log(msg);
  console.log(msg);
}

function secondsInDay() {
  return '24 * 60 * 60';
}

let birthYear = 1994;

function makeError(msg: string): never {
  throw new Error(msg);
}

function gameLoop(): never {
  while (true) {
    console.log('GAME LOOP RUNNINGG!');
  }
}

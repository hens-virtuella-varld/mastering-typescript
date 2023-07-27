// let age: number | string = 21;
// age = 23;
// age = '24';

// type Point = {
//   x: number;
//   y: number;
// };

// type Loc = {
//   lat: number;
//   long: number;
// };

// let coordinates: Point | Loc = { x: 1, y: 34 };
// coordinates = { lat: 321.213, long: 23.33 };

// function printAge(age: number | string): void {
//   console.log(`You are ${age} years old`);
// }

// printAge(23);
// printAge('83');

// function calculateTax(price: number | string, tax: number) {
//   if (typeof price === 'string') {
//     price = parseFloat(price.replace('$', ''));
//   }
//   return price * tax;
// }

// console.log(calculateTax(45, 0.07));
// console.log(calculateTax('45', 0.07));

// const stuff: (number | string)[] = [1, 2, 3, 'jie'];

let zero: 0 = 0;
let mood: 'Happy' | 'Sad' = 'Happy';
mood = 'Sad';

type DayOfWeek =
  | 'Monday'
  | 'Tueday'
  | 'Wednesday'
  | 'Thurday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday';

let today: DayOfWeek = 'Wednesday';

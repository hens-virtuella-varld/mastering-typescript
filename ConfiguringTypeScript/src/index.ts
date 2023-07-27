interface Chicken {
  breed: string;
  eggsPerWeek: number;
  name: string;
  age: number;
}

const juniper: Chicken = {
  breed: 'Silkie',
  eggsPerWeek: 5,
  name: 'Juniper',
  age: 1,
};

// function doThing(thing) {
//   console.log(thing);
// }

let users: string[] | null = ['3kidd', '3jie'];
users = null;

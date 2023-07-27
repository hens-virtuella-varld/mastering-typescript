// function printName(person: { first: string; last: string }): void {
//   console.log(`${person.first} ${person.last}`);
// }

// printName({ first: 'Thomas', last: 'Jenkins' });

// let coordinate: { x: number; y: number } = { x: 34, y: 2 };

// function randomCoordinate(): { x: number; y: number } {
//   return { x: Math.random(), y: Math.random() };
// }

// printName({ first: 'Mick', last: 'Jagger', age: 43 });
// const singer = { first: 'Mick', last: 'Jagger', age: 43, isAlive: true };
// printName(singer);

// type Point = {
//   x: number;
//   y: number;
// };

// let coordinate: Point = { x: 34, y: 2 };

// function randomCoordinate(): Point {
//   return { x: Math.random(), y: Math.random() };
// }

// function doublePoint(point: Point): Point {
//   return { x: point.x * 2, y: point.y * 2 };
// }

type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: { producer: string; writer: string };
};

function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
  title: 'Unchained Melody',
  artist: 'Righteous Brothers',
  numStreams: 1299840,
  credits: {
    producer: 'Phil Spector',
    writer: 'Alex North',
  },
};

const earning = calculatePayout(mySong);
console.log(earning);
printSong(mySong);

type Point = {
  x: number;
  y: number;
  z?: number;
};

const myPoint: Point = { x: 1, y: 2, z: 4 };

type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 8493439,
  username: 'Gabe',
};

console.log(user.id);
user.username = 'Alex';

type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
  radius: 4,
  color: 'yellow',
};

type Cat = {
  numLives: number;
};

type Dog = {
  breed: string;
};

type CatDog = Cat &
  Dog & {
    age: number;
  };

const christy: CatDog = {
  numLives: 7,
  breed: 'Husky',
  age: 9,
};

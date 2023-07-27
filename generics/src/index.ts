// // const nums: number[] = [];
// const nums: Array<number> = [];
// const colors: Array<string> = [];

const inputEl = document.querySelector<HTMLInputElement>('#username')!;
console.dir(inputEl);

const btn = document.querySelector<HTMLButtonElement>('.btn')!;

function identity<T>(item: T): T {
  return item;
}

interface Cat {
  name: string;
  breed: string;
}

// identity<number>(7);
// identity<string>('hello');
// identity<Cat>({ name: 'cat', breed: 'a kind of cat' });

function getRandomElement<T>(list: T[]): T {
  const randIdx = Math.floor(Math.random() * list.length);
  return list[randIdx];
}

console.log(getRandomElement<string>(['a', 'b', 'c']));
console.log(getRandomElement<number>([5, 6, 21, 354, 567, 234, 654]));

getRandomElement([1, 2, 3, 4]);

function merge<T extends object, U extends object>(object1: T, object2: U) {
  return {
    ...object1,
    ...object2,
  };
}

const comboObj = merge({ name: 'colt' }, { pet: ['blue', 'elton'] });
console.log(merge({ name: 'colt' }, { num: 0 }));

interface Lengthy {
  length: number;
}

// function printDoubleLength<T extends Lengthy>(thing: T): number {
//   return thing.length * 2;
// }

function printDoubleLength(thing: Lengthy): number {
  return thing.length * 2;
}

printDoubleLength('asdasd');
printDoubleLength(234);

function makeEmptyArray<T = number>(): T[] {
  return [];
}

const nums = makeEmptyArray();
const bools = makeEmptyArray<boolean>();

interface Song {
  title: string;
  artist: string;
}

interface Video {
  title: string;
  creator: string;
  resolution: string;
}

class Playlist<T> {
  public queue: T[] = [];
  add(el: T) {
    this.queue.push(el);
  }
}

const songs = new Playlist<Song>();
songs.add();
const videos = new Playlist<Video>();
videos.add();

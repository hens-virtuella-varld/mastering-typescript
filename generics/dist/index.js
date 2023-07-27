"use strict";
// // const nums: number[] = [];
// const nums: Array<number> = [];
// const colors: Array<string> = [];
const inputEl = document.querySelector('#username');
console.dir(inputEl);
const btn = document.querySelector('.btn');
function identity(item) {
    return item;
}
// identity<number>(7);
// identity<string>('hello');
// identity<Cat>({ name: 'cat', breed: 'a kind of cat' });
function getRandomElement(list) {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}
console.log(getRandomElement(['a', 'b', 'c']));
console.log(getRandomElement([5, 6, 21, 354, 567, 234, 654]));
getRandomElement([1, 2, 3, 4]);
function merge(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
const comboObj = merge({ name: 'colt' }, { pet: ['blue', 'elton'] });
console.log(merge({ name: 'colt' }, { num: 0 }));
// function printDoubleLength<T extends Lengthy>(thing: T): number {
//   return thing.length * 2;
// }
function printDoubleLength(thing) {
    return thing.length * 2;
}
printDoubleLength('asdasd');
printDoubleLength(234);
function makeEmptyArray() {
    return [];
}
const nums = makeEmptyArray();
const bools = makeEmptyArray();
class Playlist {
    constructor() {
        this.queue = [];
    }
    add(el) {
        this.queue.push(el);
    }
}
const songs = new Playlist();
songs.add();
const videos = new Playlist();
videos.add();

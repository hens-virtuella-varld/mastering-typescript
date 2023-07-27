"use strict";
// function getRandomElement<T>(list: T[]): T {
//   const randIdx = Math.floor(Math.random() * list.length);
//   return list[randIdx];
// }
const getRandomElement = (list) => {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
};

let movieTitle: string = 'Amadeus';
movieTitle = 'Arrival';
movieTitle = 9;
movieTitle.toUpperCase();

let numCatLives: number = 9;
numCatLives += 1;
// numCatLives = 'zero';

let gameOver: boolean = false;
gameOver = true;
gameOver = 'true';

// Type inference
let tvShow = 'Olive Kitteridge';
tvShow = 'The Other Two';
tvShow = false;

let isFunny = false;
isFunny = true;
isFunny = 'true';

// the any type
let thing: any = 'hello';
thing = 7;
thing = false;
thing();
thing.toUpperCase();

// let thing = "hello";
// thing.sadddwdws()

const movies = ['Arrival', 'The Thing', 'Aliens', 'Amadeus'];
let foundMovie: string;

for (let movie of movies) {
  if (movie === 'Amadeus') {
    foundMovie = 'Amadeus';
  }
}

foundMovie();
foundMovie = 1;

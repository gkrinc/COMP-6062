// Simple array of numbers
const numbers = [2, 5, 8, 12, 15, 1, -2, -1, 5, 8];

// Simple array of strings
const letters = ['g', 'z', 'k', 'm', 'g'];

// Totally valid array of mixed types
const mixedArray = ['test', 22, { a: 1 }, true, false];


// ----------------------------------------------------------------


console.log('Original order: ', letters);
// Sort modifies the orignal array
letters.sort();
console.log('Ascending order: ', letters);
letters.reverse();
console.log('Descending order: ',letters);

console.log('Numbers sorts...uh oh: ', numbers.sort());


// ----------------------------------------------------------------


const songs = [{
  title: 'Holiday',
  artist: 'Green Day',
  year: 2004,
},{
  title: 'Given to Fly',
  artist: 'Pearl Jam',
  year: 1998,
},{
  title: 'Smells Like Teen Spirit',
  artist: 'Nirvana',
  year: 1991,
}];

// Custom sort functions expect the following as return values
// > 0 - sort a after b, e.g. [b, a]
// < 0 - sort a before b, e.g. [a, b]
// 0 - keep original order of a and b
const sortByTitle = (songA, songB) => {
  // By forcing the `title` to upper case we make the sort case insensitive
  if (songA.title.toUpperCase() > songB.title.toUpperCase()) {
    return 1;
  }
  if (songA.title.toUpperCase() < songB.title.toUpperCase()) {
    return -1;
  }
  return 0;
};

const sortByArtist = (songA, songB) => {
  if (songA.artist.toUpperCase() > songB.artist.toUpperCase()) {
    return 1;
  }
  if (songA.artist.toUpperCase() < songB.artist.toUpperCase()) {
    return -1;
  }
  return 0;
};

// When sorting numbers we can simply subtract the `b` value from the `a` value to get the desired return
const sortByYear = (songA, songB) => songA.year - songB.year;

// Custom sort functions also sort in place
console.log(songs);
console.log('Sorted by title: ', songs.sort(sortByTitle));
console.log('Sorted by artist: ', songs.sort(sortByArtist));
console.log('Sorted by year: ', songs.sort(sortByYear));


// ----------------------------------------------------------------


const artistsAndYears = songs.map((song) => {
  return {
    artist: song.artist,
    year: song.year,
  };
});
console.log('Artists and years: ', artistsAndYears);

// `map` can transform the data from one type to another.
// In this case from an array of objects to an array of strings.
const justTitles = songs.map((song) => {
  return song.title;
});
console.log('Just song titles: ', justTitles);


// ----------------------------------------------------------------


numbers.forEach((num) => {
  console.log(num);
});

const moreNumbers = [77, 88, 99];

// Array.concat() creates a new array
const newNumbersArray = numbers.concat(moreNumbers);
console.log('New numbers array: ', newNumbersArray);

// Array.push() modifies the existing array
songs.push({
  title: 'Alive',
  artist: 'Pearl Jam',
  year: 1991,
});
songs.sort(sortByYear);
console.log('Updated songs: ', songs);

console.log('First Peal Jam Song: ', songs.find((song) => song.artist === 'Pearl Jam'));

console.log('At least one song from 1991: ', songs.some((song) => song.year === 1991));
console.log('All numbers > 0: ', numbers.every((num) => num > 0));
console.log('Only numbers > 0: ', numbers.filter((num) => num > 0));
console.log('Only Pearl Jam songs: ', songs.filter((song) => song.artist === 'Pearl Jam'));


// ----------------------------------------------------------------
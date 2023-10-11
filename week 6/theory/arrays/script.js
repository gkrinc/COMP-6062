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
},{
  title: 'Basket Case',
  artist: 'Green Day',
  year: 1994,
}];

// The `filter` method returns a new array
const greenDaySongs = songs.filter((song) => {
  // If we return true, the value (in this case the song object) will
  // we included in the new array created by the `filter` method
  if (song.artist === 'Green Day') {
    return true;
  }

  return false;
});
console.log({greenDaySongs});

// The `filter` method returns a new array
const songFromThe90s = songs.filter((song) => {
  if (song.year < 2000) {
    return true;
  }

  return false;
});
console.log({songFromThe90s});

// The `map` method returns a new array
// In this case we're changing the return type from an object to a string
const artists = songs.map((song) => {
  return song.artist;
});
console.log({artists});


// --------------------------------------------------


const holiday = {
  title: 'Holiday',
  artist: 'Green Day',
  year: 2004,
};

const title = holiday.title;
const artist = holiday.artist;
const year = holiday.year;


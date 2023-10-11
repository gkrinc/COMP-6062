const holiday = {
  title: 'Holiday',
  artist: 'Green Day',
  year: 2004,
};

const App = () => {
  // In a JSX file the return value must be wrapped in round brackets
  return (
    <div>
      <p><span>Title: </span>{holiday.title}</p>
      <p><span>Artist: </span>{holiday.artist}</p>
      <p><span>Year: </span>{holiday.year}</p>
    </div>
  );
}

export default App;

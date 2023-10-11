import Song from './Song';

const areaOfACircle = (radius) => Math.PI * Number(radius) ** 2;

const holiday = {
  title: 'Holiday',
  artist: 'Green Day',
  year: 2004,
};

const App = () => {
  return (
    <div>
    <form action="" method="post">
      <label htmlFor="radius">Radius: </label>
      <input id="radius" name="radius" type="number" onInput={(event) => {
        const area = areaOfACircle(event.target.value);
        console.log(area.toFixed(2));
      }} />
      <span>Area: </span>
    </form>
    <Song title={holiday.title} artist={holiday.artist} year={holiday.year} />
    </div>
  )
}

export default App;

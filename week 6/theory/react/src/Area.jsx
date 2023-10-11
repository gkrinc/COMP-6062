import { useState } from 'react';

const areaOfACircle = (radius) => Math.PI * Number(radius) ** 2;

const Area = () => {
  const [area, setArea] = useState(0);

  return (
    <form action="" method="post">
      <label htmlFor="radius">Radius: </label>
      <input id="radius" name="radius" type="number" onInput={(event) => {
        const a = areaOfACircle(event.target.value);
        setArea(a.toFixed(2));
      }} />
      <span>Area: {area}</span>
    </form>
  );
};

export default Area;

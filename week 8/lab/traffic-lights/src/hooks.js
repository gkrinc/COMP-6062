// From Dan Abramov, one of the lead engineers on the React team
// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
import { useEffect, useRef } from 'react';

export const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
    // This effect gets called any time the `callback` param changes
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      // The return of a useEffect gets called any time
      // the component it's used on is unmounted.
      // Great for cleanup!
      return () => {
        clearInterval(id);
      }
    }
  }, [delay]);
}

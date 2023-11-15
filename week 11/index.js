const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Date.now() % 2 === 0) {
      resolve('Even seconds');
    }

    reject('Odd seconds');
  }, 2000);

  console.log('Exection continuing...');
});

myPromise
  .then((message) => console.log(message))
  .catch((message) => console.error('catch', message))
  .finally(() => console.log('Done!'));

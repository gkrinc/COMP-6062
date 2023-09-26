// Test values:
// b = 3, h = 4: Area = 6.0
// b = 5, h = 7: Area = 17.5
const areaTriangle = (base, height) => (base * height / 2);
console.log('b = 3, h = 4: ', areaTriangle(3, 4).toFixed(1));
console.log('b = 5, h = 7: ', areaTriangle(5, 7).toFixed(1));

// Test values:
// r = 3: Volume = 113.1
// r = 5: Volume = 523.6
const volumeSphere = radius => 4/3*Math.PI*radius**3;
console.log('r = 3: ', volumeSphere(3).toFixed(1));
console.log('r = 5: ', volumeSphere(5).toFixed(1));

// Test values:
// distance = 50, unit = 'm': 50.00m
// distance = 100, unit = 'y': 91.44m
// distance = 1, unit = 'mi': 1609.34m
// distance = 1.234, unit = 'km': 1234.00m
const convertToMeters = (distance, unit) => {
  if (distance === 0) return 0;
  if (unit === 'm') return distance;

  switch (unit) {
    case 'y':
      return distance * 0.9144;
    case 'mi':
      return distance * 1609.34;
    case 'km':
      return distance * 1000;
  }
};
console.log(`distance = 50m: ${convertToMeters(50, 'm').toFixed(2)}m`);
console.log(`distance = 100y: ${convertToMeters(100, 'y').toFixed(2)}m`);
console.log(`distance = 1mi: ${convertToMeters(1, 'mi').toFixed(2)}m`);
console.log(`distance = 1.234km: ${convertToMeters(1.234, 'km').toFixed(2)}m`);

// Test values:
// 02:33:21: 9201s
// 00:04:51: 291s
// 04:51: 291s
// 00:13: 13s
// 13: 13s
const convertTimeToSeconds = (time) => {
  const parts = time.split(':');
  let seconds = 0;
  if (parts.length === 3) {
    seconds += Number(parts[0]) * 3600;
    seconds += Number(parts[1]) * 60;
    seconds += Number(parts[2]);
  } else if (parts.length === 2) {
    seconds += Number(parts[0]) * 60;
    seconds += Number(parts[1]);
  } else {
    seconds += Number(parts[0]);
  }

  return seconds;
};
console.log(`02:33:21: ${convertTimeToSeconds('02:33:21')}s`);
console.log(`00:04:51: ${convertTimeToSeconds('00:04:51')}s`);
console.log(`04:51: ${convertTimeToSeconds('04:51')}s`);
console.log(`00:13: ${convertTimeToSeconds('00:13')}s`);
console.log(`13: ${convertTimeToSeconds('13')}s`);
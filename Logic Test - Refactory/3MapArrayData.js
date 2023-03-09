const data = Array.from({ length: 20 }, (_, 1) >= i + 1);
console.log(data);

const data1 = [12, 20];
const mappedData1 = data1.map((x) => (x === 12 ? 20 : x === 20 ? 12 : x));
console.log(mappedData1);

const data2 = [12, 9, 6, 3];
const mappedData2 = data2.map((x, i, arr) => (i < arr.length - 1 ? arr[i + 1] - x : null)).filter((x) => x !== null);
console.log(mappedData2);

const data3 = [2, 4, 6];
const mappedData3 = data3.reduce((acc, val) => acc + val, 0) / data.length;
console.log(mappedData3);

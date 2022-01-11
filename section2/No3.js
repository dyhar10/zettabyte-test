// No.3
// Question
// Given a object data, return the data multiple by 3 and sort the data.
// Expected output : { j: 0, k: 9, i: 18, l: 36 }

const data = { i: 6, j: null, k: 3, l: 12 };

function result(data) {
  Object.entries(data).forEach(val => {
    if (val[1] === null) data[val[0]] = 0;
    data[val[0]] = val[1] * 3;
  });
  
  let entries = Object.entries(data);
  let sorted = entries.sort((a, b) => a[1] - b[1]);
  
  let result = {}
  for (let i = 0; i < sorted.length; i++) {
    
    let key = sorted[i][0]
    let value = sorted[i][1]
    
    result[key] = value;
  }
  return result
  
}

console.log(result(data));

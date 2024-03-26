const possibleMoves = [
  [2, 1],
  [-2, 1],
  [2, -1],
  [-2, -1],
  [1, -2],
  [1, 2],
  [-1, -2],
  [-1, 2],
];

function knightMoves(start, destination) {
  const destinationJson = JSON.stringify(destination);
  const queue = [start];
  const results = [];
  const already = [];
  let found = false;
  const move = (from, result = []) => {
    queue.shift();

    possibleMoves.forEach((item) => {
      const first = from[0] + item[0];
      const second = from[1] + item[1];
      const combined = [first, second];

      if (first >= 0 && first <= 7 && second >= 0 && second <= 7) {
        if (JSON.stringify(combined) === destinationJson) {
          found = true;
        }
        result.push(combined);
        // if (queue[1]) {
        //   result.push(queue[1].concat(from));
        //   queue.shift();
        // }
      }
    });

    if (found === false)
      result.forEach((item) => {
        if (!already[item[0] * 10 + item[1]]) {
          already[item[0] * 10 + item[1]] = true;
          queue.push(item);
        }
      });
    return result;
  };
  while (queue.length >= 1) {
    results.push(move(queue[0]));
    // queue.shift();
  }
  return results;
}

// console.log(knightMoves([0, 0], [1, 3]));
console.log(knightMoves([7, 7], [1, 1]));

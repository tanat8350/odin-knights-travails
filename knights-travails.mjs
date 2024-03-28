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
  const queue = [[start]];
  const already = [];
  const shortest = [];
  let found = false;
  const move = (from, result = []) => {
    queue.shift();

    possibleMoves.forEach((item) => {
      const first = from[from.length - 1][0] + item[0];
      const second = from[from.length - 1][1] + item[1];
      const combined = [first, second];

      if (first >= 0 && first <= 7 && second >= 0 && second <= 7) {
        if (JSON.stringify(combined) === destinationJson) {
          found = true;
          // push found shortest path
          shortest.push(from.concat([combined]));
        }
        result.push(combined);
      }
    });

    if (!found)
      result.forEach((item) => {
        if (!already[item[0] * 10 + item[1]]) {
          already[item[0] * 10 + item[1]] = true;
          queue.push(from.concat([item]));
        }
      });
  };
  while (queue.length >= 1) {
    move(queue[0]);
  }
  const totalMoves = shortest[0].length - 1;
  console.log(`You made it in ${totalMoves} moves!  Here's your path:`);
  return shortest;
}

console.log(knightMoves([0, 0], [4, 2]));
console.log(knightMoves([7, 7], [1, 1]));
console.log(knightMoves([7, 7], [0, 0]));

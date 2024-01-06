const input = await Bun.file("./input.txt").text();

const split = input.split("\n\n");

const top = [0];

split.map((elf) => {
  let temp = 0;
  const calories = elf.split("\n");
  calories.map((row) => {
    temp += parseInt(row);
  });

  top.push(temp);
});

const topThree = top.sort((a, b) => b - a).slice(0, 3);
const total = topThree.reduce((a, b) => a + b);

console.log(total);

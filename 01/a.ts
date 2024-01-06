const input = await Bun.file("./input.txt").text();

const split = input.split("\n\n");

let max = 0;

split.map((elf) => {
  let temp = 0;
  const calories = elf.split("\n");
  calories.map((row) => {
    temp += parseInt(row);
  });

  if (temp > max) {
    max = temp;
  }
});

console.log(max);

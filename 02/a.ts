const input = await Bun.file("./input.txt").text();

const lines = input.split("\n");

const parsed = lines.map((line) => line.split(" "));

const translate = {
  X: "A",
  Y: "B",
  Z: "C",
};

const rockPaperScissors = (a: string, b: string) => {
  const me = translate[b as "X" | "Y" | "Z"];
  if (a === me) {
    return 3;
  }
  if (a === "A" && me === "B") return 6;
  if (a === "B" && me === "C") return 6;
  if (a === "C" && me === "A") return 6;
  return 0;
};

const choiceScore = (b: string) => {
  const me = translate[b as "X" | "Y" | "Z"];
  if (me === "A") return 1;
  if (me === "B") return 2;
  if (me === "C") return 3;
  return 0;
};

let score = 0;
parsed.map((row) => {
  const result = rockPaperScissors(row[0], row[1]);
  const choice = choiceScore(row[1]);
  score += result + choice;
});

console.log(score);

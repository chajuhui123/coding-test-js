let fs = require("fs");
let input = fs.readFileSync("../example.txt").toString();
// let input = fs.readFileSync("/dev/stdin").toString().split(" "); // 백준 제출시

const inputArr = input.split("\n");

const solution = (inputArr) => {
  const boy = inputArr[1].split(" ").map((item) => (item = Number(item)));
  const girl = inputArr[2].split(" ").map((item) => (item = Number(item)));

  const DiffInMax = Math.abs(Math.max(...boy) - Math.max(...girl));
  const DiffInMin = Math.abs(Math.min(...boy) - Math.min(...girl));

  DiffInMax <= DiffInMin ? console.log(DiffInMax) : console.log(DiffInMin);
  return;
};

solution(inputArr);

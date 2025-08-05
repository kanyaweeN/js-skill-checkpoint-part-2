const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
let result = students.reduce((acc, cur) => {
  if (cur.score >= 50) {
    return acc += cur.score + (cur.score * 0.1);
  }
  return acc;
}, 0);

console.log(`Total score is ${result}`);

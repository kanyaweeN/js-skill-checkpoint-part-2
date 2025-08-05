// เริ่มเขียนโค้ดตรงนี้
async function getUsers() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  return users.json();
}
let result = getUsers()
.then((data) => {
  let result = data.reduce((acc, cur) => {
    if (cur.name.length > 17) {
      acc.push(cur.name);
      return acc;
    }
    return acc;
  }, []);
  console.log(result);
});

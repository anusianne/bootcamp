const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 2015 },
  { name: "Lux", year: 2015 },
];
const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen in my fav food ever", id: 123523 },
  { text: "Nice Nice Nice", id: 542328 },
];
// ! checking if somebody of people arr is adult
const checkAge = people.some((person) => {
  if (2023 - person.year >= 19) {
    return true;
  }
});
console.log(checkAge);

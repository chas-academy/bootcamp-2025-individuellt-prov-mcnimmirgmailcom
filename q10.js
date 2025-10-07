const data = [
  {
    name: "John",
    age: 20,
  },
  {
    name: "Jane",
    age: 31,
  },
  {
    name: "Jim",
    age: 13,
  },
];

// returnera namnet i objektet som funktionen tar emot (rätt kommentar från slack)
const getName = (person) => {};

// lämna denna orörd
export const getAllNames = () => {
  let names = [];
  data.forEach((person) => {
    names.push(getName(person));
  });
  return names;
};

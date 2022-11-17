let hogwarts = [
  {
    firstName: "Harry",
    lastName: "Potter",
    house: "Gryffindor",
    pet: "Owl",
    occupation: "Student",
  },
  {
    firstName: "Ron",
    lastName: "Weasley",
    house: "Gryffindor",
    pet: "Scabbers",
    occupation: "Student",
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    house: "Gryffindor",
    pet: "Cat",
    occupation: "Student",
  },
  {
    firstName: "Draco",
    lastName: "Malfoy",
    house: "Slytherin",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Cedric",
    lastName: "Diggory",
    house: "HufflePuff",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Severus",
    lastName: "Snape",
    house: "Slytherin",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Filius",
    lastName: "Flitwick",
    house: "Ravenclaw",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Pomona",
    lastName: "Sprout",
    house: "Hufflepuff",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Minerva",
    lastName: "McGonagall",
    house: "Gryffindor",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Albus",
    lastName: "Dumbledore",
    house: "Gryffindor",
    pet: "Phoenix",
    occupation: "Teacher",
  },
];

//task 1
console.log("Answer Task 1");
function showGryffindor(house) {
  const filterGryffindor = house.filter(
    (person) => person.house === "Gryffindor"
  );

  for (let person of filterGryffindor) {
    const { firstName, lastName } = person;
    console.log(`${firstName} ${lastName}`);
  }
}

showGryffindor(hogwarts);

//task 2
console.log("\nAnswer Task 2");
function teacherHasPet(hogwarts) {
  const filterTeacherHasPet = hogwarts.filter(
    (person) => person.occupation === "Teacher" && person.pet
  );

  const [person1] = filterTeacherHasPet;
  console.log(`${person1.firstName} ${person1.lastName}`);
}

teacherHasPet(hogwarts);

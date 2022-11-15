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
function showGryffindor(house) {
  const filterGryffindor = house.filter(
    (person) => person.house === "Gryffindor"
  );

  const [person1, person2, person3, person4, person5] = filterGryffindor;

  console.log(`${person1.firstName} ${person1.lastName}`);
  console.log(`${person2.firstName} ${person2.lastName}`);
  console.log(`${person3.firstName} ${person3.lastName}`);
  console.log(`${person4.firstName} ${person4.lastName}`);
  console.log(`${person5.firstName} ${person5.lastName}`);
}

showGryffindor(hogwarts);

//task 2
function teacherHasPet(hogwarts) {
  const filterTeacherHasPet = hogwarts.filter(
    (person) => person.occupation === "Teacher" && person.pet
  );

  const [person1] = filterTeacherHasPet;
  console.log(`${person1.firstName} ${person1.lastName}`);
}

teacherHasPet(hogwarts);

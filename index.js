//let require all what we need
const Student = require("./student.js");
const ClassRoom = require("./classroom.js");
const Chalk = require("chalk");
const Database = require("./database");

const studentOne = new Student("Victor", 33);
const studentTwo = new Student("Luis", 40);

//students who will attend the LSBThree
const studentThree = new Student("Sergio", 53);
const studentFour = new Student("Marco", 24);
const studentFive = new Student("John", 34);

const LSBOne = new ClassRoom("Learning Space Berlin LSB-One", "Berlin");
const LSBTwo = new ClassRoom("Learning Space Hamburg LSB-Two", "Hamburg");
const LSBThree = new ClassRoom("Learning Space München LSB-Three", "München");

studentOne.attend(LSBOne);
studentTwo.attend(LSBTwo);

studentThree.attend(LSBThree);
studentFour.attend(LSBThree);
studentFive.attend(LSBThree);

LSBThree.report();

// Database.save([
//   LSBOne,
//   LSBTwo,
//   LSBThree,
//   studentOne,
//   studentTwo,
//   studentThree,
//   studentFour
// ]);
// const loadedFile = Database.load();

// const instancedStudent = Student.create(loadedFile[0].students[0]);
// const newClassRoomInstanced = ClassRoom.create(LSBThree);

// console.log(instancedStudent);
// console.log(newClassRoomInstanced.students);



//homework 3 week

// i write this main() function into my index.js:

async function main() {
  
  await Database.write([
    LSBOne,
    LSBTwo,
    LSBThree,
    studentOne,
    studentTwo,
    studentThree,
    studentFour
  ]);

  const loadedFileAsync = await Database.read();
  console.log(loadedFileAsync);

}

main();



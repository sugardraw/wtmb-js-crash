const Chalk = require('chalk');
const Student = require('./student.js')


module.exports = class ClassRoom {
    constructor(name, location) {
        this.name = name
        this.location = location
        this.students = []
    }

    report() {
        console.log(Chalk.bgRed.bold(this.name), 'ClassRoom is held at', Chalk.bold(this.location), 'and number of students are', this.students.length)
        // console.log(this, this.attendees[1])
    }

    static create({name, location, students}){
        let classRoomWithStudentArray= new ClassRoom(name, location, students)
        classRoomWithStudentArray.students = students.map(Student.create)
        return classRoomWithStudentArray;
    }
}



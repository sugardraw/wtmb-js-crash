module.exports = class Student {
    constructor(name, age=0, bio='empty bio') {
        this.name = name
        this.age = age
        this.bio = bio
    }
  
    attend(ClassRoom) {
        ClassRoom.students.push(this)
    }

    static create({name, age, bio}){
        return new Student(name, age, bio);
    }
  }
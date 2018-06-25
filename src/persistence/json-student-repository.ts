import fs from 'fs-extra';

import {Student} from './student';
import {StudentRepository} from './student-repository';


export class JsonStudentRepository implements StudentRepository {
  private path: string;

  constructor(path = __dirname + '/data/students.json') {
    this.path = path;
  }

  getAllStudents(): Promise<Student[]> {
    return fs.readJson(this.path).catch(
        (error: Error) => console.log(error.message));
  }

  getStudentById(id: string): Promise<Student|undefined> {
    return this.getAllStudents().then(
        (students: Student[]) =>
            students.find((student: Student) => student.id === id));
  }

  createStudent(postedStudent: Student) {
    const id = postedStudent.id;
    return this.getStudentById(id).then(student => {
      if (student) {
        throw new Error('student already exists.');
      } else {
        return this._save(postedStudent);
      }
    });
  }

  updateStudent(postedStudent: Student) {
    const id = postedStudent.id;
    return this.getAllStudents()
        .then(students => {
          if (students.length !== 0) {
            return students;
          } else {
            throw new Error('students do not exist.');
          }
        })
        .catch(error => {
          throw new Error(error.message);
        })
        .then(students => {
          if (students.some(student => student.id === id)) {
            return [...students.filter(student => student.id !== id)];
          } else {
            throw new Error('student does not exist.');
          }
        })
        .catch(error => {
          throw new Error(error.message);
        })
        .then(students => [...students, postedStudent])
        .catch(error => {
          throw new Error(error.message);
        })
        .then(students => fs.writeFile(this.path, JSON.stringify(students)))
        .catch(error => {
          throw new Error(error.message);
        });
  }

  deleteStudent(studentToDelete: Student) {
    const id = studentToDelete.id;
    return this.getStudentById(id).then(student => {
      if (!student) {
        throw new Error('student do not exist.');
      } else {
        return this._delete(studentToDelete);
      }
    });
  }

  _save(student: Student) {
    this.getAllStudents()
        .then(savedStudents => savedStudents || [])
        .then(savedStudents => {
          savedStudents.push(student);
          return savedStudents;
        })
        .then(savedStudents => JSON.stringify(savedStudents))
        .then(
            savedStudentsString => fs.writeFile(this.path, savedStudentsString))
        .catch(error => console.log(error));
  }

  _delete(studentToDelete: Student) {
    const id = studentToDelete.id;
    this.getAllStudents()
        .then(savedStudents => savedStudents || [])
        .then(savedStudents => {
          return savedStudents.filter(student => student.id !== id);
        })
        .then(savedStudents => JSON.stringify(savedStudents))
        .then(
            savedStudentsString => fs.writeFile(this.path, savedStudentsString))
        .catch(error => console.log(error));
  }
}
import {Student} from './student';

export interface StudentRepository {
    getAllStudents(): Promise<Student[]>;

    getStudentById(id: string): Promise<Student | undefined>;

    createStudent(student: Student): Promise<void>;

    updateStudent(student: Student): Promise<void>;

    deleteStudent(student: Student): Promise<void>;
}
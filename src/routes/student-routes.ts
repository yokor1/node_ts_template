import express, {Router} from 'express';

import {StudentRepository} from '../persistence/student-repository';

import * as ResponseStatus from './status';


export class StudentRouter {
    router: Router;
    private studentRepository: StudentRepository;

    constructor(studentRepository: StudentRepository) {
        this.studentRepository = studentRepository;
        this.router = express.Router();
        this.mountRoutes();
    }

    _addFilter() {
        this.router.param('id', (req, res, next, id) => {
            if (isNaN(id)) {
                next(`id ${id} is not a number. `);
            } else {
                next();
            }
        });
    }

    mountRoutes() {
        this._addFilter();

        this.router.get('/', (req, res) => {
            this.studentRepository.getAllStudents().then(
                students => res.status(ResponseStatus.OK).json(students));
        });

        this.router.get(`/:id`, (req, res) => {
            const id = req.params.id;
            this.studentRepository.getStudentById(id).then(student => {
                if (student) {
                    res.status(ResponseStatus.OK).send(student);
                } else {
                    res.status(ResponseStatus.NOT_FOUND).send('Student not found.');
                }
            });
        });

        this.router.post('/', (req, res) => {
            const postedStudent = req.body;
            this.studentRepository.createStudent(postedStudent)
                .then(() => res.status(ResponseStatus.CREATED).json(postedStudent))
                .catch(
                    error =>
                        res.status(ResponseStatus.BAD_REQUEST).send(error.message));
        });

        this.router.put('/', (req, res) => {
            const postedStudent = req.body;
            this.studentRepository.updateStudent(postedStudent)
                .then(() => res.status(ResponseStatus.OK).json(postedStudent))
                .catch(
                    error =>
                        res.status(ResponseStatus.BAD_REQUEST).send(error.message));
        });

        this.router.delete('/', (req, res) => {
            const postedStudent = req.body;
            this.studentRepository.deleteStudent(postedStudent)
                .then(() => res.status(ResponseStatus.OK).json(postedStudent))
                .catch(
                    error =>
                        res.status(ResponseStatus.BAD_REQUEST).send(error.message));
        });


        return this.router;
    }
}
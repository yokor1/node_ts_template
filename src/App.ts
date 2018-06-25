import bodyParser from 'body-parser';
import express, {Express, Router} from 'express';
import morgan from 'morgan';

import {JsonStudentRepository} from './persistence/json-student-repository';
import {StudentRouter} from './routes/student-routes';


class App {
  server: Express;
  STUDENTS_BASE_URL = App.buildUri('v1', 'students');

  constructor() {
    this.server = express();
    this.addUses();
  }

  private static buildUri(version: string, path: string): string {
    return `/api/${version}/${path}`;
  }

  private static createStudentRouter(): Router {
    const studentRepository = new JsonStudentRepository();
    return new StudentRouter(studentRepository).router;
  }

  addUses() {
    const studentRouter = App.createStudentRouter();
    this.server.use(morgan('tiny'));
    this.server.use(bodyParser.json());
    this.server.use(this.STUDENTS_BASE_URL, studentRouter);
  }
}

export const app = new App().server;
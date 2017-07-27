import { InMemoryDbService } from 'angular-in-memory-web-api';
export class ApiService implements InMemoryDbService {
  createDb() {
    const attendees = [
      {
        id: 1,
        name: 'Juan',
        photo: '',
        homework1: 4,
        homework2: 3,
        homework3: 4,
        homework4: 5,
        homework5: 2,
        average_grade: null,
        delivered_homeworks: 5,
        missing_homeworks: 0,
        updated_at: '2017-07-23 16:15:09'
      },
      {
        id: 2,
        name: 'Mateo',
        photo: '',
        homework1: 3,
        homework2: 5,
        homework3: 3,
        homework4: 2,
        homework5: 5,
        average_grade: null,
        delivered_homeworks: 5,
        missing_homeworks: 0,
        updated_at: '2017-07-23 16:15:09'
      },
      {
        id: 3,
        name: 'Laura',
        photo: '',
        homework1: 5,
        homework2: 2,
        homework3: 4,
        homework4: 5,
        homework5: 4,
        average_grade: null,
        delivered_homeworks: 5,
        missing_homeworks: 0,
        updated_at: '2017-07-23 16:15:09'
      },
    ];
    return { attendees };
  }
}
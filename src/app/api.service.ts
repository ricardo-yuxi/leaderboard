import { InMemoryDbService } from 'angular-in-memory-web-api';
export class ApiService implements InMemoryDbService {
  createDb() {
    const attendees = [
      { 
        id: 0,
        name: 'Zero',
        photo: '',
        homeworks: [
          { id: 1, name: 'first', note: 4 },
          { id: 2, name: 'second', note: 3 },
          { id: 3, name: 'third', note: 2 },
          { id: 4, name: 'fourth', note: 3 },
          { id: 5, name: 'fifth', note: 5 }
        ],
        average_grade: null,
        delivered_homeworks: 5,
        missing_homeworks: 0,
        updated_at: '2017-07-23 16:15:09' 
      },
      { 
        id: 1,
        name: 'Mr. Nice',
        photo: '',
        homeworks: [
          { id: 1, name: 'first', note: 4 },
          { id: 2, name: 'second', note: 3 },
          { id: 3, name: 'third', note: 2 },
          { id: 4, name: 'fourth', note: 3 },
          { id: 5, name: 'fifth', note: 5 }
        ],
        average_grade: null,
        delivered_homeworks: 4,
        missing_homeworks: 1,
        updated_at: '2017-07-23 16:15:09' 
      },
      { 
        id: 2,
        name: 'Logan',
        photo: '',
        homeworks: [
          { id: 1, name: 'first', note: 4 },
          { id: 2, name: 'second', note: 3 },
          { id: 3, name: 'third', note: 2 },
          { id: 4, name: 'fourth', note: 3 },
          { id: 5, name: 'fifth', note: 5 }
        ],
        average_grade: null,
        delivered_homeworks: 5,
        missing_homeworks: 0,
        updated_at: '2017-07-23 16:15:09' 
      }
    ];
    return {attendees};
  }
}
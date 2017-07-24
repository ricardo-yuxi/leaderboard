import { InMemoryDbService } from 'angular-in-memory-web-api';
export class ApiService implements InMemoryDbService {
  createDb() {
    const attendees = [
      { 
        id: 0,
        name: 'Zero',
        photo: '',
        average_grade: 5,
        delivered_homeworks: 5,
        missing_homeworks: 0,
        updated_at: '2017-07-23 16:15:09' 
      },
      { 
        id: 1,
        name: 'Mr. Nice',
        photo: '',
        average_grade: 3,
        delivered_homeworks: 4,
        missing_homeworks: 1,
        updated_at: '2017-07-23 16:15:09' 
      },
      { 
        id: 2,
        name: 'Logan',
        photo: '',
        average_grade: 5,
        delivered_homeworks: 5,
        missing_homeworks: 0,
        updated_at: '2017-07-23 16:15:09' 
      }
    ];
    return {attendees};
  }
}
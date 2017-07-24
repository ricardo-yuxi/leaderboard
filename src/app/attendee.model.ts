import { Homework } from './homework.model';
export class Attendee {
  id: number;
  name: string;
  photo: string;
  homeworks: Homework[];
  average_grade: number;
  delivered_homeworks: number;
  missing_homeworks: number;
  updated_at: string;
}
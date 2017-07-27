export class Attendee {

  constructor(
    public id: number,
    public name: string,
    public photo: string,
    public homework1: number,
    public homework2: number,
    public homework3: number,
    public homework4: number,
    public homework5: number,
    public homework6: number,
    public average_grade: number,
    public delivered_homeworks: number,
    public missing_homeworks: number,
    public updated_at: string
  ) { }

  static createObject(
    id,
    name,
    photo,
    homework1,
    homework2,
    homework3,
    homework4,
    homework5,
    homework6,
    average_grade,
    delivered_homeworks,
    missing_homeworks,
    last_updated
  ) {
    return new Attendee(
      id,
      name,
      photo,
      homework1,
      homework2,
      homework3,
      homework4,
      homework5,
      homework6,
      average_grade,
      delivered_homeworks,
      missing_homeworks,
      last_updated
    );
  }
}
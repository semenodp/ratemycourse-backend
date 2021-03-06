import { Course } from './Course';
import {Entity, ObjectIdColumn, ObjectID, Column} from "typeorm";

@Entity()
export class Rating {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    rating: number;

    @Column()
    difficulty: number;

    @Column({ type: 'number', default: 0})
    upvotes: number;

    @Column()
    takeAgain: boolean;

    @Column()
    professor: string;

    @Column()
    course: Course;
}

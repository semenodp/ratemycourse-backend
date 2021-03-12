import { Rating } from './Rating';
import {Entity, ObjectIdColumn, ObjectID, Column, OneToMany} from "typeorm";

@Entity()
export class Course {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    name: string;

    @Column()
    department: string;

    @Column()
    required: boolean;
    
    ratings: Rating[];
}

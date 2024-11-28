import { Entity, Field } from "remult";

@Entity("tasks", {allowApiCrud: true})
export class Task {
    @Field.cuid()
    id = '';

    @Field.string()
    title = '';
    
    completed = false;
}
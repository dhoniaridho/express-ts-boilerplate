import { Model } from 'objection'
import Database from '../../config/database'

Model.knex(Database)

export default class Todo extends Model {
    id!: number;
    title!: string;
    static get tableName() {
        return 'book'
    }
}
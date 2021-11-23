import { Model } from 'objection'
import Database from '../../config/database'

Model.knex(Database)

export default class User extends Model {
    id!: number;
    name!: string;
    static get tableName() {
        return 'users'
    }
}
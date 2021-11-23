import { Request, Response } from 'express';
import axios from 'axios';
import JsonResponse from '../../libs/response';
import Todo from '../models/todo';
import { QueryBuilder } from 'objection';

export default class TodoController {

    static async index(req: Request,res:Response) {
        let data = await Todo.query()
        JsonResponse.success(res, 200, data)
    }
    static async show(req: Request,res:Response) {
        try {
            let data = await axios.get(`https://jsonplaceholder.typicode.com/todos/${req.params.id ?? 1}`)
            JsonResponse.success(res, 200, data.data)
        } catch (error) {
            JsonResponse.error(res, 404)
        }
    }
    static async create(req: Request, res:Response) {
        const create = {
            id: 100,
            title: 'hello'
        }
        await Todo.query().insert(create)
        JsonResponse.success(res, 201, create, 'success created')
    }
    static async list() {
        
    }
}
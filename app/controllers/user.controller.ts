import JsonResponse from "../../libs/response";
import User from "../models/user";
import { Request, Response } from 'express';

export default class UserController {
    static async index(req:Request, res:Response):Promise<void> {
        let data = await User.query()
        JsonResponse.success(res, 200, data)
    }
    static async create(req: Request, res: Response):Promise<void> {
        console.log(typeof req.body, req.body.length);
        
        try {
            if (req.body.length > 1) {
                try {
                    req.body.map((data:any) => {
                        User.query().insert(data).then(mes=> mes).catch(e=>e.message)
                    });

                    JsonResponse.success(res, 201, 'created')
                    
                } catch (error:any) {
                    JsonResponse.error(res, 401, error?.message)
                }
            } else {
                try {
                    let data = await User.query().insert(req.body)
                    JsonResponse.success(res, 201, data, 'user created')
                } catch (error:any) {
                    JsonResponse.error(res, 401, error?.message)
                }
            }
        } catch (error :any) {
            JsonResponse.error(res, 401, error?.message)
        }
        res.end()
    }
}
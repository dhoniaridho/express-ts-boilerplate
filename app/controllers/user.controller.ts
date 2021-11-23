import JsonResponse from "../../libs/response";
import User from "../models/user";

export default class UserController {
    static async index(req:any, res:any) {
        let data = await User.query()
        JsonResponse.success(res, 200, data)
    }
}
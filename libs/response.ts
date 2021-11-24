import {Response} from "express";

export default class JsonResponse {

  static success(res: Response, code : number, data? : any, message? :string):void {
    switch (code) {
        case 200:
            res.status(code).json({
                code,
                message: message ?? 'success',
                data
            })
            break;
    
        default:
            res.status(200).json({
                code: 200,
                message: 'success',
                data: data ?? null
            })
            break;
    }
  }

  static error(res: Response, code:number, message?: string):void {
    switch(code) {
        case 404:
            res.status(404).json({
                code,
                message: "Not found"
              });
        break;
        default: 
        res.status(code).json({
            code,
            message
        });
    }
  }
  
}

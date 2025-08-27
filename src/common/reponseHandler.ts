import { Response } from "express";
import { HttpsStatus } from "./constants/httpsStatus.enum";
import { IError } from "../interface/error.interface";

export const succsessResponse = (code:HttpsStatus,response: Response , data:any , alreadyWrappedWithData:boolean = false)=>{
    let responseData = alreadyWrappedWithData ? data :{data};
    response.status(code).json(responseData);
}

export const errorResponse = (code:HttpsStatus,response:Response , error:IError)=>{
    const errorContent = {
        code,
        key:error.key,
        message:error.message,
    }
    response.status(code).json({error:errorContent});
}
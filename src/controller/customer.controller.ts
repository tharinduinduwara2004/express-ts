import { Request, Response } from "express";
import { succsessResponse } from "../common/reponseHandler";
import { HttpsStatus } from "../common/constants/httpsStatus.enum";

export class CustomerController{
    private static instance:CustomerController;

    public static getInstance():CustomerController{
        if(!CustomerController.instance){
            CustomerController.instance = new CustomerController();
        }
        return CustomerController.instance;
    }

    private constructor(){}

    getCustomer = async (req:Request , res:Response)=>{
        try{
            const {id} = req.params;
            const customer = {
                id:1,
                name:"John Doe",
                email:"john.doe@example.com",
                phone:"1234567890",
                address:"123 Main St, Anytown, USA",
            };
            succsessResponse(HttpsStatus.OK,res,customer);

        }
        catch (error){
            errorResponse(HttpStatus.INTERNAL_SERVER_ERROR,res,ERRORS.BAD_REQUEST);
        }
    }
}
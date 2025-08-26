import { Router,Request,Response } from "express";
import { GreetingRoute } from "./greeting.route";

export class CustomerRoute{
    private static instance:CustomerRoute;
    public router:Router;

    public static getInstance():CustomerRoute{
        if(!CustomerRoute.instance){
            CustomerRoute.instance = new CustomerRoute();
        }
        return CustomerRoute.instance;
    }

    private constructor(){
        this.router = Router();
        this.setupRoutes();
    }

    setupRoutes(){
        this.router.use("/greeting", GreetingRoute.getInstance().router);
        this.router.use("/customer", CustomerRoute.getInstance().router);
    }
}


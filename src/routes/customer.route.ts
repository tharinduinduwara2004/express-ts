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

    private setupRoutes(){
        this.router.get("/", (req:Request, res:Response) => {
            res.send("Hello world customer");
        });

        this.router.post("/",(req:Request, res:Response) => {
            const {name} = req.body;
            res.send(`Hello ${name}` );
        });

    }
}


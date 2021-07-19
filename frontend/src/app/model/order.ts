import { Product } from "./product";
import { User } from "./user";

export class Order {
    // MongoDB miatt string
    _id:string = "";
    // ez össze lesz kapcsolva a MongoDB-ben
    customer:User= new User();
    // ez össze lesz kapcsolva a MongoDB-ben
    products:Product[]= [];
    time: Date= new Date();
    note: string = ""
}

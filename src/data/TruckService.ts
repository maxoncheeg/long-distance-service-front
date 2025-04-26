import axios from "axios";
import { ITruck } from "../models";

export class TruckService{
    
    public async getTrucks() {
        await axios.get<ITruck[]>('http://localhost/api/test/trucks')
    }
}
import { ISlimTruck, ITruck } from "../models/trucks";
import { API_ROUTES } from "../../config/api_routes";
import api from "../api";
import { AbstractService } from "./abstract_service";
import { IResponse } from "../responses/response";

export class TruckService extends AbstractService {
    public async getSlimTrucks(take: number = 10, skip: number = 0): Promise<IResponse<ISlimTruck[]>> {
        return await this.request<ISlimTruck[]>
            (async () => (await api.get<IResponse<ISlimTruck[]>>(API_ROUTES.trucks.getList(skip, take))).data)

    }

    public async getTruckById(id: number): Promise<IResponse<ITruck>> {
        return await this.request<ITruck>
            (async () => (await api.get<IResponse<ITruck>>(API_ROUTES.trucks.getById(id))).data)
    }
}
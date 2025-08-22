import { ISlimVehicle, IVehicle } from "../models/vehicles";
import { API_ROUTES } from "../../config/api_routes";
import api from "../api";
import { AbstractService } from "./abstract_service";
import { IResponse } from "../responses/response";

export class VehicleService extends AbstractService {
    public async getSlimTrucks(
        take: number = 10,
        skip: number = 0
    ): Promise<IResponse<ISlimVehicle[]>> {
        return await this.request<ISlimVehicle[]>(
            async () =>
                (
                    await api.get<IResponse<ISlimVehicle[]>>(
                        API_ROUTES.trucks.getList(skip, take)
                    )
                ).data
        );
    }

    public async getTruckById(id: number): Promise<IResponse<IVehicle>> {
        return await this.request<IVehicle>(
            async () =>
                (
                    await api.get<IResponse<IVehicle>>(
                        API_ROUTES.trucks.getById(id)
                    )
                ).data
        );
    }
}

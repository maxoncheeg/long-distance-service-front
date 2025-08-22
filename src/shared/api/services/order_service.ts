import { API_ROUTES } from "../../config/api_routes";
import api from "../api";
import { ISlimOrder } from "../models/orders";
import { IResponse } from "../responses/response";
import { AbstractService } from "./abstract_service";

export class OrderService extends AbstractService {
    public async getSlimOrders(
        take: number = 5,
        skip: number = 0
    ): Promise<IResponse<ISlimOrder[]>> {
        return await this.request<ISlimOrder[]>(
            async () =>
                (
                    await api.get<IResponse<ISlimOrder[]>>(
                        API_ROUTES.order.getSlimOrders(take, skip)
                    )
                ).data
        );
    }
}

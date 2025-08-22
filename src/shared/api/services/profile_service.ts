import { API_ROUTES } from "../../config/api_routes";
import api from "../api";
import { IUserProfile } from "../models/profile";
import { IResponse } from "../responses/response";
import { AbstractService } from "./abstract_service";

export class ProfileService extends AbstractService {
    public async getUserProfile(): Promise<IResponse<IUserProfile>> {
        return await this.request<IUserProfile>(
            async () =>
                (
                    await api.get<IResponse<IUserProfile>>(
                        API_ROUTES.profile.me
                    )
                ).data
        );
    }
}

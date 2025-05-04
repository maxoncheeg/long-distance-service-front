import { API_ROUTES } from "../../config/api_routes";
import api from "../api";
import { IUser } from "../models/auth";
import { ILoginRequest } from "../models/requests/auth";
import { IResponse } from "../responses/response";
import { AbstractService } from "./abstract_service";

export class AuthService extends AbstractService {
    public async login(data: ILoginRequest): Promise<IResponse<IUser>> {
        return await this.request<any>
            (async () => (await api.post<IResponse<IUser>>(API_ROUTES.auth.login, data)).data)
    }

    public async loginByToken(): Promise<IResponse<IUser>> {
        return await this.request<any>
            (async () => (await api.post<IResponse<IUser>>(API_ROUTES.auth.loginByToken)).data)
    }

    public async logout(): Promise<IResponse<any>> {
        return await this.request<any>
            (async () => (await api.post<IResponse<any>>(API_ROUTES.auth.logout)).data)
    }

    public async refreshToken(): Promise<IResponse<IUser>> {
        return await this.request<IUser>
            (async () => (await api.post<IResponse<IUser>>(API_ROUTES.auth.refreshToken)).data)
    }

    public async pass(password: string): Promise<IResponse<string>> {
        return await this.request<string>
            (async () => (await api.get<IResponse<string>>(API_ROUTES.auth.pass(password))).data)
    }
}
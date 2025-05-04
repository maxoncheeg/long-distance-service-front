import { AxiosError } from "axios";
import { IResponse } from "../responses/response";

export abstract class AbstractService {
    protected async request<T>(action: () => Promise<IResponse<T>>): Promise<IResponse<T>> {
        try {
            return await action();
        }
        catch (e) {
            const error = e as AxiosError
            const response: IResponse<T> = {
                statusCode: error.response?.status ?? 500,
                data: null,
                message: error.message,
                success: false
            }

            return response;
        }
    }
}
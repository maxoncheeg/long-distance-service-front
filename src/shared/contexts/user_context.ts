import { createContext } from "react";
import { IUser } from "../api/models/auth";

interface IUserContext {
    user: IUser | null,
    tryLoginByToken: () => Promise<IAuthResult>,
    login: (login: string, password: string) => Promise<IAuthResult>,
    logout: () => Promise<void>,
}

export interface IAuthResult {
    success: boolean,
}

export const UserContext = createContext<IUserContext>({
    user: null,
    tryLoginByToken: async () => { return { success: false } },
    login: async () => { return { success: false } },
    logout: async () => { return },
})
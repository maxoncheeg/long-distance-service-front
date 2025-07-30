import { createContext } from "react";
import { IUser } from "../api/models/auth";

interface IUserContext {
    user?: IUser | null;
    tryLoginByToken: () => Promise<IAuthResult>;
    login: (email: string, password: string) => Promise<IAuthResult>;
    register: (email: string, password: string) => Promise<IAuthResult>;
    logout: () => Promise<void>;
}

export interface IAuthResult {
    success: boolean;
    user?: IUser | null;
}

export const UserContext = createContext<IUserContext>({
    user: null,
    tryLoginByToken: async () => {
        return { success: false };
    },
    login: async () => {
        return { success: false };
    },
    register: async () => {
        return { success: false };
    },
    logout: async () => {
        return;
    },
});

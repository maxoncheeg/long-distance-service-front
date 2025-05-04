import { useState } from "react";
import { IUser } from "../api/models/auth";
import { authService } from "../config/services";
import { IAuthResult, UserContext } from "./user_context";

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<IUser | null>(null)

    const tryLoginByToken = async function (): Promise<IAuthResult> {
        const response = await authService.loginByToken();
        console.log(response)

        if (response.statusCode === 401) {
            const refreshResponse = await authService.refreshToken();
            console.log(refreshResponse)

            if (response.success) {
                setUser(refreshResponse.data)
                return { success: true }
            }
        }

        const result: IAuthResult = { success: response.success }
        if (result.success) {
            setUser(response.data)
        }
        else
            setUser(null)

        return result;
    }

    const login = async function (login: string, password: string): Promise<IAuthResult> {
        const response = await authService.login({ login, password });
        console.log(response)
        const result: IAuthResult = { success: response.success }
        return result;
    }

    const logout = async function (): Promise<void> {
        await authService.logout();
    }

    return (
        <UserContext.Provider value={{ user, tryLoginByToken, login, logout }}>{children}</UserContext.Provider>
    )
}
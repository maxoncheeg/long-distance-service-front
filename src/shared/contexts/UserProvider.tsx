import { useState } from "react";
import { IUser } from "../api/models/auth";
import { authService } from "../config/services";
import { IAuthResult, UserContext } from "./user_context";

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<IUser | undefined | null>(null);

    const tryLoginByToken = async function (): Promise<IAuthResult> {
        const response = await authService.loginByToken();

        console.log(
            "LOG BY TOK: " + response.statusCode + " " + response.message
        );

        if (response.statusCode === 401) {
            const refreshResponse = await authService.refreshToken();
            console.log(
                "REFR TOK: " +
                    refreshResponse.statusCode +
                    " " +
                    refreshResponse.message
            );

            if (response.success) {
                setUser(refreshResponse.data);
                return { success: true };
            }
        }

        const result: IAuthResult = { success: response.success };
        if (result.success) {
            setUser(response.data);
        } else setUser(null);

        return result;
    };

    const login = async function (
        email: string,
        password: string
    ): Promise<IAuthResult> {
        const response = await authService.login({ email, password });
        console.log(response);

        if (response.success && response.data !== null) {
            setUser(response.data);
        }

        const result: IAuthResult = { success: response.success, user: response.data };
        return result;
    };

    const logout = async function (): Promise<void> {
        await authService.logout();
        setUser(undefined);
    };

    return (
        <UserContext.Provider
            value={{
                user: user,
                tryLoginByToken: tryLoginByToken,
                login: login,
                logout: logout,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

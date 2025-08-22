import { useContext, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../shared/contexts/user_context";
import { ROUTES } from "../../shared/config/routes";

export const ProtectedRoute = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [authorized, setAuthorized] = useState<boolean>(true);
    const userContext = useContext(UserContext);

    useEffect(() => {
        const checkAuth = async () => {
            setIsLoading(true);

            if (!userContext.user) {
                const response = await userContext.tryLoginByToken();

                if (!response.success) setAuthorized(false);
                else setAuthorized(true);
            } else {
                setAuthorized(true);
            }

            setIsLoading(false);
        };

        checkAuth();
    }, [userContext]);

    if (isLoading) return <div>Загрузка...</div>;

    if (!authorized)
        return (
            <Navigate
                to={ROUTES.auth.login}
                replace
                state={{ from: location.pathname }}
            />
        );

    return <Outlet />;
};

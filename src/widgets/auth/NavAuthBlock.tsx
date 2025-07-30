import { useContext, useEffect } from "react";
import { UserContext } from "../../shared/contexts/user_context";
import { ROUTES } from "../../shared/config/routes";
import { NavLinkColorButton } from "../../shared/ui/navigation/NavLinkColorButton";

export default function NavAuthBlock() {
    const userContext = useContext(UserContext);

    useEffect(() => {
        const loginByToken = async () => {
            if (userContext.user !== null) return;

            const response = await userContext.tryLoginByToken();

            if (response.success && userContext.user !== null) {
                console.log("success");
            }
        };

        loginByToken();
    }, [userContext]);

    return (
        <>
            {userContext.user !== null && (
                <>
                    <NavLinkColorButton title="ПРОФИЛЬ" route={ROUTES.home} />
                </>
            )}
            {userContext.user === null && (
                <>
                    <NavLinkColorButton title="ВОЙТИ" route={ROUTES.auth.login} />
                </>
            )}
        </>
    );
}

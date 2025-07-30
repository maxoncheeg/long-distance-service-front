import { Link } from "react-router-dom";
import { ROUTES } from "../../shared/config/routes";
import NavLinkButton from "../../shared/ui/navigation/NavLinkButton";
import AuthBlock from "../auth/NavAuthBlock";
import logo from "../../assets/images/mountains.png";
import { useContext } from "react";
import { UserContext } from "../../shared/contexts/user_context";

export default function Navigation() {
    const userContext = useContext(UserContext)


    const quit = (e: React.MouseEvent) => {
        e.preventDefault()
        userContext.logout()
        window.location.reload();
    }


    return (
        <nav className="font-ruda sticky top-0 left-0 h-[70px] block bg-lds-main text-white">
            <div className="justify-start align-middle h-full items-center flex">
                <div className="flex-1 h-full justify-start align-middle items-center content-center text-center flex  px-5">
                    <img src={logo} alt="logo" className="h-[50%]" />
                    <Link
                        className="select-none mr-[10px]  content-center h-full text-center font-bold text-white text-[20px]
                    transition duration-300 hover:text-lds-accent"
                        to={ROUTES.home}
                    >
                        LONG DISTANCE
                    </Link>
                </div>
                <div className="flex-1/2 h-full">
                    <div className="w-full h-full justify-center content-center">
                        <div className="flex h-full justify-center flex-row align-middle items-center text-center">
                            <NavLinkButton
                                title="Автопарк"
                                route={ROUTES.trucks.base}
                            />
                            <NavLinkButton
                                title="Водители"
                                route={ROUTES.trucks.base}
                            />
                            <NavLinkButton
                                title="Расчет маршрута"
                                route={ROUTES.trucks.base}
                            />
                            <button
                                className="flex-1 text-white h-full content-center block
                                hover:bg-lds-accent-dark hover:border-b-[5px] border-lds-accent  hover:text-white
                                hover:active:border-white hover:active:text-white
                                transition-all duration-200"
                                onClick={quit}
                            >
                                SO COOL TEST LOGOUT
                            </button>
                            <AuthBlock />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

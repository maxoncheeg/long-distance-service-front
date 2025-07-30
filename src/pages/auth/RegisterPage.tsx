import { useEffect } from "react";
import loginBackground from "../../assets/images/auth/trucker.gif";
import logo from "../../assets/images/mountains.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../shared/config/routes";
import { RegisterForm } from "../../features/ui/auth/RegisterForm";

export function RegisterPage() {
    useEffect(() => {
        document.title = "Регистрация в LDS";
    }, []);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from || ROUTES.home;

    const onRegister = () => {
        navigate(from, { replace: true });
    };

    return (
        <>
            <img
                className="fixed top-0 left-0 w-[100vw] h-[100vh] object-cover select-none z-0"
                src={loginBackground}
            />

            <div className="fixed w-full m-auto h-[100%] object-cover select-none bg-black opacity-70 z-15" />

            <div className="flex justify-center align-middle items-center h-dvh">
                <div
                    className="font-ruda ring-2/30 ring-black text-white z-20 m-auto relative w-full 2xl:w-3/12 md:w-full bottom-0
                        flex flex-col justify-center align-middle text-center items-center py-[25px] px-[20px] backdrop-blur-2xl"
                >
                    <div className="absolute w-full m-auto h-[100%] object-cover select-none bg-white opacity-6 z-15 " />

                    <div className="flex-1/10 z-20 opacity-85 pt-[20px] px-5">
                        <img src={logo} alt="LDS" className="h-[200px] py-5" />
                        <h1 className="font-extrabold text-3xl text-lds-light">
                            LONG DISTANCE SERVICE
                        </h1>
                    </div>

                    <div className="flex-8/10 z-20 w-full">
                        <RegisterForm onRegister={onRegister} />

                        <Link
                            to={ROUTES.auth.login}
                            state={{ from: from }}
                            className="text-lds-main hover:underline mt-[10px] hover:text-lds-accent transition-all duration-400"
                        >
                            ...или Вы можете войти в существующий аккаунт
                        </Link>
                    </div>

                    {/* <div className="flex-1/10 flex text-white z-20 align-middle items-center">
                        <p className="mr-[10px]">ВХОД ЧЕРЕЗ</p>

                        <a href={ROUTES.auth.vk()} className="my-[25px]">
                            <img
                                src={vk}
                                alt="ВКонтакте"
                                className="h-[35px] m-[5px]"
                            />
                        </a>

                        <a href={ROUTES.auth.ok} className="my-[25px]">
                            <img
                                src={ok}
                                alt="Одноклассники"
                                className="h-[35px] m-[5px]"
                            />
                        </a>
                    </div> */}
                </div>
            </div>
        </>
    );
}

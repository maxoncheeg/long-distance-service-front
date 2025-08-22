import { useEffect, useState } from "react";
import { IUserProfile } from "../../shared/api/models/profile";
import { orderService, profileService } from "../../shared/config/services";
import { ISlimOrder } from "../../shared/api/models/orders";
import { ProviderImage } from "../../shared/ui/providers/ProviderImage";
import { Link } from "react-router-dom";
import { ROUTES } from "../../shared/config/routes";
import { providers } from "../../shared/config/providers";
import { SlimOrderItem } from "../../entities/ui/orders/SlimOrderItem";

export default function ProfilePage() {
    const [profile, setProfile] = useState<IUserProfile | undefined>(undefined);
    const [orders, setOrders] = useState<ISlimOrder[] | undefined>(undefined);
    const [providersToAdd, setProvidersToAdd] = useState<string[]>([]);

    const getUserProfile = async () => {
        const response = await profileService.getUserProfile();

        if (response.success) setProfile(response.data);

        if (response.data !== undefined) {
            const notAddedProviders = providers.filter(
                (p) => !response.data?.authProviders.includes(p)
            );
            setProvidersToAdd(notAddedProviders);
        }

        const orderResponse = await orderService.getSlimOrders(3);

        if (orderResponse.success) setOrders(orderResponse.data);
    };

    useEffect(() => {
        document.title = "Профиль LDS";
        getUserProfile();
    }, []);

    return (
        <>
            <div className="md:w-full 2xl:w-[80%] m-auto h-6 mt-[20px] flex flex-wrap flex-row justify-center font-ruda">
                <div className=" m-[15px] min-w-[45%] 2xl:w-[70%] md:w-[90%] w-[90%] border-[1px] rounded-[5px] border-gray-300">
                    <div className="m-[15px]">
                        <h1 className="text-[20px] font-stretch-expanded font-semibold ">
                            Информация о профиле
                        </h1>
                        <p className="text-gray-600 font-light">
                            Здесь отображается и редактируется информация о
                            Вашем профиле. Нажмите на нужное поле для
                            редактирования.
                        </p>
                    </div>

                    {profile && (
                        <div className="flex flex-col">
                            <Link
                                to={ROUTES.home}
                                className="w-full border-gray-200 border-t-[1px] flex flex-row h-[40px] items-center
                            hover:bg-gradient-to-l hover:from-lds-accent hover:to-45% transition-colors duration-300 hover:text-lds-light text-gray-600"
                            >
                                <div className="w-[20%] text-left text-[14px] font-bold pl-[15px] text-gray-600">
                                    <h4>Почта</h4>
                                </div>

                                <div className="w-[50%] text-center text-black">
                                    <p>{profile.email}</p>
                                </div>

                                <div className="w-[30%] text-right pr-[25px] text-[14px]">
                                    <p>Редактировать</p>
                                </div>
                            </Link>

                            {profile.individualInfo && (
                                <Link
                                    to={ROUTES.home}
                                    className="w-full border-gray-200 border-t-[1px] flex flex-row h-[40px] items-center
                            hover:bg-gradient-to-l hover:from-lds-accent hover:to-45% transition-colors duration-300 hover:text-lds-light text-gray-600"
                                >
                                    <div className="w-[20%] text-left text-[14px] font-bold pl-[15px] text-gray-600">
                                        <h4>Физ. лицо</h4>
                                    </div>

                                    <div className="w-[50%] text-center text-black">
                                        <p>{profile.individualInfo.fullname}</p>
                                    </div>

                                    <div className="w-[30%] text-right pr-[25px] text-[14px]">
                                        <p>Редактировать</p>
                                    </div>
                                </Link>
                            )}

                            {!profile.individualInfo && (
                                <Link
                                    to={ROUTES.home}
                                    className="w-full border-gray-200 border-t-[1px] flex flex-row h-[40px] items-center
                            hover:bg-gradient-to-l hover:from-lds-accent hover:to-45% transition-colors duration-300 hover:text-lds-light text-gray-600"
                                >
                                    <div className="w-full text-right pr-[25px] text-[14px]">
                                        <p>Внести данные о физ. лице</p>
                                    </div>
                                </Link>
                            )}

                            {profile.legalInfo && (
                                <Link
                                    to={ROUTES.home}
                                    className="w-full border-gray-200 border-t-[1px] flex flex-row h-[40px] items-center
                            hover:bg-gradient-to-l hover:from-lds-accent hover:to-45% transition-colors duration-300 hover:text-lds-light text-gray-600"
                                >
                                    <div className="w-[20%] text-left text-[14px] font-bold pl-[15px] text-gray-600">
                                        <h4>Юр. лицо</h4>
                                    </div>

                                    <div className="w-[50%] text-center text-black">
                                        <p>{profile.legalInfo.companyName}</p>
                                    </div>

                                    <div className="w-[30%] text-right pr-[25px] text-[14px]">
                                        <p>Редактировать</p>
                                    </div>
                                </Link>
                            )}

                            {!profile.legalInfo && (
                                <Link
                                    to={ROUTES.home}
                                    className="w-full border-gray-200 border-t-[1px] flex flex-row h-[40px] items-center
                            hover:bg-gradient-to-l hover:from-lds-accent hover:to-45% transition-colors duration-300 hover:text-lds-light text-gray-600 rounded-b-[5px]"
                                >
                                    <div className="w-full text-right pr-[25px] text-[14px]">
                                        <p>Внести данные о юр. лице</p>
                                    </div>
                                </Link>
                            )}
                        </div>
                    )}
                </div>

                <div className=" m-[15px] min-w-[45%] 2xl:w-[70%] md:w-[90%] w-[90%] border-[1px] rounded-[5px] border-gray-300">
                    <div className="m-[15px]">
                        <h1 className="text-[20px] font-stretch-expanded font-semibold ">
                            Сервисы
                        </h1>
                        <p className="text-gray-600 font-light">
                            Сервисы, которые Вы привязали к своему аккаунту.
                        </p>
                    </div>

                    {profile && (
                        <div className="flex flex-col border-t-[1px] border-gray-200">
                            <div className="w-[100%] text-left text-[14px] font-bold pl-[15px] text-gray-600  mb-[5px]">
                                {profile.authProviders.length > 0 && (
                                    <>
                                        <h4 className="mt-[5px]">
                                            Привязанные сервисы
                                        </h4>

                                        {profile.authProviders.map(
                                            (provider) => (
                                                <div key={provider}>
                                                    <ProviderImage
                                                        providerName={provider}
                                                    />
                                                </div>
                                            )
                                        )}
                                    </>
                                )}
                            </div>

                            <div className="w-[100%] text-left text-[14px] font-bold pl-[15px] text-gray-600  border-t-[1px] border-gray-200 mb-[5px]">
                                {providersToAdd.length > 0 && (
                                    <>
                                        <h4 className="mt-[5px]">
                                            Вы можете привязать эти сервисы к
                                            аккаунту
                                        </h4>

                                        {providersToAdd.map((provider) => (
                                            <div key={provider}>
                                                <ProviderImage
                                                    providerName={provider}
                                                />
                                            </div>
                                        ))}
                                    </>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                <div className="m-[15px] min-w-[45%] 2xl:w-[70%] md:w-[90%] w-[90%]">
                    <div className="m-[15px] text-center">
                        <h1 className="text-[20px] font-stretch-expanded font-semibold ">
                            НЕДАВНИЕ ЗАКАЗЫ
                        </h1>
                    </div>

                    {orders && orders.length > 0 && (
                        <div className="w-[80%] m-auto flex flex-col justify-center">
                            {orders.map((order) => (
                                <div key={order.id}>
                                    <SlimOrderItem order={order} />
                                </div>
                            ))}

                            <Link
                                to={ROUTES.home}
                                className="
                                bg-lds-accent text-white w-full h-[75px] flex justify-center text-center text-[20px] font-bold mt-[5px] mb-[30px]
                                hover:border-b-lds-accent-dark hover:border-b-[5px] transition-all duration-200
                                "
                            >
                                <div className="flex flex-col justify-center">
                                    <p>ПОКАЗАТЬ БОЛЬШЕ ЗАКАЗОВ</p>
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

import React, { useEffect, useState } from "react";
import { ISlimOrder } from "../../../shared/api/models/orders";
import truck from "../../../assets/images/truck.png";
import { ROUTES } from "../../../shared/config/routes";
import { Link } from "react-router-dom";

interface ISlimOrderItemProps {
    order: ISlimOrder;
}

export function SlimOrderItem({ order }: ISlimOrderItemProps) {
    const [stateBlockColor, setStateBlockColor] = useState<string>("bg-white");
    const [stateBlockText, setStateBlockText] = useState<string>("");
    const [stateBlockTextColor, setStateBlockTextColor] =
        useState<string>("text-black");

    useEffect(() => {
        const configureStateBlock = () => {
            if (order.state === "Complete") {
                setStateBlockText("ЗАВЕРШЕН");
                setStateBlockColor("bg-lds-accent");
                setStateBlockTextColor("text-white");
            } else {
                setStateBlockText("АКТИВЕН");
                setStateBlockColor("bg-lds-accent");
                setStateBlockTextColor("text-white");
            }
        };

        configureStateBlock();
    }, [order.state]);

    return (
        <Link to={ROUTES.home}>
            <div
                className="w-full flex flex-row font-ruda text-[20px] mt-[5px] mb-[5px] h-[75px] items-center  
                 overflow-hidden duration-200 transition-all 
                 hover:border-b-[5px] border-lds-main  text-lds-accent-dark"
            >
                <div
                    className="p-[15px] w-[130px] text-white h-full items-center flex bg-lds-main border-lds-main
                border-t border-l border-b"
                >
                    <p>ЗАКАЗ #{order.id}</p>
                </div>

                <div className="justify-center flex-1 flex-row flex border-t-[1px] border-b-[1px] border-lds-main h-full sm:border-r-0 border-r ">
                    <div className="text-center pl-[15px] ml-[15px] mr-[15px] text-[15px] font-bold flex flex-col justify-center ">
                        <p>{order.senderName}</p>
                    </div>

                    <div className=" text-center pl-[15px] ml-[15px] mr-[15px] text-[15px] flex-col justify-center lg:flex hidden">
                        <p>{order.sendAddress}</p>
                        <p>→</p>
                        <p>{order.receiveAddress}</p>
                    </div>

                    <div className=" text-center pl-[15px] ml-[15px] mr-[15px] text-[15px] flex-col justify-center font-bold xl:flex hidden bg-lds">
                        <p>{order.routeLength}</p>
                        <p>КМ</p>
                    </div>
                </div>

                <div className=" text-center border-t-[1px] border-b-[1px] border-lds-main pl-[15px] justify-end md:flex hidden h-full">
                    <img
                        src={truck}
                        alt={order.vehicle.name}
                        className="h-full"
                    />
                </div>

                <div className="relative  text-center items-center h-full w-[130px] sm:flex hidden">
                    <div className="relative z-20 p-[15px] flex items-center h-full text-center w-full text-white">
                        <p>{stateBlockText}</p>
                    </div>
                    <div
                        className={
                            "top-0 w-full absolute text-center items-center align-middle h-full " +
                            stateBlockColor +
                            " " +
                            stateBlockTextColor
                        }
                    />
                </div>
            </div>
        </Link>
    );
}

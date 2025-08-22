import { ISlimVehicle } from "./vehicles";

export interface ISlimOrder {
    id: number;
    vehicle: ISlimVehicle;
    receiverType: string;
    senderType: string;
    receiverId: number;
    senderId: number;
    receiverName: string;
    senderName: string;
    receiveAddress: string;
    sendAddress: string;
    state: string;
    routeLength: number;
    loadingDate: Date;
}

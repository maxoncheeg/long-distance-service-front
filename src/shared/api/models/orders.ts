export interface ISlimOrder {
    id: number;
    vehicle: null;
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

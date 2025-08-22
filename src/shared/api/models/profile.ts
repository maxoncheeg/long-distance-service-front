import { IRole } from "./auth";
import { ISlimIndividual, ISlimLegal } from "./personals";

export interface IUserProfile{
    id:number,
    email: string,
    roles: IRole[],
    authProviders: string[],
    individualInfo?: ISlimIndividual,
    legalInfo?: ISlimLegal
}
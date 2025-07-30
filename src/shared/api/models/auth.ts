export interface IRole {
    id: number;
    type: string;
}

export interface IUser {
    id: number,
    email: string,
    roles: IRole[],
    isExternalUser: boolean,
    isEmailVerified: boolean
}

export interface IRole{
    id: number,
    type: string
}

export interface IUser{
    id: number,
    login: string,
    role: IRole
}
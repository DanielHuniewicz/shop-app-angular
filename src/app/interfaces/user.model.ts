import { UserName } from '../interfaces/userName.model';

export interface User {
    id: number,
    username: string,
    email: string,
    password: string,
    name : UserName
}
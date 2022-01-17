import { Products } from '../interfaces/products.model';
import { UserName } from './userName.model';

export interface Cart {
    id: number,
    userId: number,
    products: Products[],
    name: UserName,
    date: Date
}
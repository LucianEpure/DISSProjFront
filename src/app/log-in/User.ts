import { Role } from './Role';

export class User {
    id: Int32Array;
    username: string;
    password: string;
    roles: Role[];
}

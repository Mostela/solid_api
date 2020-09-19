import { User } from "../entites/Users";

export interface IUsersRepository{
    findByEmail(email: string) : Promise<User>;
    save(usuario: User) : Promise<void>;
}
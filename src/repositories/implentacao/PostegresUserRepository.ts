import { User } from "../../entites/Users";
import { IUsersRepository } from "../IUserRepository";

export class PostegresUserRepository implements IUsersRepository{
    private users: User[] = []

    async findByEmail(email: String): Promise<User>{
        return this.users.find(user => user.email === email)
    }

    async save(user: User): Promise<void>{
        this.users.push(user)
    }
}
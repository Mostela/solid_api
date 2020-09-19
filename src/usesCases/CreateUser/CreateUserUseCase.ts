import { User } from "../../entites/Users"
import { IMailSend } from "../../providers/IMailSend"
import { IUsersRepository } from "../../repositories/IUserRepository"
import { ICreateUserRequestDTO } from "./CreateUserDTO"

export class CreateUserUseCase{

    constructor(
        private usersRepository: IUsersRepository,
        private mailProvider: IMailSend
    ){
    }

    async execute(data: ICreateUserRequestDTO){
        const userExists = await this.usersRepository.findByEmail(data.email)

        if(userExists){
            throw new Error("Usuario já existe")
        }

        await this.usersRepository.save(new User(data))

        await this.mailProvider.sendMail({
            to: {
                email: data.email,
                name: data.email
            },
            from: {
                email: "joaocamargo812@gmail.com",
                name: "João Carlos"
            },
            subject: "Para João",
            body: "<h1>Ola mundo</h1>"
        })
    }
}
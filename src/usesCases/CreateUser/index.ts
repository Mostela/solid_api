import { MailTrapMailProvider } from "../../providers/implementacao/MailTrapMailProvider";
import { PostegresUserRepository } from "../../repositories/implentacao/PostegresUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapProvider = new MailTrapMailProvider()
const postegresUser = new PostegresUserRepository()

const createUserUseCase = new CreateUserUseCase(postegresUser, mailtrapProvider)


const createUserControler = new CreateUserController(createUserUseCase)



export {createUserControler, createUserUseCase}
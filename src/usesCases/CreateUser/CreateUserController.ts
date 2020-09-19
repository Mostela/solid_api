import {Request, Response} from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase
    ){}

    async handle(req: Request, res: Response): Promise<Response> {
        const {name, email, password} = req.body

        try{
            await this.createUserUseCase.execute({
                nome: name,
                email: email,
                password: password
            })

            return res.status(201).send();
        }catch(err){
            res.send(400).json({
                mensagem: err.messeage || 'Erro não identificado.'
            })
        }
    }
}
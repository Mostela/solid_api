import { IMailSend, IMessage } from "../IMailSend";
import nodemailer from 'nodemailer';
import Mail from "nodemailer/lib/mailer";

export class MailTrapMailProvider implements IMailSend{
    private tranporter: Mail;
    constructor(
    ){
        this.tranporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "13f83622c71020",
              pass: "68cbd91a727559"
            }
          })
    }

    async sendMail(messange: IMessage): Promise<void>{
        await this.tranporter.sendMail({
            to: {
                name: messange.to.name,
                address: messange.to.email
            },
            from: {
                name: messange.from.name,
                address: messange.from.email
            },
            subject: messange.subject,
            html: messange.body
        })
    }
}
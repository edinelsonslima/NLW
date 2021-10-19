import {Request, Response} from "express"
import { MessagesService } from "../services/MessagesServices"

class MessagesController{
    async create(req: Request, res: Response){
        const {admin_id, text, user_id} = req.body
        const messagesService = new MessagesService()

        const message = await messagesService.create({
            admin_id,
            text,
            user_id
        })

        return res.json(message)
    }

    //localhost:3000/messages/idDoUsuario
    async showByUser(req: Request, res: Response){
        const {id} = req.params

        const messagesService = new MessagesService()

        const list = await messagesService.listByUser(id)

        return res.json(list)
    }
}

export {MessagesController}
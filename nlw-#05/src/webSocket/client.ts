import {io} from "../http"
import { ConnectionServices } from "../services/ConnectionsServices"
import { MessagesService } from "../services/MessagesServices"
import { UsersService } from "../services/UsersServices"

interface IParams{
    text: string
    email: string
}

io.on("connect", (socket) => {
    const connectionService = new ConnectionServices()
    const usersService = new UsersService()
    const messageService = new MessagesService()

    //Salvar a conexão com o socket_id, user_id
    socket.on("client_first_access", async (params) =>{
        const socket_id = socket.id
        const {text, email} = params as IParams
        let user_id = null

        const userExists = await usersService.findByEmail(email)

        if(!userExists){
            const user = await usersService.create(email)
            
            await connectionService.create({
                socket_id,
                user_id: user.id
            })

            user_id = user.id
        }
        else{
            user_id = userExists.id
            const connection = await connectionService.findByUserId(userExists.id)

            if(!connection){
                await connectionService.create({
                    socket_id,
                    user_id: userExists.id
                })
            }
            else{
                connection.socket_id = socket_id
                await connectionService.create(connection)
            }
        }

        await messageService.create({
            text,
            user_id
        })
    })
})
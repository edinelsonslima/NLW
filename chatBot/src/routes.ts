/**
 *Tipos de paramentros
 *Routes params = Parametros de rotas
 *http://localhost:3000/settings/1
 *Query params => Filtro e buscas
 *http://localhost:3000/settings/1?search=algumacoisa
 *
 * Body params => { } 
 */

 /**
 * GET = Buscas
 * POST = Criação
 * PUT = Alteração
 * DELETE = Deletar
 * PATCH = Alterar uma informação especifica
 */

import {Router} from "express"
import { MessagesController } from "./controllers/MessagesController"
import { SettingsController } from "./controllers/settingsController"
import { UsersController } from "./controllers/UsersController"

const routes = Router()

const settingsController = new SettingsController()
const usersController = new UsersController()
const messagesController = new MessagesController()

routes.post("/settings", settingsController.create)
routes.get("/settings/:username", settingsController.findByUserName)
routes.put("/settings/:username", settingsController.update)

routes.post("/users", usersController.create)

routes.post("/messages", messagesController.create)
routes.get("/messages/:id", messagesController.showByUser)


export {routes}
import {http} from "./http"
import "./webSocket/client"

http.listen(3000, ()=> {
    console.log('Server ligado na porta 3000')
})

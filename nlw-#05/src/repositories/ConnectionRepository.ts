import { EntityRepository, Repository } from "typeorm"
import { Connection } from "../entities/Connetion";

@EntityRepository(Connection)
class ConnectionRepository extends Repository<Connection>{
    
}

export{ConnectionRepository}
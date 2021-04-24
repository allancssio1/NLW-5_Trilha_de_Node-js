import { io } from "../http"
import { ConnectionService } from "../services/ConnectionsService"


io.on("connect", async socket => {
  const connectionsService = new ConnectionService

  const allConnectionsWithoutAdmin = await connectionsService.findAllWithoutAdmin()

  io.emit("admin_lis_all_users", allConnectionsWithoutAdmin)
})
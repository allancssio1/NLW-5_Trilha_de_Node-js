import { io } from "../http"

io.on("connect", (socket) => {
  socket.on("client_first_access", params => {
    
  })
})
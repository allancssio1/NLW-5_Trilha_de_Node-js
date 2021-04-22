import express from   "express"
import { createServer } from "http"
import { Server, Socket } from "socket.io"

import "./database"
import { routes } from "./routes"

const app = express()

const http = createServer(app) //Criando o protocolo HTTP
const io = new Server(http) //Criando o protocolo de WebSocket

io.on("connection", (socket: Socket) => {
  console.log("Se conectou", socket.id)
})

app.use(express.json())

app.use(routes)

http.listen(3333, () => console.log('Server running on port 3333'))
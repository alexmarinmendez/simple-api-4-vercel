import dotenv from 'dotenv'
import Server from "./src/server.js"
dotenv.config()

const app = new Server()
app.listen()
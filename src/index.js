import dotenv from 'dotenv'
import express from 'express'
import connectDatabase from "./database/database.js"
import cors from 'cors'

import tarefaRoute from './routes/tarefa.route.js'
import usuarioRouter from './routes/usuario.route.js'

dotenv.config()

const port = process.env.PORT || 3000
const app = express()

app.use(cors())
connectDatabase()
app.use(express.json())

app.use("/tarefa", tarefaRoute)
app.use("/usuario", usuarioRouter)

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))
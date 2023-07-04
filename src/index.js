import dotenv from 'dotenv'
import express from 'express'
import connectDatabase from "./database/database.js"
import cors from 'cors'

dotenv.config()

const port = process.env.PORT || 3000
const app = express()

app.use(cors())
connectDatabase()

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))
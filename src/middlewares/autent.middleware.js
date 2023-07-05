import dotenv from 'dotenv'
import { BuscarUsuarioPeloIdService } from '../services/usaurio.service.js'
import jwt from 'jsonwebtoken'

dotenv.config()

export const autentMiddleware = (req, res, next) => {

    try {
        const { authorization } = req.headers

        if (!authorization) {
            res.status(401).send({ message: "Você não está autorizado" })
        }

        const partes = authorization.split(" ")

        if (partes.length !== 2) {
            res.status(401).send({ message: "Você não está autorizado" })
        }

        const [schema, token] = partes

        if (schema !== "Bearer") {
            res.status(401).send({ message: "Você não está autorizado" })
        }

        jwt.verify(token, process.env.SECRET_JWT, async (err, decoded) => {
            if (err) {
                res.status(401).send({ message: "Token Inválido!" })
            }

            const usuario = await BuscarUsuarioPeloIdService(decoded.id)

            if (!usuario || !usuario.id) {
                res.status(401).send({ message: "Token Inválido!" })
            }

            req.IdUsuario = usuario.id

            return next()
        })

    } catch (error) { 
        res.status(401).send({ message: "Token Inválido!" })
     }
}

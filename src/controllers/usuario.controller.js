import { 
    criarUsuarioService,
 } from "../services/usaurio.service.js"
 import jwt from 'jsonwebtoken'

export const criarUsuarioController = async (req, res) => {
    try {
        const body = req.body

        const usuario = await criarUsuarioService(body)

        res.status(201).send(usuario)

    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

export const buscarUsuarioPorTokenController = async(req, res) => {
    try {
        const token = req.body

        jwt.verify(token, process.env.SECRET_JWT, async (err, decoded) => {
            if (err) {
                res.status(401).send({ message: "Token Inválido!" })
            }

            const usuario = await BuscarUsuarioPeloIdService(decoded.id)

            if (!usuario || !usuario.id) {
                res.status(401).send({ message: "Token Inválido!" })
            }

            return usuario.nome
        })

    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}
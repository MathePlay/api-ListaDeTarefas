import { criarUsuarioService } from "../services/usaurio.service.js"

export const criarUsuarioController = async (req, res) => {
    try {
        const body = req.body

        const usuario = await criarUsuarioService(body)

        res.status(201).send(usuario)

    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}
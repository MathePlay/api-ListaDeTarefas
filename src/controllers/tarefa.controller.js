import { adicionarTarefaService } from "../services/tarefa.service.js"

export const adicionarTarefaController = async (req, res) => {
    try {
        const body = req.body

        const tarefa = await adicionarTarefaService(body)

        res.status(201).send(tarefa)

    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}
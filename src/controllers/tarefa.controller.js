import { 
    adicionarTarefaService,
    buscarTodasTarefasService
} from "../services/tarefa.service.js"

export const adicionarTarefaController = async (req, res) => {
    try {
        const body = req.body

        const tarefa = await adicionarTarefaService(body)

        res.status(201).send(tarefa)

    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

export const buscarTodasTarefasController = async (req, res) => {
    try {
        const tarefas = await buscarTodasTarefasService()

        res.status(201).send(tarefas)

    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}
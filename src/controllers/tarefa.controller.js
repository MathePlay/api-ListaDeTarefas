import { 
    adicionarTarefaService,
    buscarTodasTarefasService,
    buscarTarefaPeloIdService,
    alterarRealizadaService
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

export const buscarTarefaPeloIdController = async (req, res) => {
    try {
        const {id} = req.params

        const tarefa = await buscarTarefaPeloIdService(id)

        res.status(201).send(tarefa)

    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

export const alterarRealizadaController = async (req, res) => {
    try {
        const {id} = req.params

        const realizada = await alterarRealizadaService(id)

        res.status(201).send({message: `Tarefa ${realizada ? "" : "não " }Realizada`})

    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}
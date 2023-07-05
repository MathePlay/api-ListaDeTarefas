import { 
    adicionarTarefaService,
    buscarTodasTarefasService,
    buscarTarefaPeloIdService,
    alterarRealizadaService,
    alterarPrioridadeService,
    alterarNomeTarefaService
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

export const alterarPrioridadeController = async (req, res) => {
    try {
        const {id} = req.params
        const { prioridade } = req.body

        await alterarPrioridadeService(id, prioridade)

        res.status(201).send({message: `Prioridade alterada para ${prioridade}`})

    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

export const alterarNomeTarefaController = async (req, res) => {
    try {
        const {id} = req.params
        const { nome } = req.body

        await alterarNomeTarefaService(id, nome)

        res.status(201).send({message: `Nome da tarefa alterado para: ${nome}`})

    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}
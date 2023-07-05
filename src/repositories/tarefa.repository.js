import Tarefa from "../models/Tarefa.js"

export const adicionarTarefaRepository = (body) => Tarefa.create(body)

export const buscarTodasTarefasRepository = () => Tarefa.find()

export const buscarTarefaPeloIdRepository = (id) => Tarefa.findById(id)

export const alterarRealizadaRepository = (id, valor) => Tarefa.findOneAndUpdate(
    {_id: id},
    {realizada: valor},
    {new: true}
)

export const alterarPrioridadeRepository = (id, prioridade) => Tarefa.findOneAndUpdate(
    {_id: id},
    {prioridade: prioridade},
    {new: true}
)

export const alterarNomeTarefaRepository = (id, nome) => Tarefa.findOneAndUpdate(
    {_id: id},
    {nome: nome},
    {new: true}
)
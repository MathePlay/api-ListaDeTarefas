import Tarefa from "../models/Tarefa.js"

export const adicionarTarefaRepository = (body) => Tarefa.create(body)

export const buscarTodasTarefasRepository = () => Tarefa.find()
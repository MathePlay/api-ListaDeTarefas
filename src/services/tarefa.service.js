import { 
    adicionarTarefaRepository,
    buscarTodasTarefasRepository
} from "../repositories/tarefa.repository.js"

export const adicionarTarefaService = async (body) => {
    const { nome, prioridade} = body

    if (!nome || !prioridade) throw new Error("Insira todos os campos para o cadastro")

    const tarefa = await adicionarTarefaRepository(body)

    if (!tarefa) throw new Error("Erro ao adicionar a tarefa!")

    return ({
            message: "Tarefa adicionada com successo!!",
            tarefa: {
                id: tarefa._id,
                nome: tarefa.nome,
                prioridade: tarefa.prioridade,
                data_criacao: tarefa.data_criacao,
            }
        })
} 

export const buscarTodasTarefasService = async () => {
    const tarefas = await buscarTodasTarefasRepository()

    if(tarefas.length === 0) throw new Error("Não foram encontradas tarefas!")

    return tarefas
}
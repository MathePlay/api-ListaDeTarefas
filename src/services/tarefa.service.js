import { 
    adicionarTarefaRepository,
    buscarTodasTarefasRepository,
    buscarTarefaPeloIdRepository,
    alterarRealizadaRepository,
    alterarPrioridadeRepository,
    alterarNomeTarefaRepository
} from "../repositories/tarefa.repository.js"

export const adicionarTarefaService = async (body) => {
    const { nome, prioridade} = body

    if (!nome || !prioridade) throw new Error("Insira todos os campos para o cadastro")

    if (prioridade !== "URGENTE" && prioridade !== "ALTA" && prioridade !== "MEDIA" &&  prioridade !== "BAIXA") {
        throw new Error("A prioridade precisa ser: URGENTE, ALTA, MEDIA ou BAIXA")
    }

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

export const buscarTarefaPeloIdService = async (id) => {
    const tarefa = await buscarTarefaPeloIdRepository(id)

    if (!tarefa) throw new Error("Tarefa não encontrada")

    return tarefa
}

export const alterarRealizadaService = async (id) => {

    const tarefa = await buscarTarefaPeloIdRepository(id)

    if (!tarefa) throw new Error("Tarefa não encontrada")

    const valor = !tarefa.realizada
    
    const tarefaAutalizada = await alterarRealizadaRepository(id, valor)

    return tarefaAutalizada.realizada
}

export const alterarPrioridadeService = async (id, prioridade) => {

    if (!prioridade) throw new Error("Não foi encontrado o parametro")

    if (prioridade !== "URGENTE" && prioridade !== "ALTA" && prioridade !== "MEDIA" &&  prioridade !== "BAIXA") {
        throw new Error("A prioridade precisa ser: URGENTE, ALTA, MEDIA ou BAIXA")
    }
    
    const tarefaAutalizada = await alterarPrioridadeRepository(id, prioridade)

    if (!tarefaAutalizada) throw new Error("Não foi possivel alterar a prioridade")
}

export const alterarNomeTarefaService = async (id, nome) => {

    if (!nome) throw new Error("Não foi encontrado o parametro")
    if(!nome.length === 0) throw new Error("Parametro sem caracter")
    
    const tarefaAutalizada = await alterarNomeTarefaRepository(id, nome)

    if (!tarefaAutalizada) throw new Error("Não foi possivel alterar o nome")

    return tarefaAutalizada
}
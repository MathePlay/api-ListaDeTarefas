import mongoose from 'mongoose'

const TarefaSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    prioridade: {
        type: String,
        require: true
    },
    realizada: {
        type: Boolean,
        default: false
    },
    data_criacao: {
        type: Date,
        default: Date.now()
    },
    data_limite: {
        type: Date,
        require: false
    },
    data_realizacao: {
        type: Date,
        require: false
    },
})

const Tarefa = mongoose.model("Tarefas", TarefaSchema)

export default Tarefa
import mongoose from 'mongoose'

const TarefaSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    realizada: {
        type: Boolean,
        default: false
    },
    favorito: {
        type: Boolean,
        default: false
    },
    data_criacao: {
        type: Date,
        default: Date.now()
    },
    usuario:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuarios",
        require: true
    },
    // prioridade: {
    //     type: String,
    //     require: true
    // },
    // data_limite: {
    //     type: Date,
    //     default: Date.now()
    // },
})

const Tarefa = mongoose.model("Tarefas", TarefaSchema)

export default Tarefa
import mongoose from 'mongoose'

const dia = new Date().getDate()
const mes = new Date().getMonth() + 1
const ano = new Date().getFullYear()


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
        type: String,
        default: `${dia}/${mes}/${ano}`
    },
    usuario:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario",
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
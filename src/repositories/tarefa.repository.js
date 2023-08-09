import Tarefa from "../models/Tarefa.js";

export const adicionarTarefaRepository = (body) => Tarefa.create(body);

export const buscarTodasTarefasRepository = () => Tarefa.$where();

export const buscarTarefaPeloIdRepository = (id) => Tarefa.findById(id);

export const editarTarefaRepository = (id, tarefa) =>
    Tarefa.findOneAndUpdate({ _id: id }, { $set: tarefa }, { new: true });

export const alterarRealizadaRepository = (id, valor) =>
    Tarefa.findOneAndUpdate({ _id: id }, { realizada: valor }, { new: true });

export const alterarFavoritoRepository = (id, valor) =>
    Tarefa.findOneAndUpdate({ _id: id }, { favorito: valor }, { new: true });

export const deletarTarefaRepository = (id) => Tarefa.findByIdAndDelete(id);

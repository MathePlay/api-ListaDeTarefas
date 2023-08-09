import {
    adicionarTarefaService,
    buscarTodasTarefasService,
    buscarTarefaPeloIdService,
    editarTarefaService,
    alterarRealizadaService,
    deletarTarefaService,
    alterarFavoritoService,
} from "../services/tarefa.service.js";

export const adicionarTarefaController = async (req, res) => {
    try {
        const {nome} = req.body;

        const tarefa = await adicionarTarefaService({
            nome,
            usuario: req.IdUsuario
        });

        res.status(201).send(tarefa);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

export const buscarTodasTarefasController = async (req, res) => {
    try {
        const tarefas = await buscarTodasTarefasService({usuario: req.IdUsuario});

        res.status(201).send(tarefas);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

export const buscarTarefaPeloIdController = async (req, res) => {
    try {
        const { id } = req.params;

        const tarefa = await buscarTarefaPeloIdService(id);

        res.status(201).send(tarefa);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

export const editarTarefaController = async (req, res) => {
    try {
        const { id } = req.params;
        const tarefaBody = req.body;

        const tarefa = await editarTarefaService(id, tarefaBody);

        res.status(201).send(tarefa);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

export const alterarRealizadaController = async (req, res) => {
    try {
        const { id } = req.params;

        const tarefa = await alterarRealizadaService(id);

        res.status(201).send(tarefa);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

export const alterarFavoritoController = async (req, res) => {
    try {
        const { id } = req.params;

        const tarefa = await alterarFavoritoService(id);

        res.status(201).send(tarefa);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

export const deletarTarefaController = async (req, res) => {
    try {
        const { id } = req.params;

        const tarefa = await deletarTarefaService(id);

        res.status(201).send({ message: "Tarefa deletada com succeso" });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

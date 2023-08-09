import mongoose from "mongoose";
import { BuscarUsuarioPeloIdService } from "../services/usaurio.service";

export const validarId = (req, res, next) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ mesage: "Id Inválido" });
    }

    return next()
};

export const validaUsuario = async (req, res, next) => {
    const id = req.params.id;

    const usuario = await BuscarUsuarioPeloIdService(id)

    if(!usuario) {
        return res.status(400).send({ mesage: "Usuario não encontrado" });
    }

    return next()
};

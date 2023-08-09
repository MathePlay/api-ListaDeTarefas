import { Router } from "express";
const router = Router();

import { autentMiddleware } from "../middlewares/autent.middleware.js";

import {
    adicionarTarefaController,
    buscarTodasTarefasController,
    buscarTarefaPeloIdController,
    editarTarefaController,
    alterarRealizadaController,
    deletarTarefaController,
    alterarFavoritoController,
} from "../controllers/tarefa.controller.js";

router.post("/", autentMiddleware ,adicionarTarefaController);
router.get("/", autentMiddleware ,buscarTodasTarefasController);
router.get("/:id", buscarTarefaPeloIdController);
router.put("/:id", editarTarefaController);
router.patch("/realizar/:id", alterarRealizadaController);
router.patch("/favorito/:id", alterarFavoritoController);
router.delete("/:id", deletarTarefaController);

export default router;

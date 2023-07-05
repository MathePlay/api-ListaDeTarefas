import { Router } from "express";
const router = Router()

import { autentMiddleware } from "../middlewares/autent.middleware.js";

import { 
    adicionarTarefaController,
    buscarTodasTarefasController,
    buscarTarefaPeloIdController,
    alterarRealizadaController,
} from '../controllers/tarefa.controller.js'

router.post("/", adicionarTarefaController)
router.get("/", buscarTodasTarefasController)
router.get("/:id", buscarTarefaPeloIdController)
router.patch("/:id", alterarRealizadaController)


export default router
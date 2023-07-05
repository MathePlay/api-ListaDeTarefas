import { Router } from "express";
const router = Router()

import { autentMiddleware } from "../middlewares/autent.middleware.js";

import { 
    adicionarTarefaController,
    buscarTodasTarefasController,
    buscarTarefaPeloIdController,
    alterarRealizadaController,
    alterarPrioridadeController,
    alterarNomeTarefaController
} from '../controllers/tarefa.controller.js'

router.post("/", adicionarTarefaController)
router.get("/", buscarTodasTarefasController)
router.get("/:id", buscarTarefaPeloIdController)
router.patch("/:id", alterarRealizadaController)
router.patch("/prioridade/:id", alterarPrioridadeController)
router.patch("/nome/:id", alterarNomeTarefaController)



export default router
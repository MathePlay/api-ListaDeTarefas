import { Router } from "express";
const router = Router()

import { autentMiddleware } from "../middlewares/autent.middleware.js";

import { 
    adicionarTarefaController,
    buscarTodasTarefasController,
    buscarTarefaPeloIdController,
    editarTarefaController,
    alterarRealizadaController,
    deletarTarefaController,
} from '../controllers/tarefa.controller.js'

router.post("/", adicionarTarefaController)
router.get("/", buscarTodasTarefasController)
router.get("/:id", buscarTarefaPeloIdController)
router.put("/:id", editarTarefaController)
router.patch("/realizar/:id", alterarRealizadaController)
router.delete("/:id", deletarTarefaController)



export default router
import { Router } from "express";
const router = Router()

import { autentMiddleware } from "../middlewares/autent.middleware.js";
import { 
    adicionarTarefaController,
    buscarTodasTarefasController
} from '../controllers/tarefa.controller.js'

router.post("/", autentMiddleware, adicionarTarefaController)
router.get("/", autentMiddleware, buscarTodasTarefasController)


export default router
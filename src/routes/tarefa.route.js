import { Router } from "express";
const router = Router()

import { adicionarTarefaController } from '../controllers/tarefa.controller.js'

router.post("/", adicionarTarefaController)

export default router
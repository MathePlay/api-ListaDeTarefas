import { Router } from "express";
const router = Router()

import { criarUsuarioController } from '../controllers/usuario.controller.js'

router.post("/", criarUsuarioController)

export default router
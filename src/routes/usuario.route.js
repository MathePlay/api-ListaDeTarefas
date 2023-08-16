import { Router } from "express";
const router = Router()

import { 
    criarUsuarioController,
    buscarUsuarioPorTokenController,
} from '../controllers/usuario.controller.js'

router.post("/", criarUsuarioController)
router.post('/token', buscarUsuarioPorTokenController)

export default router
import { Router } from "express";
const router = Router()

import { 
    criarUsuarioController, 
    buscarUsuariosController 
} from '../controllers/usuario.controller.js'

router.post("/", criarUsuarioController)
router.get("/", buscarUsuariosController)

export default router
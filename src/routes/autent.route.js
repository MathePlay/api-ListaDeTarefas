import login from '../controllers/autent.controller.js'
import { Router } from 'express'
const router = Router()

router.post('/', login)

export default router
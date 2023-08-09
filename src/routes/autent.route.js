import loginController from '../controllers/autent.controller.js'

import { Router } from 'express'
const router = Router()

router.post('/', loginController)

export default router
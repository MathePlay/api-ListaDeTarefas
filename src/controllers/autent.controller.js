import { loginService } from '../services/autent.service.js'

const login = async (req, res) => {
    const { email, senha } = req.body

    try {
        const token = await loginService(email, senha)

        res.send({ token })

    } catch (err) {
        res.status(500).send(err.message)
    }
}

export default login
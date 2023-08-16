import { loginService } from '../services/autent.service.js'

const loginController = async (req, res) => {
    const { email, senha } = req.body

    try {
        const {user} = await loginService(email, senha)

        res.send(user)

    } catch (err) {
        res.status(500).send(err.message)
    }
}

export default loginController
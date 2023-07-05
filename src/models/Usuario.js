import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const UsuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    senha: {
        type: String,
        require: true,
        select: false
    }
})

UsuarioSchema.pre("save", async function (next) {
    this.senha = await bcrypt.hash(this.senha, 10)
    next()
})

const Usuario = mongoose.model("Usuario", UsuarioSchema)

export default Usuario
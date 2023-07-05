import bcrypt from 'bcrypt'
import { loginRepository, gerarToken } from "../repositories/autent.repository.js"

export const loginService = async (email, senha) =>{
    const usuario = await loginRepository(email)

    if(!usuario) throw new Error("Usuario ou senha invalido")

    const SenhaValida = bcrypt.compare(senha, usuario.senha)

    if(!SenhaValida) throw new Error("Usuario ou senha invalido")
    
    const token = gerarToken(usuario.id)

    return token
}
import Usuario from "../models/Usuario.js"

export const criarUsuarioRepository = (body) => Usuario.create(body)

export const buscarUsuariosRepository = () => Usuario.find()
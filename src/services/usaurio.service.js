import { 
    criarUsuarioRepository,
    buscarUsuariosRepository,
    BuscarUsuarioPeloIdRepository
} from "../repositories/usuario.repository.js"

export const criarUsuarioService = async (body) => {
    const { nome, email, senha} = body

    if (!nome || !email || !senha) throw new Error("Insira todos os campos para o cadastro")

    const usuario = await criarUsuarioRepository(body)

    if (!usuario) throw new Error("Erro ao criar um usuario!")

    return ({
            message: "Usuario cadastrado com successo!!",
            usuario
        })
}

export const buscarUsuariosService = async () => {
    const usuarios = await buscarUsuariosRepository()

    if (usuarios.length === 0) throw new Error("Você não tem usuarios cadastrados")

    return usuarios
}

export const BuscarUsuarioPeloIdService = async (id) => {
    const usuario = await BuscarUsuarioPeloIdRepository(id)
    return usuario
}
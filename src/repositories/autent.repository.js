import jwt from 'jsonwebtoken'
import Usuario from '../models/Usuario.js'

export const loginRepository = (email) => Usuario.findOne({ email }).select("+senha")

export const gerarToken = (id) => jwt.sign({ id }, process.env.SECRET_JWT, { expiresIn: 86400 })
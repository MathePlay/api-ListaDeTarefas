import mongoose from 'mongoose'

const connectDatabase = () => {
    console.log("Conectando ao banco de dados...")

    mongoose.connect(
        process.env.MONGODB_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(() => console.log("MongoDB Atlas Conectado!"))
    .catch((error) => console.log(`Erro ao se conectar com o MongoDB Atlas: ${error}`))
}

export default connectDatabase

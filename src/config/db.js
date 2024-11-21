import { MongoClient } from 'mongodb';

export default async function dbConnection(stringConexao) {
    let mongoClient;

    try {
        mongoClient = new MongoClient(stringConexao);
        await mongoClient.connect();
        return mongoClient;
    } catch (erro) {
        console.error('Falha na conexão com o banco!', erro);
        process.exit();
    }
};

import { MongoClient } from 'mongodb';

export default async function dbConnection(stringConexao) {
    let mongoClient;

    try {
        mongoClient = new MongoClient(stringConexao);
        await mongoClient.connect();
        return mongoClient;
    } catch (error) {
        console.error('Falha na conexão com o banco!', error.message);
        process.exit();
    }
};

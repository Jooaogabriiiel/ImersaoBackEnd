import { MongoClient } from 'mongodb';

// **Função para conectar ao banco de dados MongoDB**
// Recebe uma string de conexão como parâmetro
export default async function conectarAoBanco(stringConexao) {
  // Variável para armazenar o cliente MongoDB
  let mongoClient;

  try {
    // Cria uma nova instância do cliente MongoDB, passando a string de conexão
    mongoClient = new MongoClient(stringConexao);
    console.log('Conectando ao cluster do banco de dados...');
    // Conecta ao banco de dados de forma assíncrona (await)
    await mongoClient.connect();
    console.log('Conectado ao MongoDB Atlas com sucesso!');

    // Retorna o cliente conectado para uso em outras partes do código
    return mongoClient;
  } catch (erro) {
    // Caso ocorra algum erro durante a conexão, imprime uma mensagem de erro no console
    console.error('Falha na conexão com o banco!', erro);
    // Encerra a execução do processo
    process.exit();
  }
}
import conectarAoBanco from "../config/dbConfig.js";
// Importa a função para conectar ao banco de dados, definida em dbConfig.js.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
// Conecta ao banco de dados usando a string de conexão fornecida pela variável de ambiente STRING_CONEXAO. 
// A palavra-chave 'async/await' permite lidar com operações assíncronas de forma mais síncrona.
export default async function getTodosPosts() {
// Função assíncrona para buscar todos os posts do banco de dados.
    const db = conexao.db("imersao-instabytes");
    // Seleciona o banco de dados "imersao-instabytes" da conexão estabelecida.
    const colecao = db.collection("posts");
    // Seleciona a coleção "posts" dentro do banco de dados.
    return colecao.find().toArray();
    // Executa uma consulta para buscar todos os documentos da coleção e retorna os resultados em um array.
}
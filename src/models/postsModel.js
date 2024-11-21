import conectarAoBanco from "../config/dbConfig.js";
// Importa a função para conectar ao banco de dados, definida em dbConfig.js.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
// Conecta ao banco de dados usando a string de conexão fornecida pela variável de ambiente STRING_CONEXAO. 
// A palavra-chave 'async/await' permite lidar com operações assíncronas de forma mais síncrona.
export async function getTodosPosts() {
// Função assíncrona para buscar todos os posts do banco de dados.
        // Seleciona o banco de dados "imersao-instabytes"
        const db = conexao.db("imersao-instabytes");
        // Seleciona a coleção "posts" dentro do banco de dados
        const colecao = db.collection("posts");
        // Retorna um array com todos os documentos da coleção
        return colecao.find().toArray();
   }

export async function criarPost(novoPost) {
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);
}
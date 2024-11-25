import conectarAoBanco from "../config/dbConfig.js";
import{ ObjectId } from "mongodb";
// Importa a função `conectarAoBanco` do arquivo `dbConfig.js`. 
// Essa função é responsável por estabelecer a conexão com o banco de dados.

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
// Chama a função `conectarAoBanco` e armazena a conexão em uma constante.
// A string de conexão é obtida da variável de ambiente `STRING_CONEXAO`.
// A palavra-chave `await` espera que a conexão seja estabelecida antes de continuar.

export async function getTodosPosts() {
    // Função assíncrona para buscar todos os posts do banco de dados.

    const db = conexao.db("imersao-instabytes");
    // Obtem o banco de dados com o nome "imersao-instabytes" a partir da conexão estabelecida.

    const colecao = db.collection("posts");
    // Obtem a coleção "posts" dentro do banco de dados. É aqui que os documentos (posts) são armazenados.

    return colecao.find().toArray();
    // Executa uma consulta para encontrar todos os documentos na coleção "posts" e retorna um array com os resultados.
}

export async function criarPost(novoPost) {
    const db = conexao.db("imersao-instabytes");
    // Obtem o banco de dados "imersao-instabytes" a partir da conexão estabelecida.

    const colecao = db.collection("posts");
    // Obtem a coleção "posts" dentro do banco de dados.

    return colecao.insertOne(novoPost);
    // Insere um novo documento (post) na coleção "posts". O parâmetro `novoPost` contém os dados do novo post. 
    // Retorna um objeto com informações sobre o documento inserido.
}

export async function atualizarPost(id, novoPost) {
    const db = conexao.db("imersao-instabytes");
    // Obtem o banco de dados "imersao-instabytes" a partir da conexão estabelecida.

    const colecao = db.collection("posts");
    // Obtem a coleção "posts" dentro do banco de dados.
    const objID = ObjectId.createFromHexString(id);
    return colecao.updateOne({_id:new ObjectId(objID)}, {$set:novoPost});
    // Insere um novo documento (post) na coleção "posts". O parâmetro `novoPost` contém os dados do novo post. 
    // Retorna um objeto com informações sobre o documento inserido.
}
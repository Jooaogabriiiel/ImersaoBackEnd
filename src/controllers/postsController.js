import getTodosPosts from "../models/postsModel.js";
export async function listarPosts (req, res) {
    // Define uma rota para responder a requisições GET para a URL "/posts".
    const posts = await getTodosPosts()
    // Chama a função getTodosPosts para obter todos os posts e armazena o resultado na variável 'posts'.
    res.status(200).json(posts);
    // Envia uma resposta HTTP com status 200 (OK) e o conteúdo dos posts no formato JSON.
}
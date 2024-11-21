import fs from "fs";
import {getTodosPosts, criarPost} from "../models/postsModel.js";

// Rota para listar todos os posts
export async function listarPosts (req, res) {
    // Obtém todos os posts do banco de dados
    const posts = await getTodosPosts();
    // Envia uma resposta com status 200 (OK) e os posts em formato JSON
    res.status(200).json(posts);
}

// Rota para criar um novo post
export async function postarNovoPost(req, res) {
    // Obtém os dados do novo post do corpo da requisição
    const novoPost = req.body;
    try {
        // Cria o novo post no banco de dados
        const postCriado = await criarPost(novoPost);
        // Envia uma resposta com status 200 (OK) e o post criado em formato JSON
        res.status(200).json(postCriado);
    } catch(erro) {
        // Em caso de erro, registra no console e envia uma resposta com status 500
        console.error(erro.message);
        res.status(500).json({"Erro" : "Falha na requisição"});
    }
}

// Rota para fazer upload de imagem e criar um novo post
export async function uploadImagem(req, res) {
    // Cria um novo objeto de post com a imagem
    const novoPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    };
    try {
        // Cria o novo post no banco de dados
        const postCriado = await criarPost(novoPost);
        // Gera o novo nome da imagem
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
        // Renomeia o arquivo da imagem para o novo nome
        fs.renameSync(req.file.path, imagemAtualizada);
        // Envia uma resposta com status 200 (OK) e o post criado em formato JSON
        res.status(200).json(postCriado);
    } catch(erro) {
        // Em caso de erro, registra no console e envia uma resposta com status 500
        console.error(erro.message);
        res.status(500).json({"Erro" : "Falha na requisição"});
    }
}
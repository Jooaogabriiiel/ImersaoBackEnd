import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postsController.js";

// Configura o armazenamento do Multer para uploads de imagens
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      // Especifica o diretório de destino para salvar os arquivos enviados
      cb(null, 'uploads/'); // Substitua por seu caminho de upload desejado
    },
    filename: function (req, file, cb) {
      // Define o nome do arquivo no destino
      cb(null, file.originalname); // Considere usar uma estratégia de geração de nomes únicos para produção
    }
  });

  // Cria uma instância do middleware Multer
const upload = multer({ storage: storage });

const routes = (app) => {
    app.use(express.json());
    // Habilita o middleware para analisar o corpo das requisições JSON

    app.get("/posts", listarPosts);
    // Define uma rota GET para listar todos os posts. Chama a função listarPosts.

    app.post("/posts", postarNovoPost);
    // Define uma rota POST para criar um novo post. Chama a função postarNovoPost.

    app.post("/upload", upload.single("imagem"), uploadImagem)
    // Define uma rota POST para fazer upload de uma imagem e criar um novo post.
    // O middleware `upload.single('imagem')` é usado para processar o arquivo enviado com o nome 'imagem'.
    // Chama a função uploadImagem para processar o upload e criar o post.
    app.put("/upload/:id", atualizarNovoPost);
}

export default routes;
// Exporta a função 'routes' para ser utilizada em outros módulos.
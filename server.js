import express from "express";
// Importa o framework Express, que será utilizado para criar a aplicação web. 
// Express é um framework leve e flexível para construir APIs e aplicações web Node.js.

import routes from "./src/routes/postsRoutes.js"
// Importa o módulo de rotas, que define as diferentes rotas (endpoints) da aplicação. 
// Esse módulo provavelmente contém as definições das rotas para lidar com requisições HTTP como GET, POST, etc.

const app = express();
// Cria uma instância do Express, que será o ponto de partida da nossa aplicação. 
// Essa instância representa a aplicação web e será utilizada para definir as rotas, middlewares e configurações.

routes(app);
// Chama a função `routes` passando a instância do Express como parâmetro.
// Essa função irá configurar as rotas da aplicação, associando as funções de tratamento de requisições às rotas específicas.

app.listen(3000, () => {
    console.log("Servidor escutando...");
});
// Inicia o servidor Express na porta 3000.
// A função de callback é executada quando o servidor estiver pronto para receber requisições.
// A mensagem "Servidor escutando..." é exibida no console para indicar que o servidor está em execução.
import express from "express";
import { listarPosts } from "../controllers/postsController.js";

const routes = (app) => {
    app.use(express.json());
    // Habilita o middleware para analisar o corpo das requisições que contêm dados no formato JSON.
    app.get("/posts", listarPosts);
}

export default routes;
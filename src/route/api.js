import express from "express";
import translateController from "../controller/translate-controller.js";

const theRouter = new express.Router();
// Translate API
theRouter.get('/api', () => {
    return 'Halo'
}); 
theRouter.post('/api/translate', translateController.translate);

export {
    theRouter
}
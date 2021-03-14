import express, { Router } from 'express';
import ImageController from '../controller/image.controller';

export default class ApiRouter{
    static router(){
        const router = express.Router();
        router.post('/image', ImageController.create);
        router.get('/images', ImageController.getImages)
        return router;
    }
}
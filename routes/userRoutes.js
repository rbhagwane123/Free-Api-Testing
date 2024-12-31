import express from "express";
import { create, fetch, fetchByemail } from '../controller/userController.js';

console.log("Inside Route");
const route = express.Router();

route.get('/getAllUsers', fetch);

route.post('/create', create);

route.get('/getBy', fetchByemail);

export default route

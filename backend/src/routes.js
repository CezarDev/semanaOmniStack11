/**
 * Tipos de Parâmetros: 
 * -Query Params = Parâmetros nomeados enviados na rota apó os ? (Usado em Páginação, Busca e etc);
 * -Route Params = Parâmetros idêntificados para acessar recursos   
 * -Request Body = Corpo da requisição, utilizado para criar ou alterar recursos
 */

const express = require('express');

const OngController = require('./controllers/OngController');  
const IncidentController = require('./controllers/IncidentController');  
const ProfileController = require('./controllers/ProfileController');  
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);    

routes.post('/sessions', SessionController.create);  



module.exports = routes;
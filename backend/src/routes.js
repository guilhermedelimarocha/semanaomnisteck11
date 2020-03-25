const express = require('express');
const crypto = require ('crypto');
const connection = require ('./database/connection');
/** ONGS CONTROLLER */
const OngController = require ('./controllers/OngController');
/* CASOS CONTROLLER */
const IncidentController = require ('./controllers/IncidentController');
/** PROFILE CONTROLER */
const ProfileController = require ('./controllers/ProfileController');
/** SESSÃO CONTROLER */
const SessionController = require ('./controllers/SessionController');

 const routes = express.Router();

 routes.post('/sessions', SessionController.create ); 

 routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.post('/incidents', IncidentController.create ); 
routes.get('/incidents', IncidentController.index ); 
routes.delete('/incidents/:id', IncidentController.delete);

module.exports= routes;
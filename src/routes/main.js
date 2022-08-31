const router = require('express').Router();

const {index, about, service, contact, admin, login} = require('../controllers/mainContollers');

const adminCheck = require('../Middlewares/adminCheck');

router
    .get('/', index)
    .get('/about', about)
    .get('/service', service)
    .get('/contact', contact)
    .get('/admin',adminCheck, admin)
    .get('/login', login)


module.exports = router


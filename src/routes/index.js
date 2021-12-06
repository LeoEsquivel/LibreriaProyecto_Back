const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
require('express-async-errors');

const { ErrorMiddleware, NotFoundMiddleware, CorsMiddleware} = require('../middlewares');

module.exports = function({HomeRoutes, UserRoutes, BookRoutes, EditorialRoutes, AuthorRoutes, SaleRoutes, AuthRoutes, CartRoutes}) {
    const router = express.Router();
    const apiRoutes = express.Router();

    apiRoutes
    .use(express.json())
    .use(cors())
    .use(helmet())
    .use(compression());

    router.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
        res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
        next();
    });
    

    apiRoutes.use('/home', HomeRoutes);
    apiRoutes.use('/user', UserRoutes);
    apiRoutes.use('/book', BookRoutes);
    apiRoutes.use('/editorial', EditorialRoutes);
    apiRoutes.use('/author', AuthorRoutes);
    apiRoutes.use('/sale', SaleRoutes);
    apiRoutes.use('/auth', AuthRoutes);
    apiRoutes.use('/cart', CartRoutes);


    router.use("/v1/api", apiRoutes);


    router.use(NotFoundMiddleware);
    router.use(ErrorMiddleware);
    return router;
};
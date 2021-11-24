const {createContainer, asClass, asValue, asFunction} = require('awilix')

//Congfig
const config = require('../config');
const app = require('.')

//Services
const { HomeService } = require('../services');

//Controllers
const {HomeController} = require('../controllers');

//Routes
const { HomeRoutes } = require('../routes/index.routes');
const Routes = require('../routes');

//Models
const { User, Book, Author, Editorial } = require('../models');

const container = createContainer();

container
.register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config)
})
.register({
    HomeService: asClass(HomeService).singleton()
}).register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton()
}).register({
    HomeRoutes: asFunction(HomeRoutes).singleton()
}).register({
    User: asValue(User),
    Book: asValue(Book),
    Author: asValue(Author),
    Editorial: asValue(Editorial)
});

module.exports = container;

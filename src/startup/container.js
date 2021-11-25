const {createContainer, asClass, asValue, asFunction} = require('awilix')

//Congfig
const config = require('../config');
const app = require('.')

//Services
const { HomeService, UserService, BookService, AuthorService, EditorialService } = require('../services');

//Controllers
const {HomeController} = require('../controllers');

//Routes
const { HomeRoutes } = require('../routes/index.routes');
const Routes = require('../routes');

//Models
const { User, Book, Author, Editorial } = require('../models');

//Repositories
const { UserR, BookR, EditorialR, AuthorR } = require('../repositories');
const BookRepository = require('../repositories/book.repository');

const container = createContainer();

container
.register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config)
})
.register({
    HomeService: asClass(HomeService).singleton(),
    UserService: asClass(UserService).singleton(),
    BookService: asClass(BookService).singleton(),
    EditorialService: asClass(EditorialService).singleton(),
    AuthorService: asClass(AuthorService).singleton()
}).register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton()
}).register({
    HomeRoutes: asFunction(HomeRoutes).singleton()
}).register({
    User: asValue(User),
    Book: asValue(Book),
    Author: asValue(Author),
    Editorial: asValue(Editorial)
}).register({
    UserRepository: asClass(UserR).singleton(),
    BookRepository: asClass(BookR).singleton(),
    EditorialRepository: asClass(EditorialR).singleton(),
    AuthorRepository: asClass(AuthorR).singleton()
})

module.exports = container;

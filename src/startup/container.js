const {createContainer, asClass, asValue, asFunction} = require('awilix')

//Congfig
const config = require('../config');
const app = require('.')

//Services
const { HomeService, UserService, BookService, AuthorService, EditorialService, SaleService } = require('../services');

//Controllers
const {HomeController, UserController, BookController, EditorialController, AuthorController, SaleController} = require('../controllers');

//Routes
const { HomeRoutes, UserRoutes, BookRoutes, EditorialRoutes, AuthorRoutes, SaleRoutes } = require('../routes/index.routes');
const Routes = require('../routes');

//Models
const { User, Book, Author, Editorial, Sale } = require('../models');

//Repositories
const { UserR, BookR, EditorialR, AuthorR, SaleR } = require('../repositories');
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
    AuthorService: asClass(AuthorService).singleton(),
    SaleService: asClass(SaleService).singleton()
}).register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
    BookController: asClass(BookController.bind(BookController)).singleton(),
    EditorialController: asClass(EditorialController.bind(EditorialController)).singleton(),
    AuthorController: asClass(AuthorController.bind(AuthorController)).singleton(),
    SaleController: asClass(SaleController).singleton()
}).register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
    BookRoutes: asFunction(BookRoutes).singleton(),
    EditorialRoutes: asFunction(EditorialRoutes).singleton(),
    AuthorRoutes: asFunction(AuthorRoutes).singleton(),
    SaleRoutes: asFunction(SaleRoutes).singleton()
}).register({
    User: asValue(User),
    Book: asValue(Book),
    Author: asValue(Author),
    Editorial: asValue(Editorial),
    Sale: asValue(Sale)
}).register({
    UserRepository: asClass(UserR).singleton(),
    BookRepository: asClass(BookR).singleton(),
    EditorialRepository: asClass(EditorialR).singleton(),
    AuthorRepository: asClass(AuthorR).singleton(),
    SaleRepository: asClass(SaleR).singleton()
})

module.exports = container;

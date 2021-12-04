const {createContainer, asClass, asValue, asFunction} = require('awilix')

//Config
const config = require('../config');
const app = require('.')

//Services
const { HomeService, UserService, BookService, AuthorService, EditorialService, SaleService, AuthService, CartService } = require('../services');

//Controllers
const {HomeController, UserController, BookController, EditorialController, AuthorController, SaleController, AuthController, CartController} = require('../controllers');

//Routes
const { HomeRoutes, UserRoutes, BookRoutes, EditorialRoutes, AuthorRoutes, SaleRoutes, AuthRoutes, CartRoutes } = require('../routes/index.routes');
const Routes = require('../routes');

//Models
const { User, Book, Author, Editorial, Sale, Cart } = require('../models');

//Repositories
const { UserR, BookR, EditorialR, AuthorR, SaleR, CartR } = require('../repositories');

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
    SaleService: asClass(SaleService).singleton(),
    AuthService: asClass(AuthService).singleton(),
    CartService: asClass(CartService).singleton()
}).register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
    BookController: asClass(BookController.bind(BookController)).singleton(),
    EditorialController: asClass(EditorialController.bind(EditorialController)).singleton(),
    AuthorController: asClass(AuthorController.bind(AuthorController)).singleton(),
    SaleController: asClass(SaleController.bind(SaleController)).singleton(),
    AuthController: asClass(AuthController.bind(AuthController)).singleton(),
    CartController: asClass(CartController.bind(CartController)).singleton()
}).register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
    BookRoutes: asFunction(BookRoutes).singleton(),
    EditorialRoutes: asFunction(EditorialRoutes).singleton(),
    AuthorRoutes: asFunction(AuthorRoutes).singleton(),
    SaleRoutes: asFunction(SaleRoutes).singleton(),
    AuthRoutes: asFunction(AuthRoutes).singleton(),
    CartRoutes: asFunction(CartRoutes).singleton()
}).register({
    User: asValue(User),
    Book: asValue(Book),
    Author: asValue(Author),
    Editorial: asValue(Editorial),
    Sale: asValue(Sale),
    Cart: asValue(Cart)
}).register({
    UserRepository: asClass(UserR).singleton(),
    BookRepository: asClass(BookR).singleton(),
    EditorialRepository: asClass(EditorialR).singleton(),
    AuthorRepository: asClass(AuthorR).singleton(),
    SaleRepository: asClass(SaleR).singleton(),
    CartRepository: asClass(CartR).singleton()
})

module.exports = container;

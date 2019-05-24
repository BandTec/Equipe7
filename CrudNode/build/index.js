"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const businessRoutes_1 = __importDefault(require("./routes/businessRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const graficoRoutes_1 = __importDefault(require("./routes/graficoRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use((express_1.default.json()));
        this.app.use(express_1.default.urlencoded({
            extended: false
        }));
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            next();
        });
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/user', userRoutes_1.default);
        this.app.use('/api/business', businessRoutes_1.default);
        this.app.use('/api/login', authRoutes_1.default);
        this.app.use('/api/grafico', graficoRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server on port `, this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();

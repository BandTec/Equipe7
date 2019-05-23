import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import userRoutes from './routes/userRoutes';
import businessRoutes from './routes/businessRoutes';
import authRoutes from './routes/authRoutes';
import graficoRoutes from './routes/graficoRoutes';

class Server {
    public app: Application;
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use((express.json()));
        this.app.use(express.urlencoded({
            extended: false
        }));
        this.app.use((req: Request, res: Response, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header(
                'Access-Control-Allow-Headers',
                'Origin, X-Requested-With, Content-Type, Accept'
            );
            next();
        });

    }

    routes(): void {
        this.app.use(indexRoutes);
        this.app.use('/api/user', userRoutes);
        this.app.use('/api/business', businessRoutes);
        this.app.use('/api/login', authRoutes);
        this.app.use('/api/grafico', graficoRoutes)
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server on port `, this.app.get('port'));
        })
    }

}

const server = new Server();
server.start();
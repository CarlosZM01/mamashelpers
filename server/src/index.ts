import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import cursosRoutes from './routes/cursosRoutes';
import especialistasRoutes from './routes/espRoutes';
import usuariosRoutes from './routes/usuariosRoutes';
import citasRoutes from './routes/citasRoutes';
import authRoutes from './routes/authRoutes';

class Server {

    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void{
        this.app.use('/', indexRoutes);
        this.app.use('/api/cursos', cursosRoutes);
        this.app.use('/api/especialistas', especialistasRoutes);
        this.app.use('/api/usuarios', usuariosRoutes);
        this.app.use('/api/citas', citasRoutes);
        this.app.use('/api/login', authRoutes);
    }

    start(): void{
        this.app.listen(this.app.get('port'), () => {
            console.log('Sevidor en el puerto ', this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();
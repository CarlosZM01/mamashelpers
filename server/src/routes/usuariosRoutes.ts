import { Router } from 'express';

import usuariosController from '../controllers/usuariosController'

class UsuariosRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', usuariosController.getUsuarios);
        this.router.get('/:id', usuariosController.getUsuario);
        this.router.post('/', usuariosController.registrarUsuario);
        this.router.put('/:id', usuariosController.update);
        this.router.delete('/:id', usuariosController.delete);
    }
}

const usuariosRoutes = new UsuariosRoutes();
export default usuariosRoutes.router;
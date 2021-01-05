import { Router } from 'express';

import cursosController from '../controllers/cursosController'

class CursosRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', cursosController.getAll);
        this.router.get('/:id', cursosController.getOne);
        this.router.post('/', cursosController.create);
        this.router.put('/:id', cursosController.update);
        this.router.delete('/:id', cursosController.delete);
    }
}

const cursosRoutes = new CursosRoutes();
export default cursosRoutes.router;
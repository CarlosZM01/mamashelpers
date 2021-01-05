import { Router } from 'express';

import especialistasController from '../controllers/espController'

class EspecialistasRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', especialistasController.getEspecialistas);
        this.router.get('/:id', especialistasController.getEsp);
        // this.router.post('/', especialistasController.create);
        // this.router.put('/:id', especialistasController.update);
        // this.router.delete('/:id', especialistasController.delete);
    }
}

const especialistasRoutes = new EspecialistasRoutes();
export default especialistasRoutes.router;
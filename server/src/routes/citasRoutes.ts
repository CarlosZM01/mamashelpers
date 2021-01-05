import { Router } from 'express';

import citasController from '../controllers/citasController'

class CitasRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', citasController.getCitas);
        this.router.get('/:id', citasController.getCita);
        this.router.post('/', citasController.registrarCita);
        this.router.put('/:id', citasController.update);
        this.router.delete('/:id', citasController.delete);
    }
}

const citasRoutes = new CitasRoutes();
export default citasRoutes.router;
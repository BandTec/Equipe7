import { Router } from 'express';
import usuarioController from '../../controllers/controllersProjeto/usuarioController';


class UserRoutes {
    public router: Router = Router();

    constructor() {
        this.config();

    }

    config(): void {
        this.router.get('/', usuarioController.list);
        this.router.get('/:id', usuarioController.getUserId);
        this.router.post('/', usuarioController.create);
        this.router.put('/:id', usuarioController.update);
        this.router.delete('/:id', usuarioController.delete);
    }

}

const userRoutes = new UserRoutes();
export default userRoutes.router;
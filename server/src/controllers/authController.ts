import {Request, Response} from 'express';
import { token } from 'morgan';

import pool from '../database';

class AuthController {

    public async login (req: Request, res: Response): Promise<any> {
        const { email } = req.params;
        const { password } = req.params;
        if (email && password ) {
            await pool.query('SELECT * FROM usuarios WHERE email = ? AND password = ?', [email, password], function(err, result, fields){
                if(err) throw err;
                res.json(result[0]);
            });
        } else {
        res.send('Por favor ingrese un email y contraseña');
        }
    }

};

const authController = new AuthController();
export default authController;







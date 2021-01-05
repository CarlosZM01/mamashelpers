import {Request, Response} from 'express';

import pool from '../database';

class UsuariosController {

     public async getUsuarios (req: Request, res: Response){
         await pool.query('SELECT * FROM usuarios', function(err, result, fields){
             if(err) throw err;
             res.json(result);
         });         
     }

     public async getUsuario (req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        await pool.query('SELECT * FROM usuarios WHERE id = ?', [id], function(err, result, fields){
            if(err) throw err;
            res.json(result[0]);
        });
    }

     public async registrarUsuario (req: Request, res: Response): Promise<void> {
         await pool.query('INSERT INTO usuarios set ?',[req.body]);
         res.json({message: 'usuario guardado'});
     }

     public async update (req: Request, res: Response): Promise<void>{
         const { id } = req.params;
         await pool.query('UPDATE usuarios set ? WHERE id = ?', [req.body, id]);
         res.json({message: 'usuario actualizado'});
        
    }

     public async delete (req: Request, res: Response){
         const { id } = req.params;
         await pool.query('DELETE FROM usuarios WHERE id = ?', [id]);
         res.json({message: 'El usuario fue eliminado'});
     }
}

const usuariosController = new UsuariosController();
export default usuariosController;
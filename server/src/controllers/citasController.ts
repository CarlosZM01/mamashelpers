import {Request, Response} from 'express';

import pool from '../database';

class CitasController {

     public async getCitas (req: Request, res: Response){
         await pool.query('SELECT * FROM citas', function(err, result, fields){
             if(err) throw err;
             res.json(result);
         });         
     }

     public async getCita (req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        await pool.query('SELECT * FROM citas WHERE id = ?', [id], function(err, result, fields){
            if(err) throw err;
            res.json(result[0]);
        });
    }

     public async registrarCita (req: Request, res: Response): Promise<void> {
         await pool.query('INSERT INTO citas set ?',[req.body]);
         res.json({message: 'Cita guardado'});
     }

     public async update (req: Request, res: Response): Promise<void>{
         const { id } = req.params;
         await pool.query('UPDATE citas set ? WHERE id = ?', [req.body, id]);
         res.json({message: 'Cita actualizada'});
        
    }

     public async delete (req: Request, res: Response){
         const { id } = req.params;
         await pool.query('DELETE FROM citas WHERE id = ?', [id]);
         res.json({message: 'La cita fue eliminada'});
     }
}

const citasController = new CitasController();
export default citasController;
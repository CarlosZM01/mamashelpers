import {Request, Response} from 'express';

import pool from '../database';

class CursosController {

     public async getAll (req: Request, res: Response){
         await pool.query('SELECT * FROM cursos', function(err, result, fields){
             if(err) throw err;
             res.json(result);
         });         
     }

     public async getOne (req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        await pool.query('SELECT * FROM cursos WHERE id = ?', [id], function(err, result, fields){
            if(err) throw err;
            res.json(result[0]);
        });
    }

     public async create (req: Request, res: Response): Promise<void> {
         await pool.query('INSERT INTO cursos set ?',[req.body]);
         res.json({message: 'Curso guardado'});
     }

     public async update (req: Request, res: Response): Promise<void>{
         const { id } = req.params;
         await pool.query('UPDATE cursos set ? WHERE id = ?', [req.body, id]);
         res.json({message: 'Curso actualizado'});
        
    }

     public async delete (req: Request, res: Response){
         const { id } = req.params;
         await pool.query('DELETE FROM cursos WHERE id = ?', [id]);
         res.json({message: 'El curso fue eliminado'});
     }
}

const cursosController = new CursosController();
export default cursosController;
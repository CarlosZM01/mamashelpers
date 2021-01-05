import {Request, Response} from 'express';

import pool from '../database';

class EspecialistasController {

     public async getEspecialistas (req: Request, res: Response){
         await pool.query('SELECT * FROM especialistas', function(err, result, fields){
             if(err) throw err;
             res.json(result);
         });         
     }

     public async getEsp (req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        await pool.query('SELECT * FROM especialistas WHERE id = ?', [id], function(err, result, fields){
            if(err) throw err;
            res.json(result[0]);
        });
    }

    //  public async create (req: Request, res: Response): Promise<void> {
    //      await pool.query('INSERT INTO especialistas set ?',[req.body]);
    //      res.json({message: 'Especialistas guardado'});
    //  }

    //  public async update (req: Request, res: Response): Promise<void>{
    //      const { id } = req.params;
    //      await pool.query('UPDATE especialistas set ? WHERE id = ?', [req.body, id]);
    //      res.json({message: 'Especialistas actualizado'});
        
    // }

    //  public async delete (req: Request, res: Response){
    //      const { id } = req.params;
    //      await pool.query('DELETE FROM especialistas WHERE id = ?', [id]);
    //      res.json({message: 'El especialista fue eliminado'});
    //  }
}

const especialistasController = new EspecialistasController();
export default especialistasController;
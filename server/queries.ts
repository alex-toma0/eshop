import pgPromise from 'pg-promise';
import { Request, Response } from 'express';
const pgp = pgPromise();

// db configuration object
const cn = {
    host: 'localhost',
    port: 5432,
    database: 'eshop',
    user: 'postgres',
    password: 'Bursucprajit1',
    max: 30 
  };

const db = pgp(cn);

export const getProducts = async (req: Request, res: Response) : Promise<void> => {

    try {
        const rows = await db.any('select * from product');
        console.log(rows);
        res.status(200).json(rows);

    } catch (err) {
        console.log(err);
    }
    
}

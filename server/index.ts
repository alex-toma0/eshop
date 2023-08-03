import express, { Express,Request,Response } from "express";
import { getProducts } from "./queries.js";
const app = express();
const port = 8080;


app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get('/getProducts', getProducts);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
}); 
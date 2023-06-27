import express, { Request, Response } from 'express';
import packageRouter from './routes/packageRouter';
import loginRouter from './routes/loginRouter';

const app = express();

app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('Aplicação está funcionando!');
});

app.use('/packages', packageRouter);

app.use('/login', loginRouter);

export default app;

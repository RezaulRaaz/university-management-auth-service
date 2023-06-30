import express, { Application } from 'express';
import cors from 'cors';
import { UserRoutes } from './app/modules/users/users.route';
import globalErrorHandler from './app/middlewars/globalErrorHandler';
const app: Application = express();

// cors setup
app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Application routes
app.use('/api/v1/users', UserRoutes);

// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   throw new Error('Testing Error logger')
// })

//global error handler
app.use(globalErrorHandler);

export default app;

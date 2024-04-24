import { Router } from 'express';
import { exampleValidation } from '../middleware/example.validation';
import { handleValidation } from '../middleware/handle.validation';

const exampleRoute: Router = Router();

exampleRoute.post(
    '/any',
    exampleValidation(),
    handleValidation /*, controller... */,
);

export default exampleRoute;

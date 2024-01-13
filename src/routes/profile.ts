import { Router } from 'express';
import { GetData } from '../handlers/profile/index';

// Create a new router instance
const route = Router();

/**
 * GET /
 * Description: This route handles the root endpoint.
 * Handler: index
 */

route.post('/', GetData);
route.get('/', GetData);
route.put('/:id', GetData);
route.delete('/:id', GetData);

// Export the router
export = route;

import { Router } from 'express';
import { test, index } from '../handlers/index';

// Create a new router instance
const route = Router();

/**
 * GET /
 * Description: This route handles the root endpoint.
 * Handler: index
 */
route.get('/', index);
route.get('/test', test);



// route.get('/test', (req, res) => {
//   res.send('test');
// });

// Export the router
export = route;

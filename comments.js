//create a web server
//create a web server
import { Router } from 'express';
const router = Router();

//import the controller
import { create, destroy } from '../controllers/comments_controller';

//create a route for create
router.post('/create',create);

//create a route for delete
router.get('/destroy/:id',destroy);

//export the router
export default router;
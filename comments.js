//create a web server
import { Router } from 'express';
const router = Router();


//GET request for all comments
router.get('/', (req, res) => {
    find()
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error);
        });
});

export default router;
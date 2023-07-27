//create a web server
import { Router } from 'express';
const router = Router();

//import the comments model
import Comments, { find } from '../models/comments';

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

//POST request to add a new comment
router.post('/save', (req, res) => {
    console.log('Body: ', req.body);
    const data = req.body;

    const newComments = new Comments(data);

    //save the data
    newComments.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server error' });
            return;
        }
        // Comments
        return res.json({
            msg: 'Your data has been saved!!!!!!',
        });
    });
});

//GET request for all comments
router.get('/name', (req, res) => {
    const data = {
        username: 'peterson',
        age: 5,
    };
    res.json(data);
});

export default router;
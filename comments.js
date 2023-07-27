//create a web server
const express = require('express');
const app = express();
//use the express router
const router = express.Router();
//import the comments model
const Comments = require('../models/comments');
//import the body parser
const bodyParser = require('body-parser');
//use the body parser
app.use(bodyParser.urlencoded({extended: true}));
//use the json parser
app.use(bodyParser.json());

//get all comments
router.get('/', (req, res) => {
    Comments.findAll()
        .then((comments) => {
            res.send(comments);
        })
        .catch((err) => {
            res.send("error: " + err);
        });
});

//get comment by id
router.get('/:id', (req, res) => {
    Comments.findByPk(req.params.id)
        .then((comments) => {
            if (comments) {
                res.send(comments);
            } else {
                res.send("Comment does not exist");
            }
        })
        .catch((err) => {
            res.send("error: " + err);
        });
});

//add a comment
router.post('/', (req, res) => {
    if (!req.body.comment) {
        res.status(400);
        res.json({
            error: "Bad Data"
        });
    } else {
        Comments.create(req.body)
            .then(() => {
                res.send("Comment Added");
            })
            .catch((err) => {
                res.send("Error: " + err);
            });
    }
});

//update a comment
router.put('/:id', (req, res) => {
    if (!req.body.comment) {
        res.status(400);
        res.json({
            error: "Bad Data"
        });
    } else {
        Comments.update(
            {comment: req.body.comment},
            {where: {id: req.params.id}}
        )
            .then(() => {
                res.send("Comment Updated");
            })
            .error((err) => res.send(err));
    }
});

//delete a comment
router.delete('/:id', (req, res) => {
    Comments.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(() => {
            res.send("Comment Deleted!");
        })
        .error((err) => res.send(err));
});

//export the router
module.exports = router;
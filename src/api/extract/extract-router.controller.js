const express = require('express');

const Router = express.Router();
const ActionsQueue = require('../../controller/actions-queue.controller');

class ExtractRouter {
    /**
     * Initialize the ExtractRouter
     */
    constructor() {
        this.router = Router;
        this.init();
    }
    
    extract(req, res) {
        let body = req.body;
    
        console.log('test', body);
        // Stringify body
        let response = JSON.stringify(body);
    
        res.send(response); 
    }

    verify(req, res) {
        let body = req.body;
        let config = body;
        let valid = false;

        if(config) {
            let actionsQueue = new ActionsQueue(config);

            valid = actionsQueue.verify();
        }

        res.send(valid);
    }

    /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints.
     */
    init() {
        this.router.post('/', this.extract);
        this.router.post('/verify', this.verify);
    }

}

const extractRouter = new ExtractRouter();
extractRouter.init();

exports.router = extractRouter.router;
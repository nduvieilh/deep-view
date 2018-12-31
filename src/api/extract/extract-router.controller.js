const express = require('express');

const Router = express.Router();

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

    // get router() {
    //     return this._router;
    // }

    /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints.
     */
    init() {
        this.router.post('/', this.extract);
    }

}

// Create the HeroRouter, and export its configured Express.Router
const extractRouter = new ExtractRouter();
extractRouter.init();

exports.router = extractRouter.router;
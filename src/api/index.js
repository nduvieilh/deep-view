const express = require('express');
const ExtractRouter = require('./extract/extract-router.controller');
const router = express.Router();

router.use('/extract', ExtractRouter.router); 

exports.router = router;
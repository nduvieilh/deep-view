"use strict";

var express = require('express');

var ExtractRouter = require('./extract/extract-router.controller');

var router = express.Router();
router.use('/extract', ExtractRouter.router);
exports.router = router;
//# sourceMappingURL=index.js.map
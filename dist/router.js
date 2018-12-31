"use strict";

var express = require('express');

var router = express.Router();

var api = require('./api');

router.use('/api', api.router);
exports.router = router;
//# sourceMappingURL=router.js.map
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var express = require('express');

var Router = express.Router();

var ExtractRouter =
/*#__PURE__*/
function () {
  /**
   * Initialize the ExtractRouter
   */
  function ExtractRouter() {
    _classCallCheck(this, ExtractRouter);

    this.router = Router;
    this.init();
  }

  _createClass(ExtractRouter, [{
    key: "extract",
    value: function extract(req, res) {
      var body = req.body;
      console.log('test', body); // Stringify body

      var response = JSON.stringify(body);
      res.send(response);
    } // get router() {
    //     return this._router;
    // }

    /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints.
     */

  }, {
    key: "init",
    value: function init() {
      this.router.post('/', this.extract);
    }
  }]);

  return ExtractRouter;
}(); // Create the HeroRouter, and export its configured Express.Router


var extractRouter = new ExtractRouter();
extractRouter.init();
exports.router = extractRouter.router;
//# sourceMappingURL=extract-router.controller.js.map
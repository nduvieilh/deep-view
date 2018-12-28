"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var puppeteer = require('puppeteer');

var MAX_INSTANCES = 5;
var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas'];

function run() {
  return _run.apply(this, arguments);
}

function _run() {
  _run = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee8() {
    var browser, queue, instances, _i, state, i, extractInfo, _extractInfo, loadBalance, _loadBalance;

    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _loadBalance = function _ref9() {
              _loadBalance = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee7(instances, queue) {
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        return _context7.abrupt("return", new Promise(
                        /*#__PURE__*/
                        function () {
                          var _ref3 = _asyncToGenerator(
                          /*#__PURE__*/
                          regeneratorRuntime.mark(function _callee6(resolve, reject) {
                            var runJob, queueEntries, results, allJobs, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, instance;

                            return regeneratorRuntime.wrap(function _callee6$(_context6) {
                              while (1) {
                                switch (_context6.prev = _context6.next) {
                                  case 0:
                                    _context6.prev = 0;

                                    runJob =
                                    /*#__PURE__*/
                                    function () {
                                      var _ref4 = _asyncToGenerator(
                                      /*#__PURE__*/
                                      regeneratorRuntime.mark(function _callee5(instance) {
                                        return regeneratorRuntime.wrap(function _callee5$(_context5) {
                                          while (1) {
                                            switch (_context5.prev = _context5.next) {
                                              case 0:
                                                return _context5.abrupt("return", new Promise(
                                                /*#__PURE__*/
                                                function () {
                                                  var _ref5 = _asyncToGenerator(
                                                  /*#__PURE__*/
                                                  regeneratorRuntime.mark(function _callee4(resolve, reject) {
                                                    var queueEntry, job, key;
                                                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                                                      while (1) {
                                                        switch (_context4.prev = _context4.next) {
                                                          case 0:
                                                            try {
                                                              queueEntry = queueEntries.next().value;

                                                              if (typeof queueEntry === 'undefined') {
                                                                resolve(instance.cleanUp());
                                                              }

                                                              job = queueEntry[1];
                                                              key = queueEntry[0];
                                                              instance.run(job, key).then(function (result) {
                                                                results.set(key, result);
                                                                runJob(instance).then(function () {
                                                                  resolve();
                                                                });
                                                              });
                                                            } catch (e) {
                                                              reject(e);
                                                            }

                                                            ;

                                                          case 2:
                                                          case "end":
                                                            return _context4.stop();
                                                        }
                                                      }
                                                    }, _callee4, this);
                                                  }));

                                                  return function (_x11, _x12) {
                                                    return _ref5.apply(this, arguments);
                                                  };
                                                }()));

                                              case 1:
                                              case "end":
                                                return _context5.stop();
                                            }
                                          }
                                        }, _callee5, this);
                                      }));

                                      return function runJob(_x10) {
                                        return _ref4.apply(this, arguments);
                                      };
                                    }();

                                    queueEntries = queue.entries();
                                    results = new Map();
                                    allJobs = new Array();
                                    _iteratorNormalCompletion2 = true;
                                    _didIteratorError2 = false;
                                    _iteratorError2 = undefined;
                                    _context6.prev = 8;

                                    for (_iterator2 = instances[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                      instance = _step2.value;
                                      allJobs.push(runJob(instance));
                                    }

                                    _context6.next = 16;
                                    break;

                                  case 12:
                                    _context6.prev = 12;
                                    _context6.t0 = _context6["catch"](8);
                                    _didIteratorError2 = true;
                                    _iteratorError2 = _context6.t0;

                                  case 16:
                                    _context6.prev = 16;
                                    _context6.prev = 17;

                                    if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                                      _iterator2.return();
                                    }

                                  case 19:
                                    _context6.prev = 19;

                                    if (!_didIteratorError2) {
                                      _context6.next = 22;
                                      break;
                                    }

                                    throw _iteratorError2;

                                  case 22:
                                    return _context6.finish(19);

                                  case 23:
                                    return _context6.finish(16);

                                  case 24:
                                    Promise.all(allJobs).then(function () {
                                      resolve(results);
                                    });
                                    _context6.next = 30;
                                    break;

                                  case 27:
                                    _context6.prev = 27;
                                    _context6.t1 = _context6["catch"](0);
                                    reject(_context6.t1);

                                  case 30:
                                    ;

                                  case 31:
                                  case "end":
                                    return _context6.stop();
                                }
                              }
                            }, _callee6, this, [[0, 27], [8, 12, 16, 24], [17,, 19, 23]]);
                          }));

                          return function (_x8, _x9) {
                            return _ref3.apply(this, arguments);
                          };
                        }()));

                      case 1:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7, this);
              }));
              return _loadBalance.apply(this, arguments);
            };

            loadBalance = function _ref8(_x3, _x4) {
              return _loadBalance.apply(this, arguments);
            };

            _extractInfo = function _ref7() {
              _extractInfo = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee3(topic, page) {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        return _context3.abrupt("return", new Promise(
                        /*#__PURE__*/
                        function () {
                          var _ref = _asyncToGenerator(
                          /*#__PURE__*/
                          regeneratorRuntime.mark(function _callee2(resolve, reject) {
                            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                              while (1) {
                                switch (_context2.prev = _context2.next) {
                                  case 0:
                                    try {
                                      page.then(
                                      /*#__PURE__*/
                                      function () {
                                        var _ref2 = _asyncToGenerator(
                                        /*#__PURE__*/
                                        regeneratorRuntime.mark(function _callee(page) {
                                          var data, selector, searchUrl;
                                          return regeneratorRuntime.wrap(function _callee$(_context) {
                                            while (1) {
                                              switch (_context.prev = _context.next) {
                                                case 0:
                                                  data = new Map();
                                                  selector = "table.infobox>tbody>tr";
                                                  searchUrl = "https://www.wikipedia.org/wiki/".concat(topic);
                                                  _context.next = 5;
                                                  return page.goto(searchUrl);

                                                case 5:
                                                  _context.next = 7;
                                                  return page.$$(selector).then(function (elementArray) {
                                                    var _iteratorNormalCompletion = true;
                                                    var _didIteratorError = false;
                                                    var _iteratorError = undefined;

                                                    try {
                                                      for (var _iterator = elementArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                                        var element = _step.value;
                                                        element.$eval('td', function (node) {
                                                          return node.innerText;
                                                        }).then(function (text) {
                                                          console.log(text);
                                                        }).catch(function (e) {});
                                                      }
                                                    } catch (err) {
                                                      _didIteratorError = true;
                                                      _iteratorError = err;
                                                    } finally {
                                                      try {
                                                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                                                          _iterator.return();
                                                        }
                                                      } finally {
                                                        if (_didIteratorError) {
                                                          throw _iteratorError;
                                                        }
                                                      }
                                                    }
                                                  }).catch(console.error);

                                                case 7:
                                                  resolve(data);

                                                case 8:
                                                case "end":
                                                  return _context.stop();
                                              }
                                            }
                                          }, _callee, this);
                                        }));

                                        return function (_x7) {
                                          return _ref2.apply(this, arguments);
                                        };
                                      }());
                                    } catch (e) {
                                      reject(e);
                                    }

                                    ;

                                  case 2:
                                  case "end":
                                    return _context2.stop();
                                }
                              }
                            }, _callee2, this);
                          }));

                          return function (_x5, _x6) {
                            return _ref.apply(this, arguments);
                          };
                        }()));

                      case 1:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));
              return _extractInfo.apply(this, arguments);
            };

            extractInfo = function _ref6(_x, _x2) {
              return _extractInfo.apply(this, arguments);
            };

            _context8.next = 6;
            return puppeteer.launch({
              headless: false
            });

          case 6:
            browser = _context8.sent;
            queue = new Map();
            instances = new Array();
            console.log(browser);

            for (_i = 0; _i < states.length; _i++) {
              state = states[_i];
              queue.set(state, extractInfo);
            }

            for (i = 0; i < MAX_INSTANCES; i++) {
              instances.push(new Instance(browser));
            }

            _context8.next = 14;
            return loadBalance(instances, queue).then(function (data) {
              console.log(data);
            }).catch(console.log);

          case 14:
            _context8.next = 16;
            return browser.close();

          case 16:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this);
  }));
  return _run.apply(this, arguments);
}

var Instance =
/*#__PURE__*/
function () {
  function Instance(browser) {
    _classCallCheck(this, Instance);

    this.page = browser.newPage();
  }

  _createClass(Instance, [{
    key: "run",
    value: function run(job, value) {
      return job(value, this.page);
    }
  }, {
    key: "cleanUp",
    value: function cleanUp() {
      this.page.then(function (page) {
        page.close().catch(console.error);
      }).catch(console.error);
    }
  }]);

  return Instance;
}();

run();
//# sourceMappingURL=actions-queue.js.map
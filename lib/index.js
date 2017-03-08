'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _canvas = require('./components/canvas');

Object.defineProperty(exports, 'canvas', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_canvas).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
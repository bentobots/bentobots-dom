'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// jtSquare: 0,
// jtRound: 1,
// jtMiter: 2

var implementation = function implementation() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      ID = _ref.ID;
};

var UI = function (_React$Component) {
  _inherits(UI, _React$Component);

  function UI() {
    _classCallCheck(this, UI);

    return _possibleConstructorReturn(this, (UI.__proto__ || Object.getPrototypeOf(UI)).apply(this, arguments));
  }

  _createClass(UI, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('canvas', { id: 'canvas', width: 500, height: 500 });
    }
  }]);

  return UI;
}(_react2.default.Component);

var spec = {
  name: 'HTML Canvas',
  description: 'returns a HTML canvas',
  implementation: implementation,
  ui: {
    component: _react2.default.createElement(UI, { state: { id: 'canvas' } })
  },
  inputs: {
    ID: { default: 'canvas' }
  },
  outputs: {}
};

exports.default = spec;
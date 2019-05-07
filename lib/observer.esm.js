function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var Observer =
/*#__PURE__*/
function () {
  function Observer(state) {
    _classCallCheck(this, Observer);

    this.state = state;
    this.subscribers = [];
  }

  _createClass(Observer, [{
    key: "get",
    value: function get() {
      return this.state;
    }
  }, {
    key: "set",
    value: function set(state) {
      this.state = state;
      this.broadcast(state);
    }
  }, {
    key: "subscribeMany",
    value: function subscribeMany() {
      var _this = this;

      var fnArray = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return fnArray.map(function (fn) {
        return _this.subscribe(fn);
      });
    }
  }, {
    key: "subscribe",
    value: function subscribe(fn) {
      var _this2 = this;

      if (Array.isArray(fn)) {
        return this.subscribeMany(fn);
      }

      this.subscribers.push(fn);
      return function () {
        return _this2.subscribers = _this2.subscribers.filter(function (subscriber) {
          return subscriber !== fn;
        });
      };
    }
  }, {
    key: "broadcast",
    value: function broadcast(data) {
      this.subscribers.forEach(function (subscriber) {
        return subscriber(data);
      });
      return data;
    }
  }]);

  return Observer;
}();

export default Observer;

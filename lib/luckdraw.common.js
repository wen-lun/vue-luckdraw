module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00ee":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "0366":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("1c0b");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var has = __webpack_require__("5135");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "06f8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = __webpack_require__("9cb8");
var Animation_1 = __webpack_require__("ed3d");
var Node_1 = __webpack_require__("4971");
var Global_1 = __webpack_require__("d777");
var blacklist = {
    node: 1,
    duration: 1,
    easing: 1,
    onFinish: 1,
    yoyo: 1
}, PAUSED = 1, PLAYING = 2, REVERSING = 3, idCounter = 0, colorAttrs = ['fill', 'stroke', 'shadowColor'];
var TweenEngine = (function () {
    function TweenEngine(prop, propFunc, func, begin, finish, duration, yoyo) {
        this.prop = prop;
        this.propFunc = propFunc;
        this.begin = begin;
        this._pos = begin;
        this.duration = duration;
        this._change = 0;
        this.prevPos = 0;
        this.yoyo = yoyo;
        this._time = 0;
        this._position = 0;
        this._startTime = 0;
        this._finish = 0;
        this.func = func;
        this._change = finish - this.begin;
        this.pause();
    }
    TweenEngine.prototype.fire = function (str) {
        var handler = this[str];
        if (handler) {
            handler();
        }
    };
    TweenEngine.prototype.setTime = function (t) {
        if (t > this.duration) {
            if (this.yoyo) {
                this._time = this.duration;
                this.reverse();
            }
            else {
                this.finish();
            }
        }
        else if (t < 0) {
            if (this.yoyo) {
                this._time = 0;
                this.play();
            }
            else {
                this.reset();
            }
        }
        else {
            this._time = t;
            this.update();
        }
    };
    TweenEngine.prototype.getTime = function () {
        return this._time;
    };
    TweenEngine.prototype.setPosition = function (p) {
        this.prevPos = this._pos;
        this.propFunc(p);
        this._pos = p;
    };
    TweenEngine.prototype.getPosition = function (t) {
        if (t === undefined) {
            t = this._time;
        }
        return this.func(t, this.begin, this._change, this.duration);
    };
    TweenEngine.prototype.play = function () {
        this.state = PLAYING;
        this._startTime = this.getTimer() - this._time;
        this.onEnterFrame();
        this.fire('onPlay');
    };
    TweenEngine.prototype.reverse = function () {
        this.state = REVERSING;
        this._time = this.duration - this._time;
        this._startTime = this.getTimer() - this._time;
        this.onEnterFrame();
        this.fire('onReverse');
    };
    TweenEngine.prototype.seek = function (t) {
        this.pause();
        this._time = t;
        this.update();
        this.fire('onSeek');
    };
    TweenEngine.prototype.reset = function () {
        this.pause();
        this._time = 0;
        this.update();
        this.fire('onReset');
    };
    TweenEngine.prototype.finish = function () {
        this.pause();
        this._time = this.duration;
        this.update();
        this.fire('onFinish');
    };
    TweenEngine.prototype.update = function () {
        this.setPosition(this.getPosition(this._time));
    };
    TweenEngine.prototype.onEnterFrame = function () {
        var t = this.getTimer() - this._startTime;
        if (this.state === PLAYING) {
            this.setTime(t);
        }
        else if (this.state === REVERSING) {
            this.setTime(this.duration - t);
        }
    };
    TweenEngine.prototype.pause = function () {
        this.state = PAUSED;
        this.fire('onPause');
    };
    TweenEngine.prototype.getTimer = function () {
        return new Date().getTime();
    };
    return TweenEngine;
}());
var Tween = (function () {
    function Tween(config) {
        var that = this, node = config.node, nodeId = node._id, duration, easing = config.easing || exports.Easings.Linear, yoyo = !!config.yoyo, key;
        if (typeof config.duration === 'undefined') {
            duration = 0.3;
        }
        else if (config.duration === 0) {
            duration = 0.001;
        }
        else {
            duration = config.duration;
        }
        this.node = node;
        this._id = idCounter++;
        var layers = node.getLayer() ||
            (node instanceof Global_1.Konva['Stage'] ? node.getLayers() : null);
        if (!layers) {
            Util_1.Util.error('Tween constructor have `node` that is not in a layer. Please add node into layer first.');
        }
        this.anim = new Animation_1.Animation(function () {
            that.tween.onEnterFrame();
        }, layers);
        this.tween = new TweenEngine(key, function (i) {
            that._tweenFunc(i);
        }, easing, 0, 1, duration * 1000, yoyo);
        this._addListeners();
        if (!Tween.attrs[nodeId]) {
            Tween.attrs[nodeId] = {};
        }
        if (!Tween.attrs[nodeId][this._id]) {
            Tween.attrs[nodeId][this._id] = {};
        }
        if (!Tween.tweens[nodeId]) {
            Tween.tweens[nodeId] = {};
        }
        for (key in config) {
            if (blacklist[key] === undefined) {
                this._addAttr(key, config[key]);
            }
        }
        this.reset();
        this.onFinish = config.onFinish;
        this.onReset = config.onReset;
    }
    Tween.prototype._addAttr = function (key, end) {
        var node = this.node, nodeId = node._id, start, diff, tweenId, n, len, trueEnd, trueStart, endRGBA;
        tweenId = Tween.tweens[nodeId][key];
        if (tweenId) {
            delete Tween.attrs[nodeId][tweenId][key];
        }
        start = node.getAttr(key);
        if (Util_1.Util._isArray(end)) {
            diff = [];
            len = Math.max(end.length, start.length);
            if (key === 'points' && end.length !== start.length) {
                if (end.length > start.length) {
                    trueStart = start;
                    start = Util_1.Util._prepareArrayForTween(start, end, node.closed());
                }
                else {
                    trueEnd = end;
                    end = Util_1.Util._prepareArrayForTween(end, start, node.closed());
                }
            }
            if (key.indexOf('fill') === 0) {
                for (n = 0; n < len; n++) {
                    if (n % 2 === 0) {
                        diff.push(end[n] - start[n]);
                    }
                    else {
                        var startRGBA = Util_1.Util.colorToRGBA(start[n]);
                        endRGBA = Util_1.Util.colorToRGBA(end[n]);
                        start[n] = startRGBA;
                        diff.push({
                            r: endRGBA.r - startRGBA.r,
                            g: endRGBA.g - startRGBA.g,
                            b: endRGBA.b - startRGBA.b,
                            a: endRGBA.a - startRGBA.a
                        });
                    }
                }
            }
            else {
                for (n = 0; n < len; n++) {
                    diff.push(end[n] - start[n]);
                }
            }
        }
        else if (colorAttrs.indexOf(key) !== -1) {
            start = Util_1.Util.colorToRGBA(start);
            endRGBA = Util_1.Util.colorToRGBA(end);
            diff = {
                r: endRGBA.r - start.r,
                g: endRGBA.g - start.g,
                b: endRGBA.b - start.b,
                a: endRGBA.a - start.a
            };
        }
        else {
            diff = end - start;
        }
        Tween.attrs[nodeId][this._id][key] = {
            start: start,
            diff: diff,
            end: end,
            trueEnd: trueEnd,
            trueStart: trueStart
        };
        Tween.tweens[nodeId][key] = this._id;
    };
    Tween.prototype._tweenFunc = function (i) {
        var node = this.node, attrs = Tween.attrs[node._id][this._id], key, attr, start, diff, newVal, n, len, end;
        for (key in attrs) {
            attr = attrs[key];
            start = attr.start;
            diff = attr.diff;
            end = attr.end;
            if (Util_1.Util._isArray(start)) {
                newVal = [];
                len = Math.max(start.length, end.length);
                if (key.indexOf('fill') === 0) {
                    for (n = 0; n < len; n++) {
                        if (n % 2 === 0) {
                            newVal.push((start[n] || 0) + diff[n] * i);
                        }
                        else {
                            newVal.push('rgba(' +
                                Math.round(start[n].r + diff[n].r * i) +
                                ',' +
                                Math.round(start[n].g + diff[n].g * i) +
                                ',' +
                                Math.round(start[n].b + diff[n].b * i) +
                                ',' +
                                (start[n].a + diff[n].a * i) +
                                ')');
                        }
                    }
                }
                else {
                    for (n = 0; n < len; n++) {
                        newVal.push((start[n] || 0) + diff[n] * i);
                    }
                }
            }
            else if (colorAttrs.indexOf(key) !== -1) {
                newVal =
                    'rgba(' +
                        Math.round(start.r + diff.r * i) +
                        ',' +
                        Math.round(start.g + diff.g * i) +
                        ',' +
                        Math.round(start.b + diff.b * i) +
                        ',' +
                        (start.a + diff.a * i) +
                        ')';
            }
            else {
                newVal = start + diff * i;
            }
            node.setAttr(key, newVal);
        }
    };
    Tween.prototype._addListeners = function () {
        var _this = this;
        this.tween.onPlay = function () {
            _this.anim.start();
        };
        this.tween.onReverse = function () {
            _this.anim.start();
        };
        this.tween.onPause = function () {
            _this.anim.stop();
        };
        this.tween.onFinish = function () {
            var node = _this.node;
            var attrs = Tween.attrs[node._id][_this._id];
            if (attrs.points && attrs.points.trueEnd) {
                node.setAttr('points', attrs.points.trueEnd);
            }
            if (_this.onFinish) {
                _this.onFinish.call(_this);
            }
        };
        this.tween.onReset = function () {
            var node = _this.node;
            var attrs = Tween.attrs[node._id][_this._id];
            if (attrs.points && attrs.points.trueStart) {
                node.points(attrs.points.trueStart);
            }
            if (_this.onReset) {
                _this.onReset();
            }
        };
    };
    Tween.prototype.play = function () {
        this.tween.play();
        return this;
    };
    Tween.prototype.reverse = function () {
        this.tween.reverse();
        return this;
    };
    Tween.prototype.reset = function () {
        this.tween.reset();
        return this;
    };
    Tween.prototype.seek = function (t) {
        this.tween.seek(t * 1000);
        return this;
    };
    Tween.prototype.pause = function () {
        this.tween.pause();
        return this;
    };
    Tween.prototype.finish = function () {
        this.tween.finish();
        return this;
    };
    Tween.prototype.destroy = function () {
        var nodeId = this.node._id, thisId = this._id, attrs = Tween.tweens[nodeId], key;
        this.pause();
        for (key in attrs) {
            delete Tween.tweens[nodeId][key];
        }
        delete Tween.attrs[nodeId][thisId];
    };
    Tween.attrs = {};
    Tween.tweens = {};
    return Tween;
}());
exports.Tween = Tween;
Node_1.Node.prototype.to = function (params) {
    var onFinish = params.onFinish;
    params.node = this;
    params.onFinish = function () {
        this.destroy();
        if (onFinish) {
            onFinish();
        }
    };
    var tween = new Tween(params);
    tween.play();
};
exports.Easings = {
    BackEaseIn: function (t, b, c, d) {
        var s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    BackEaseOut: function (t, b, c, d) {
        var s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    BackEaseInOut: function (t, b, c, d) {
        var s = 1.70158;
        if ((t /= d / 2) < 1) {
            return (c / 2) * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
        }
        return (c / 2) * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
    },
    ElasticEaseIn: function (t, b, c, d, a, p) {
        var s = 0;
        if (t === 0) {
            return b;
        }
        if ((t /= d) === 1) {
            return b + c;
        }
        if (!p) {
            p = d * 0.3;
        }
        if (!a || a < Math.abs(c)) {
            a = c;
            s = p / 4;
        }
        else {
            s = (p / (2 * Math.PI)) * Math.asin(c / a);
        }
        return (-(a *
            Math.pow(2, 10 * (t -= 1)) *
            Math.sin(((t * d - s) * (2 * Math.PI)) / p)) + b);
    },
    ElasticEaseOut: function (t, b, c, d, a, p) {
        var s = 0;
        if (t === 0) {
            return b;
        }
        if ((t /= d) === 1) {
            return b + c;
        }
        if (!p) {
            p = d * 0.3;
        }
        if (!a || a < Math.abs(c)) {
            a = c;
            s = p / 4;
        }
        else {
            s = (p / (2 * Math.PI)) * Math.asin(c / a);
        }
        return (a * Math.pow(2, -10 * t) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) +
            c +
            b);
    },
    ElasticEaseInOut: function (t, b, c, d, a, p) {
        var s = 0;
        if (t === 0) {
            return b;
        }
        if ((t /= d / 2) === 2) {
            return b + c;
        }
        if (!p) {
            p = d * (0.3 * 1.5);
        }
        if (!a || a < Math.abs(c)) {
            a = c;
            s = p / 4;
        }
        else {
            s = (p / (2 * Math.PI)) * Math.asin(c / a);
        }
        if (t < 1) {
            return (-0.5 *
                (a *
                    Math.pow(2, 10 * (t -= 1)) *
                    Math.sin(((t * d - s) * (2 * Math.PI)) / p)) +
                b);
        }
        return (a *
            Math.pow(2, -10 * (t -= 1)) *
            Math.sin(((t * d - s) * (2 * Math.PI)) / p) *
            0.5 +
            c +
            b);
    },
    BounceEaseOut: function (t, b, c, d) {
        if ((t /= d) < 1 / 2.75) {
            return c * (7.5625 * t * t) + b;
        }
        else if (t < 2 / 2.75) {
            return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
        }
        else if (t < 2.5 / 2.75) {
            return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
        }
        else {
            return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
        }
    },
    BounceEaseIn: function (t, b, c, d) {
        return c - exports.Easings.BounceEaseOut(d - t, 0, c, d) + b;
    },
    BounceEaseInOut: function (t, b, c, d) {
        if (t < d / 2) {
            return exports.Easings.BounceEaseIn(t * 2, 0, c, d) * 0.5 + b;
        }
        else {
            return exports.Easings.BounceEaseOut(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
        }
    },
    EaseIn: function (t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    EaseOut: function (t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    },
    EaseInOut: function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return (c / 2) * t * t + b;
        }
        return (-c / 2) * (--t * (t - 2) - 1) + b;
    },
    StrongEaseIn: function (t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    },
    StrongEaseOut: function (t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    StrongEaseInOut: function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return (c / 2) * t * t * t * t * t + b;
        }
        return (c / 2) * ((t -= 2) * t * t * t * t + 2) + b;
    },
    Linear: function (t, b, c, d) {
        return (c * t) / d + b;
    }
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "0ff5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = __webpack_require__("9cb8");
var Container_1 = __webpack_require__("ea61");
var Factory_1 = __webpack_require__("f0b4");
var BaseLayer_1 = __webpack_require__("d6af");
var Canvas_1 = __webpack_require__("f655");
var Shape_1 = __webpack_require__("fce6");
var Validators_1 = __webpack_require__("4546");
var Global_1 = __webpack_require__("d777");
var HASH = '#', BEFORE_DRAW = 'beforeDraw', DRAW = 'draw', INTERSECTION_OFFSETS = [
    { x: 0, y: 0 },
    { x: -1, y: -1 },
    { x: 1, y: -1 },
    { x: 1, y: 1 },
    { x: -1, y: 1 }
], INTERSECTION_OFFSETS_LEN = INTERSECTION_OFFSETS.length;
var Layer = (function (_super) {
    __extends(Layer, _super);
    function Layer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hitCanvas = new Canvas_1.HitCanvas({
            pixelRatio: 1
        });
        return _this;
    }
    Layer.prototype.setSize = function (_a) {
        var width = _a.width, height = _a.height;
        _super.prototype.setSize.call(this, { width: width, height: height });
        this.hitCanvas.setSize(width, height);
        return this;
    };
    Layer.prototype._validateAdd = function (child) {
        var type = child.getType();
        if (type !== 'Group' && type !== 'Shape') {
            Util_1.Util.throw('You may only add groups and shapes to a layer.');
        }
    };
    Layer.prototype.getIntersection = function (pos, selector) {
        var obj, i, intersectionOffset, shape;
        if (!this.hitGraphEnabled() || !this.isVisible()) {
            return null;
        }
        var spiralSearchDistance = 1;
        var continueSearch = false;
        while (true) {
            for (i = 0; i < INTERSECTION_OFFSETS_LEN; i++) {
                intersectionOffset = INTERSECTION_OFFSETS[i];
                obj = this._getIntersection({
                    x: pos.x + intersectionOffset.x * spiralSearchDistance,
                    y: pos.y + intersectionOffset.y * spiralSearchDistance
                });
                shape = obj.shape;
                if (shape && selector) {
                    return shape.findAncestor(selector, true);
                }
                else if (shape) {
                    return shape;
                }
                continueSearch = !!obj.antialiased;
                if (!obj.antialiased) {
                    break;
                }
            }
            if (continueSearch) {
                spiralSearchDistance += 1;
            }
            else {
                return null;
            }
        }
    };
    Layer.prototype._getIntersection = function (pos) {
        var ratio = this.hitCanvas.pixelRatio;
        var p = this.hitCanvas.context.getImageData(Math.round(pos.x * ratio), Math.round(pos.y * ratio), 1, 1).data, p3 = p[3], colorKey, shape;
        if (p3 === 255) {
            colorKey = Util_1.Util._rgbToHex(p[0], p[1], p[2]);
            shape = Shape_1.shapes[HASH + colorKey];
            if (shape) {
                return {
                    shape: shape
                };
            }
            return {
                antialiased: true
            };
        }
        else if (p3 > 0) {
            return {
                antialiased: true
            };
        }
        return {};
    };
    Layer.prototype.drawScene = function (can, top) {
        var layer = this.getLayer(), canvas = can || (layer && layer.getCanvas());
        this._fire(BEFORE_DRAW, {
            node: this
        });
        if (this.clearBeforeDraw()) {
            canvas.getContext().clear();
        }
        Container_1.Container.prototype.drawScene.call(this, canvas, top);
        this._fire(DRAW, {
            node: this
        });
        return this;
    };
    Layer.prototype.drawHit = function (can, top) {
        var layer = this.getLayer(), canvas = can || (layer && layer.hitCanvas);
        if (layer && layer.clearBeforeDraw()) {
            layer
                .getHitCanvas()
                .getContext()
                .clear();
        }
        Container_1.Container.prototype.drawHit.call(this, canvas, top);
        return this;
    };
    Layer.prototype.clear = function (bounds) {
        BaseLayer_1.BaseLayer.prototype.clear.call(this, bounds);
        this.getHitCanvas()
            .getContext()
            .clear(bounds);
        return this;
    };
    Layer.prototype.enableHitGraph = function () {
        this.hitGraphEnabled(true);
        return this;
    };
    Layer.prototype.disableHitGraph = function () {
        this.hitGraphEnabled(false);
        return this;
    };
    Layer.prototype.toggleHitCanvas = function () {
        if (!this.parent) {
            return;
        }
        var parent = this.parent;
        var added = !!this.hitCanvas._canvas.parentNode;
        if (added) {
            parent.content.removeChild(this.hitCanvas._canvas);
        }
        else {
            parent.content.appendChild(this.hitCanvas._canvas);
        }
    };
    return Layer;
}(BaseLayer_1.BaseLayer));
exports.Layer = Layer;
Layer.prototype.nodeType = 'Layer';
Global_1._registerNode(Layer);
Factory_1.Factory.addGetterSetter(Layer, 'hitGraphEnabled', true, Validators_1.getBooleanValidator());
Util_1.Collection.mapMethods(Layer);


/***/ }),

/***/ "19aa":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1c0b":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "1c7e":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "1cdc":
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__("342f");

module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);


/***/ }),

/***/ "1d80":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "1dde":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "1f21":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = __webpack_require__("9cb8");
var Factory_1 = __webpack_require__("f0b4");
var Shape_1 = __webpack_require__("fce6");
var Validators_1 = __webpack_require__("4546");
var Global_1 = __webpack_require__("d777");
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype._sceneFunc = function (context) {
        context.beginPath();
        context.arc(0, 0, this.radius(), 0, Math.PI * 2, false);
        context.closePath();
        context.fillStrokeShape(this);
    };
    Circle.prototype.getWidth = function () {
        return this.radius() * 2;
    };
    Circle.prototype.getHeight = function () {
        return this.radius() * 2;
    };
    Circle.prototype.setWidth = function (width) {
        if (this.radius() !== width / 2) {
            this.radius(width / 2);
        }
    };
    Circle.prototype.setHeight = function (height) {
        if (this.radius() !== height / 2) {
            this.radius(height / 2);
        }
    };
    return Circle;
}(Shape_1.Shape));
exports.Circle = Circle;
Circle.prototype._centroid = true;
Circle.prototype.className = 'Circle';
Circle.prototype._attrsAffectingSize = ['radius'];
Global_1._registerNode(Circle);
Factory_1.Factory.addGetterSetter(Circle, 'radius', 0, Validators_1.getNumberValidator());
Util_1.Collection.mapMethods(Circle);


/***/ }),

/***/ "2266":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var isArrayIteratorMethod = __webpack_require__("e95a");
var toLength = __webpack_require__("50c4");
var bind = __webpack_require__("0366");
var getIteratorMethod = __webpack_require__("35a1");
var callWithSafeIterationClosing = __webpack_require__("9bdd");

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
  var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
  var iterator, iterFn, index, length, result, next, step;

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = AS_ENTRIES
          ? boundFunction(anObject(step = iterable[index])[0], step[1])
          : boundFunction(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};

iterate.stop = function (result) {
  return new Result(true, result);
};


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var setGlobal = __webpack_require__("ce4e");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "2626":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("d066");
var definePropertyModule = __webpack_require__("9bf2");
var wellKnownSymbol = __webpack_require__("b622");
var DESCRIPTORS = __webpack_require__("83ab");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "2ae9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_luck_draw_vue_vue_type_style_index_0_id_de7782f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c10c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_luck_draw_vue_vue_type_style_index_0_id_de7782f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_luck_draw_vue_vue_type_style_index_0_id_de7782f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_luck_draw_vue_vue_type_style_index_0_id_de7782f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "2cf4":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");
var bind = __webpack_require__("0366");
var html = __webpack_require__("1be4");
var createElement = __webpack_require__("cc12");
var IS_IOS = __webpack_require__("1cdc");

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (classof(process) == 'process') {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    typeof postMessage == 'function' &&
    !global.importScripts &&
    !fails(post) &&
    location.protocol !== 'file:'
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var userAgent = __webpack_require__("342f");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "342f":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "35a1":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("f5df");
var Iterators = __webpack_require__("3f8c");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var anObject = __webpack_require__("825a");
var objectKeys = __webpack_require__("df75");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "3bbe":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "3ca3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "3f8c":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "428f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global;


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "44d2":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var create = __webpack_require__("7c73");
var definePropertyModule = __webpack_require__("9bf2");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "44de":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),

/***/ "4546":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Global_1 = __webpack_require__("d777");
var Util_1 = __webpack_require__("9cb8");
function _formatValue(val) {
    if (Util_1.Util._isString(val)) {
        return '"' + val + '"';
    }
    if (Object.prototype.toString.call(val) === '[object Number]') {
        return val;
    }
    if (Util_1.Util._isBoolean(val)) {
        return val;
    }
    return Object.prototype.toString.call(val);
}
function RGBComponent(val) {
    if (val > 255) {
        return 255;
    }
    else if (val < 0) {
        return 0;
    }
    return Math.round(val);
}
exports.RGBComponent = RGBComponent;
function alphaComponent(val) {
    if (val > 1) {
        return 1;
    }
    else if (val < 0.0001) {
        return 0.0001;
    }
    return val;
}
exports.alphaComponent = alphaComponent;
function getNumberValidator() {
    if (Global_1.Konva.isUnminified) {
        return function (val, attr) {
            if (!Util_1.Util._isNumber(val)) {
                Util_1.Util.warn(_formatValue(val) +
                    ' is a not valid value for "' +
                    attr +
                    '" attribute. The value should be a number.');
            }
            return val;
        };
    }
}
exports.getNumberValidator = getNumberValidator;
function getNumberOrAutoValidator() {
    if (Global_1.Konva.isUnminified) {
        return function (val, attr) {
            var isNumber = Util_1.Util._isNumber(val);
            var isAuto = val === 'auto';
            if (!(isNumber || isAuto)) {
                Util_1.Util.warn(_formatValue(val) +
                    ' is a not valid value for "' +
                    attr +
                    '" attribute. The value should be a number or "auto".');
            }
            return val;
        };
    }
}
exports.getNumberOrAutoValidator = getNumberOrAutoValidator;
function getStringValidator() {
    if (Global_1.Konva.isUnminified) {
        return function (val, attr) {
            if (!Util_1.Util._isString(val)) {
                Util_1.Util.warn(_formatValue(val) +
                    ' is a not valid value for "' +
                    attr +
                    '" attribute. The value should be a string.');
            }
            return val;
        };
    }
}
exports.getStringValidator = getStringValidator;
function getFunctionValidator() {
    if (Global_1.Konva.isUnminified) {
        return function (val, attr) {
            if (!Util_1.Util._isFunction(val)) {
                Util_1.Util.warn(_formatValue(val) +
                    ' is a not valid value for "' +
                    attr +
                    '" attribute. The value should be a function.');
            }
            return val;
        };
    }
}
exports.getFunctionValidator = getFunctionValidator;
function getNumberArrayValidator() {
    if (Global_1.Konva.isUnminified) {
        return function (val, attr) {
            if (!Util_1.Util._isArray(val)) {
                Util_1.Util.warn(_formatValue(val) +
                    ' is a not valid value for "' +
                    attr +
                    '" attribute. The value should be a array of numbers.');
            }
            else {
                val.forEach(function (item) {
                    if (!Util_1.Util._isNumber(item)) {
                        Util_1.Util.warn('"' +
                            attr +
                            '" attribute has non numeric element ' +
                            item +
                            '. Make sure that all elements are numbers.');
                    }
                });
            }
            return val;
        };
    }
}
exports.getNumberArrayValidator = getNumberArrayValidator;
function getBooleanValidator() {
    if (Global_1.Konva.isUnminified) {
        return function (val, attr) {
            var isBool = val === true || val === false;
            if (!isBool) {
                Util_1.Util.warn(_formatValue(val) +
                    ' is a not valid value for "' +
                    attr +
                    '" attribute. The value should be a boolean.');
            }
            return val;
        };
    }
}
exports.getBooleanValidator = getBooleanValidator;
function getComponentValidator(components) {
    if (Global_1.Konva.isUnminified) {
        return function (val, attr) {
            if (!Util_1.Util.isObject(val)) {
                Util_1.Util.warn(_formatValue(val) +
                    ' is a not valid value for "' +
                    attr +
                    '" attribute. The value should be an object with properties ' +
                    components);
            }
            return val;
        };
    }
}
exports.getComponentValidator = getComponentValidator;


/***/ }),

/***/ "4840":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aFunction = __webpack_require__("1c0b");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ "4930":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "4971":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = __webpack_require__("9cb8");
var Factory_1 = __webpack_require__("f0b4");
var Canvas_1 = __webpack_require__("f655");
var Global_1 = __webpack_require__("d777");
var DragAndDrop_1 = __webpack_require__("df93");
var Validators_1 = __webpack_require__("4546");
exports.ids = {};
exports.names = {};
var _addId = function (node, id) {
    if (!id) {
        return;
    }
    exports.ids[id] = node;
};
exports._removeId = function (id, node) {
    if (!id) {
        return;
    }
    if (exports.ids[id] !== node) {
        return;
    }
    delete exports.ids[id];
};
exports._addName = function (node, name) {
    if (name) {
        if (!exports.names[name]) {
            exports.names[name] = [];
        }
        exports.names[name].push(node);
    }
};
exports._removeName = function (name, _id) {
    if (!name) {
        return;
    }
    var nodes = exports.names[name];
    if (!nodes) {
        return;
    }
    for (var n = 0; n < nodes.length; n++) {
        var no = nodes[n];
        if (no._id === _id) {
            nodes.splice(n, 1);
        }
    }
    if (nodes.length === 0) {
        delete exports.names[name];
    }
};
var ABSOLUTE_OPACITY = 'absoluteOpacity', ABSOLUTE_TRANSFORM = 'absoluteTransform', ABSOLUTE_SCALE = 'absoluteScale', CANVAS = 'canvas', CHANGE = 'Change', CHILDREN = 'children', KONVA = 'konva', LISTENING = 'listening', MOUSEENTER = 'mouseenter', MOUSELEAVE = 'mouseleave', NAME = 'name', SET = 'set', SHAPE = 'Shape', SPACE = ' ', STAGE = 'stage', TRANSFORM = 'transform', UPPER_STAGE = 'Stage', VISIBLE = 'visible', TRANSFORM_CHANGE_STR = [
    'xChange.konva',
    'yChange.konva',
    'scaleXChange.konva',
    'scaleYChange.konva',
    'skewXChange.konva',
    'skewYChange.konva',
    'rotationChange.konva',
    'offsetXChange.konva',
    'offsetYChange.konva',
    'transformsEnabledChange.konva',
].join(SPACE), SCALE_CHANGE_STR = ['scaleXChange.konva', 'scaleYChange.konva'].join(SPACE);
var emptyChildren = new Util_1.Collection();
var idCounter = 1;
var Node = (function () {
    function Node(config) {
        var _this = this;
        this._id = idCounter++;
        this.eventListeners = {};
        this.attrs = {};
        this.index = 0;
        this.parent = null;
        this._cache = new Map();
        this._lastPos = null;
        this._batchingTransformChange = false;
        this._needClearTransformCache = false;
        this._filterUpToDate = false;
        this._isUnderCache = false;
        this.children = emptyChildren;
        this._dragEventId = null;
        this.setAttrs(config);
        this.on(TRANSFORM_CHANGE_STR, function () {
            if (_this._batchingTransformChange) {
                _this._needClearTransformCache = true;
                return;
            }
            _this._clearCache(TRANSFORM);
            _this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);
        });
        this.on('visibleChange.konva', function () {
            _this._clearSelfAndDescendantCache(VISIBLE);
        });
        this.on('listeningChange.konva', function () {
            _this._clearSelfAndDescendantCache(LISTENING);
        });
        this.on('opacityChange.konva', function () {
            _this._clearSelfAndDescendantCache(ABSOLUTE_OPACITY);
        });
    }
    Node.prototype.hasChildren = function () {
        return false;
    };
    Node.prototype.getChildren = function () {
        return emptyChildren;
    };
    Node.prototype._clearCache = function (attr) {
        if (attr) {
            this._cache.delete(attr);
        }
        else {
            this._cache.clear();
        }
    };
    Node.prototype._getCache = function (attr, privateGetter) {
        var cache = this._cache.get(attr);
        if (cache === undefined) {
            cache = privateGetter.call(this);
            this._cache.set(attr, cache);
        }
        return cache;
    };
    Node.prototype._getCanvasCache = function () {
        return this._cache.get(CANVAS);
    };
    Node.prototype._clearSelfAndDescendantCache = function (attr, forceEvent) {
        this._clearCache(attr);
        if (forceEvent && attr === ABSOLUTE_TRANSFORM) {
            this.fire('_clearTransformCache');
        }
        if (this.isCached()) {
            return;
        }
        if (this.children) {
            this.children.each(function (node) {
                node._clearSelfAndDescendantCache(attr, true);
            });
        }
    };
    Node.prototype.clearCache = function () {
        this._cache.delete(CANVAS);
        this._clearSelfAndDescendantCache();
        return this;
    };
    Node.prototype.cache = function (config) {
        var conf = config || {};
        var rect = {};
        if (conf.x === undefined ||
            conf.y === undefined ||
            conf.width === undefined ||
            conf.height === undefined) {
            rect = this.getClientRect({
                skipTransform: true,
                relativeTo: this.getParent(),
            });
        }
        var width = Math.ceil(conf.width || rect.width), height = Math.ceil(conf.height || rect.height), pixelRatio = conf.pixelRatio, x = conf.x === undefined ? rect.x : conf.x, y = conf.y === undefined ? rect.y : conf.y, offset = conf.offset || 0, drawBorder = conf.drawBorder || false;
        if (!width || !height) {
            Util_1.Util.error('Can not cache the node. Width or height of the node equals 0. Caching is skipped.');
            return;
        }
        width += offset * 2;
        height += offset * 2;
        x -= offset;
        y -= offset;
        var cachedSceneCanvas = new Canvas_1.SceneCanvas({
            pixelRatio: pixelRatio,
            width: width,
            height: height,
        }), cachedFilterCanvas = new Canvas_1.SceneCanvas({
            pixelRatio: pixelRatio,
            width: 0,
            height: 0,
        }), cachedHitCanvas = new Canvas_1.HitCanvas({
            pixelRatio: 1,
            width: width,
            height: height,
        }), sceneContext = cachedSceneCanvas.getContext(), hitContext = cachedHitCanvas.getContext();
        cachedHitCanvas.isCache = true;
        this._cache.delete('canvas');
        this._filterUpToDate = false;
        if (conf.imageSmoothingEnabled === false) {
            cachedSceneCanvas.getContext()._context.imageSmoothingEnabled = false;
            cachedFilterCanvas.getContext()._context.imageSmoothingEnabled = false;
        }
        sceneContext.save();
        hitContext.save();
        sceneContext.translate(-x, -y);
        hitContext.translate(-x, -y);
        this._isUnderCache = true;
        this._clearSelfAndDescendantCache(ABSOLUTE_OPACITY);
        this._clearSelfAndDescendantCache(ABSOLUTE_SCALE);
        this.drawScene(cachedSceneCanvas, this, true);
        this.drawHit(cachedHitCanvas, this, true);
        this._isUnderCache = false;
        sceneContext.restore();
        hitContext.restore();
        if (drawBorder) {
            sceneContext.save();
            sceneContext.beginPath();
            sceneContext.rect(0, 0, width, height);
            sceneContext.closePath();
            sceneContext.setAttr('strokeStyle', 'red');
            sceneContext.setAttr('lineWidth', 5);
            sceneContext.stroke();
            sceneContext.restore();
        }
        this._cache.set(CANVAS, {
            scene: cachedSceneCanvas,
            filter: cachedFilterCanvas,
            hit: cachedHitCanvas,
            x: x,
            y: y,
        });
        return this;
    };
    Node.prototype.isCached = function () {
        return this._cache.has('canvas');
    };
    Node.prototype.getClientRect = function (config) {
        throw new Error('abstract "getClientRect" method call');
    };
    Node.prototype._transformedRect = function (rect, top) {
        var points = [
            { x: rect.x, y: rect.y },
            { x: rect.x + rect.width, y: rect.y },
            { x: rect.x + rect.width, y: rect.y + rect.height },
            { x: rect.x, y: rect.y + rect.height },
        ];
        var minX, minY, maxX, maxY;
        var trans = this.getAbsoluteTransform(top);
        points.forEach(function (point) {
            var transformed = trans.point(point);
            if (minX === undefined) {
                minX = maxX = transformed.x;
                minY = maxY = transformed.y;
            }
            minX = Math.min(minX, transformed.x);
            minY = Math.min(minY, transformed.y);
            maxX = Math.max(maxX, transformed.x);
            maxY = Math.max(maxY, transformed.y);
        });
        return {
            x: minX,
            y: minY,
            width: maxX - minX,
            height: maxY - minY,
        };
    };
    Node.prototype._drawCachedSceneCanvas = function (context) {
        context.save();
        context._applyOpacity(this);
        context._applyGlobalCompositeOperation(this);
        var canvasCache = this._getCanvasCache();
        context.translate(canvasCache.x, canvasCache.y);
        var cacheCanvas = this._getCachedSceneCanvas();
        var ratio = cacheCanvas.pixelRatio;
        context.drawImage(cacheCanvas._canvas, 0, 0, cacheCanvas.width / ratio, cacheCanvas.height / ratio);
        context.restore();
    };
    Node.prototype._drawCachedHitCanvas = function (context) {
        var canvasCache = this._getCanvasCache(), hitCanvas = canvasCache.hit;
        context.save();
        context.translate(canvasCache.x, canvasCache.y);
        context.drawImage(hitCanvas._canvas, 0, 0);
        context.restore();
    };
    Node.prototype._getCachedSceneCanvas = function () {
        var filters = this.filters(), cachedCanvas = this._getCanvasCache(), sceneCanvas = cachedCanvas.scene, filterCanvas = cachedCanvas.filter, filterContext = filterCanvas.getContext(), len, imageData, n, filter;
        if (filters) {
            if (!this._filterUpToDate) {
                var ratio = sceneCanvas.pixelRatio;
                filterCanvas.setSize(sceneCanvas.width / sceneCanvas.pixelRatio, sceneCanvas.height / sceneCanvas.pixelRatio);
                try {
                    len = filters.length;
                    filterContext.clear();
                    filterContext.drawImage(sceneCanvas._canvas, 0, 0, sceneCanvas.getWidth() / ratio, sceneCanvas.getHeight() / ratio);
                    imageData = filterContext.getImageData(0, 0, filterCanvas.getWidth(), filterCanvas.getHeight());
                    for (n = 0; n < len; n++) {
                        filter = filters[n];
                        if (typeof filter !== 'function') {
                            Util_1.Util.error('Filter should be type of function, but got ' +
                                typeof filter +
                                ' instead. Please check correct filters');
                            continue;
                        }
                        filter.call(this, imageData);
                        filterContext.putImageData(imageData, 0, 0);
                    }
                }
                catch (e) {
                    Util_1.Util.error('Unable to apply filter. ' +
                        e.message +
                        ' This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html.');
                }
                this._filterUpToDate = true;
            }
            return filterCanvas;
        }
        return sceneCanvas;
    };
    Node.prototype.on = function (evtStr, handler) {
        if (arguments.length === 3) {
            return this._delegate.apply(this, arguments);
        }
        var events = evtStr.split(SPACE), len = events.length, n, event, parts, baseEvent, name;
        for (n = 0; n < len; n++) {
            event = events[n];
            parts = event.split('.');
            baseEvent = parts[0];
            name = parts[1] || '';
            if (!this.eventListeners[baseEvent]) {
                this.eventListeners[baseEvent] = [];
            }
            this.eventListeners[baseEvent].push({
                name: name,
                handler: handler,
            });
        }
        return this;
    };
    Node.prototype.off = function (evtStr, callback) {
        var events = (evtStr || '').split(SPACE), len = events.length, n, t, event, parts, baseEvent, name;
        if (!evtStr) {
            for (t in this.eventListeners) {
                this._off(t);
            }
        }
        for (n = 0; n < len; n++) {
            event = events[n];
            parts = event.split('.');
            baseEvent = parts[0];
            name = parts[1];
            if (baseEvent) {
                if (this.eventListeners[baseEvent]) {
                    this._off(baseEvent, name, callback);
                }
            }
            else {
                for (t in this.eventListeners) {
                    this._off(t, name, callback);
                }
            }
        }
        return this;
    };
    Node.prototype.dispatchEvent = function (evt) {
        var e = {
            target: this,
            type: evt.type,
            evt: evt,
        };
        this.fire(evt.type, e);
        return this;
    };
    Node.prototype.addEventListener = function (type, handler) {
        this.on(type, function (evt) {
            handler.call(this, evt.evt);
        });
        return this;
    };
    Node.prototype.removeEventListener = function (type) {
        this.off(type);
        return this;
    };
    Node.prototype._delegate = function (event, selector, handler) {
        var stopNode = this;
        this.on(event, function (evt) {
            var targets = evt.target.findAncestors(selector, true, stopNode);
            for (var i = 0; i < targets.length; i++) {
                evt = Util_1.Util.cloneObject(evt);
                evt.currentTarget = targets[i];
                handler.call(targets[i], evt);
            }
        });
    };
    Node.prototype.remove = function () {
        if (this.isDragging()) {
            this.stopDrag();
        }
        DragAndDrop_1.DD._dragElements.delete(this._id);
        this._remove();
        return this;
    };
    Node.prototype._clearCaches = function () {
        this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);
        this._clearSelfAndDescendantCache(ABSOLUTE_OPACITY);
        this._clearSelfAndDescendantCache(ABSOLUTE_SCALE);
        this._clearSelfAndDescendantCache(STAGE);
        this._clearSelfAndDescendantCache(VISIBLE);
        this._clearSelfAndDescendantCache(LISTENING);
    };
    Node.prototype._remove = function () {
        this._clearCaches();
        var parent = this.getParent();
        if (parent && parent.children) {
            parent.children.splice(this.index, 1);
            parent._setChildrenIndices();
            this.parent = null;
        }
    };
    Node.prototype.destroy = function () {
        exports._removeId(this.id(), this);
        var names = (this.name() || '').split(/\s/g);
        for (var i = 0; i < names.length; i++) {
            var subname = names[i];
            exports._removeName(subname, this._id);
        }
        this.remove();
        return this;
    };
    Node.prototype.getAttr = function (attr) {
        var method = 'get' + Util_1.Util._capitalize(attr);
        if (Util_1.Util._isFunction(this[method])) {
            return this[method]();
        }
        return this.attrs[attr];
    };
    Node.prototype.getAncestors = function () {
        var parent = this.getParent(), ancestors = new Util_1.Collection();
        while (parent) {
            ancestors.push(parent);
            parent = parent.getParent();
        }
        return ancestors;
    };
    Node.prototype.getAttrs = function () {
        return this.attrs || {};
    };
    Node.prototype.setAttrs = function (config) {
        var key, method;
        if (!config) {
            return this;
        }
        for (key in config) {
            if (key === CHILDREN) {
                continue;
            }
            method = SET + Util_1.Util._capitalize(key);
            if (Util_1.Util._isFunction(this[method])) {
                this[method](config[key]);
            }
            else {
                this._setAttr(key, config[key]);
            }
        }
        return this;
    };
    Node.prototype.isListening = function () {
        return this._getCache(LISTENING, this._isListening);
    };
    Node.prototype._isListening = function () {
        var listening = this.listening(), parent = this.getParent();
        if (listening === 'inherit') {
            if (parent) {
                return parent.isListening();
            }
            else {
                return true;
            }
        }
        else {
            return listening;
        }
    };
    Node.prototype.isVisible = function () {
        return this._getCache(VISIBLE, this._isVisible);
    };
    Node.prototype._isVisible = function (relativeTo) {
        var visible = this.visible(), parent = this.getParent();
        if (visible === 'inherit') {
            if (parent && parent !== relativeTo) {
                return parent._isVisible(relativeTo);
            }
            else {
                return true;
            }
        }
        else if (relativeTo && relativeTo !== parent) {
            return visible && parent._isVisible(relativeTo);
        }
        else {
            return visible;
        }
    };
    Node.prototype.shouldDrawHit = function () {
        var layer = this.getLayer();
        return ((!layer && this.isListening() && this.isVisible()) ||
            (layer &&
                layer.hitGraphEnabled() &&
                this.isListening() &&
                this.isVisible()));
    };
    Node.prototype.show = function () {
        this.visible(true);
        return this;
    };
    Node.prototype.hide = function () {
        this.visible(false);
        return this;
    };
    Node.prototype.getZIndex = function () {
        return this.index || 0;
    };
    Node.prototype.getAbsoluteZIndex = function () {
        var depth = this.getDepth(), that = this, index = 0, nodes, len, n, child;
        function addChildren(children) {
            nodes = [];
            len = children.length;
            for (n = 0; n < len; n++) {
                child = children[n];
                index++;
                if (child.nodeType !== SHAPE) {
                    nodes = nodes.concat(child.getChildren().toArray());
                }
                if (child._id === that._id) {
                    n = len;
                }
            }
            if (nodes.length > 0 && nodes[0].getDepth() <= depth) {
                addChildren(nodes);
            }
        }
        if (that.nodeType !== UPPER_STAGE) {
            addChildren(that.getStage().getChildren());
        }
        return index;
    };
    Node.prototype.getDepth = function () {
        var depth = 0, parent = this.parent;
        while (parent) {
            depth++;
            parent = parent.parent;
        }
        return depth;
    };
    Node.prototype._batchTransformChanges = function (func) {
        this._batchingTransformChange = true;
        func();
        this._batchingTransformChange = false;
        if (this._needClearTransformCache) {
            this._clearCache(TRANSFORM);
            this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM, true);
        }
        this._needClearTransformCache = false;
    };
    Node.prototype.setPosition = function (pos) {
        var _this = this;
        this._batchTransformChanges(function () {
            _this.x(pos.x);
            _this.y(pos.y);
        });
        return this;
    };
    Node.prototype.getPosition = function () {
        return {
            x: this.x(),
            y: this.y(),
        };
    };
    Node.prototype.getAbsolutePosition = function (top) {
        var haveCachedParent = false;
        var parent = this.parent;
        while (parent) {
            if (parent.isCached()) {
                haveCachedParent = true;
                break;
            }
            parent = parent.parent;
        }
        if (haveCachedParent && !top) {
            top = true;
        }
        var absoluteMatrix = this.getAbsoluteTransform(top).getMatrix(), absoluteTransform = new Util_1.Transform(), offset = this.offset();
        absoluteTransform.m = absoluteMatrix.slice();
        absoluteTransform.translate(offset.x, offset.y);
        return absoluteTransform.getTranslation();
    };
    Node.prototype.setAbsolutePosition = function (pos) {
        var origTrans = this._clearTransform(), it;
        this.attrs.x = origTrans.x;
        this.attrs.y = origTrans.y;
        delete origTrans.x;
        delete origTrans.y;
        this._clearCache(TRANSFORM);
        it = this._getAbsoluteTransform();
        it.invert();
        it.translate(pos.x, pos.y);
        pos = {
            x: this.attrs.x + it.getTranslation().x,
            y: this.attrs.y + it.getTranslation().y,
        };
        this._setTransform(origTrans);
        this.setPosition({ x: pos.x, y: pos.y });
        return this;
    };
    Node.prototype._setTransform = function (trans) {
        var key;
        for (key in trans) {
            this.attrs[key] = trans[key];
        }
    };
    Node.prototype._clearTransform = function () {
        var trans = {
            x: this.x(),
            y: this.y(),
            rotation: this.rotation(),
            scaleX: this.scaleX(),
            scaleY: this.scaleY(),
            offsetX: this.offsetX(),
            offsetY: this.offsetY(),
            skewX: this.skewX(),
            skewY: this.skewY(),
        };
        this.attrs.x = 0;
        this.attrs.y = 0;
        this.attrs.rotation = 0;
        this.attrs.scaleX = 1;
        this.attrs.scaleY = 1;
        this.attrs.offsetX = 0;
        this.attrs.offsetY = 0;
        this.attrs.skewX = 0;
        this.attrs.skewY = 0;
        return trans;
    };
    Node.prototype.move = function (change) {
        var changeX = change.x, changeY = change.y, x = this.x(), y = this.y();
        if (changeX !== undefined) {
            x += changeX;
        }
        if (changeY !== undefined) {
            y += changeY;
        }
        this.setPosition({ x: x, y: y });
        return this;
    };
    Node.prototype._eachAncestorReverse = function (func, top) {
        var family = [], parent = this.getParent(), len, n;
        if (top && top._id === this._id) {
            func(this);
            return;
        }
        family.unshift(this);
        while (parent && (!top || parent._id !== top._id)) {
            family.unshift(parent);
            parent = parent.parent;
        }
        len = family.length;
        for (n = 0; n < len; n++) {
            func(family[n]);
        }
    };
    Node.prototype.rotate = function (theta) {
        this.rotation(this.rotation() + theta);
        return this;
    };
    Node.prototype.moveToTop = function () {
        if (!this.parent) {
            Util_1.Util.warn('Node has no parent. moveToTop function is ignored.');
            return false;
        }
        var index = this.index;
        this.parent.children.splice(index, 1);
        this.parent.children.push(this);
        this.parent._setChildrenIndices();
        return true;
    };
    Node.prototype.moveUp = function () {
        if (!this.parent) {
            Util_1.Util.warn('Node has no parent. moveUp function is ignored.');
            return false;
        }
        var index = this.index, len = this.parent.getChildren().length;
        if (index < len - 1) {
            this.parent.children.splice(index, 1);
            this.parent.children.splice(index + 1, 0, this);
            this.parent._setChildrenIndices();
            return true;
        }
        return false;
    };
    Node.prototype.moveDown = function () {
        if (!this.parent) {
            Util_1.Util.warn('Node has no parent. moveDown function is ignored.');
            return false;
        }
        var index = this.index;
        if (index > 0) {
            this.parent.children.splice(index, 1);
            this.parent.children.splice(index - 1, 0, this);
            this.parent._setChildrenIndices();
            return true;
        }
        return false;
    };
    Node.prototype.moveToBottom = function () {
        if (!this.parent) {
            Util_1.Util.warn('Node has no parent. moveToBottom function is ignored.');
            return false;
        }
        var index = this.index;
        if (index > 0) {
            this.parent.children.splice(index, 1);
            this.parent.children.unshift(this);
            this.parent._setChildrenIndices();
            return true;
        }
        return false;
    };
    Node.prototype.setZIndex = function (zIndex) {
        if (!this.parent) {
            Util_1.Util.warn('Node has no parent. zIndex parameter is ignored.');
            return this;
        }
        if (zIndex < 0 || zIndex >= this.parent.children.length) {
            Util_1.Util.warn('Unexpected value ' +
                zIndex +
                ' for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to ' +
                (this.parent.children.length - 1) +
                '.');
        }
        var index = this.index;
        this.parent.children.splice(index, 1);
        this.parent.children.splice(zIndex, 0, this);
        this.parent._setChildrenIndices();
        return this;
    };
    Node.prototype.getAbsoluteOpacity = function () {
        return this._getCache(ABSOLUTE_OPACITY, this._getAbsoluteOpacity);
    };
    Node.prototype._getAbsoluteOpacity = function () {
        var absOpacity = this.opacity();
        var parent = this.getParent();
        if (parent && !parent._isUnderCache) {
            absOpacity *= parent.getAbsoluteOpacity();
        }
        return absOpacity;
    };
    Node.prototype.moveTo = function (newContainer) {
        if (this.getParent() !== newContainer) {
            this._remove();
            newContainer.add(this);
        }
        return this;
    };
    Node.prototype.toObject = function () {
        var obj = {}, attrs = this.getAttrs(), key, val, getter, defaultValue, nonPlainObject;
        obj.attrs = {};
        for (key in attrs) {
            val = attrs[key];
            nonPlainObject =
                Util_1.Util.isObject(val) && !Util_1.Util._isPlainObject(val) && !Util_1.Util._isArray(val);
            if (nonPlainObject) {
                continue;
            }
            getter = typeof this[key] === 'function' && this[key];
            delete attrs[key];
            defaultValue = getter ? getter.call(this) : null;
            attrs[key] = val;
            if (defaultValue !== val) {
                obj.attrs[key] = val;
            }
        }
        obj.className = this.getClassName();
        return Util_1.Util._prepareToStringify(obj);
    };
    Node.prototype.toJSON = function () {
        return JSON.stringify(this.toObject());
    };
    Node.prototype.getParent = function () {
        return this.parent;
    };
    Node.prototype.findAncestors = function (selector, includeSelf, stopNode) {
        var res = [];
        if (includeSelf && this._isMatch(selector)) {
            res.push(this);
        }
        var ancestor = this.parent;
        while (ancestor) {
            if (ancestor === stopNode) {
                return res;
            }
            if (ancestor._isMatch(selector)) {
                res.push(ancestor);
            }
            ancestor = ancestor.parent;
        }
        return res;
    };
    Node.prototype.isAncestorOf = function (node) {
        return false;
    };
    Node.prototype.findAncestor = function (selector, includeSelf, stopNode) {
        return this.findAncestors(selector, includeSelf, stopNode)[0];
    };
    Node.prototype._isMatch = function (selector) {
        if (!selector) {
            return false;
        }
        if (typeof selector === 'function') {
            return selector(this);
        }
        var selectorArr = selector.replace(/ /g, '').split(','), len = selectorArr.length, n, sel;
        for (n = 0; n < len; n++) {
            sel = selectorArr[n];
            if (!Util_1.Util.isValidSelector(sel)) {
                Util_1.Util.warn('Selector "' +
                    sel +
                    '" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".');
                Util_1.Util.warn('If you have a custom shape with such className, please change it to start with upper letter like "Triangle".');
                Util_1.Util.warn('Konva is awesome, right?');
            }
            if (sel.charAt(0) === '#') {
                if (this.id() === sel.slice(1)) {
                    return true;
                }
            }
            else if (sel.charAt(0) === '.') {
                if (this.hasName(sel.slice(1))) {
                    return true;
                }
            }
            else if (this.className === sel || this.nodeType === sel) {
                return true;
            }
        }
        return false;
    };
    Node.prototype.getLayer = function () {
        var parent = this.getParent();
        return parent ? parent.getLayer() : null;
    };
    Node.prototype.getStage = function () {
        return this._getCache(STAGE, this._getStage);
    };
    Node.prototype._getStage = function () {
        var parent = this.getParent();
        if (parent) {
            return parent.getStage();
        }
        else {
            return undefined;
        }
    };
    Node.prototype.fire = function (eventType, evt, bubble) {
        if (evt === void 0) { evt = {}; }
        evt.target = evt.target || this;
        if (bubble) {
            this._fireAndBubble(eventType, evt);
        }
        else {
            this._fire(eventType, evt);
        }
        return this;
    };
    Node.prototype.getAbsoluteTransform = function (top) {
        if (top) {
            return this._getAbsoluteTransform(top);
        }
        else {
            return this._getCache(ABSOLUTE_TRANSFORM, this._getAbsoluteTransform);
        }
    };
    Node.prototype._getAbsoluteTransform = function (top) {
        var at;
        if (top) {
            at = new Util_1.Transform();
            this._eachAncestorReverse(function (node) {
                var transformsEnabled = node.transformsEnabled();
                if (transformsEnabled === 'all') {
                    at.multiply(node.getTransform());
                }
                else if (transformsEnabled === 'position') {
                    at.translate(node.x() - node.offsetX(), node.y() - node.offsetY());
                }
            }, top);
            return at;
        }
        else {
            if (this.parent) {
                at = this.parent.getAbsoluteTransform().copy();
            }
            else {
                at = new Util_1.Transform();
            }
            var transformsEnabled = this.transformsEnabled();
            if (transformsEnabled === 'all') {
                at.multiply(this.getTransform());
            }
            else if (transformsEnabled === 'position') {
                at.translate(this.x() - this.offsetX(), this.y() - this.offsetY());
            }
            return at;
        }
    };
    Node.prototype.getAbsoluteScale = function (top) {
        var parent = this;
        while (parent) {
            if (parent._isUnderCache) {
                top = parent;
            }
            parent = parent.getParent();
        }
        var transform = this.getAbsoluteTransform(top);
        var attrs = transform.decompose();
        return {
            x: attrs.scaleX,
            y: attrs.scaleY,
        };
    };
    Node.prototype.getAbsoluteRotation = function () {
        return this.getAbsoluteTransform().decompose().rotation;
    };
    Node.prototype.getTransform = function () {
        return this._getCache(TRANSFORM, this._getTransform);
    };
    Node.prototype._getTransform = function () {
        var m = new Util_1.Transform(), x = this.x(), y = this.y(), rotation = Global_1.Konva.getAngle(this.rotation()), scaleX = this.scaleX(), scaleY = this.scaleY(), skewX = this.skewX(), skewY = this.skewY(), offsetX = this.offsetX(), offsetY = this.offsetY();
        if (x !== 0 || y !== 0) {
            m.translate(x, y);
        }
        if (rotation !== 0) {
            m.rotate(rotation);
        }
        if (skewX !== 0 || skewY !== 0) {
            m.skew(skewX, skewY);
        }
        if (scaleX !== 1 || scaleY !== 1) {
            m.scale(scaleX, scaleY);
        }
        if (offsetX !== 0 || offsetY !== 0) {
            m.translate(-1 * offsetX, -1 * offsetY);
        }
        return m;
    };
    Node.prototype.clone = function (obj) {
        var attrs = Util_1.Util.cloneObject(this.attrs), key, allListeners, len, n, listener;
        for (key in obj) {
            attrs[key] = obj[key];
        }
        var node = new this.constructor(attrs);
        for (key in this.eventListeners) {
            allListeners = this.eventListeners[key];
            len = allListeners.length;
            for (n = 0; n < len; n++) {
                listener = allListeners[n];
                if (listener.name.indexOf(KONVA) < 0) {
                    if (!node.eventListeners[key]) {
                        node.eventListeners[key] = [];
                    }
                    node.eventListeners[key].push(listener);
                }
            }
        }
        return node;
    };
    Node.prototype._toKonvaCanvas = function (config) {
        config = config || {};
        var box = this.getClientRect();
        var stage = this.getStage(), x = config.x !== undefined ? config.x : box.x, y = config.y !== undefined ? config.y : box.y, pixelRatio = config.pixelRatio || 1, canvas = new Canvas_1.SceneCanvas({
            width: config.width || box.width || (stage ? stage.width() : 0),
            height: config.height || box.height || (stage ? stage.height() : 0),
            pixelRatio: pixelRatio,
        }), context = canvas.getContext();
        context.save();
        if (x || y) {
            context.translate(-1 * x, -1 * y);
        }
        this.drawScene(canvas);
        context.restore();
        return canvas;
    };
    Node.prototype.toCanvas = function (config) {
        return this._toKonvaCanvas(config)._canvas;
    };
    Node.prototype.toDataURL = function (config) {
        config = config || {};
        var mimeType = config.mimeType || null, quality = config.quality || null;
        var url = this._toKonvaCanvas(config).toDataURL(mimeType, quality);
        if (config.callback) {
            config.callback(url);
        }
        return url;
    };
    Node.prototype.toImage = function (config) {
        if (!config || !config.callback) {
            throw 'callback required for toImage method config argument';
        }
        var callback = config.callback;
        delete config.callback;
        Util_1.Util._urlToImage(this.toDataURL(config), function (img) {
            callback(img);
        });
    };
    Node.prototype.setSize = function (size) {
        this.width(size.width);
        this.height(size.height);
        return this;
    };
    Node.prototype.getSize = function () {
        return {
            width: this.width(),
            height: this.height(),
        };
    };
    Node.prototype.getClassName = function () {
        return this.className || this.nodeType;
    };
    Node.prototype.getType = function () {
        return this.nodeType;
    };
    Node.prototype.getDragDistance = function () {
        if (this.attrs.dragDistance !== undefined) {
            return this.attrs.dragDistance;
        }
        else if (this.parent) {
            return this.parent.getDragDistance();
        }
        else {
            return Global_1.Konva.dragDistance;
        }
    };
    Node.prototype._off = function (type, name, callback) {
        var evtListeners = this.eventListeners[type], i, evtName, handler;
        for (i = 0; i < evtListeners.length; i++) {
            evtName = evtListeners[i].name;
            handler = evtListeners[i].handler;
            if ((evtName !== 'konva' || name === 'konva') &&
                (!name || evtName === name) &&
                (!callback || callback === handler)) {
                evtListeners.splice(i, 1);
                if (evtListeners.length === 0) {
                    delete this.eventListeners[type];
                    break;
                }
                i--;
            }
        }
    };
    Node.prototype._fireChangeEvent = function (attr, oldVal, newVal) {
        this._fire(attr + CHANGE, {
            oldVal: oldVal,
            newVal: newVal,
        });
    };
    Node.prototype.setId = function (id) {
        var oldId = this.id();
        exports._removeId(oldId, this);
        _addId(this, id);
        this._setAttr('id', id);
        return this;
    };
    Node.prototype.setName = function (name) {
        var oldNames = (this.name() || '').split(/\s/g);
        var newNames = (name || '').split(/\s/g);
        var subname, i;
        for (i = 0; i < oldNames.length; i++) {
            subname = oldNames[i];
            if (newNames.indexOf(subname) === -1 && subname) {
                exports._removeName(subname, this._id);
            }
        }
        for (i = 0; i < newNames.length; i++) {
            subname = newNames[i];
            if (oldNames.indexOf(subname) === -1 && subname) {
                exports._addName(this, subname);
            }
        }
        this._setAttr(NAME, name);
        return this;
    };
    Node.prototype.addName = function (name) {
        if (!this.hasName(name)) {
            var oldName = this.name();
            var newName = oldName ? oldName + ' ' + name : name;
            this.setName(newName);
        }
        return this;
    };
    Node.prototype.hasName = function (name) {
        if (!name) {
            return false;
        }
        var fullName = this.name();
        if (!fullName) {
            return false;
        }
        var names = (fullName || '').split(/\s/g);
        return names.indexOf(name) !== -1;
    };
    Node.prototype.removeName = function (name) {
        var names = (this.name() || '').split(/\s/g);
        var index = names.indexOf(name);
        if (index !== -1) {
            names.splice(index, 1);
            this.setName(names.join(' '));
        }
        return this;
    };
    Node.prototype.setAttr = function (attr, val) {
        var func = this[SET + Util_1.Util._capitalize(attr)];
        if (Util_1.Util._isFunction(func)) {
            func.call(this, val);
        }
        else {
            this._setAttr(attr, val);
        }
        return this;
    };
    Node.prototype._setAttr = function (key, val) {
        var oldVal = this.attrs[key];
        if (oldVal === val && !Util_1.Util.isObject(val)) {
            return;
        }
        if (val === undefined || val === null) {
            delete this.attrs[key];
        }
        else {
            this.attrs[key] = val;
        }
        this._fireChangeEvent(key, oldVal, val);
    };
    Node.prototype._setComponentAttr = function (key, component, val) {
        var oldVal;
        if (val !== undefined) {
            oldVal = this.attrs[key];
            if (!oldVal) {
                this.attrs[key] = this.getAttr(key);
            }
            this.attrs[key][component] = val;
            this._fireChangeEvent(key, oldVal, val);
        }
    };
    Node.prototype._fireAndBubble = function (eventType, evt, compareShape) {
        if (evt && this.nodeType === SHAPE) {
            evt.target = this;
        }
        var shouldStop = (eventType === MOUSEENTER || eventType === MOUSELEAVE) &&
            ((compareShape &&
                (this === compareShape ||
                    (this.isAncestorOf && this.isAncestorOf(compareShape)))) ||
                (this.nodeType === 'Stage' && !compareShape));
        if (!shouldStop) {
            this._fire(eventType, evt);
            var stopBubble = (eventType === MOUSEENTER || eventType === MOUSELEAVE) &&
                compareShape &&
                compareShape.isAncestorOf &&
                compareShape.isAncestorOf(this) &&
                !compareShape.isAncestorOf(this.parent);
            if (((evt && !evt.cancelBubble) || !evt) &&
                this.parent &&
                this.parent.isListening() &&
                !stopBubble) {
                if (compareShape && compareShape.parent) {
                    this._fireAndBubble.call(this.parent, eventType, evt, compareShape);
                }
                else {
                    this._fireAndBubble.call(this.parent, eventType, evt);
                }
            }
        }
    };
    Node.prototype._fire = function (eventType, evt) {
        var events = this.eventListeners[eventType], i;
        if (events) {
            evt = evt || {};
            evt.currentTarget = this;
            evt.type = eventType;
            for (i = 0; i < events.length; i++) {
                events[i].handler.call(this, evt);
            }
        }
    };
    Node.prototype.draw = function () {
        this.drawScene();
        this.drawHit();
        return this;
    };
    Node.prototype._createDragElement = function (evt) {
        var pointerId = evt ? evt.pointerId : undefined;
        var stage = this.getStage();
        var ap = this.getAbsolutePosition();
        var pos = stage._getPointerById(pointerId) ||
            stage._changedPointerPositions[0] ||
            ap;
        DragAndDrop_1.DD._dragElements.set(this._id, {
            node: this,
            startPointerPos: pos,
            offset: {
                x: pos.x - ap.x,
                y: pos.y - ap.y,
            },
            dragStatus: 'ready',
            pointerId: pointerId,
        });
    };
    Node.prototype.startDrag = function (evt) {
        if (!DragAndDrop_1.DD._dragElements.has(this._id)) {
            this._createDragElement(evt);
        }
        var elem = DragAndDrop_1.DD._dragElements.get(this._id);
        elem.dragStatus = 'dragging';
        this.fire('dragstart', {
            type: 'dragstart',
            target: this,
            evt: evt && evt.evt,
        }, true);
    };
    Node.prototype._setDragPosition = function (evt, elem) {
        var pos = this.getStage()._getPointerById(elem.pointerId);
        if (!pos) {
            return;
        }
        var newNodePos = {
            x: pos.x - elem.offset.x,
            y: pos.y - elem.offset.y,
        };
        var dbf = this.dragBoundFunc();
        if (dbf !== undefined) {
            var bounded = dbf.call(this, newNodePos, evt);
            if (!bounded) {
                Util_1.Util.warn('dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc.');
            }
            else {
                newNodePos = bounded;
            }
        }
        if (!this._lastPos ||
            this._lastPos.x !== newNodePos.x ||
            this._lastPos.y !== newNodePos.y) {
            this.setAbsolutePosition(newNodePos);
            if (this.getLayer()) {
                this.getLayer().batchDraw();
            }
            else if (this.getStage()) {
                this.getStage().batchDraw();
            }
        }
        this._lastPos = newNodePos;
    };
    Node.prototype.stopDrag = function (evt) {
        var elem = DragAndDrop_1.DD._dragElements.get(this._id);
        if (elem) {
            elem.dragStatus = 'stopped';
        }
        DragAndDrop_1.DD._endDragBefore(evt);
        DragAndDrop_1.DD._endDragAfter(evt);
    };
    Node.prototype.setDraggable = function (draggable) {
        this._setAttr('draggable', draggable);
        this._dragChange();
    };
    Node.prototype.isDragging = function () {
        var elem = DragAndDrop_1.DD._dragElements.get(this._id);
        return elem ? elem.dragStatus === 'dragging' : false;
    };
    Node.prototype._listenDrag = function () {
        this._dragCleanup();
        this.on('mousedown.konva touchstart.konva', function (evt) {
            var _this = this;
            var shouldCheckButton = evt.evt['button'] !== undefined;
            var canDrag = !shouldCheckButton || Global_1.Konva.dragButtons.indexOf(evt.evt['button']) >= 0;
            if (!canDrag) {
                return;
            }
            if (this.isDragging()) {
                return;
            }
            var hasDraggingChild = false;
            DragAndDrop_1.DD._dragElements.forEach(function (elem) {
                if (_this.isAncestorOf(elem.node)) {
                    hasDraggingChild = true;
                }
            });
            if (!hasDraggingChild) {
                this._createDragElement(evt);
            }
        });
    };
    Node.prototype._dragChange = function () {
        if (this.attrs.draggable) {
            this._listenDrag();
        }
        else {
            this._dragCleanup();
            var stage = this.getStage();
            if (stage && DragAndDrop_1.DD._dragElements.has(this._id)) {
                this.stopDrag();
            }
        }
    };
    Node.prototype._dragCleanup = function () {
        this.off('mousedown.konva');
        this.off('touchstart.konva');
    };
    Node.create = function (data, container) {
        if (Util_1.Util._isString(data)) {
            data = JSON.parse(data);
        }
        return this._createNode(data, container);
    };
    Node._createNode = function (obj, container) {
        var className = Node.prototype.getClassName.call(obj), children = obj.children, no, len, n;
        if (container) {
            obj.attrs.container = container;
        }
        if (!Global_1._NODES_REGISTRY[className]) {
            Util_1.Util.warn('Can not find a node with class name "' +
                className +
                '". Fallback to "Shape".');
            className = 'Shape';
        }
        var Class = Global_1._NODES_REGISTRY[className];
        no = new Class(obj.attrs);
        if (children) {
            len = children.length;
            for (n = 0; n < len; n++) {
                no.add(Node._createNode(children[n]));
            }
        }
        return no;
    };
    return Node;
}());
exports.Node = Node;
Node.prototype.nodeType = 'Node';
Node.prototype._attrsAffectingSize = [];
Factory_1.Factory.addGetterSetter(Node, 'zIndex');
Factory_1.Factory.addGetterSetter(Node, 'absolutePosition');
Factory_1.Factory.addGetterSetter(Node, 'position');
Factory_1.Factory.addGetterSetter(Node, 'x', 0, Validators_1.getNumberValidator());
Factory_1.Factory.addGetterSetter(Node, 'y', 0, Validators_1.getNumberValidator());
Factory_1.Factory.addGetterSetter(Node, 'globalCompositeOperation', 'source-over', Validators_1.getStringValidator());
Factory_1.Factory.addGetterSetter(Node, 'opacity', 1, Validators_1.getNumberValidator());
Factory_1.Factory.addGetterSetter(Node, 'name', '', Validators_1.getStringValidator());
Factory_1.Factory.addGetterSetter(Node, 'id', '', Validators_1.getStringValidator());
Factory_1.Factory.addGetterSetter(Node, 'rotation', 0, Validators_1.getNumberValidator());
Factory_1.Factory.addComponentsGetterSetter(Node, 'scale', ['x', 'y']);
Factory_1.Factory.addGetterSetter(Node, 'scaleX', 1, Validators_1.getNumberValidator());
Factory_1.Factory.addGetterSetter(Node, 'scaleY', 1, Validators_1.getNumberValidator());
Factory_1.Factory.addComponentsGetterSetter(Node, 'skew', ['x', 'y']);
Factory_1.Factory.addGetterSetter(Node, 'skewX', 0, Validators_1.getNumberValidator());
Factory_1.Factory.addGetterSetter(Node, 'skewY', 0, Validators_1.getNumberValidator());
Factory_1.Factory.addComponentsGetterSetter(Node, 'offset', ['x', 'y']);
Factory_1.Factory.addGetterSetter(Node, 'offsetX', 0, Validators_1.getNumberValidator());
Factory_1.Factory.addGetterSetter(Node, 'offsetY', 0, Validators_1.getNumberValidator());
Factory_1.Factory.addGetterSetter(Node, 'dragDistance', null, Validators_1.getNumberValidator());
Factory_1.Factory.addGetterSetter(Node, 'width', 0, Validators_1.getNumberValidator());
Factory_1.Factory.addGetterSetter(Node, 'height', 0, Validators_1.getNumberValidator());
Factory_1.Factory.addGetterSetter(Node, 'listening', 'inherit', function (val) {
    var isValid = val === true || val === false || val === 'inherit';
    if (!isValid) {
        Util_1.Util.warn(val +
            ' is a not valid value for "listening" attribute. The value may be true, false or "inherit".');
    }
    return val;
});
Factory_1.Factory.addGetterSetter(Node, 'preventDefault', true, Validators_1.getBooleanValidator());
Factory_1.Factory.addGetterSetter(Node, 'filters', null, function (val) {
    this._filterUpToDate = false;
    return val;
});
Factory_1.Factory.addGetterSetter(Node, 'visible', 'inherit', function (val) {
    var isValid = val === true || val === false || val === 'inherit';
    if (!isValid) {
        Util_1.Util.warn(val +
            ' is a not valid value for "visible" attribute. The value may be true, false or "inherit".');
    }
    return val;
});
Factory_1.Factory.addGetterSetter(Node, 'transformsEnabled', 'all', Validators_1.getStringValidator());
Factory_1.Factory.addGetterSetter(Node, 'size');
Factory_1.Factory.addGetterSetter(Node, 'dragBoundFunc');
Factory_1.Factory.addGetterSetter(Node, 'draggable', false, Validators_1.getBooleanValidator());
Factory_1.Factory.backCompat(Node, {
    rotateDeg: 'rotate',
    setRotationDeg: 'setRotation',
    getRotationDeg: 'getRotation',
});
Util_1.Collection.mapMethods(Node);


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toLength = __webpack_require__("50c4");
var toAbsoluteIndex = __webpack_require__("23cb");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5135":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "5414":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = __webpack_require__("9cb8");
var Factory_1 = __webpack_require__("f0b4");
var Shape_1 = __webpack_require__("fce6");
var Global_1 = __webpack_require__("d777");
var Validators_1 = __webpack_require__("4546");
var Global_2 = __webpack_require__("d777");
var AUTO = 'auto', CENTER = 'center', JUSTIFY = 'justify', CHANGE_KONVA = 'Change.konva', CONTEXT_2D = '2d', DASH = '-', LEFT = 'left', TEXT = 'text', TEXT_UPPER = 'Text', TOP = 'top', BOTTOM = 'bottom', MIDDLE = 'middle', NORMAL = 'normal', PX_SPACE = 'px ', SPACE = ' ', RIGHT = 'right', WORD = 'word', CHAR = 'char', NONE = 'none', ELLIPSIS = '…', ATTR_CHANGE_LIST = [
    'fontFamily',
    'fontSize',
    'fontStyle',
    'fontVariant',
    'padding',
    'align',
    'verticalAlign',
    'lineHeight',
    'text',
    'width',
    'height',
    'wrap',
    'ellipsis',
    'letterSpacing'
], attrChangeListLen = ATTR_CHANGE_LIST.length;
var dummyContext;
function getDummyContext() {
    if (dummyContext) {
        return dummyContext;
    }
    dummyContext = Util_1.Util.createCanvasElement().getContext(CONTEXT_2D);
    return dummyContext;
}
function _fillFunc(context) {
    context.fillText(this._partialText, this._partialTextX, this._partialTextY);
}
function _strokeFunc(context) {
    context.strokeText(this._partialText, this._partialTextX, this._partialTextY);
}
function checkDefaultFill(config) {
    config = config || {};
    if (!config.fillLinearGradientColorStops &&
        !config.fillRadialGradientColorStops &&
        !config.fillPatternImage) {
        config.fill = config.fill || 'black';
    }
    return config;
}
var trimRight = String.prototype.trimRight ||
    function polyfill() {
        return this.replace(/[\s\xa0]+$/, '');
    };
var Text = (function (_super) {
    __extends(Text, _super);
    function Text(config) {
        var _this = _super.call(this, checkDefaultFill(config)) || this;
        _this._partialTextX = 0;
        _this._partialTextY = 0;
        for (var n = 0; n < attrChangeListLen; n++) {
            _this.on(ATTR_CHANGE_LIST[n] + CHANGE_KONVA, _this._setTextData);
        }
        _this._setTextData();
        return _this;
    }
    Text.prototype._sceneFunc = function (context) {
        var padding = this.padding(), fontSize = this.fontSize(), lineHeightPx = this.lineHeight() * fontSize, textArr = this.textArr, textArrLen = textArr.length, verticalAlign = this.verticalAlign(), alignY = 0, align = this.align(), totalWidth = this.getWidth(), letterSpacing = this.letterSpacing(), fill = this.fill(), textDecoration = this.textDecoration(), shouldUnderline = textDecoration.indexOf('underline') !== -1, shouldLineThrough = textDecoration.indexOf('line-through') !== -1, n;
        var translateY = 0;
        var translateY = lineHeightPx / 2;
        var lineTranslateX = 0;
        var lineTranslateY = 0;
        context.setAttr('font', this._getContextFont());
        context.setAttr('textBaseline', MIDDLE);
        context.setAttr('textAlign', LEFT);
        if (verticalAlign === MIDDLE) {
            alignY = (this.getHeight() - textArrLen * lineHeightPx - padding * 2) / 2;
        }
        else if (verticalAlign === BOTTOM) {
            alignY = this.getHeight() - textArrLen * lineHeightPx - padding * 2;
        }
        context.translate(padding, alignY + padding);
        for (n = 0; n < textArrLen; n++) {
            var lineTranslateX = 0;
            var lineTranslateY = 0;
            var obj = textArr[n], text = obj.text, width = obj.width, lastLine = n !== textArrLen - 1, spacesNumber, oneWord, lineWidth;
            context.save();
            if (align === RIGHT) {
                lineTranslateX += totalWidth - width - padding * 2;
            }
            else if (align === CENTER) {
                lineTranslateX += (totalWidth - width - padding * 2) / 2;
            }
            if (shouldUnderline) {
                context.save();
                context.beginPath();
                context.moveTo(lineTranslateX, translateY + lineTranslateY + Math.round(fontSize / 2));
                spacesNumber = text.split(' ').length - 1;
                oneWord = spacesNumber === 0;
                lineWidth =
                    align === JUSTIFY && lastLine && !oneWord
                        ? totalWidth - padding * 2
                        : width;
                context.lineTo(lineTranslateX + Math.round(lineWidth), translateY + lineTranslateY + Math.round(fontSize / 2));
                context.lineWidth = fontSize / 15;
                context.strokeStyle = fill;
                context.stroke();
                context.restore();
            }
            if (shouldLineThrough) {
                context.save();
                context.beginPath();
                context.moveTo(lineTranslateX, translateY + lineTranslateY);
                spacesNumber = text.split(' ').length - 1;
                oneWord = spacesNumber === 0;
                lineWidth =
                    align === JUSTIFY && lastLine && !oneWord
                        ? totalWidth - padding * 2
                        : width;
                context.lineTo(lineTranslateX + Math.round(lineWidth), translateY + lineTranslateY);
                context.lineWidth = fontSize / 15;
                context.strokeStyle = fill;
                context.stroke();
                context.restore();
            }
            if (letterSpacing !== 0 || align === JUSTIFY) {
                spacesNumber = text.split(' ').length - 1;
                for (var li = 0; li < text.length; li++) {
                    var letter = text[li];
                    if (letter === ' ' && n !== textArrLen - 1 && align === JUSTIFY) {
                        lineTranslateX += Math.floor((totalWidth - padding * 2 - width) / spacesNumber);
                    }
                    this._partialTextX = lineTranslateX;
                    this._partialTextY = translateY + lineTranslateY;
                    this._partialText = letter;
                    context.fillStrokeShape(this);
                    lineTranslateX +=
                        Math.round(this.measureSize(letter).width) + letterSpacing;
                }
            }
            else {
                this._partialTextX = lineTranslateX;
                this._partialTextY = translateY + lineTranslateY;
                this._partialText = text;
                context.fillStrokeShape(this);
            }
            context.restore();
            if (textArrLen > 1) {
                translateY += lineHeightPx;
            }
        }
    };
    Text.prototype._hitFunc = function (context) {
        var width = this.getWidth(), height = this.getHeight();
        context.beginPath();
        context.rect(0, 0, width, height);
        context.closePath();
        context.fillStrokeShape(this);
    };
    Text.prototype.setText = function (text) {
        var str = Util_1.Util._isString(text)
            ? text
            : text === null || text === undefined
                ? ''
                : text + '';
        this._setAttr(TEXT, str);
        return this;
    };
    Text.prototype.getWidth = function () {
        var isAuto = this.attrs.width === AUTO || this.attrs.width === undefined;
        return isAuto ? this.getTextWidth() + this.padding() * 2 : this.attrs.width;
    };
    Text.prototype.getHeight = function () {
        var isAuto = this.attrs.height === AUTO || this.attrs.height === undefined;
        return isAuto
            ? this.fontSize() * this.textArr.length * this.lineHeight() +
                this.padding() * 2
            : this.attrs.height;
    };
    Text.prototype.getTextWidth = function () {
        return this.textWidth;
    };
    Text.prototype.getTextHeight = function () {
        Util_1.Util.warn('text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height.');
        return this.textHeight;
    };
    Text.prototype.measureSize = function (text) {
        var _context = getDummyContext(), fontSize = this.fontSize(), metrics;
        _context.save();
        _context.font = this._getContextFont();
        metrics = _context.measureText(text);
        _context.restore();
        return {
            width: metrics.width,
            height: fontSize
        };
    };
    Text.prototype._getContextFont = function () {
        if (Global_1.Konva.UA.isIE) {
            return (this.fontStyle() +
                SPACE +
                this.fontSize() +
                PX_SPACE +
                this.fontFamily());
        }
        return (this.fontStyle() +
            SPACE +
            this.fontVariant() +
            SPACE +
            this.fontSize() +
            PX_SPACE +
            this.fontFamily());
    };
    Text.prototype._addTextLine = function (line) {
        if (this.align() === JUSTIFY) {
            line = line.trim();
        }
        var width = this._getTextWidth(line);
        return this.textArr.push({ text: line, width: width });
    };
    Text.prototype._getTextWidth = function (text) {
        var letterSpacing = this.letterSpacing();
        var length = text.length;
        return (getDummyContext().measureText(text).width +
            (length ? letterSpacing * (length - 1) : 0));
    };
    Text.prototype._setTextData = function () {
        var lines = this.text().split('\n'), fontSize = +this.fontSize(), textWidth = 0, lineHeightPx = this.lineHeight() * fontSize, width = this.attrs.width, height = this.attrs.height, fixedWidth = width !== AUTO && width !== undefined, fixedHeight = height !== AUTO && height !== undefined, padding = this.padding(), maxWidth = width - padding * 2, maxHeightPx = height - padding * 2, currentHeightPx = 0, wrap = this.wrap(), shouldWrap = wrap !== NONE, wrapAtWord = wrap !== CHAR && shouldWrap, shouldAddEllipsis = this.ellipsis() && !shouldWrap;
        this.textArr = [];
        getDummyContext().font = this._getContextFont();
        var additionalWidth = shouldAddEllipsis ? this._getTextWidth(ELLIPSIS) : 0;
        for (var i = 0, max = lines.length; i < max; ++i) {
            var line = lines[i];
            var lineWidth = this._getTextWidth(line);
            if (fixedWidth && lineWidth > maxWidth) {
                while (line.length > 0) {
                    var low = 0, high = line.length, match = '', matchWidth = 0;
                    while (low < high) {
                        var mid = (low + high) >>> 1, substr = line.slice(0, mid + 1), substrWidth = this._getTextWidth(substr) + additionalWidth;
                        if (substrWidth <= maxWidth) {
                            low = mid + 1;
                            match = substr + (shouldAddEllipsis ? ELLIPSIS : '');
                            matchWidth = substrWidth;
                        }
                        else {
                            high = mid;
                        }
                    }
                    if (match) {
                        if (wrapAtWord) {
                            var wrapIndex;
                            var nextChar = line[match.length];
                            var nextIsSpaceOrDash = nextChar === SPACE || nextChar === DASH;
                            if (nextIsSpaceOrDash && matchWidth <= maxWidth) {
                                wrapIndex = match.length;
                            }
                            else {
                                wrapIndex =
                                    Math.max(match.lastIndexOf(SPACE), match.lastIndexOf(DASH)) +
                                        1;
                            }
                            if (wrapIndex > 0) {
                                low = wrapIndex;
                                match = match.slice(0, low);
                                matchWidth = this._getTextWidth(match);
                            }
                        }
                        match = match.trimRight();
                        this._addTextLine(match);
                        textWidth = Math.max(textWidth, matchWidth);
                        currentHeightPx += lineHeightPx;
                        if (!shouldWrap ||
                            (fixedHeight && currentHeightPx + lineHeightPx > maxHeightPx)) {
                            break;
                        }
                        line = line.slice(low);
                        line = line.trimLeft();
                        if (line.length > 0) {
                            lineWidth = this._getTextWidth(line);
                            if (lineWidth <= maxWidth) {
                                this._addTextLine(line);
                                currentHeightPx += lineHeightPx;
                                textWidth = Math.max(textWidth, lineWidth);
                                break;
                            }
                        }
                    }
                    else {
                        break;
                    }
                }
            }
            else {
                this._addTextLine(line);
                currentHeightPx += lineHeightPx;
                textWidth = Math.max(textWidth, lineWidth);
            }
            if (fixedHeight && currentHeightPx + lineHeightPx > maxHeightPx) {
                break;
            }
        }
        this.textHeight = fontSize;
        this.textWidth = textWidth;
    };
    Text.prototype.getStrokeScaleEnabled = function () {
        return true;
    };
    return Text;
}(Shape_1.Shape));
exports.Text = Text;
Text.prototype._fillFunc = _fillFunc;
Text.prototype._strokeFunc = _strokeFunc;
Text.prototype.className = TEXT_UPPER;
Text.prototype._attrsAffectingSize = [
    'text',
    'fontSize',
    'padding',
    'wrap',
    'lineHeight'
];
Global_2._registerNode(Text);
Factory_1.Factory.overWriteSetter(Text, 'width', Validators_1.getNumberOrAutoValidator());
Factory_1.Factory.overWriteSetter(Text, 'height', Validators_1.getNumberOrAutoValidator());
Factory_1.Factory.addGetterSetter(Text, 'fontFamily', 'Arial');
Factory_1.Factory.addGetterSetter(Text, 'fontSize', 12, Validators_1.getNumberValidator());
Factory_1.Factory.addGetterSetter(Text, 'fontStyle', NORMAL);
Factory_1.Factory.addGetterSetter(Text, 'fontVariant', NORMAL);
Factory_1.Factory.addGetterSetter(Text, 'padding', 0, Validators_1.getNumberValidator());
Factory_1.Factory.addGetterSetter(Text, 'align', LEFT);
Factory_1.Factory.addGetterSetter(Text, 'verticalAlign', TOP);
Factory_1.Factory.addGetterSetter(Text, 'lineHeight', 1, Validators_1.getNumberValidator());
Factory_1.Factory.addGetterSetter(Text, 'wrap', WORD);
Factory_1.Factory.addGetterSetter(Text, 'ellipsis', false);
Factory_1.Factory.addGetterSetter(Text, 'letterSpacing', 0, Validators_1.getNumberValidator());
Factory_1.Factory.addGetterSetter(Text, 'text', '', Validators_1.getStringValidator());
Factory_1.Factory.addGetterSetter(Text, 'textDecoration', '');
Util_1.Collection.mapMethods(Text);


/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.5',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "5899":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "58a8":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");
var whitespaces = __webpack_require__("5899");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "6547":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "65f0":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var objectHas = __webpack_require__("5135");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var setGlobal = __webpack_require__("ce4e");
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "7156":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var setPrototypeOf = __webpack_require__("d2bb");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var defineProperties = __webpack_require__("37e8");
var enumBugKeys = __webpack_require__("7839");
var hiddenKeys = __webpack_require__("d012");
var html = __webpack_require__("1be4");
var documentCreateElement = __webpack_require__("cc12");
var sharedKey = __webpack_require__("f772");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "7d2a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Global_1 = __webpack_require__("d777");
var Captures = new Map();
var SUPPORT_POINTER_EVENTS = Global_1.Konva._global['PointerEvent'] !== undefined;
function getCapturedShape(pointerId) {
    return Captures.get(pointerId);
}
exports.getCapturedShape = getCapturedShape;
function createEvent(evt) {
    return {
        evt: evt,
        pointerId: evt.pointerId
    };
}
exports.createEvent = createEvent;
function hasPointerCapture(pointerId, shape) {
    return Captures.get(pointerId) === shape;
}
exports.hasPointerCapture = hasPointerCapture;
function setPointerCapture(pointerId, shape) {
    releaseCapture(pointerId);
    var stage = shape.getStage();
    if (!stage)
        return;
    Captures.set(pointerId, shape);
    if (SUPPORT_POINTER_EVENTS) {
        shape._fire('gotpointercapture', createEvent(new PointerEvent('gotpointercapture')));
    }
}
exports.setPointerCapture = setPointerCapture;
function releaseCapture(pointerId, target) {
    var shape = Captures.get(pointerId);
    if (!shape)
        return;
    var stage = shape.getStage();
    if (stage && stage.content) {
    }
    Captures.delete(pointerId);
    if (SUPPORT_POINTER_EVENTS) {
        shape._fire('lostpointercapture', createEvent(new PointerEvent('lostpointercapture')));
    }
}
exports.releaseCapture = releaseCapture;


/***/ }),

/***/ "7dd0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var createIteratorConstructor = __webpack_require__("9ed3");
var getPrototypeOf = __webpack_require__("e163");
var setPrototypeOf = __webpack_require__("d2bb");
var setToStringTag = __webpack_require__("d44e");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");
var Iterators = __webpack_require__("3f8c");
var IteratorsCore = __webpack_require__("ae93");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var inspectSource = __webpack_require__("8925");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "81d5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__("7b0b");
var toAbsoluteIndex = __webpack_require__("23cb");
var toLength = __webpack_require__("50c4");

// `Array.prototype.fill` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "861d":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    const descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("c6cd");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "90e3":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "96cf":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "9bdd":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var anObject = __webpack_require__("825a");
var toPrimitive = __webpack_require__("c04e");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9cb8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Global_1 = __webpack_require__("d777");
var Collection = (function () {
    function Collection() {
    }
    Collection.toCollection = function (arr) {
        var collection = new Collection(), len = arr.length, n;
        for (n = 0; n < len; n++) {
            collection.push(arr[n]);
        }
        return collection;
    };
    Collection._mapMethod = function (methodName) {
        Collection.prototype[methodName] = function () {
            var len = this.length, i;
            var args = [].slice.call(arguments);
            for (i = 0; i < len; i++) {
                this[i][methodName].apply(this[i], args);
            }
            return this;
        };
    };
    Collection.mapMethods = function (constructor) {
        var prot = constructor.prototype;
        for (var methodName in prot) {
            Collection._mapMethod(methodName);
        }
    };
    return Collection;
}());
exports.Collection = Collection;
Collection.prototype = [];
Collection.prototype.each = function (func) {
    for (var n = 0; n < this.length; n++) {
        func(this[n], n);
    }
};
Collection.prototype.toArray = function () {
    var arr = [], len = this.length, n;
    for (n = 0; n < len; n++) {
        arr.push(this[n]);
    }
    return arr;
};
var Transform = (function () {
    function Transform(m) {
        if (m === void 0) { m = [1, 0, 0, 1, 0, 0]; }
        this.m = (m && m.slice()) || [1, 0, 0, 1, 0, 0];
    }
    Transform.prototype.copy = function () {
        return new Transform(this.m);
    };
    Transform.prototype.point = function (point) {
        var m = this.m;
        return {
            x: m[0] * point.x + m[2] * point.y + m[4],
            y: m[1] * point.x + m[3] * point.y + m[5]
        };
    };
    Transform.prototype.translate = function (x, y) {
        this.m[4] += this.m[0] * x + this.m[2] * y;
        this.m[5] += this.m[1] * x + this.m[3] * y;
        return this;
    };
    Transform.prototype.scale = function (sx, sy) {
        this.m[0] *= sx;
        this.m[1] *= sx;
        this.m[2] *= sy;
        this.m[3] *= sy;
        return this;
    };
    Transform.prototype.rotate = function (rad) {
        var c = Math.cos(rad);
        var s = Math.sin(rad);
        var m11 = this.m[0] * c + this.m[2] * s;
        var m12 = this.m[1] * c + this.m[3] * s;
        var m21 = this.m[0] * -s + this.m[2] * c;
        var m22 = this.m[1] * -s + this.m[3] * c;
        this.m[0] = m11;
        this.m[1] = m12;
        this.m[2] = m21;
        this.m[3] = m22;
        return this;
    };
    Transform.prototype.getTranslation = function () {
        return {
            x: this.m[4],
            y: this.m[5]
        };
    };
    Transform.prototype.skew = function (sx, sy) {
        var m11 = this.m[0] + this.m[2] * sy;
        var m12 = this.m[1] + this.m[3] * sy;
        var m21 = this.m[2] + this.m[0] * sx;
        var m22 = this.m[3] + this.m[1] * sx;
        this.m[0] = m11;
        this.m[1] = m12;
        this.m[2] = m21;
        this.m[3] = m22;
        return this;
    };
    Transform.prototype.multiply = function (matrix) {
        var m11 = this.m[0] * matrix.m[0] + this.m[2] * matrix.m[1];
        var m12 = this.m[1] * matrix.m[0] + this.m[3] * matrix.m[1];
        var m21 = this.m[0] * matrix.m[2] + this.m[2] * matrix.m[3];
        var m22 = this.m[1] * matrix.m[2] + this.m[3] * matrix.m[3];
        var dx = this.m[0] * matrix.m[4] + this.m[2] * matrix.m[5] + this.m[4];
        var dy = this.m[1] * matrix.m[4] + this.m[3] * matrix.m[5] + this.m[5];
        this.m[0] = m11;
        this.m[1] = m12;
        this.m[2] = m21;
        this.m[3] = m22;
        this.m[4] = dx;
        this.m[5] = dy;
        return this;
    };
    Transform.prototype.invert = function () {
        var d = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]);
        var m0 = this.m[3] * d;
        var m1 = -this.m[1] * d;
        var m2 = -this.m[2] * d;
        var m3 = this.m[0] * d;
        var m4 = d * (this.m[2] * this.m[5] - this.m[3] * this.m[4]);
        var m5 = d * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
        this.m[0] = m0;
        this.m[1] = m1;
        this.m[2] = m2;
        this.m[3] = m3;
        this.m[4] = m4;
        this.m[5] = m5;
        return this;
    };
    Transform.prototype.getMatrix = function () {
        return this.m;
    };
    Transform.prototype.setAbsolutePosition = function (x, y) {
        var m0 = this.m[0], m1 = this.m[1], m2 = this.m[2], m3 = this.m[3], m4 = this.m[4], m5 = this.m[5], yt = (m0 * (y - m5) - m1 * (x - m4)) / (m0 * m3 - m1 * m2), xt = (x - m4 - m2 * yt) / m0;
        return this.translate(xt, yt);
    };
    Transform.prototype.decompose = function () {
        var a = this.m[0];
        var b = this.m[1];
        var c = this.m[2];
        var d = this.m[3];
        var e = this.m[4];
        var f = this.m[5];
        var delta = a * d - b * c;
        var result = {
            x: e,
            y: f,
            rotation: 0,
            scaleX: 0,
            scaleY: 0,
            skewX: 0,
            skewY: 0
        };
        if (a != 0 || b != 0) {
            var r = Math.sqrt(a * a + b * b);
            result.rotation = b > 0 ? Math.acos(a / r) : -Math.acos(a / r);
            result.scaleX = r;
            result.scaleY = delta / r;
            result.skewX = (a * c + b * d) / delta;
            result.skewY = 0;
        }
        else if (c != 0 || d != 0) {
            var s = Math.sqrt(c * c + d * d);
            result.rotation =
                Math.PI / 2 - (d > 0 ? Math.acos(-c / s) : -Math.acos(c / s));
            result.scaleX = delta / s;
            result.scaleY = s;
            result.skewX = 0;
            result.skewY = (a * c + b * d) / delta;
        }
        else {
        }
        result.rotation = exports.Util._getRotation(result.rotation);
        return result;
    };
    return Transform;
}());
exports.Transform = Transform;
var OBJECT_ARRAY = '[object Array]', OBJECT_NUMBER = '[object Number]', OBJECT_STRING = '[object String]', OBJECT_BOOLEAN = '[object Boolean]', PI_OVER_DEG180 = Math.PI / 180, DEG180_OVER_PI = 180 / Math.PI, HASH = '#', EMPTY_STRING = '', ZERO = '0', KONVA_WARNING = 'Konva warning: ', KONVA_ERROR = 'Konva error: ', RGB_PAREN = 'rgb(', COLORS = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 132, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 255, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 203],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [119, 128, 144],
    slategrey: [119, 128, 144],
    snow: [255, 255, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    transparent: [255, 255, 255, 0],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 5]
}, RGB_REGEX = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/, animQueue = [];
exports.Util = {
    _isElement: function (obj) {
        return !!(obj && obj.nodeType == 1);
    },
    _isFunction: function (obj) {
        return !!(obj && obj.constructor && obj.call && obj.apply);
    },
    _isPlainObject: function (obj) {
        return !!obj && obj.constructor === Object;
    },
    _isArray: function (obj) {
        return Object.prototype.toString.call(obj) === OBJECT_ARRAY;
    },
    _isNumber: function (obj) {
        return (Object.prototype.toString.call(obj) === OBJECT_NUMBER &&
            !isNaN(obj) &&
            isFinite(obj));
    },
    _isString: function (obj) {
        return Object.prototype.toString.call(obj) === OBJECT_STRING;
    },
    _isBoolean: function (obj) {
        return Object.prototype.toString.call(obj) === OBJECT_BOOLEAN;
    },
    isObject: function (val) {
        return val instanceof Object;
    },
    isValidSelector: function (selector) {
        if (typeof selector !== 'string') {
            return false;
        }
        var firstChar = selector[0];
        return (firstChar === '#' ||
            firstChar === '.' ||
            firstChar === firstChar.toUpperCase());
    },
    _sign: function (number) {
        if (number === 0) {
            return 0;
        }
        if (number > 0) {
            return 1;
        }
        else {
            return -1;
        }
    },
    requestAnimFrame: function (callback) {
        animQueue.push(callback);
        if (animQueue.length === 1) {
            requestAnimationFrame(function () {
                var queue = animQueue;
                animQueue = [];
                queue.forEach(function (cb) {
                    cb();
                });
            });
        }
    },
    createCanvasElement: function () {
        var canvas = document.createElement('canvas');
        try {
            canvas.style = canvas.style || {};
        }
        catch (e) { }
        return canvas;
    },
    createImageElement: function () {
        return document.createElement('img');
    },
    _isInDocument: function (el) {
        while ((el = el.parentNode)) {
            if (el == document) {
                return true;
            }
        }
        return false;
    },
    _simplifyArray: function (arr) {
        var retArr = [], len = arr.length, util = exports.Util, n, val;
        for (n = 0; n < len; n++) {
            val = arr[n];
            if (util._isNumber(val)) {
                val = Math.round(val * 1000) / 1000;
            }
            else if (!util._isString(val)) {
                val = val.toString();
            }
            retArr.push(val);
        }
        return retArr;
    },
    _urlToImage: function (url, callback) {
        var imageObj = new Global_1.glob.Image();
        imageObj.onload = function () {
            callback(imageObj);
        };
        imageObj.src = url;
    },
    _rgbToHex: function (r, g, b) {
        return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    },
    _hexToRgb: function (hex) {
        hex = hex.replace(HASH, EMPTY_STRING);
        var bigint = parseInt(hex, 16);
        return {
            r: (bigint >> 16) & 255,
            g: (bigint >> 8) & 255,
            b: bigint & 255
        };
    },
    getRandomColor: function () {
        var randColor = ((Math.random() * 0xffffff) << 0).toString(16);
        while (randColor.length < 6) {
            randColor = ZERO + randColor;
        }
        return HASH + randColor;
    },
    get: function (val, def) {
        if (val === undefined) {
            return def;
        }
        else {
            return val;
        }
    },
    getRGB: function (color) {
        var rgb;
        if (color in COLORS) {
            rgb = COLORS[color];
            return {
                r: rgb[0],
                g: rgb[1],
                b: rgb[2]
            };
        }
        else if (color[0] === HASH) {
            return this._hexToRgb(color.substring(1));
        }
        else if (color.substr(0, 4) === RGB_PAREN) {
            rgb = RGB_REGEX.exec(color.replace(/ /g, ''));
            return {
                r: parseInt(rgb[1], 10),
                g: parseInt(rgb[2], 10),
                b: parseInt(rgb[3], 10)
            };
        }
        else {
            return {
                r: 0,
                g: 0,
                b: 0
            };
        }
    },
    colorToRGBA: function (str) {
        str = str || 'black';
        return (exports.Util._namedColorToRBA(str) ||
            exports.Util._hex3ColorToRGBA(str) ||
            exports.Util._hex6ColorToRGBA(str) ||
            exports.Util._rgbColorToRGBA(str) ||
            exports.Util._rgbaColorToRGBA(str) ||
            exports.Util._hslColorToRGBA(str));
    },
    _namedColorToRBA: function (str) {
        var c = COLORS[str.toLowerCase()];
        if (!c) {
            return null;
        }
        return {
            r: c[0],
            g: c[1],
            b: c[2],
            a: 1
        };
    },
    _rgbColorToRGBA: function (str) {
        if (str.indexOf('rgb(') === 0) {
            str = str.match(/rgb\(([^)]+)\)/)[1];
            var parts = str.split(/ *, */).map(Number);
            return {
                r: parts[0],
                g: parts[1],
                b: parts[2],
                a: 1
            };
        }
    },
    _rgbaColorToRGBA: function (str) {
        if (str.indexOf('rgba(') === 0) {
            str = str.match(/rgba\(([^)]+)\)/)[1];
            var parts = str.split(/ *, */).map(Number);
            return {
                r: parts[0],
                g: parts[1],
                b: parts[2],
                a: parts[3]
            };
        }
    },
    _hex6ColorToRGBA: function (str) {
        if (str[0] === '#' && str.length === 7) {
            return {
                r: parseInt(str.slice(1, 3), 16),
                g: parseInt(str.slice(3, 5), 16),
                b: parseInt(str.slice(5, 7), 16),
                a: 1
            };
        }
    },
    _hex3ColorToRGBA: function (str) {
        if (str[0] === '#' && str.length === 4) {
            return {
                r: parseInt(str[1] + str[1], 16),
                g: parseInt(str[2] + str[2], 16),
                b: parseInt(str[3] + str[3], 16),
                a: 1
            };
        }
    },
    _hslColorToRGBA: function (str) {
        if (/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.test(str)) {
            var _a = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(str), _ = _a[0], hsl = _a.slice(1);
            var h = Number(hsl[0]) / 360;
            var s = Number(hsl[1]) / 100;
            var l = Number(hsl[2]) / 100;
            var t2 = void 0;
            var t3 = void 0;
            var val = void 0;
            if (s === 0) {
                val = l * 255;
                return {
                    r: Math.round(val),
                    g: Math.round(val),
                    b: Math.round(val),
                    a: 1
                };
            }
            if (l < 0.5) {
                t2 = l * (1 + s);
            }
            else {
                t2 = l + s - l * s;
            }
            var t1 = 2 * l - t2;
            var rgb = [0, 0, 0];
            for (var i = 0; i < 3; i++) {
                t3 = h + (1 / 3) * -(i - 1);
                if (t3 < 0) {
                    t3++;
                }
                if (t3 > 1) {
                    t3--;
                }
                if (6 * t3 < 1) {
                    val = t1 + (t2 - t1) * 6 * t3;
                }
                else if (2 * t3 < 1) {
                    val = t2;
                }
                else if (3 * t3 < 2) {
                    val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
                }
                else {
                    val = t1;
                }
                rgb[i] = val * 255;
            }
            return {
                r: Math.round(rgb[0]),
                g: Math.round(rgb[1]),
                b: Math.round(rgb[2]),
                a: 1
            };
        }
    },
    haveIntersection: function (r1, r2) {
        return !(r2.x > r1.x + r1.width ||
            r2.x + r2.width < r1.x ||
            r2.y > r1.y + r1.height ||
            r2.y + r2.height < r1.y);
    },
    cloneObject: function (obj) {
        var retObj = {};
        for (var key in obj) {
            if (this._isPlainObject(obj[key])) {
                retObj[key] = this.cloneObject(obj[key]);
            }
            else if (this._isArray(obj[key])) {
                retObj[key] = this.cloneArray(obj[key]);
            }
            else {
                retObj[key] = obj[key];
            }
        }
        return retObj;
    },
    cloneArray: function (arr) {
        return arr.slice(0);
    },
    _degToRad: function (deg) {
        return deg * PI_OVER_DEG180;
    },
    _radToDeg: function (rad) {
        return rad * DEG180_OVER_PI;
    },
    _getRotation: function (radians) {
        return Global_1.Konva.angleDeg ? exports.Util._radToDeg(radians) : radians;
    },
    _capitalize: function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },
    throw: function (str) {
        throw new Error(KONVA_ERROR + str);
    },
    error: function (str) {
        console.error(KONVA_ERROR + str);
    },
    warn: function (str) {
        if (!Global_1.Konva.showWarnings) {
            return;
        }
        console.warn(KONVA_WARNING + str);
    },
    extend: function (child, parent) {
        function Ctor() {
            this.constructor = child;
        }
        Ctor.prototype = parent.prototype;
        var oldProto = child.prototype;
        child.prototype = new Ctor();
        for (var key in oldProto) {
            if (oldProto.hasOwnProperty(key)) {
                child.prototype[key] = oldProto[key];
            }
        }
        child.__super__ = parent.prototype;
        child.super = parent;
    },
    _getControlPoints: function (x0, y0, x1, y1, x2, y2, t) {
        var d01 = Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2)), d12 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)), fa = (t * d01) / (d01 + d12), fb = (t * d12) / (d01 + d12), p1x = x1 - fa * (x2 - x0), p1y = y1 - fa * (y2 - y0), p2x = x1 + fb * (x2 - x0), p2y = y1 + fb * (y2 - y0);
        return [p1x, p1y, p2x, p2y];
    },
    _expandPoints: function (p, tension) {
        var len = p.length, allPoints = [], n, cp;
        for (n = 2; n < len - 2; n += 2) {
            cp = exports.Util._getControlPoints(p[n - 2], p[n - 1], p[n], p[n + 1], p[n + 2], p[n + 3], tension);
            allPoints.push(cp[0]);
            allPoints.push(cp[1]);
            allPoints.push(p[n]);
            allPoints.push(p[n + 1]);
            allPoints.push(cp[2]);
            allPoints.push(cp[3]);
        }
        return allPoints;
    },
    each: function (obj, func) {
        for (var key in obj) {
            func(key, obj[key]);
        }
    },
    _inRange: function (val, left, right) {
        return left <= val && val < right;
    },
    _getProjectionToSegment: function (x1, y1, x2, y2, x3, y3) {
        var x, y, dist;
        var pd2 = (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
        if (pd2 == 0) {
            x = x1;
            y = y1;
            dist = (x3 - x2) * (x3 - x2) + (y3 - y2) * (y3 - y2);
        }
        else {
            var u = ((x3 - x1) * (x2 - x1) + (y3 - y1) * (y2 - y1)) / pd2;
            if (u < 0) {
                x = x1;
                y = y1;
                dist = (x1 - x3) * (x1 - x3) + (y1 - y3) * (y1 - y3);
            }
            else if (u > 1.0) {
                x = x2;
                y = y2;
                dist = (x2 - x3) * (x2 - x3) + (y2 - y3) * (y2 - y3);
            }
            else {
                x = x1 + u * (x2 - x1);
                y = y1 + u * (y2 - y1);
                dist = (x - x3) * (x - x3) + (y - y3) * (y - y3);
            }
        }
        return [x, y, dist];
    },
    _getProjectionToLine: function (pt, line, isClosed) {
        var pc = exports.Util.cloneObject(pt);
        var dist = Number.MAX_VALUE;
        line.forEach(function (p1, i) {
            if (!isClosed && i === line.length - 1) {
                return;
            }
            var p2 = line[(i + 1) % line.length];
            var proj = exports.Util._getProjectionToSegment(p1.x, p1.y, p2.x, p2.y, pt.x, pt.y);
            var px = proj[0], py = proj[1], pdist = proj[2];
            if (pdist < dist) {
                pc.x = px;
                pc.y = py;
                dist = pdist;
            }
        });
        return pc;
    },
    _prepareArrayForTween: function (startArray, endArray, isClosed) {
        var n, start = [], end = [];
        if (startArray.length > endArray.length) {
            var temp = endArray;
            endArray = startArray;
            startArray = temp;
        }
        for (n = 0; n < startArray.length; n += 2) {
            start.push({
                x: startArray[n],
                y: startArray[n + 1]
            });
        }
        for (n = 0; n < endArray.length; n += 2) {
            end.push({
                x: endArray[n],
                y: endArray[n + 1]
            });
        }
        var newStart = [];
        end.forEach(function (point) {
            var pr = exports.Util._getProjectionToLine(point, start, isClosed);
            newStart.push(pr.x);
            newStart.push(pr.y);
        });
        return newStart;
    },
    _prepareToStringify: function (obj) {
        var desc;
        obj.visitedByCircularReferenceRemoval = true;
        for (var key in obj) {
            if (!(obj.hasOwnProperty(key) && obj[key] && typeof obj[key] == 'object')) {
                continue;
            }
            desc = Object.getOwnPropertyDescriptor(obj, key);
            if (obj[key].visitedByCircularReferenceRemoval ||
                exports.Util._isElement(obj[key])) {
                if (desc.configurable) {
                    delete obj[key];
                }
                else {
                    return null;
                }
            }
            else if (exports.Util._prepareToStringify(obj[key]) === null) {
                if (desc.configurable) {
                    delete obj[key];
                }
                else {
                    return null;
                }
            }
        }
        delete obj.visitedByCircularReferenceRemoval;
        return obj;
    },
    _assign: function (target, source) {
        for (var key in source) {
            target[key] = source[key];
        }
        return target;
    },
    _getFirstPointerId: function (evt) {
        if (!evt.touches) {
            return 999;
        }
        else {
            return evt.changedTouches[0].identifier;
        }
    }
};


/***/ }),

/***/ "9ed3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__("ae93").IteratorPrototype;
var create = __webpack_require__("7c73");
var createPropertyDescriptor = __webpack_require__("5c6c");
var setToStringTag = __webpack_require__("d44e");
var Iterators = __webpack_require__("3f8c");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "a691":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "a9e3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var isForced = __webpack_require__("94ca");
var redefine = __webpack_require__("6eeb");
var has = __webpack_require__("5135");
var classof = __webpack_require__("c6b6");
var inheritIfRequired = __webpack_require__("7156");
var toPrimitive = __webpack_require__("c04e");
var fails = __webpack_require__("d039");
var create = __webpack_require__("7c73");
var getOwnPropertyNames = __webpack_require__("241c").f;
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var defineProperty = __webpack_require__("9bf2").f;
var trim = __webpack_require__("58a8").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "ae40":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "ae93":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__("e163");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "b041":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classof = __webpack_require__("f5df");

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "b575":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var classof = __webpack_require__("c6b6");
var macrotask = __webpack_require__("2cf4").set;
var IS_IOS = __webpack_require__("1cdc");

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var IS_NODE = classof(process) == 'process';
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  } else if (MutationObserver && !IS_IOS) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var has = __webpack_require__("5135");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "b727":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("0366");
var IndexedObject = __webpack_require__("44ad");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var arraySpeciesCreate = __webpack_require__("65f0");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "c10c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c527":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = __webpack_require__("9cb8");
var Global_1 = __webpack_require__("d777");
var COMMA = ',', OPEN_PAREN = '(', CLOSE_PAREN = ')', OPEN_PAREN_BRACKET = '([', CLOSE_BRACKET_PAREN = '])', SEMICOLON = ';', DOUBLE_PAREN = '()', EQUALS = '=', CONTEXT_METHODS = [
    'arc',
    'arcTo',
    'beginPath',
    'bezierCurveTo',
    'clearRect',
    'clip',
    'closePath',
    'createLinearGradient',
    'createPattern',
    'createRadialGradient',
    'drawImage',
    'ellipse',
    'fill',
    'fillText',
    'getImageData',
    'createImageData',
    'lineTo',
    'moveTo',
    'putImageData',
    'quadraticCurveTo',
    'rect',
    'restore',
    'rotate',
    'save',
    'scale',
    'setLineDash',
    'setTransform',
    'stroke',
    'strokeText',
    'transform',
    'translate'
];
var CONTEXT_PROPERTIES = [
    'fillStyle',
    'strokeStyle',
    'shadowColor',
    'shadowBlur',
    'shadowOffsetX',
    'shadowOffsetY',
    'lineCap',
    'lineDashOffset',
    'lineJoin',
    'lineWidth',
    'miterLimit',
    'font',
    'textAlign',
    'textBaseline',
    'globalAlpha',
    'globalCompositeOperation',
    'imageSmoothingEnabled'
];
var traceArrMax = 100;
var Context = (function () {
    function Context(canvas) {
        this.canvas = canvas;
        this._context = canvas._canvas.getContext('2d');
        if (Global_1.Konva.enableTrace) {
            this.traceArr = [];
            this._enableTrace();
        }
    }
    Context.prototype.fillShape = function (shape) {
        if (shape.fillEnabled()) {
            this._fill(shape);
        }
    };
    Context.prototype._fill = function (shape) {
    };
    Context.prototype.strokeShape = function (shape) {
        if (shape.hasStroke()) {
            this._stroke(shape);
        }
    };
    Context.prototype._stroke = function (shape) {
    };
    Context.prototype.fillStrokeShape = function (shape) {
        this.fillShape(shape);
        this.strokeShape(shape);
    };
    Context.prototype.getTrace = function (relaxed) {
        var traceArr = this.traceArr, len = traceArr.length, str = '', n, trace, method, args;
        for (n = 0; n < len; n++) {
            trace = traceArr[n];
            method = trace.method;
            if (method) {
                args = trace.args;
                str += method;
                if (relaxed) {
                    str += DOUBLE_PAREN;
                }
                else {
                    if (Util_1.Util._isArray(args[0])) {
                        str += OPEN_PAREN_BRACKET + args.join(COMMA) + CLOSE_BRACKET_PAREN;
                    }
                    else {
                        str += OPEN_PAREN + args.join(COMMA) + CLOSE_PAREN;
                    }
                }
            }
            else {
                str += trace.property;
                if (!relaxed) {
                    str += EQUALS + trace.val;
                }
            }
            str += SEMICOLON;
        }
        return str;
    };
    Context.prototype.clearTrace = function () {
        this.traceArr = [];
    };
    Context.prototype._trace = function (str) {
        var traceArr = this.traceArr, len;
        traceArr.push(str);
        len = traceArr.length;
        if (len >= traceArrMax) {
            traceArr.shift();
        }
    };
    Context.prototype.reset = function () {
        var pixelRatio = this.getCanvas().getPixelRatio();
        this.setTransform(1 * pixelRatio, 0, 0, 1 * pixelRatio, 0, 0);
    };
    Context.prototype.getCanvas = function () {
        return this.canvas;
    };
    Context.prototype.clear = function (bounds) {
        var canvas = this.getCanvas();
        if (bounds) {
            this.clearRect(bounds.x || 0, bounds.y || 0, bounds.width || 0, bounds.height || 0);
        }
        else {
            this.clearRect(0, 0, canvas.getWidth() / canvas.pixelRatio, canvas.getHeight() / canvas.pixelRatio);
        }
    };
    Context.prototype._applyLineCap = function (shape) {
        var lineCap = shape.getLineCap();
        if (lineCap) {
            this.setAttr('lineCap', lineCap);
        }
    };
    Context.prototype._applyOpacity = function (shape) {
        var absOpacity = shape.getAbsoluteOpacity();
        if (absOpacity !== 1) {
            this.setAttr('globalAlpha', absOpacity);
        }
    };
    Context.prototype._applyLineJoin = function (shape) {
        var lineJoin = shape.getLineJoin();
        if (lineJoin) {
            this.setAttr('lineJoin', lineJoin);
        }
    };
    Context.prototype.setAttr = function (attr, val) {
        this._context[attr] = val;
    };
    Context.prototype.arc = function (a0, a1, a2, a3, a4, a5) {
        this._context.arc(a0, a1, a2, a3, a4, a5);
    };
    Context.prototype.arcTo = function (a0, a1, a2, a3, a4) {
        this._context.arcTo(a0, a1, a2, a3, a4);
    };
    Context.prototype.beginPath = function () {
        this._context.beginPath();
    };
    Context.prototype.bezierCurveTo = function (a0, a1, a2, a3, a4, a5) {
        this._context.bezierCurveTo(a0, a1, a2, a3, a4, a5);
    };
    Context.prototype.clearRect = function (a0, a1, a2, a3) {
        this._context.clearRect(a0, a1, a2, a3);
    };
    Context.prototype.clip = function () {
        this._context.clip();
    };
    Context.prototype.closePath = function () {
        this._context.closePath();
    };
    Context.prototype.createImageData = function (a0, a1) {
        var a = arguments;
        if (a.length === 2) {
            return this._context.createImageData(a0, a1);
        }
        else if (a.length === 1) {
            return this._context.createImageData(a0);
        }
    };
    Context.prototype.createLinearGradient = function (a0, a1, a2, a3) {
        return this._context.createLinearGradient(a0, a1, a2, a3);
    };
    Context.prototype.createPattern = function (a0, a1) {
        return this._context.createPattern(a0, a1);
    };
    Context.prototype.createRadialGradient = function (a0, a1, a2, a3, a4, a5) {
        return this._context.createRadialGradient(a0, a1, a2, a3, a4, a5);
    };
    Context.prototype.drawImage = function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        var a = arguments, _context = this._context;
        if (a.length === 3) {
            _context.drawImage(a0, a1, a2);
        }
        else if (a.length === 5) {
            _context.drawImage(a0, a1, a2, a3, a4);
        }
        else if (a.length === 9) {
            _context.drawImage(a0, a1, a2, a3, a4, a5, a6, a7, a8);
        }
    };
    Context.prototype.ellipse = function (a0, a1, a2, a3, a4, a5, a6, a7) {
        this._context.ellipse(a0, a1, a2, a3, a4, a5, a6, a7);
    };
    Context.prototype.isPointInPath = function (x, y) {
        return this._context.isPointInPath(x, y);
    };
    Context.prototype.fill = function () {
        this._context.fill();
    };
    Context.prototype.fillRect = function (x, y, width, height) {
        this._context.fillRect(x, y, width, height);
    };
    Context.prototype.strokeRect = function (x, y, width, height) {
        this._context.strokeRect(x, y, width, height);
    };
    Context.prototype.fillText = function (a0, a1, a2) {
        this._context.fillText(a0, a1, a2);
    };
    Context.prototype.measureText = function (text) {
        return this._context.measureText(text);
    };
    Context.prototype.getImageData = function (a0, a1, a2, a3) {
        return this._context.getImageData(a0, a1, a2, a3);
    };
    Context.prototype.lineTo = function (a0, a1) {
        this._context.lineTo(a0, a1);
    };
    Context.prototype.moveTo = function (a0, a1) {
        this._context.moveTo(a0, a1);
    };
    Context.prototype.rect = function (a0, a1, a2, a3) {
        this._context.rect(a0, a1, a2, a3);
    };
    Context.prototype.putImageData = function (a0, a1, a2) {
        this._context.putImageData(a0, a1, a2);
    };
    Context.prototype.quadraticCurveTo = function (a0, a1, a2, a3) {
        this._context.quadraticCurveTo(a0, a1, a2, a3);
    };
    Context.prototype.restore = function () {
        this._context.restore();
    };
    Context.prototype.rotate = function (a0) {
        this._context.rotate(a0);
    };
    Context.prototype.save = function () {
        this._context.save();
    };
    Context.prototype.scale = function (a0, a1) {
        this._context.scale(a0, a1);
    };
    Context.prototype.setLineDash = function (a0) {
        if (this._context.setLineDash) {
            this._context.setLineDash(a0);
        }
        else if ('mozDash' in this._context) {
            this._context['mozDash'] = a0;
        }
        else if ('webkitLineDash' in this._context) {
            this._context['webkitLineDash'] = a0;
        }
    };
    Context.prototype.getLineDash = function () {
        return this._context.getLineDash();
    };
    Context.prototype.setTransform = function (a0, a1, a2, a3, a4, a5) {
        this._context.setTransform(a0, a1, a2, a3, a4, a5);
    };
    Context.prototype.stroke = function () {
        this._context.stroke();
    };
    Context.prototype.strokeText = function (a0, a1, a2, a3) {
        this._context.strokeText(a0, a1, a2, a3);
    };
    Context.prototype.transform = function (a0, a1, a2, a3, a4, a5) {
        this._context.transform(a0, a1, a2, a3, a4, a5);
    };
    Context.prototype.translate = function (a0, a1) {
        this._context.translate(a0, a1);
    };
    Context.prototype._enableTrace = function () {
        var that = this, len = CONTEXT_METHODS.length, _simplifyArray = Util_1.Util._simplifyArray, origSetter = this.setAttr, n, args;
        var func = function (methodName) {
            var origMethod = that[methodName], ret;
            that[methodName] = function () {
                args = _simplifyArray(Array.prototype.slice.call(arguments, 0));
                ret = origMethod.apply(that, arguments);
                that._trace({
                    method: methodName,
                    args: args
                });
                return ret;
            };
        };
        for (n = 0; n < len; n++) {
            func(CONTEXT_METHODS[n]);
        }
        that.setAttr = function () {
            origSetter.apply(that, arguments);
            var prop = arguments[0];
            var val = arguments[1];
            if (prop === 'shadowOffsetX' ||
                prop === 'shadowOffsetY' ||
                prop === 'shadowBlur') {
                val = val / this.canvas.getPixelRatio();
            }
            that._trace({
                property: prop,
                val: val
            });
        };
    };
    Context.prototype._applyGlobalCompositeOperation = function (node) {
        var globalCompositeOperation = node.getGlobalCompositeOperation();
        if (globalCompositeOperation !== 'source-over') {
            this.setAttr('globalCompositeOperation', globalCompositeOperation);
        }
    };
    return Context;
}());
exports.Context = Context;
CONTEXT_PROPERTIES.forEach(function (prop) {
    Object.defineProperty(Context.prototype, prop, {
        get: function () {
            return this._context[prop];
        },
        set: function (val) {
            this._context[prop] = val;
        }
    });
});
var SceneContext = (function (_super) {
    __extends(SceneContext, _super);
    function SceneContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SceneContext.prototype._fillColor = function (shape) {
        var fill = shape.fill();
        this.setAttr('fillStyle', fill);
        shape._fillFunc(this);
    };
    SceneContext.prototype._fillPattern = function (shape) {
        var fillPatternX = shape.getFillPatternX(), fillPatternY = shape.getFillPatternY(), fillPatternRotation = Global_1.Konva.getAngle(shape.getFillPatternRotation()), fillPatternOffsetX = shape.getFillPatternOffsetX(), fillPatternOffsetY = shape.getFillPatternOffsetY(), fillPatternScaleX = shape.getFillPatternScaleX(), fillPatternScaleY = shape.getFillPatternScaleY();
        if (fillPatternX || fillPatternY) {
            this.translate(fillPatternX || 0, fillPatternY || 0);
        }
        if (fillPatternRotation) {
            this.rotate(fillPatternRotation);
        }
        if (fillPatternScaleX || fillPatternScaleY) {
            this.scale(fillPatternScaleX, fillPatternScaleY);
        }
        if (fillPatternOffsetX || fillPatternOffsetY) {
            this.translate(-1 * fillPatternOffsetX, -1 * fillPatternOffsetY);
        }
        this.setAttr('fillStyle', shape._getFillPattern());
        shape._fillFunc(this);
    };
    SceneContext.prototype._fillLinearGradient = function (shape) {
        var grd = shape._getLinearGradient();
        if (grd) {
            this.setAttr('fillStyle', grd);
            shape._fillFunc(this);
        }
    };
    SceneContext.prototype._fillRadialGradient = function (shape) {
        var grd = shape._getRadialGradient();
        if (grd) {
            this.setAttr('fillStyle', grd);
            shape._fillFunc(this);
        }
    };
    SceneContext.prototype._fill = function (shape) {
        var hasColor = shape.fill(), fillPriority = shape.getFillPriority();
        if (hasColor && fillPriority === 'color') {
            this._fillColor(shape);
            return;
        }
        var hasPattern = shape.getFillPatternImage();
        if (hasPattern && fillPriority === 'pattern') {
            this._fillPattern(shape);
            return;
        }
        var hasLinearGradient = shape.getFillLinearGradientColorStops();
        if (hasLinearGradient && fillPriority === 'linear-gradient') {
            this._fillLinearGradient(shape);
            return;
        }
        var hasRadialGradient = shape.getFillRadialGradientColorStops();
        if (hasRadialGradient && fillPriority === 'radial-gradient') {
            this._fillRadialGradient(shape);
            return;
        }
        if (hasColor) {
            this._fillColor(shape);
        }
        else if (hasPattern) {
            this._fillPattern(shape);
        }
        else if (hasLinearGradient) {
            this._fillLinearGradient(shape);
        }
        else if (hasRadialGradient) {
            this._fillRadialGradient(shape);
        }
    };
    SceneContext.prototype._strokeLinearGradient = function (shape) {
        var start = shape.getStrokeLinearGradientStartPoint(), end = shape.getStrokeLinearGradientEndPoint(), colorStops = shape.getStrokeLinearGradientColorStops(), grd = this.createLinearGradient(start.x, start.y, end.x, end.y);
        if (colorStops) {
            for (var n = 0; n < colorStops.length; n += 2) {
                grd.addColorStop(colorStops[n], colorStops[n + 1]);
            }
            this.setAttr('strokeStyle', grd);
        }
    };
    SceneContext.prototype._stroke = function (shape) {
        var dash = shape.dash(), strokeScaleEnabled = shape.getStrokeScaleEnabled();
        if (shape.hasStroke()) {
            if (!strokeScaleEnabled) {
                this.save();
                var pixelRatio = this.getCanvas().getPixelRatio();
                this.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
            }
            this._applyLineCap(shape);
            if (dash && shape.dashEnabled()) {
                this.setLineDash(dash);
                this.setAttr('lineDashOffset', shape.dashOffset());
            }
            this.setAttr('lineWidth', shape.strokeWidth());
            if (!shape.getShadowForStrokeEnabled()) {
                this.setAttr('shadowColor', 'rgba(0,0,0,0)');
            }
            var hasLinearGradient = shape.getStrokeLinearGradientColorStops();
            if (hasLinearGradient) {
                this._strokeLinearGradient(shape);
            }
            else {
                this.setAttr('strokeStyle', shape.stroke());
            }
            shape._strokeFunc(this);
            if (!strokeScaleEnabled) {
                this.restore();
            }
        }
    };
    SceneContext.prototype._applyShadow = function (shape) {
        var util = Util_1.Util, color = util.get(shape.getShadowRGBA(), 'black'), blur = util.get(shape.getShadowBlur(), 5), offset = util.get(shape.getShadowOffset(), {
            x: 0,
            y: 0
        }), scale = shape.getAbsoluteScale(), ratio = this.canvas.getPixelRatio(), scaleX = scale.x * ratio, scaleY = scale.y * ratio;
        this.setAttr('shadowColor', color);
        this.setAttr('shadowBlur', blur * Math.min(Math.abs(scaleX), Math.abs(scaleY)));
        this.setAttr('shadowOffsetX', offset.x * scaleX);
        this.setAttr('shadowOffsetY', offset.y * scaleY);
    };
    return SceneContext;
}(Context));
exports.SceneContext = SceneContext;
var HitContext = (function (_super) {
    __extends(HitContext, _super);
    function HitContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HitContext.prototype._fill = function (shape) {
        this.save();
        this.setAttr('fillStyle', shape.colorKey);
        shape._fillFuncHit(this);
        this.restore();
    };
    HitContext.prototype.strokeShape = function (shape) {
        if (shape.hasHitStroke()) {
            this._stroke(shape);
        }
    };
    HitContext.prototype._stroke = function (shape) {
        if (shape.hasHitStroke()) {
            var strokeScaleEnabled = shape.getStrokeScaleEnabled();
            if (!strokeScaleEnabled) {
                this.save();
                var pixelRatio = this.getCanvas().getPixelRatio();
                this.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
            }
            this._applyLineCap(shape);
            var hitStrokeWidth = shape.hitStrokeWidth();
            var strokeWidth = hitStrokeWidth === 'auto' ? shape.strokeWidth() : hitStrokeWidth;
            this.setAttr('lineWidth', strokeWidth);
            this.setAttr('strokeStyle', shape.colorKey);
            shape._strokeFuncHit(this);
            if (!strokeScaleEnabled) {
                this.restore();
            }
        }
    };
    return HitContext;
}(Context));
exports.HitContext = HitContext;


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var setGlobal = __webpack_require__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "cb29":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var fill = __webpack_require__("81d5");
var addToUnscopables = __webpack_require__("44d2");

// `Array.prototype.fill` method
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
$({ target: 'Array', proto: true }, {
  fill: fill
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('fill');


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "cdf9":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var isObject = __webpack_require__("861d");
var newPromiseCapability = __webpack_require__("f069");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var global = __webpack_require__("da84");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aPossiblePrototype = __webpack_require__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "d3b7":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var redefine = __webpack_require__("6eeb");
var toString = __webpack_require__("b041");

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "d44e":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("9bf2").f;
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "d6af":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = __webpack_require__("9cb8");
var Container_1 = __webpack_require__("ea61");
var Node_1 = __webpack_require__("4971");
var Factory_1 = __webpack_require__("f0b4");
var Canvas_1 = __webpack_require__("f655");
var BaseLayer = (function (_super) {
    __extends(BaseLayer, _super);
    function BaseLayer(config) {
        var _this = _super.call(this, config) || this;
        _this.canvas = new Canvas_1.SceneCanvas();
        _this._waitingForDraw = false;
        _this.on('visibleChange', _this._checkVisibility);
        _this._checkVisibility();
        _this.on('imageSmoothingEnabledChange', _this._setSmoothEnabled);
        _this._setSmoothEnabled();
        return _this;
    }
    BaseLayer.prototype.createPNGStream = function () {
        var c = this.canvas._canvas;
        return c.createPNGStream();
    };
    BaseLayer.prototype.getCanvas = function () {
        return this.canvas;
    };
    BaseLayer.prototype.getHitCanvas = function () {
        return this.hitCanvas;
    };
    BaseLayer.prototype.getContext = function () {
        return this.getCanvas().getContext();
    };
    BaseLayer.prototype.clear = function (bounds) {
        this.getContext().clear(bounds);
        return this;
    };
    BaseLayer.prototype.setZIndex = function (index) {
        _super.prototype.setZIndex.call(this, index);
        var stage = this.getStage();
        if (stage) {
            stage.content.removeChild(this.getCanvas()._canvas);
            if (index < stage.children.length - 1) {
                stage.content.insertBefore(this.getCanvas()._canvas, stage.children[index + 1].getCanvas()._canvas);
            }
            else {
                stage.content.appendChild(this.getCanvas()._canvas);
            }
        }
        return this;
    };
    BaseLayer.prototype.moveToTop = function () {
        Node_1.Node.prototype.moveToTop.call(this);
        var stage = this.getStage();
        if (stage) {
            stage.content.removeChild(this.getCanvas()._canvas);
            stage.content.appendChild(this.getCanvas()._canvas);
        }
        return true;
    };
    BaseLayer.prototype.moveUp = function () {
        var moved = Node_1.Node.prototype.moveUp.call(this);
        if (!moved) {
            return false;
        }
        var stage = this.getStage();
        if (!stage) {
            return false;
        }
        stage.content.removeChild(this.getCanvas()._canvas);
        if (this.index < stage.children.length - 1) {
            stage.content.insertBefore(this.getCanvas()._canvas, stage.children[this.index + 1].getCanvas()._canvas);
        }
        else {
            stage.content.appendChild(this.getCanvas()._canvas);
        }
        return true;
    };
    BaseLayer.prototype.moveDown = function () {
        if (Node_1.Node.prototype.moveDown.call(this)) {
            var stage = this.getStage();
            if (stage) {
                var children = stage.children;
                stage.content.removeChild(this.getCanvas()._canvas);
                stage.content.insertBefore(this.getCanvas()._canvas, children[this.index + 1].getCanvas()._canvas);
            }
            return true;
        }
        return false;
    };
    BaseLayer.prototype.moveToBottom = function () {
        if (Node_1.Node.prototype.moveToBottom.call(this)) {
            var stage = this.getStage();
            if (stage) {
                var children = stage.children;
                stage.content.removeChild(this.getCanvas()._canvas);
                stage.content.insertBefore(this.getCanvas()._canvas, children[1].getCanvas()._canvas);
            }
            return true;
        }
        return false;
    };
    BaseLayer.prototype.getLayer = function () {
        return this;
    };
    BaseLayer.prototype.hitGraphEnabled = function () {
        return true;
    };
    BaseLayer.prototype.remove = function () {
        var _canvas = this.getCanvas()._canvas;
        Node_1.Node.prototype.remove.call(this);
        if (_canvas && _canvas.parentNode && Util_1.Util._isInDocument(_canvas)) {
            _canvas.parentNode.removeChild(_canvas);
        }
        return this;
    };
    BaseLayer.prototype.getStage = function () {
        return this.parent;
    };
    BaseLayer.prototype.setSize = function (_a) {
        var width = _a.width, height = _a.height;
        this.canvas.setSize(width, height);
        this._setSmoothEnabled();
        return this;
    };
    BaseLayer.prototype._toKonvaCanvas = function (config) {
        config = config || {};
        config.width = config.width || this.getWidth();
        config.height = config.height || this.getHeight();
        config.x = config.x !== undefined ? config.x : this.x();
        config.y = config.y !== undefined ? config.y : this.y();
        return Node_1.Node.prototype._toKonvaCanvas.call(this, config);
    };
    BaseLayer.prototype._checkVisibility = function () {
        var visible = this.visible();
        if (visible) {
            this.canvas._canvas.style.display = 'block';
        }
        else {
            this.canvas._canvas.style.display = 'none';
        }
    };
    BaseLayer.prototype._setSmoothEnabled = function () {
        this.getContext()._context.imageSmoothingEnabled = this.imageSmoothingEnabled();
    };
    BaseLayer.prototype.getWidth = function () {
        if (this.parent) {
            return this.parent.width();
        }
    };
    BaseLayer.prototype.setWidth = function () {
        Util_1.Util.warn('Can not change width of layer. Use "stage.width(value)" function instead.');
    };
    BaseLayer.prototype.getHeight = function () {
        if (this.parent) {
            return this.parent.height();
        }
    };
    BaseLayer.prototype.setHeight = function () {
        Util_1.Util.warn('Can not change height of layer. Use "stage.height(value)" function instead.');
    };
    BaseLayer.prototype.getIntersection = function (pos, selector) {
        return null;
    };
    BaseLayer.prototype.batchDraw = function () {
        var _this = this;
        if (!this._waitingForDraw) {
            this._waitingForDraw = true;
            Util_1.Util.requestAnimFrame(function () {
                _this.draw();
                _this._waitingForDraw = false;
            });
        }
        return this;
    };
    BaseLayer.prototype._applyTransform = function (shape, context, top) {
        var m = shape.getAbsoluteTransform(top).getMatrix();
        context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
    };
    return BaseLayer;
}(Container_1.Container));
exports.BaseLayer = BaseLayer;
BaseLayer.prototype.nodeType = 'BaseLayer';
Factory_1.Factory.addGetterSetter(BaseLayer, 'imageSmoothingEnabled', true);
Factory_1.Factory.addGetterSetter(BaseLayer, 'clearBeforeDraw', true);
Util_1.Collection.mapMethods(BaseLayer);


/***/ }),

/***/ "d777":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
Object.defineProperty(exports, "__esModule", { value: true });
var PI_OVER_180 = Math.PI / 180;
function detectBrowser() {
    return (typeof window !== 'undefined' &&
        ({}.toString.call(window) === '[object Window]' ||
            {}.toString.call(window) === '[object global]'));
}
var _detectIE = function (ua) {
    var msie = ua.indexOf('msie ');
    if (msie > 0) {
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }
    var trident = ua.indexOf('trident/');
    if (trident > 0) {
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }
    var edge = ua.indexOf('edge/');
    if (edge > 0) {
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }
    return false;
};
exports._parseUA = function (userAgent) {
    var ua = userAgent.toLowerCase(), match = /(chrome)[ /]([\w.]+)/.exec(ua) ||
        /(webkit)[ /]([\w.]+)/.exec(ua) ||
        /(opera)(?:.*version|)[ /]([\w.]+)/.exec(ua) ||
        /(msie) ([\w.]+)/.exec(ua) ||
        (ua.indexOf('compatible') < 0 &&
            /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua)) ||
        [], mobile = !!userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i), ieMobile = !!userAgent.match(/IEMobile/i);
    return {
        browser: match[1] || '',
        version: match[2] || '0',
        isIE: _detectIE(ua),
        mobile: mobile,
        ieMobile: ieMobile
    };
};
exports.glob = typeof global !== 'undefined'
    ? global
    : typeof window !== 'undefined'
        ? window
        : typeof WorkerGlobalScope !== 'undefined'
            ? self
            : {};
exports.Konva = {
    _global: exports.glob,
    version: '6.0.0',
    isBrowser: detectBrowser(),
    isUnminified: /param/.test(function (param) { }.toString()),
    dblClickWindow: 400,
    getAngle: function (angle) {
        return exports.Konva.angleDeg ? angle * PI_OVER_180 : angle;
    },
    enableTrace: false,
    _pointerEventsEnabled: false,
    hitOnDragEnabled: false,
    captureTouchEventsEnabled: false,
    listenClickTap: false,
    inDblClickWindow: false,
    pixelRatio: undefined,
    dragDistance: 3,
    angleDeg: true,
    showWarnings: true,
    dragButtons: [0, 1],
    isDragging: function () {
        return exports.Konva['DD'].isDragging;
    },
    isDragReady: function () {
        return !!exports.Konva['DD'].node;
    },
    UA: exports._parseUA((exports.glob.navigator && exports.glob.navigator.userAgent) || ''),
    document: exports.glob.document,
    _injectGlobal: function (Konva) {
        exports.glob.Konva = Konva;
    },
    _parseUA: exports._parseUA
};
exports._NODES_REGISTRY = {};
exports._registerNode = function (NodeClass) {
    exports._NODES_REGISTRY[NodeClass.prototype.getClassName()] = NodeClass;
    exports.Konva[NodeClass.prototype.getClassName()] = NodeClass;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "d81d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $map = __webpack_require__("b727").map;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "ddb0":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var ArrayIteratorMethods = __webpack_require__("e260");
var createNonEnumerableProperty = __webpack_require__("9112");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "df93":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Global_1 = __webpack_require__("d777");
var Util_1 = __webpack_require__("9cb8");
exports.DD = {
    get isDragging() {
        var flag = false;
        exports.DD._dragElements.forEach(function (elem) {
            if (elem.dragStatus === 'dragging') {
                flag = true;
            }
        });
        return flag;
    },
    justDragged: false,
    get node() {
        var node;
        exports.DD._dragElements.forEach(function (elem) {
            node = elem.node;
        });
        return node;
    },
    _dragElements: new Map(),
    _drag: function (evt) {
        exports.DD._dragElements.forEach(function (elem, key) {
            var node = elem.node;
            var stage = node.getStage();
            stage.setPointersPositions(evt);
            if (elem.pointerId === undefined) {
                elem.pointerId = Util_1.Util._getFirstPointerId(evt);
            }
            var pos = stage._changedPointerPositions.find(function (pos) { return pos.id === elem.pointerId; });
            if (!pos) {
                return;
            }
            if (elem.dragStatus !== 'dragging') {
                var dragDistance = node.dragDistance();
                var distance = Math.max(Math.abs(pos.x - elem.startPointerPos.x), Math.abs(pos.y - elem.startPointerPos.y));
                if (distance < dragDistance) {
                    return;
                }
                node.startDrag({ evt: evt });
                if (!node.isDragging()) {
                    return;
                }
            }
            node._setDragPosition(evt, elem);
            node.fire('dragmove', {
                type: 'dragmove',
                target: node,
                evt: evt
            }, true);
        });
    },
    _endDragBefore: function (evt) {
        exports.DD._dragElements.forEach(function (elem, key) {
            var node = elem.node;
            var stage = node.getStage();
            if (evt) {
                stage.setPointersPositions(evt);
            }
            var pos = stage._changedPointerPositions.find(function (pos) { return pos.id === elem.pointerId; });
            if (!pos) {
                return;
            }
            if (elem.dragStatus === 'dragging' || elem.dragStatus === 'stopped') {
                exports.DD.justDragged = true;
                Global_1.Konva.listenClickTap = false;
                elem.dragStatus = 'stopped';
            }
            var drawNode = elem.node.getLayer() ||
                (elem.node instanceof Global_1.Konva['Stage'] && elem.node);
            if (drawNode) {
                drawNode.draw();
            }
        });
    },
    _endDragAfter: function (evt) {
        exports.DD._dragElements.forEach(function (elem, key) {
            if (elem.dragStatus === 'stopped') {
                elem.node.fire('dragend', {
                    type: 'dragend',
                    target: elem.node,
                    evt: evt
                }, true);
            }
            if (elem.dragStatus !== 'dragging') {
                exports.DD._dragElements.delete(key);
            }
        });
    }
};
if (Global_1.Konva.isBrowser) {
    window.addEventListener('mouseup', exports.DD._endDragBefore, true);
    window.addEventListener('touchend', exports.DD._endDragBefore, true);
    window.addEventListener('mousemove', exports.DD._drag);
    window.addEventListener('touchmove', exports.DD._drag);
    window.addEventListener('mouseup', exports.DD._endDragAfter, false);
    window.addEventListener('touchend', exports.DD._endDragAfter, false);
}


/***/ }),

/***/ "e163":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toObject = __webpack_require__("7b0b");
var sharedKey = __webpack_require__("f772");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("e177");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "e177":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "e260":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__("fc6a");
var addToUnscopables = __webpack_require__("44d2");
var Iterators = __webpack_require__("3f8c");
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "e2cc":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("6eeb");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "e667":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ "e6cf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var IS_PURE = __webpack_require__("c430");
var global = __webpack_require__("da84");
var getBuiltIn = __webpack_require__("d066");
var NativePromise = __webpack_require__("fea9");
var redefine = __webpack_require__("6eeb");
var redefineAll = __webpack_require__("e2cc");
var setToStringTag = __webpack_require__("d44e");
var setSpecies = __webpack_require__("2626");
var isObject = __webpack_require__("861d");
var aFunction = __webpack_require__("1c0b");
var anInstance = __webpack_require__("19aa");
var classof = __webpack_require__("c6b6");
var inspectSource = __webpack_require__("8925");
var iterate = __webpack_require__("2266");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");
var speciesConstructor = __webpack_require__("4840");
var task = __webpack_require__("2cf4").set;
var microtask = __webpack_require__("b575");
var promiseResolve = __webpack_require__("cdf9");
var hostReportErrors = __webpack_require__("44de");
var newPromiseCapabilityModule = __webpack_require__("f069");
var perform = __webpack_require__("e667");
var InternalStateModule = __webpack_require__("69f3");
var isForced = __webpack_require__("94ca");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = NativePromise;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var $fetch = getBuiltIn('fetch');
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var IS_NODE = classof(process) == 'process';
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
  if (!GLOBAL_CORE_JS_PROMISE) {
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (V8_VERSION === 66) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    if (!IS_NODE && typeof PromiseRejectionEvent != 'function') return true;
  }
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromiseConstructor.prototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (promise, state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(promise, state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(promise, state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (handler = global['on' + name]) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (promise, state) {
  task.call(global, function () {
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (promise, state) {
  task.call(global, function () {
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, promise, state, unwrap) {
  return function (value) {
    fn(promise, state, value, unwrap);
  };
};

var internalReject = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(promise, state, true);
};

var internalResolve = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, promise, wrapper, state),
            bind(internalReject, promise, wrapper, state)
          );
        } catch (error) {
          internalReject(promise, wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(promise, state, false);
    }
  } catch (error) {
    internalReject(promise, { done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, this, state), bind(internalReject, this, state));
    } catch (error) {
      internalReject(this, state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(this, state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, promise, state);
    this.reject = bind(internalReject, promise, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function') {
    nativeThen = NativePromise.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    // https://github.com/zloirock/core-js/issues/640
    }, { unsafe: true });

    // wrap fetch result
    if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
      // eslint-disable-next-line no-unused-vars
      fetch: function fetch(input /* , init */) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
      }
    });
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.github.io/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.github.io/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.github.io/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.github.io/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "e8b5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "e95a":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var Iterators = __webpack_require__("3f8c");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "ea61":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = __webpack_require__("9cb8");
var Factory_1 = __webpack_require__("f0b4");
var Node_1 = __webpack_require__("4971");
var DragAndDrop_1 = __webpack_require__("df93");
var Validators_1 = __webpack_require__("4546");
var Global_1 = __webpack_require__("d777");
var Container = (function (_super) {
    __extends(Container, _super);
    function Container() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.children = new Util_1.Collection();
        return _this;
    }
    Container.prototype.getChildren = function (filterFunc) {
        if (!filterFunc) {
            return this.children;
        }
        var results = new Util_1.Collection();
        this.children.each(function (child) {
            if (filterFunc(child)) {
                results.push(child);
            }
        });
        return results;
    };
    Container.prototype.hasChildren = function () {
        return this.getChildren().length > 0;
    };
    Container.prototype.removeChildren = function () {
        var child;
        for (var i = 0; i < this.children.length; i++) {
            child = this.children[i];
            child.parent = null;
            child.index = 0;
            child.remove();
        }
        this.children = new Util_1.Collection();
        return this;
    };
    Container.prototype.destroyChildren = function () {
        var child;
        for (var i = 0; i < this.children.length; i++) {
            child = this.children[i];
            child.parent = null;
            child.index = 0;
            child.destroy();
        }
        this.children = new Util_1.Collection();
        return this;
    };
    Container.prototype.add = function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        if (arguments.length > 1) {
            for (var i = 0; i < arguments.length; i++) {
                this.add(arguments[i]);
            }
            return this;
        }
        var child = children[0];
        if (child.getParent()) {
            child.moveTo(this);
            return this;
        }
        var _children = this.children;
        this._validateAdd(child);
        child._clearCaches();
        child.index = _children.length;
        child.parent = this;
        _children.push(child);
        this._fire('add', {
            child: child
        });
        return this;
    };
    Container.prototype.destroy = function () {
        if (this.hasChildren()) {
            this.destroyChildren();
        }
        _super.prototype.destroy.call(this);
        return this;
    };
    Container.prototype.find = function (selector) {
        return this._generalFind(selector, false);
    };
    Container.prototype.get = function (selector) {
        Util_1.Util.warn('collection.get() method is deprecated. Please use collection.find() instead.');
        return this.find(selector);
    };
    Container.prototype.findOne = function (selector) {
        var result = this._generalFind(selector, true);
        return result.length > 0 ? result[0] : undefined;
    };
    Container.prototype._generalFind = function (selector, findOne) {
        var retArr = [];
        this._descendants(function (node) {
            var valid = node._isMatch(selector);
            if (valid) {
                retArr.push(node);
            }
            if (valid && findOne) {
                return true;
            }
            return false;
        });
        return Util_1.Collection.toCollection(retArr);
    };
    Container.prototype._descendants = function (fn) {
        var shouldStop = false;
        for (var i = 0; i < this.children.length; i++) {
            var child = this.children[i];
            shouldStop = fn(child);
            if (shouldStop) {
                return true;
            }
            if (!child.hasChildren()) {
                continue;
            }
            shouldStop = child._descendants(fn);
            if (shouldStop) {
                return true;
            }
        }
        return false;
    };
    Container.prototype.toObject = function () {
        var obj = Node_1.Node.prototype.toObject.call(this);
        obj.children = [];
        var children = this.getChildren();
        var len = children.length;
        for (var n = 0; n < len; n++) {
            var child = children[n];
            obj.children.push(child.toObject());
        }
        return obj;
    };
    Container.prototype.isAncestorOf = function (node) {
        var parent = node.getParent();
        while (parent) {
            if (parent._id === this._id) {
                return true;
            }
            parent = parent.getParent();
        }
        return false;
    };
    Container.prototype.clone = function (obj) {
        var node = Node_1.Node.prototype.clone.call(this, obj);
        this.getChildren().each(function (no) {
            node.add(no.clone());
        });
        return node;
    };
    Container.prototype.getAllIntersections = function (pos) {
        var arr = [];
        this.find('Shape').each(function (shape) {
            if (shape.isVisible() && shape.intersects(pos)) {
                arr.push(shape);
            }
        });
        return arr;
    };
    Container.prototype._setChildrenIndices = function () {
        this.children.each(function (child, n) {
            child.index = n;
        });
    };
    Container.prototype.drawScene = function (can, top, caching) {
        var layer = this.getLayer(), canvas = can || (layer && layer.getCanvas()), context = canvas && canvas.getContext(), cachedCanvas = this._getCanvasCache(), cachedSceneCanvas = cachedCanvas && cachedCanvas.scene;
        if (this.isVisible() || caching) {
            if (!caching && cachedSceneCanvas) {
                context.save();
                layer._applyTransform(this, context, top);
                this._drawCachedSceneCanvas(context);
                context.restore();
            }
            else {
                this._drawChildren(canvas, 'drawScene', top, false, caching, caching);
            }
        }
        return this;
    };
    Container.prototype.drawHit = function (can, top, caching) {
        var layer = this.getLayer(), canvas = can || (layer && layer.hitCanvas), context = canvas && canvas.getContext(), cachedCanvas = this._getCanvasCache(), cachedHitCanvas = cachedCanvas && cachedCanvas.hit;
        if (this.shouldDrawHit(canvas) || caching) {
            if (!caching && cachedHitCanvas) {
                context.save();
                layer._applyTransform(this, context, top);
                this._drawCachedHitCanvas(context);
                context.restore();
            }
            else {
                this._drawChildren(canvas, 'drawHit', top, false, caching, caching);
            }
        }
        return this;
    };
    Container.prototype._drawChildren = function (canvas, drawMethod, top, caching, skipBuffer, skipComposition) {
        var layer = this.getLayer(), context = canvas && canvas.getContext(), clipWidth = this.clipWidth(), clipHeight = this.clipHeight(), clipFunc = this.clipFunc(), hasClip = (clipWidth && clipHeight) || clipFunc, clipX, clipY;
        if (hasClip && layer) {
            context.save();
            var transform = this.getAbsoluteTransform(top);
            var m = transform.getMatrix();
            context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
            context.beginPath();
            if (clipFunc) {
                clipFunc.call(this, context, this);
            }
            else {
                clipX = this.clipX();
                clipY = this.clipY();
                context.rect(clipX, clipY, clipWidth, clipHeight);
            }
            context.clip();
            m = transform
                .copy()
                .invert()
                .getMatrix();
            context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
        }
        var hasComposition = this.globalCompositeOperation() !== 'source-over' &&
            !skipComposition &&
            drawMethod === 'drawScene';
        if (hasComposition && layer) {
            context.save();
            context._applyGlobalCompositeOperation(this);
        }
        this.children.each(function (child) {
            child[drawMethod](canvas, top, caching, skipBuffer);
        });
        if (hasComposition && layer) {
            context.restore();
        }
        if (hasClip && layer) {
            context.restore();
        }
    };
    Container.prototype.shouldDrawHit = function (canvas) {
        if (canvas && canvas.isCache) {
            return true;
        }
        var layer = this.getLayer();
        var layerUnderDrag = false;
        DragAndDrop_1.DD._dragElements.forEach(function (elem) {
            if (elem.dragStatus === 'dragging' && elem.node.getLayer() === layer) {
                layerUnderDrag = true;
            }
        });
        var dragSkip = !Global_1.Konva.hitOnDragEnabled && layerUnderDrag;
        return layer && layer.hitGraphEnabled() && this.isVisible() && !dragSkip;
    };
    Container.prototype.getClientRect = function (config) {
        config = config || {};
        var skipTransform = config.skipTransform;
        var relativeTo = config.relativeTo;
        var minX, minY, maxX, maxY;
        var selfRect = {
            x: Infinity,
            y: Infinity,
            width: 0,
            height: 0
        };
        var that = this;
        this.children.each(function (child) {
            if (!child.visible()) {
                return;
            }
            var rect = child.getClientRect({
                relativeTo: that,
                skipShadow: config.skipShadow,
                skipStroke: config.skipStroke
            });
            if (rect.width === 0 && rect.height === 0) {
                return;
            }
            if (minX === undefined) {
                minX = rect.x;
                minY = rect.y;
                maxX = rect.x + rect.width;
                maxY = rect.y + rect.height;
            }
            else {
                minX = Math.min(minX, rect.x);
                minY = Math.min(minY, rect.y);
                maxX = Math.max(maxX, rect.x + rect.width);
                maxY = Math.max(maxY, rect.y + rect.height);
            }
        });
        var shapes = this.find('Shape');
        var hasVisible = false;
        for (var i = 0; i < shapes.length; i++) {
            var shape = shapes[i];
            if (shape._isVisible(this)) {
                hasVisible = true;
                break;
            }
        }
        if (hasVisible && minX !== undefined) {
            selfRect = {
                x: minX,
                y: minY,
                width: maxX - minX,
                height: maxY - minY
            };
        }
        else {
            selfRect = {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            };
        }
        if (!skipTransform) {
            return this._transformedRect(selfRect, relativeTo);
        }
        return selfRect;
    };
    return Container;
}(Node_1.Node));
exports.Container = Container;
Factory_1.Factory.addComponentsGetterSetter(Container, 'clip', [
    'x',
    'y',
    'width',
    'height'
]);
Factory_1.Factory.addGetterSetter(Container, 'clipX', undefined, Validators_1.getNumberValidator());
Factory_1.Factory.addGetterSetter(Container, 'clipY', undefined, Validators_1.getNumberValidator());
Factory_1.Factory.addGetterSetter(Container, 'clipWidth', undefined, Validators_1.getNumberValidator());
Factory_1.Factory.addGetterSetter(Container, 'clipHeight', undefined, Validators_1.getNumberValidator());
Factory_1.Factory.addGetterSetter(Container, 'clipFunc');
Util_1.Collection.mapMethods(Container);


/***/ }),

/***/ "eba4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = __webpack_require__("9cb8");
var Factory_1 = __webpack_require__("f0b4");
var Container_1 = __webpack_require__("ea61");
var Global_1 = __webpack_require__("d777");
var Canvas_1 = __webpack_require__("f655");
var DragAndDrop_1 = __webpack_require__("df93");
var Global_2 = __webpack_require__("d777");
var PointerEvents = __webpack_require__("7d2a");
var STAGE = 'Stage', STRING = 'string', PX = 'px', MOUSEOUT = 'mouseout', MOUSELEAVE = 'mouseleave', MOUSEOVER = 'mouseover', MOUSEENTER = 'mouseenter', MOUSEMOVE = 'mousemove', MOUSEDOWN = 'mousedown', MOUSEUP = 'mouseup', POINTERMOVE = 'pointermove', POINTERDOWN = 'pointerdown', POINTERUP = 'pointerup', POINTERCANCEL = 'pointercancel', LOSTPOINTERCAPTURE = 'lostpointercapture', CONTEXTMENU = 'contextmenu', CLICK = 'click', DBL_CLICK = 'dblclick', TOUCHSTART = 'touchstart', TOUCHEND = 'touchend', TAP = 'tap', DBL_TAP = 'dbltap', TOUCHMOVE = 'touchmove', WHEEL = 'wheel', CONTENT_MOUSEOUT = 'contentMouseout', CONTENT_MOUSEOVER = 'contentMouseover', CONTENT_MOUSEMOVE = 'contentMousemove', CONTENT_MOUSEDOWN = 'contentMousedown', CONTENT_MOUSEUP = 'contentMouseup', CONTENT_CONTEXTMENU = 'contentContextmenu', CONTENT_CLICK = 'contentClick', CONTENT_DBL_CLICK = 'contentDblclick', CONTENT_TOUCHSTART = 'contentTouchstart', CONTENT_TOUCHEND = 'contentTouchend', CONTENT_DBL_TAP = 'contentDbltap', CONTENT_TAP = 'contentTap', CONTENT_TOUCHMOVE = 'contentTouchmove', CONTENT_POINTERMOVE = 'contentPointermove', CONTENT_POINTERDOWN = 'contentPointerdown', CONTENT_POINTERUP = 'contentPointerup', CONTENT_WHEEL = 'contentWheel', RELATIVE = 'relative', KONVA_CONTENT = 'konvajs-content', SPACE = ' ', UNDERSCORE = '_', CONTAINER = 'container', MAX_LAYERS_NUMBER = 5, EMPTY_STRING = '', EVENTS = [
    MOUSEENTER,
    MOUSEDOWN,
    MOUSEMOVE,
    MOUSEUP,
    MOUSEOUT,
    TOUCHSTART,
    TOUCHMOVE,
    TOUCHEND,
    MOUSEOVER,
    WHEEL,
    CONTEXTMENU,
    POINTERDOWN,
    POINTERMOVE,
    POINTERUP,
    POINTERCANCEL,
    LOSTPOINTERCAPTURE
], eventsLength = EVENTS.length;
function addEvent(ctx, eventName) {
    ctx.content.addEventListener(eventName, function (evt) {
        ctx[UNDERSCORE + eventName](evt);
    }, false);
}
var NO_POINTERS_MESSAGE = "Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);";
exports.stages = [];
function checkNoClip(attrs) {
    if (attrs === void 0) { attrs = {}; }
    if (attrs.clipFunc || attrs.clipWidth || attrs.clipHeight) {
        Util_1.Util.warn('Stage does not support clipping. Please use clip for Layers or Groups.');
    }
    return attrs;
}
var Stage = (function (_super) {
    __extends(Stage, _super);
    function Stage(config) {
        var _this = _super.call(this, checkNoClip(config)) || this;
        _this._pointerPositions = [];
        _this._changedPointerPositions = [];
        _this._buildDOM();
        _this._bindContentEvents();
        exports.stages.push(_this);
        _this.on('widthChange.konva heightChange.konva', _this._resizeDOM);
        _this.on('visibleChange.konva', _this._checkVisibility);
        _this.on('clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva', function () {
            checkNoClip(_this.attrs);
        });
        _this._checkVisibility();
        return _this;
    }
    Stage.prototype._validateAdd = function (child) {
        var isLayer = child.getType() === 'Layer';
        var isFastLayer = child.getType() === 'FastLayer';
        var valid = isLayer || isFastLayer;
        if (!valid) {
            Util_1.Util.throw('You may only add layers to the stage.');
        }
    };
    Stage.prototype._checkVisibility = function () {
        if (!this.content) {
            return;
        }
        var style = this.visible() ? '' : 'none';
        this.content.style.display = style;
    };
    Stage.prototype.setContainer = function (container) {
        if (typeof container === STRING) {
            if (container.charAt(0) === '.') {
                var className = container.slice(1);
                container = document.getElementsByClassName(className)[0];
            }
            else {
                var id;
                if (container.charAt(0) !== '#') {
                    id = container;
                }
                else {
                    id = container.slice(1);
                }
                container = document.getElementById(id);
            }
            if (!container) {
                throw 'Can not find container in document with id ' + id;
            }
        }
        this._setAttr(CONTAINER, container);
        if (this.content) {
            if (this.content.parentElement) {
                this.content.parentElement.removeChild(this.content);
            }
            container.appendChild(this.content);
        }
        return this;
    };
    Stage.prototype.shouldDrawHit = function () {
        return true;
    };
    Stage.prototype.clear = function () {
        var layers = this.children, len = layers.length, n;
        for (n = 0; n < len; n++) {
            layers[n].clear();
        }
        return this;
    };
    Stage.prototype.clone = function (obj) {
        if (!obj) {
            obj = {};
        }
        obj.container = document.createElement('div');
        return Container_1.Container.prototype.clone.call(this, obj);
    };
    Stage.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        var content = this.content;
        if (content && Util_1.Util._isInDocument(content)) {
            this.container().removeChild(content);
        }
        var index = exports.stages.indexOf(this);
        if (index > -1) {
            exports.stages.splice(index, 1);
        }
        return this;
    };
    Stage.prototype.getPointerPosition = function () {
        var pos = this._pointerPositions[0] || this._changedPointerPositions[0];
        if (!pos) {
            Util_1.Util.warn(NO_POINTERS_MESSAGE);
            return null;
        }
        return {
            x: pos.x,
            y: pos.y
        };
    };
    Stage.prototype._getPointerById = function (id) {
        return this._pointerPositions.find(function (p) { return p.id === id; });
    };
    Stage.prototype.getPointersPositions = function () {
        return this._pointerPositions;
    };
    Stage.prototype.getStage = function () {
        return this;
    };
    Stage.prototype.getContent = function () {
        return this.content;
    };
    Stage.prototype._toKonvaCanvas = function (config) {
        config = config || {};
        var x = config.x || 0, y = config.y || 0, canvas = new Canvas_1.SceneCanvas({
            width: config.width || this.width(),
            height: config.height || this.height(),
            pixelRatio: config.pixelRatio || 1
        }), _context = canvas.getContext()._context, layers = this.children;
        if (x || y) {
            _context.translate(-1 * x, -1 * y);
        }
        layers.each(function (layer) {
            if (!layer.isVisible()) {
                return;
            }
            var layerCanvas = layer._toKonvaCanvas(config);
            _context.drawImage(layerCanvas._canvas, x, y, layerCanvas.getWidth() / layerCanvas.getPixelRatio(), layerCanvas.getHeight() / layerCanvas.getPixelRatio());
        });
        return canvas;
    };
    Stage.prototype.getIntersection = function (pos, selector) {
        if (!pos) {
            return null;
        }
        var layers = this.children, len = layers.length, end = len - 1, n, shape;
        for (n = end; n >= 0; n--) {
            shape = layers[n].getIntersection(pos, selector);
            if (shape) {
                return shape;
            }
        }
        return null;
    };
    Stage.prototype._resizeDOM = function () {
        var width = this.width();
        var height = this.height();
        if (this.content) {
            this.content.style.width = width + PX;
            this.content.style.height = height + PX;
        }
        this.bufferCanvas.setSize(width, height);
        this.bufferHitCanvas.setSize(width, height);
        this.children.each(function (layer) {
            layer.setSize({ width: width, height: height });
            layer.draw();
        });
    };
    Stage.prototype.add = function (layer) {
        if (arguments.length > 1) {
            for (var i = 0; i < arguments.length; i++) {
                this.add(arguments[i]);
            }
            return this;
        }
        _super.prototype.add.call(this, layer);
        var length = this.children.length;
        if (length > MAX_LAYERS_NUMBER) {
            Util_1.Util.warn('The stage has ' +
                length +
                ' layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group.');
        }
        layer.setSize({ width: this.width(), height: this.height() });
        layer.draw();
        if (Global_1.Konva.isBrowser) {
            this.content.appendChild(layer.canvas._canvas);
        }
        return this;
    };
    Stage.prototype.getParent = function () {
        return null;
    };
    Stage.prototype.getLayer = function () {
        return null;
    };
    Stage.prototype.hasPointerCapture = function (pointerId) {
        return PointerEvents.hasPointerCapture(pointerId, this);
    };
    Stage.prototype.setPointerCapture = function (pointerId) {
        PointerEvents.setPointerCapture(pointerId, this);
    };
    Stage.prototype.releaseCapture = function (pointerId) {
        PointerEvents.releaseCapture(pointerId, this);
    };
    Stage.prototype.getLayers = function () {
        return this.getChildren();
    };
    Stage.prototype._bindContentEvents = function () {
        if (!Global_1.Konva.isBrowser) {
            return;
        }
        for (var n = 0; n < eventsLength; n++) {
            addEvent(this, EVENTS[n]);
        }
    };
    Stage.prototype._mouseenter = function (evt) {
        this.setPointersPositions(evt);
        this._fire(MOUSEENTER, { evt: evt, target: this, currentTarget: this });
    };
    Stage.prototype._mouseover = function (evt) {
        this.setPointersPositions(evt);
        this._fire(CONTENT_MOUSEOVER, { evt: evt });
        this._fire(MOUSEOVER, { evt: evt, target: this, currentTarget: this });
    };
    Stage.prototype._mouseout = function (evt) {
        var _a;
        this.setPointersPositions(evt);
        var targetShape = ((_a = this.targetShape) === null || _a === void 0 ? void 0 : _a.getStage()) ? this.targetShape : null;
        var eventsEnabled = !DragAndDrop_1.DD.isDragging || Global_1.Konva.hitOnDragEnabled;
        if (targetShape && eventsEnabled) {
            targetShape._fireAndBubble(MOUSEOUT, { evt: evt });
            targetShape._fireAndBubble(MOUSELEAVE, { evt: evt });
            this._fire(MOUSELEAVE, { evt: evt, target: this, currentTarget: this });
            this.targetShape = null;
        }
        else if (eventsEnabled) {
            this._fire(MOUSELEAVE, {
                evt: evt,
                target: this,
                currentTarget: this
            });
            this._fire(MOUSEOUT, {
                evt: evt,
                target: this,
                currentTarget: this
            });
        }
        this.pointerPos = undefined;
        this._pointerPositions = [];
        this._fire(CONTENT_MOUSEOUT, { evt: evt });
    };
    Stage.prototype._mousemove = function (evt) {
        var _a;
        if (Global_1.Konva.UA.ieMobile) {
            return this._touchmove(evt);
        }
        this.setPointersPositions(evt);
        var pointerId = Util_1.Util._getFirstPointerId(evt);
        var shape;
        var targetShape = ((_a = this.targetShape) === null || _a === void 0 ? void 0 : _a.getStage()) ? this.targetShape : null;
        var eventsEnabled = !DragAndDrop_1.DD.isDragging || Global_1.Konva.hitOnDragEnabled;
        if (eventsEnabled) {
            shape = this.getIntersection(this.getPointerPosition());
            if (shape && shape.isListening()) {
                var differentTarget = targetShape !== shape;
                if (eventsEnabled && differentTarget) {
                    if (targetShape) {
                        targetShape._fireAndBubble(MOUSEOUT, { evt: evt, pointerId: pointerId }, shape);
                        targetShape._fireAndBubble(MOUSELEAVE, { evt: evt, pointerId: pointerId }, shape);
                    }
                    shape._fireAndBubble(MOUSEOVER, { evt: evt, pointerId: pointerId }, targetShape);
                    shape._fireAndBubble(MOUSEENTER, { evt: evt, pointerId: pointerId }, targetShape);
                    shape._fireAndBubble(MOUSEMOVE, { evt: evt, pointerId: pointerId });
                    this.targetShape = shape;
                }
                else {
                    shape._fireAndBubble(MOUSEMOVE, { evt: evt, pointerId: pointerId });
                }
            }
            else {
                if (targetShape && eventsEnabled) {
                    targetShape._fireAndBubble(MOUSEOUT, { evt: evt, pointerId: pointerId });
                    targetShape._fireAndBubble(MOUSELEAVE, { evt: evt, pointerId: pointerId });
                    this._fire(MOUSEOVER, {
                        evt: evt,
                        target: this,
                        currentTarget: this,
                        pointerId: pointerId
                    });
                    this.targetShape = null;
                }
                this._fire(MOUSEMOVE, {
                    evt: evt,
                    target: this,
                    currentTarget: this,
                    pointerId: pointerId
                });
            }
            this._fire(CONTENT_MOUSEMOVE, { evt: evt });
        }
        if (evt.cancelable) {
            evt.preventDefault();
        }
    };
    Stage.prototype._mousedown = function (evt) {
        if (Global_1.Konva.UA.ieMobile) {
            return this._touchstart(evt);
        }
        this.setPointersPositions(evt);
        var pointerId = Util_1.Util._getFirstPointerId(evt);
        var shape = this.getIntersection(this.getPointerPosition());
        DragAndDrop_1.DD.justDragged = false;
        Global_1.Konva.listenClickTap = true;
        if (shape && shape.isListening()) {
            this.clickStartShape = shape;
            shape._fireAndBubble(MOUSEDOWN, { evt: evt, pointerId: pointerId });
        }
        else {
            this._fire(MOUSEDOWN, {
                evt: evt,
                target: this,
                currentTarget: this,
                pointerId: pointerId
            });
        }
        this._fire(CONTENT_MOUSEDOWN, { evt: evt });
    };
    Stage.prototype._mouseup = function (evt) {
        if (Global_1.Konva.UA.ieMobile) {
            return this._touchend(evt);
        }
        this.setPointersPositions(evt);
        var pointerId = Util_1.Util._getFirstPointerId(evt);
        var shape = this.getIntersection(this.getPointerPosition()), clickStartShape = this.clickStartShape, clickEndShape = this.clickEndShape, fireDblClick = false;
        if (Global_1.Konva.inDblClickWindow) {
            fireDblClick = true;
            clearTimeout(this.dblTimeout);
        }
        else if (!DragAndDrop_1.DD.justDragged) {
            Global_1.Konva.inDblClickWindow = true;
            clearTimeout(this.dblTimeout);
        }
        this.dblTimeout = setTimeout(function () {
            Global_1.Konva.inDblClickWindow = false;
        }, Global_1.Konva.dblClickWindow);
        if (shape && shape.isListening()) {
            this.clickEndShape = shape;
            shape._fireAndBubble(MOUSEUP, { evt: evt, pointerId: pointerId });
            if (Global_1.Konva.listenClickTap &&
                clickStartShape &&
                clickStartShape._id === shape._id) {
                shape._fireAndBubble(CLICK, { evt: evt, pointerId: pointerId });
                if (fireDblClick && clickEndShape && clickEndShape === shape) {
                    shape._fireAndBubble(DBL_CLICK, { evt: evt, pointerId: pointerId });
                }
            }
        }
        else {
            this._fire(MOUSEUP, {
                evt: evt,
                target: this,
                currentTarget: this,
                pointerId: pointerId
            });
            if (Global_1.Konva.listenClickTap) {
                this._fire(CLICK, {
                    evt: evt,
                    target: this,
                    currentTarget: this,
                    pointerId: pointerId
                });
            }
            if (fireDblClick) {
                this._fire(DBL_CLICK, {
                    evt: evt,
                    target: this,
                    currentTarget: this,
                    pointerId: pointerId
                });
            }
        }
        this._fire(CONTENT_MOUSEUP, { evt: evt });
        if (Global_1.Konva.listenClickTap) {
            this._fire(CONTENT_CLICK, { evt: evt });
            if (fireDblClick) {
                this._fire(CONTENT_DBL_CLICK, { evt: evt });
            }
        }
        Global_1.Konva.listenClickTap = false;
        if (evt.cancelable) {
            evt.preventDefault();
        }
    };
    Stage.prototype._contextmenu = function (evt) {
        this.setPointersPositions(evt);
        var shape = this.getIntersection(this.getPointerPosition());
        if (shape && shape.isListening()) {
            shape._fireAndBubble(CONTEXTMENU, { evt: evt });
        }
        else {
            this._fire(CONTEXTMENU, {
                evt: evt,
                target: this,
                currentTarget: this
            });
        }
        this._fire(CONTENT_CONTEXTMENU, { evt: evt });
    };
    Stage.prototype._touchstart = function (evt) {
        var _this = this;
        this.setPointersPositions(evt);
        var triggeredOnShape = false;
        this._changedPointerPositions.forEach(function (pos) {
            var shape = _this.getIntersection(pos);
            Global_1.Konva.listenClickTap = true;
            DragAndDrop_1.DD.justDragged = false;
            var hasShape = shape && shape.isListening();
            if (!hasShape) {
                return;
            }
            if (Global_1.Konva.captureTouchEventsEnabled) {
                shape.setPointerCapture(pos.id);
            }
            _this.tapStartShape = shape;
            shape._fireAndBubble(TOUCHSTART, { evt: evt, pointerId: pos.id }, _this);
            triggeredOnShape = true;
            if (shape.isListening() && shape.preventDefault() && evt.cancelable) {
                evt.preventDefault();
            }
        });
        if (!triggeredOnShape) {
            this._fire(TOUCHSTART, {
                evt: evt,
                target: this,
                currentTarget: this,
                pointerId: this._changedPointerPositions[0].id
            });
        }
        this._fire(CONTENT_TOUCHSTART, { evt: evt });
    };
    Stage.prototype._touchmove = function (evt) {
        var _this = this;
        this.setPointersPositions(evt);
        var eventsEnabled = !DragAndDrop_1.DD.isDragging || Global_1.Konva.hitOnDragEnabled;
        if (eventsEnabled) {
            var triggeredOnShape = false;
            var processedShapesIds = {};
            this._changedPointerPositions.forEach(function (pos) {
                var shape = PointerEvents.getCapturedShape(pos.id) || _this.getIntersection(pos);
                var hasShape = shape && shape.isListening();
                if (!hasShape) {
                    return;
                }
                if (processedShapesIds[shape._id]) {
                    return;
                }
                processedShapesIds[shape._id] = true;
                shape._fireAndBubble(TOUCHMOVE, { evt: evt, pointerId: pos.id });
                triggeredOnShape = true;
                if (shape.isListening() && shape.preventDefault() && evt.cancelable) {
                    evt.preventDefault();
                }
            });
            if (!triggeredOnShape) {
                this._fire(TOUCHMOVE, {
                    evt: evt,
                    target: this,
                    currentTarget: this,
                    pointerId: this._changedPointerPositions[0].id
                });
            }
            this._fire(CONTENT_TOUCHMOVE, { evt: evt });
        }
        if (DragAndDrop_1.DD.isDragging && DragAndDrop_1.DD.node.preventDefault() && evt.cancelable) {
            evt.preventDefault();
        }
    };
    Stage.prototype._touchend = function (evt) {
        var _this = this;
        this.setPointersPositions(evt);
        var clickEndShape = this.clickEndShape, fireDblClick = false;
        if (Global_1.Konva.inDblClickWindow) {
            fireDblClick = true;
            clearTimeout(this.dblTimeout);
        }
        else if (!DragAndDrop_1.DD.justDragged) {
            Global_1.Konva.inDblClickWindow = true;
            clearTimeout(this.dblTimeout);
        }
        this.dblTimeout = setTimeout(function () {
            Global_1.Konva.inDblClickWindow = false;
        }, Global_1.Konva.dblClickWindow);
        var triggeredOnShape = false;
        var processedShapesIds = {};
        var tapTriggered = false;
        var dblTapTriggered = false;
        this._changedPointerPositions.forEach(function (pos) {
            var shape = PointerEvents.getCapturedShape(pos.id) ||
                _this.getIntersection(pos);
            if (shape) {
                shape.releaseCapture(pos.id);
            }
            var hasShape = shape && shape.isListening();
            if (!hasShape) {
                return;
            }
            if (processedShapesIds[shape._id]) {
                return;
            }
            processedShapesIds[shape._id] = true;
            _this.clickEndShape = shape;
            shape._fireAndBubble(TOUCHEND, { evt: evt, pointerId: pos.id });
            triggeredOnShape = true;
            if (Global_1.Konva.listenClickTap && shape === _this.tapStartShape) {
                tapTriggered = true;
                shape._fireAndBubble(TAP, { evt: evt, pointerId: pos.id });
                if (fireDblClick && clickEndShape && clickEndShape === shape) {
                    dblTapTriggered = true;
                    shape._fireAndBubble(DBL_TAP, { evt: evt, pointerId: pos.id });
                }
            }
            if (shape.isListening() && shape.preventDefault() && evt.cancelable) {
                evt.preventDefault();
            }
        });
        if (!triggeredOnShape) {
            this._fire(TOUCHEND, {
                evt: evt,
                target: this,
                currentTarget: this,
                pointerId: this._changedPointerPositions[0].id
            });
        }
        if (Global_1.Konva.listenClickTap && !tapTriggered) {
            this._fire(TAP, {
                evt: evt,
                target: this,
                currentTarget: this,
                pointerId: this._changedPointerPositions[0].id
            });
        }
        if (fireDblClick && !dblTapTriggered) {
            this._fire(DBL_TAP, {
                evt: evt,
                target: this,
                currentTarget: this,
                pointerId: this._changedPointerPositions[0].id
            });
        }
        this._fire(CONTENT_TOUCHEND, { evt: evt });
        if (Global_1.Konva.listenClickTap) {
            this._fire(CONTENT_TAP, { evt: evt });
            if (fireDblClick) {
                this._fire(CONTENT_DBL_TAP, { evt: evt });
            }
        }
        Global_1.Konva.listenClickTap = false;
    };
    Stage.prototype._wheel = function (evt) {
        this.setPointersPositions(evt);
        var shape = this.getIntersection(this.getPointerPosition());
        if (shape && shape.isListening()) {
            shape._fireAndBubble(WHEEL, { evt: evt });
        }
        else {
            this._fire(WHEEL, {
                evt: evt,
                target: this,
                currentTarget: this
            });
        }
        this._fire(CONTENT_WHEEL, { evt: evt });
    };
    Stage.prototype._pointerdown = function (evt) {
        if (!Global_1.Konva._pointerEventsEnabled) {
            return;
        }
        this.setPointersPositions(evt);
        var shape = PointerEvents.getCapturedShape(evt.pointerId) ||
            this.getIntersection(this.getPointerPosition());
        if (shape) {
            shape._fireAndBubble(POINTERDOWN, PointerEvents.createEvent(evt));
        }
    };
    Stage.prototype._pointermove = function (evt) {
        if (!Global_1.Konva._pointerEventsEnabled) {
            return;
        }
        this.setPointersPositions(evt);
        var shape = PointerEvents.getCapturedShape(evt.pointerId) ||
            this.getIntersection(this.getPointerPosition());
        if (shape) {
            shape._fireAndBubble(POINTERMOVE, PointerEvents.createEvent(evt));
        }
    };
    Stage.prototype._pointerup = function (evt) {
        if (!Global_1.Konva._pointerEventsEnabled) {
            return;
        }
        this.setPointersPositions(evt);
        var shape = PointerEvents.getCapturedShape(evt.pointerId) ||
            this.getIntersection(this.getPointerPosition());
        if (shape) {
            shape._fireAndBubble(POINTERUP, PointerEvents.createEvent(evt));
        }
        PointerEvents.releaseCapture(evt.pointerId);
    };
    Stage.prototype._pointercancel = function (evt) {
        if (!Global_1.Konva._pointerEventsEnabled) {
            return;
        }
        this.setPointersPositions(evt);
        var shape = PointerEvents.getCapturedShape(evt.pointerId) ||
            this.getIntersection(this.getPointerPosition());
        if (shape) {
            shape._fireAndBubble(POINTERUP, PointerEvents.createEvent(evt));
        }
        PointerEvents.releaseCapture(evt.pointerId);
    };
    Stage.prototype._lostpointercapture = function (evt) {
        PointerEvents.releaseCapture(evt.pointerId);
    };
    Stage.prototype.setPointersPositions = function (evt) {
        var _this = this;
        var contentPosition = this._getContentPosition(), x = null, y = null;
        evt = evt ? evt : window.event;
        if (evt.touches !== undefined) {
            this._pointerPositions = [];
            this._changedPointerPositions = [];
            Util_1.Collection.prototype.each.call(evt.touches, function (touch) {
                _this._pointerPositions.push({
                    id: touch.identifier,
                    x: (touch.clientX - contentPosition.left) / contentPosition.scaleX,
                    y: (touch.clientY - contentPosition.top) / contentPosition.scaleY
                });
            });
            Util_1.Collection.prototype.each.call(evt.changedTouches || evt.touches, function (touch) {
                _this._changedPointerPositions.push({
                    id: touch.identifier,
                    x: (touch.clientX - contentPosition.left) / contentPosition.scaleX,
                    y: (touch.clientY - contentPosition.top) / contentPosition.scaleY
                });
            });
        }
        else {
            x = (evt.clientX - contentPosition.left) / contentPosition.scaleX;
            y = (evt.clientY - contentPosition.top) / contentPosition.scaleY;
            this.pointerPos = {
                x: x,
                y: y
            };
            this._pointerPositions = [{ x: x, y: y, id: Util_1.Util._getFirstPointerId(evt) }];
            this._changedPointerPositions = [
                { x: x, y: y, id: Util_1.Util._getFirstPointerId(evt) }
            ];
        }
    };
    Stage.prototype._setPointerPosition = function (evt) {
        Util_1.Util.warn('Method _setPointerPosition is deprecated. Use "stage.setPointersPositions(event)" instead.');
        this.setPointersPositions(evt);
    };
    Stage.prototype._getContentPosition = function () {
        if (!this.content || !this.content.getBoundingClientRect) {
            return {
                top: 0,
                left: 0,
                scaleX: 1,
                scaleY: 1
            };
        }
        var rect = this.content.getBoundingClientRect();
        return {
            top: rect.top,
            left: rect.left,
            scaleX: rect.width / this.content.clientWidth || 1,
            scaleY: rect.height / this.content.clientHeight || 1
        };
    };
    Stage.prototype._buildDOM = function () {
        this.bufferCanvas = new Canvas_1.SceneCanvas({
            width: this.width(),
            height: this.height()
        });
        this.bufferHitCanvas = new Canvas_1.HitCanvas({
            pixelRatio: 1,
            width: this.width(),
            height: this.height()
        });
        if (!Global_1.Konva.isBrowser) {
            return;
        }
        var container = this.container();
        if (!container) {
            throw 'Stage has no container. A container is required.';
        }
        container.innerHTML = EMPTY_STRING;
        this.content = document.createElement('div');
        this.content.style.position = RELATIVE;
        this.content.style.userSelect = 'none';
        this.content.className = KONVA_CONTENT;
        this.content.setAttribute('role', 'presentation');
        container.appendChild(this.content);
        this._resizeDOM();
    };
    Stage.prototype.cache = function () {
        Util_1.Util.warn('Cache function is not allowed for stage. You may use cache only for layers, groups and shapes.');
        return this;
    };
    Stage.prototype.clearCache = function () {
        return this;
    };
    Stage.prototype.batchDraw = function () {
        this.children.each(function (layer) {
            layer.batchDraw();
        });
        return this;
    };
    return Stage;
}(Container_1.Container));
exports.Stage = Stage;
Stage.prototype.nodeType = STAGE;
Global_2._registerNode(Stage);
Factory_1.Factory.addGetterSetter(Stage, 'container');


/***/ }),

/***/ "ed3d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Global_1 = __webpack_require__("d777");
var now = (function () {
    if (Global_1.glob.performance && Global_1.glob.performance.now) {
        return function () {
            return Global_1.glob.performance.now();
        };
    }
    return function () {
        return new Date().getTime();
    };
})();
var Animation = (function () {
    function Animation(func, layers) {
        this.id = Animation.animIdCounter++;
        this.frame = {
            time: 0,
            timeDiff: 0,
            lastTime: now(),
            frameRate: 0
        };
        this.func = func;
        this.setLayers(layers);
    }
    Animation.prototype.setLayers = function (layers) {
        var lays = [];
        if (!layers) {
            lays = [];
        }
        else if (layers.length > 0) {
            lays = layers;
        }
        else {
            lays = [layers];
        }
        this.layers = lays;
        return this;
    };
    Animation.prototype.getLayers = function () {
        return this.layers;
    };
    Animation.prototype.addLayer = function (layer) {
        var layers = this.layers, len = layers.length, n;
        for (n = 0; n < len; n++) {
            if (layers[n]._id === layer._id) {
                return false;
            }
        }
        this.layers.push(layer);
        return true;
    };
    Animation.prototype.isRunning = function () {
        var a = Animation, animations = a.animations, len = animations.length, n;
        for (n = 0; n < len; n++) {
            if (animations[n].id === this.id) {
                return true;
            }
        }
        return false;
    };
    Animation.prototype.start = function () {
        this.stop();
        this.frame.timeDiff = 0;
        this.frame.lastTime = now();
        Animation._addAnimation(this);
        return this;
    };
    Animation.prototype.stop = function () {
        Animation._removeAnimation(this);
        return this;
    };
    Animation.prototype._updateFrameObject = function (time) {
        this.frame.timeDiff = time - this.frame.lastTime;
        this.frame.lastTime = time;
        this.frame.time += this.frame.timeDiff;
        this.frame.frameRate = 1000 / this.frame.timeDiff;
    };
    Animation._addAnimation = function (anim) {
        this.animations.push(anim);
        this._handleAnimation();
    };
    Animation._removeAnimation = function (anim) {
        var id = anim.id, animations = this.animations, len = animations.length, n;
        for (n = 0; n < len; n++) {
            if (animations[n].id === id) {
                this.animations.splice(n, 1);
                break;
            }
        }
    };
    Animation._runFrames = function () {
        var layerHash = {}, animations = this.animations, anim, layers, func, n, i, layersLen, layer, key, needRedraw;
        for (n = 0; n < animations.length; n++) {
            anim = animations[n];
            layers = anim.layers;
            func = anim.func;
            anim._updateFrameObject(now());
            layersLen = layers.length;
            if (func) {
                needRedraw = func.call(anim, anim.frame) !== false;
            }
            else {
                needRedraw = true;
            }
            if (!needRedraw) {
                continue;
            }
            for (i = 0; i < layersLen; i++) {
                layer = layers[i];
                if (layer._id !== undefined) {
                    layerHash[layer._id] = layer;
                }
            }
        }
        for (key in layerHash) {
            if (!layerHash.hasOwnProperty(key)) {
                continue;
            }
            layerHash[key].draw();
        }
    };
    Animation._animationLoop = function () {
        var Anim = Animation;
        if (Anim.animations.length) {
            Anim._runFrames();
            requestAnimationFrame(Anim._animationLoop);
        }
        else {
            Anim.animRunning = false;
        }
    };
    Animation._handleAnimation = function () {
        if (!this.animRunning) {
            this.animRunning = true;
            requestAnimationFrame(this._animationLoop);
        }
    };
    Animation.animations = [];
    Animation.animIdCounter = 0;
    Animation.animRunning = false;
    return Animation;
}());
exports.Animation = Animation;


/***/ }),

/***/ "f069":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__("1c0b");

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "f0b4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = __webpack_require__("9cb8");
var Validators_1 = __webpack_require__("4546");
var GET = 'get', SET = 'set';
exports.Factory = {
    addGetterSetter: function (constructor, attr, def, validator, after) {
        this.addGetter(constructor, attr, def);
        this.addSetter(constructor, attr, validator, after);
        this.addOverloadedGetterSetter(constructor, attr);
    },
    addGetter: function (constructor, attr, def) {
        var method = GET + Util_1.Util._capitalize(attr);
        constructor.prototype[method] =
            constructor.prototype[method] ||
                function () {
                    var val = this.attrs[attr];
                    return val === undefined ? def : val;
                };
    },
    addSetter: function (constructor, attr, validator, after) {
        var method = SET + Util_1.Util._capitalize(attr);
        if (!constructor.prototype[method]) {
            exports.Factory.overWriteSetter(constructor, attr, validator, after);
        }
    },
    overWriteSetter: function (constructor, attr, validator, after) {
        var method = SET + Util_1.Util._capitalize(attr);
        constructor.prototype[method] = function (val) {
            if (validator && val !== undefined && val !== null) {
                val = validator.call(this, val, attr);
            }
            this._setAttr(attr, val);
            if (after) {
                after.call(this);
            }
            return this;
        };
    },
    addComponentsGetterSetter: function (constructor, attr, components, validator, after) {
        var len = components.length, capitalize = Util_1.Util._capitalize, getter = GET + capitalize(attr), setter = SET + capitalize(attr), n, component;
        constructor.prototype[getter] = function () {
            var ret = {};
            for (n = 0; n < len; n++) {
                component = components[n];
                ret[component] = this.getAttr(attr + capitalize(component));
            }
            return ret;
        };
        var basicValidator = Validators_1.getComponentValidator(components);
        constructor.prototype[setter] = function (val) {
            var oldVal = this.attrs[attr], key;
            if (validator) {
                val = validator.call(this, val);
            }
            if (basicValidator) {
                basicValidator.call(this, val, attr);
            }
            for (key in val) {
                if (!val.hasOwnProperty(key)) {
                    continue;
                }
                this._setAttr(attr + capitalize(key), val[key]);
            }
            this._fireChangeEvent(attr, oldVal, val);
            if (after) {
                after.call(this);
            }
            return this;
        };
        this.addOverloadedGetterSetter(constructor, attr);
    },
    addOverloadedGetterSetter: function (constructor, attr) {
        var capitalizedAttr = Util_1.Util._capitalize(attr), setter = SET + capitalizedAttr, getter = GET + capitalizedAttr;
        constructor.prototype[attr] = function () {
            if (arguments.length) {
                this[setter](arguments[0]);
                return this;
            }
            return this[getter]();
        };
    },
    addDeprecatedGetterSetter: function (constructor, attr, def, validator) {
        Util_1.Util.error('Adding deprecated ' + attr);
        var method = GET + Util_1.Util._capitalize(attr);
        var message = attr +
            ' property is deprecated and will be removed soon. Look at Konva change log for more information.';
        constructor.prototype[method] = function () {
            Util_1.Util.error(message);
            var val = this.attrs[attr];
            return val === undefined ? def : val;
        };
        this.addSetter(constructor, attr, validator, function () {
            Util_1.Util.error(message);
        });
        this.addOverloadedGetterSetter(constructor, attr);
    },
    backCompat: function (constructor, methods) {
        Util_1.Util.each(methods, function (oldMethodName, newMethodName) {
            var method = constructor.prototype[newMethodName];
            var oldGetter = GET + Util_1.Util._capitalize(oldMethodName);
            var oldSetter = SET + Util_1.Util._capitalize(oldMethodName);
            function deprecated() {
                method.apply(this, arguments);
                Util_1.Util.error('"' +
                    oldMethodName +
                    '" method is deprecated and will be removed soon. Use ""' +
                    newMethodName +
                    '" instead.');
            }
            constructor.prototype[oldMethodName] = deprecated;
            constructor.prototype[oldGetter] = deprecated;
            constructor.prototype[oldSetter] = deprecated;
        });
    },
    afterSetFilter: function () {
        this._filterUpToDate = false;
    }
};


/***/ }),

/***/ "f5df":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classofRaw = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "f655":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = __webpack_require__("9cb8");
var Context_1 = __webpack_require__("c527");
var Global_1 = __webpack_require__("d777");
var Factory_1 = __webpack_require__("f0b4");
var Validators_1 = __webpack_require__("4546");
var _pixelRatio;
function getDevicePixelRatio() {
    if (_pixelRatio) {
        return _pixelRatio;
    }
    var canvas = Util_1.Util.createCanvasElement();
    var context = canvas.getContext('2d');
    _pixelRatio = (function () {
        var devicePixelRatio = Global_1.Konva._global.devicePixelRatio || 1, backingStoreRatio = context.webkitBackingStorePixelRatio ||
            context.mozBackingStorePixelRatio ||
            context.msBackingStorePixelRatio ||
            context.oBackingStorePixelRatio ||
            context.backingStorePixelRatio ||
            1;
        return devicePixelRatio / backingStoreRatio;
    })();
    return _pixelRatio;
}
var Canvas = (function () {
    function Canvas(config) {
        this.pixelRatio = 1;
        this.width = 0;
        this.height = 0;
        this.isCache = false;
        var conf = config || {};
        var pixelRatio = conf.pixelRatio || Global_1.Konva.pixelRatio || getDevicePixelRatio();
        this.pixelRatio = pixelRatio;
        this._canvas = Util_1.Util.createCanvasElement();
        this._canvas.style.padding = '0';
        this._canvas.style.margin = '0';
        this._canvas.style.border = '0';
        this._canvas.style.background = 'transparent';
        this._canvas.style.position = 'absolute';
        this._canvas.style.top = '0';
        this._canvas.style.left = '0';
    }
    Canvas.prototype.getContext = function () {
        return this.context;
    };
    Canvas.prototype.getPixelRatio = function () {
        return this.pixelRatio;
    };
    Canvas.prototype.setPixelRatio = function (pixelRatio) {
        var previousRatio = this.pixelRatio;
        this.pixelRatio = pixelRatio;
        this.setSize(this.getWidth() / previousRatio, this.getHeight() / previousRatio);
    };
    Canvas.prototype.setWidth = function (width) {
        this.width = this._canvas.width = width * this.pixelRatio;
        this._canvas.style.width = width + 'px';
        var pixelRatio = this.pixelRatio, _context = this.getContext()._context;
        _context.scale(pixelRatio, pixelRatio);
    };
    Canvas.prototype.setHeight = function (height) {
        this.height = this._canvas.height = height * this.pixelRatio;
        this._canvas.style.height = height + 'px';
        var pixelRatio = this.pixelRatio, _context = this.getContext()._context;
        _context.scale(pixelRatio, pixelRatio);
    };
    Canvas.prototype.getWidth = function () {
        return this.width;
    };
    Canvas.prototype.getHeight = function () {
        return this.height;
    };
    Canvas.prototype.setSize = function (width, height) {
        this.setWidth(width || 0);
        this.setHeight(height || 0);
    };
    Canvas.prototype.toDataURL = function (mimeType, quality) {
        try {
            return this._canvas.toDataURL(mimeType, quality);
        }
        catch (e) {
            try {
                return this._canvas.toDataURL();
            }
            catch (err) {
                Util_1.Util.error('Unable to get data URL. ' +
                    err.message +
                    ' For more info read https://konvajs.org/docs/posts/Tainted_Canvas.html.');
                return '';
            }
        }
    };
    return Canvas;
}());
exports.Canvas = Canvas;
Factory_1.Factory.addGetterSetter(Canvas, 'pixelRatio', undefined, Validators_1.getNumberValidator());
var SceneCanvas = (function (_super) {
    __extends(SceneCanvas, _super);
    function SceneCanvas(config) {
        if (config === void 0) { config = { width: 0, height: 0 }; }
        var _this = _super.call(this, config) || this;
        _this.context = new Context_1.SceneContext(_this);
        _this.setSize(config.width, config.height);
        return _this;
    }
    return SceneCanvas;
}(Canvas));
exports.SceneCanvas = SceneCanvas;
var HitCanvas = (function (_super) {
    __extends(HitCanvas, _super);
    function HitCanvas(config) {
        if (config === void 0) { config = { width: 0, height: 0 }; }
        var _this = _super.call(this, config) || this;
        _this.hitCanvas = true;
        _this.context = new Context_1.HitContext(_this);
        _this.setSize(config.width, config.height);
        return _this;
    }
    return HitCanvas;
}(Canvas));
exports.HitCanvas = HitCanvas;


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "LuckDraw", function() { return /* reexport */ luck_draw; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"32d0945b-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/luck-draw/luck-draw.vue?vue&type=template&id=de7782f2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"container",staticClass:"luck-draw"})}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/luck-draw/luck-draw.vue?vue&type=template&id=de7782f2&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.fill.js
var es_array_fill = __webpack_require__("cb29");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
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
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js



function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}
// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/vue-class-component/dist/vue-class-component.esm.js
/**
  * vue-class-component v7.2.3
  * (c) 2015-present Evan You
  * @license MIT
  */


function vue_class_component_esm_typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    vue_class_component_esm_typeof = function (obj) {
      return typeof obj;
    };
  } else {
    vue_class_component_esm_typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return vue_class_component_esm_typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

// The rational behind the verbose Reflect-feature check below is the fact that there are polyfills
// which add an implementation for Reflect.defineMetadata but not for Reflect.getOwnMetadataKeys.
// Without this check consumers will encounter hard to track down runtime errors.
function reflectionIsSupported() {
  return typeof Reflect !== 'undefined' && Reflect.defineMetadata && Reflect.getOwnMetadataKeys;
}
function copyReflectionMetadata(to, from) {
  forwardMetadata(to, from);
  Object.getOwnPropertyNames(from.prototype).forEach(function (key) {
    forwardMetadata(to.prototype, from.prototype, key);
  });
  Object.getOwnPropertyNames(from).forEach(function (key) {
    forwardMetadata(to, from, key);
  });
}

function forwardMetadata(to, from, propertyKey) {
  var metaKeys = propertyKey ? Reflect.getOwnMetadataKeys(from, propertyKey) : Reflect.getOwnMetadataKeys(from);
  metaKeys.forEach(function (metaKey) {
    var metadata = propertyKey ? Reflect.getOwnMetadata(metaKey, from, propertyKey) : Reflect.getOwnMetadata(metaKey, from);

    if (propertyKey) {
      Reflect.defineMetadata(metaKey, metadata, to, propertyKey);
    } else {
      Reflect.defineMetadata(metaKey, metadata, to);
    }
  });
}

var fakeArray = {
  __proto__: []
};
var hasProto = fakeArray instanceof Array;
function createDecorator(factory) {
  return function (target, key, index) {
    var Ctor = typeof target === 'function' ? target : target.constructor;

    if (!Ctor.__decorators__) {
      Ctor.__decorators__ = [];
    }

    if (typeof index !== 'number') {
      index = undefined;
    }

    Ctor.__decorators__.push(function (options) {
      return factory(options, key, index);
    });
  };
}
function mixins() {
  for (var _len = arguments.length, Ctors = new Array(_len), _key = 0; _key < _len; _key++) {
    Ctors[_key] = arguments[_key];
  }

  return external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
    mixins: Ctors
  });
}
function isPrimitive(value) {
  var type = vue_class_component_esm_typeof(value);

  return value == null || type !== 'object' && type !== 'function';
}
function warn(message) {
  if (typeof console !== 'undefined') {
    console.warn('[vue-class-component] ' + message);
  }
}

function collectDataFromConstructor(vm, Component) {
  // override _init to prevent to init as Vue instance
  var originalInit = Component.prototype._init;

  Component.prototype._init = function () {
    var _this = this;

    // proxy to actual vm
    var keys = Object.getOwnPropertyNames(vm); // 2.2.0 compat (props are no longer exposed as self properties)

    if (vm.$options.props) {
      for (var key in vm.$options.props) {
        if (!vm.hasOwnProperty(key)) {
          keys.push(key);
        }
      }
    }

    keys.forEach(function (key) {
      if (key.charAt(0) !== '_') {
        Object.defineProperty(_this, key, {
          get: function get() {
            return vm[key];
          },
          set: function set(value) {
            vm[key] = value;
          },
          configurable: true
        });
      }
    });
  }; // should be acquired class property values


  var data = new Component(); // restore original _init to avoid memory leak (#209)

  Component.prototype._init = originalInit; // create plain data object

  var plainData = {};
  Object.keys(data).forEach(function (key) {
    if (data[key] !== undefined) {
      plainData[key] = data[key];
    }
  });

  if (false) {}

  return plainData;
}

var $internalHooks = ['data', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeDestroy', 'destroyed', 'beforeUpdate', 'updated', 'activated', 'deactivated', 'render', 'errorCaptured', 'serverPrefetch' // 2.6
];
function componentFactory(Component) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  options.name = options.name || Component._componentTag || Component.name; // prototype props.

  var proto = Component.prototype;
  Object.getOwnPropertyNames(proto).forEach(function (key) {
    if (key === 'constructor') {
      return;
    } // hooks


    if ($internalHooks.indexOf(key) > -1) {
      options[key] = proto[key];
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(proto, key);

    if (descriptor.value !== void 0) {
      // methods
      if (typeof descriptor.value === 'function') {
        (options.methods || (options.methods = {}))[key] = descriptor.value;
      } else {
        // typescript decorated data
        (options.mixins || (options.mixins = [])).push({
          data: function data() {
            return _defineProperty({}, key, descriptor.value);
          }
        });
      }
    } else if (descriptor.get || descriptor.set) {
      // computed properties
      (options.computed || (options.computed = {}))[key] = {
        get: descriptor.get,
        set: descriptor.set
      };
    }
  });
  (options.mixins || (options.mixins = [])).push({
    data: function data() {
      return collectDataFromConstructor(this, Component);
    }
  }); // decorate options

  var decorators = Component.__decorators__;

  if (decorators) {
    decorators.forEach(function (fn) {
      return fn(options);
    });
    delete Component.__decorators__;
  } // find super


  var superProto = Object.getPrototypeOf(Component.prototype);
  var Super = superProto instanceof external_commonjs_vue_commonjs2_vue_root_Vue_default.a ? superProto.constructor : external_commonjs_vue_commonjs2_vue_root_Vue_default.a;
  var Extended = Super.extend(options);
  forwardStaticMembers(Extended, Component, Super);

  if (reflectionIsSupported()) {
    copyReflectionMetadata(Extended, Component);
  }

  return Extended;
}
var reservedPropertyNames = [// Unique id
'cid', // Super Vue constructor
'super', // Component options that will be used by the component
'options', 'superOptions', 'extendOptions', 'sealedOptions', // Private assets
'component', 'directive', 'filter'];
var shouldIgnore = {
  prototype: true,
  arguments: true,
  callee: true,
  caller: true
};

function forwardStaticMembers(Extended, Original, Super) {
  // We have to use getOwnPropertyNames since Babel registers methods as non-enumerable
  Object.getOwnPropertyNames(Original).forEach(function (key) {
    // Skip the properties that should not be overwritten
    if (shouldIgnore[key]) {
      return;
    } // Some browsers does not allow reconfigure built-in properties


    var extendedDescriptor = Object.getOwnPropertyDescriptor(Extended, key);

    if (extendedDescriptor && !extendedDescriptor.configurable) {
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(Original, key); // If the user agent does not support `__proto__` or its family (IE <= 10),
    // the sub class properties may be inherited properties from the super class in TypeScript.
    // We need to exclude such properties to prevent to overwrite
    // the component options object which stored on the extended constructor (See #192).
    // If the value is a referenced value (object or function),
    // we can check equality of them and exclude it if they have the same reference.
    // If it is a primitive value, it will be forwarded for safety.

    if (!hasProto) {
      // Only `cid` is explicitly exluded from property forwarding
      // because we cannot detect whether it is a inherited property or not
      // on the no `__proto__` environment even though the property is reserved.
      if (key === 'cid') {
        return;
      }

      var superDescriptor = Object.getOwnPropertyDescriptor(Super, key);

      if (!isPrimitive(descriptor.value) && superDescriptor && superDescriptor.value === descriptor.value) {
        return;
      }
    } // Warn if the users manually declare reserved properties


    if (false) {}

    Object.defineProperty(Extended, key, descriptor);
  });
}

function vue_class_component_esm_Component(options) {
  if (typeof options === 'function') {
    return componentFactory(options);
  }

  return function (Component) {
    return componentFactory(Component, options);
  };
}

vue_class_component_esm_Component.registerHooks = function registerHooks(keys) {
  $internalHooks.push.apply($internalHooks, _toConsumableArray(keys));
};

/* harmony default export */ var vue_class_component_esm = (vue_class_component_esm_Component);


// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/vue-property-decorator.js
/** vue-property-decorator verson 8.5.0 MIT LICENSE copyright 2020 kaorun343 */
/// <reference types='reflect-metadata'/>




/** Used for keying reactive provide/inject properties */
var reactiveInjectKey = '__reactiveInject__';
/**
 * decorator of an inject
 * @param from key
 * @return PropertyDecorator
 */
function Inject(options) {
    return createDecorator(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            componentOptions.inject[key] = options || key;
        }
    });
}
/**
 * decorator of a reactive inject
 * @param from key
 * @return PropertyDecorator
 */
function InjectReactive(options) {
    return createDecorator(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            var fromKey_1 = !!options ? options.from || options : key;
            var defaultVal_1 = (!!options && options.default) || undefined;
            if (!componentOptions.computed)
                componentOptions.computed = {};
            componentOptions.computed[key] = function () {
                var obj = this[reactiveInjectKey];
                return obj ? obj[fromKey_1] : defaultVal_1;
            };
            componentOptions.inject[reactiveInjectKey] = reactiveInjectKey;
        }
    });
}
function produceProvide(original) {
    var provide = function () {
        var _this = this;
        var rv = typeof original === 'function' ? original.call(this) : original;
        rv = Object.create(rv || null);
        // set reactive services (propagates previous services if necessary)
        rv[reactiveInjectKey] = this[reactiveInjectKey] || {};
        for (var i in provide.managed) {
            rv[provide.managed[i]] = this[i];
        }
        var _loop_1 = function (i) {
            rv[provide.managedReactive[i]] = this_1[i]; // Duplicates the behavior of `@Provide`
            Object.defineProperty(rv[reactiveInjectKey], provide.managedReactive[i], {
                enumerable: true,
                get: function () { return _this[i]; },
            });
        };
        var this_1 = this;
        for (var i in provide.managedReactive) {
            _loop_1(i);
        }
        return rv;
    };
    provide.managed = {};
    provide.managedReactive = {};
    return provide;
}
function needToProduceProvide(original) {
    return (typeof original !== 'function' ||
        (!original.managed && !original.managedReactive));
}
/**
 * decorator of a provide
 * @param key key
 * @return PropertyDecorator | void
 */
function Provide(key) {
    return createDecorator(function (componentOptions, k) {
        var provide = componentOptions.provide;
        if (needToProduceProvide(provide)) {
            provide = componentOptions.provide = produceProvide(provide);
        }
        provide.managed[k] = key || k;
    });
}
/**
 * decorator of a reactive provide
 * @param key key
 * @return PropertyDecorator | void
 */
function ProvideReactive(key) {
    return createDecorator(function (componentOptions, k) {
        var provide = componentOptions.provide;
        // inject parent reactive services (if any)
        if (!Array.isArray(componentOptions.inject)) {
            componentOptions.inject = componentOptions.inject || {};
            componentOptions.inject[reactiveInjectKey] = {
                from: reactiveInjectKey,
                default: {},
            };
        }
        if (needToProduceProvide(provide)) {
            provide = componentOptions.provide = produceProvide(provide);
        }
        provide.managedReactive[k] = key || k;
    });
}
/** @see {@link https://github.com/vuejs/vue-class-component/blob/master/src/reflect.ts} */
var reflectMetadataIsSupported = typeof Reflect !== 'undefined' && typeof Reflect.getMetadata !== 'undefined';
function applyMetadata(options, target, key) {
    if (reflectMetadataIsSupported) {
        if (!Array.isArray(options) &&
            typeof options !== 'function' &&
            typeof options.type === 'undefined') {
            var type = Reflect.getMetadata('design:type', target, key);
            if (type !== Object) {
                options.type = type;
            }
        }
    }
}
/**
 * decorator of model
 * @param  event event name
 * @param options options
 * @return PropertyDecorator
 */
function Model(event, options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
            componentOptions.model = { prop: k, event: event || k };
        })(target, key);
    };
}
/**
 * decorator of a prop
 * @param  options the options for the prop
 * @return PropertyDecorator | void
 */
function Prop(options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
        })(target, key);
    };
}
/**
 * decorator of a synced prop
 * @param propName the name to interface with from outside, must be different from decorated property
 * @param options the options for the synced prop
 * @return PropertyDecorator | void
 */
function PropSync(propName, options) {
    if (options === void 0) { options = {}; }
    // @ts-ignore
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[propName] = options;
            (componentOptions.computed || (componentOptions.computed = {}))[k] = {
                get: function () {
                    return this[propName];
                },
                set: function (value) {
                    // @ts-ignore
                    this.$emit("update:" + propName, value);
                },
            };
        })(target, key);
    };
}
/**
 * decorator of a watch function
 * @param  path the path or the expression to observe
 * @param  WatchOption
 * @return MethodDecorator
 */
function Watch(path, options) {
    if (options === void 0) { options = {}; }
    var _a = options.deep, deep = _a === void 0 ? false : _a, _b = options.immediate, immediate = _b === void 0 ? false : _b;
    return createDecorator(function (componentOptions, handler) {
        if (typeof componentOptions.watch !== 'object') {
            componentOptions.watch = Object.create(null);
        }
        var watch = componentOptions.watch;
        if (typeof watch[path] === 'object' && !Array.isArray(watch[path])) {
            watch[path] = [watch[path]];
        }
        else if (typeof watch[path] === 'undefined') {
            watch[path] = [];
        }
        watch[path].push({ handler: handler, deep: deep, immediate: immediate });
    });
}
// Code copied from Vue/src/shared/util.js
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = function (str) { return str.replace(hyphenateRE, '-$1').toLowerCase(); };
/**
 * decorator of an event-emitter function
 * @param  event The name of the event
 * @return MethodDecorator
 */
function Emit(event) {
    return function (_target, propertyKey, descriptor) {
        var key = hyphenate(propertyKey);
        var original = descriptor.value;
        descriptor.value = function emitter() {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var emit = function (returnValue) {
                var emitName = event || key;
                if (returnValue === undefined) {
                    if (args.length === 0) {
                        _this.$emit(emitName);
                    }
                    else if (args.length === 1) {
                        _this.$emit(emitName, args[0]);
                    }
                    else {
                        _this.$emit.apply(_this, [emitName].concat(args));
                    }
                }
                else {
                    if (args.length === 0) {
                        _this.$emit(emitName, returnValue);
                    }
                    else if (args.length === 1) {
                        _this.$emit(emitName, returnValue, args[0]);
                    }
                    else {
                        _this.$emit.apply(_this, [emitName, returnValue].concat(args));
                    }
                }
            };
            var returnValue = original.apply(this, args);
            if (isPromise(returnValue)) {
                returnValue.then(emit);
            }
            else {
                emit(returnValue);
            }
            return returnValue;
        };
    };
}
/**
 * decorator of a ref prop
 * @param refKey the ref key defined in template
 */
function Ref(refKey) {
    return createDecorator(function (options, key) {
        options.computed = options.computed || {};
        options.computed[key] = {
            cache: false,
            get: function () {
                return this.$refs[refKey || key];
            },
        };
    });
}
function isPromise(obj) {
    return obj instanceof Promise || (obj && typeof obj.then === 'function');
}

// EXTERNAL MODULE: ./node_modules/konva/lib/Layer.js
var Layer = __webpack_require__("0ff5");

// EXTERNAL MODULE: ./node_modules/konva/lib/Shape.js
var Shape = __webpack_require__("fce6");

// EXTERNAL MODULE: ./node_modules/konva/lib/shapes/Circle.js
var Circle = __webpack_require__("1f21");

// EXTERNAL MODULE: ./node_modules/konva/lib/shapes/Text.js
var Text = __webpack_require__("5414");

// EXTERNAL MODULE: ./node_modules/konva/lib/Stage.js
var Stage = __webpack_require__("eba4");

// EXTERNAL MODULE: ./node_modules/konva/lib/Animation.js
var Animation = __webpack_require__("ed3d");

// EXTERNAL MODULE: ./node_modules/konva/lib/Tween.js
var Tween = __webpack_require__("06f8");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/eslint-loader??ref--13-0!./packages/luck-draw/luck-draw.ts?vue&type=script&lang=ts&

























var SPEED = 0.001;

var luck_drawvue_type_script_lang_ts_default_1 = /*#__PURE__*/function (_Vue) {
  _inherits(default_1, _Vue);

  var _super = _createSuper(default_1);

  function default_1() {
    var _this;

    _classCallCheck(this, default_1);

    _this = _super.apply(this, arguments);
    _this.innerRingLayer = null;
    _this.innerPrizes = [];
    _this.rotateAngle = 0; // 记录内圈转盘转动的总角度

    _this.speed = SPEED; // 旋转一度需要多少秒

    _this.checkedIndex = null; // 表示抽中那个奖品

    _this.running = false;
    _this.slowDownTurns = 0; // 记录找到奖品后减速的圈数

    /* ============watch=========== */

    return _this;
  }
  /* ============computed=========== */


  _createClass(default_1, [{
    key: "drawOutRing",

    /* ============methods normal=========== */

    /** 外圈 */
    value: function drawOutRing() {
      var layer = new Layer["Layer"]({
        x: this.radius,
        y: this.radius,
        offsetX: this.radius,
        offsetY: this.radius
      });
      var outerBorderWidth = 3;
      layer.add(new Circle["Circle"]({
        x: this.radius,
        y: this.radius,
        radius: this.radius - outerBorderWidth,
        strokeWidth: outerBorderWidth,
        rotation: 10,
        stroke: '#E44808',
        fill: '#FF4B00'
      })); // 外圈上的圆点

      var dotAngle = 360 / this.dotCount;
      var offsetY = this.radius - this.borderWidth * 0.5 - this.dotRadius * 0.5;

      for (var i = 0; i < this.dotCount; i++) {
        layer.add(new Circle["Circle"]({
          x: this.radius,
          y: this.radius,
          offsetY: offsetY,
          rotation: dotAngle * i,
          radius: this.dotRadius,
          fill: this.dotColors[i % this.dotColors.length]
        }));
      }

      return layer;
    }
    /** 内圈 */

  }, {
    key: "drawInnerRing",
    value: function drawInnerRing() {
      var _this2 = this;

      var layer = new Layer["Layer"]({
        x: this.radius,
        y: this.radius,
        offsetX: this.radius,
        offsetY: this.radius
      }); // 扇形角弧度

      var fanneAngle = 2 * Math.PI / this.count; // 画圆弧时，默认起始弧度从水平向右方向，顺时针开始，这里先将起始弧度减去Math.PI * 0.5，表示从竖直向上方向顺时针，再减去扇形弧度的一半，以保证画的扇形的角是指向下面的

      var startAngle = -Math.PI * 0.5 - fanneAngle / 2;
      var endAngle = startAngle + fanneAngle;

      var _loop = function _loop(i) {
        var _this2$innerPrizes$i = _this2.innerPrizes[i],
            text = _this2$innerPrizes$i.text,
            icon = _this2$innerPrizes$i.icon;
        layer.add(new Shape["Shape"]({
          x: _this2.radius,
          y: _this2.radius,
          fill: _this2.fanneColors[i % _this2.fanneColors.length],
          stroke: '#fff',
          strokeWidth: 0.5,
          sceneFunc: function sceneFunc(context, shape) {
            context.rotate(fanneAngle * i); // 画扇形背景

            context.beginPath();
            context.moveTo(0, 0);
            context.arc(0, 0, _this2.radius - _this2.borderWidth, startAngle, endAngle, false);
            context.closePath();
            context.fillStrokeShape(shape); // 画文字和图标

            context.save();
            context._context.textBaseline = 'top';
            context._context.fillStyle = '#A17500';
            context._context.font = "".concat(_this2.fontSize, "px Microsoft YaHei");

            var _context$measureText = context.measureText(text),
                width = _context$measureText.width;

            var textY = _this2.borderWidth + 10 - _this2.radius;
            context.fillText(text, -width * 0.5, textY);

            if (icon) {
              var iconHeight = _this2.iconWidth / icon.width * icon.height;
              context.drawImage(icon, -_this2.iconWidth * 0.5, textY + _this2.fontSize + 10, _this2.iconWidth, iconHeight);
            }

            context.restore();
          }
        }));
      };

      for (var i = 0; i < this.count; i++) {
        _loop(i);
      }

      return layer;
    }
  }, {
    key: "drawBtn",
    value: function drawBtn() {
      var _this3 = this;

      var layer = new Layer["Layer"]();
      var outerRing = this.btnSize;
      var innerRing = this.btnSize - 10;
      layer.add(new Shape["Shape"]({
        fill: '#B666E3',
        sceneFunc: function sceneFunc(context, shape) {
          context.beginPath();
          var y = _this3.radius - outerRing - innerRing * 0.5;
          var halfWidth = outerRing * 0.6;
          context.moveTo(_this3.radius, y);
          context.lineTo(_this3.radius - halfWidth, _this3.radius);
          context.lineTo(_this3.radius + halfWidth, _this3.radius);
          context.closePath();
          context.fillShape(shape);
        }
      }));
      layer.add(new Circle["Circle"]({
        x: this.radius,
        y: this.radius,
        radius: outerRing,
        stroke: '#BD76DB',
        fillRadialGradientStartPoint: {
          x: 0,
          y: 0
        },
        fillRadialGradientStartRadius: 60,
        fillRadialGradientEndPoint: {
          x: 0,
          y: 0
        },
        fillRadialGradientEndRadius: 0,
        fillRadialGradientColorStops: [0, '#FEBF30', 1, '#EFD354']
      }));
      layer.add(new Circle["Circle"]({
        x: this.radius,
        y: this.radius,
        radius: innerRing,
        stroke: '#601886',
        fill: '#B666E3'
      }));
      var text = new Text["Text"]({
        text: '点击\n抽奖',
        x: this.radius - innerRing,
        y: this.radius - innerRing,
        width: innerRing * 2,
        height: innerRing * 2,
        align: 'center',
        verticalAlign: 'middle',
        fontSize: innerRing / 1.6,
        fontFamily: 'Microsoft YaHei',
        fontStyle: 'bold',
        fill: '#EFE940'
      });
      text.on('mouseenter', function () {
        text.fill('#fff');
        layer.draw();
        _this3.container.style.cursor = 'pointer';
      });
      text.on('mouseout', function () {
        text.fill('#EFE940');
        layer.draw();
        _this3.container.style.cursor = 'default';
      });
      text.on('click touchend', this.onLuckDraw);
      layer.add(text);
      return layer;
    }
  }, {
    key: "handleInnerPrizes",
    value: function () {
      var _handleInnerPrizes = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this4 = this;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Promise.all(this.prizes.map(function (_ref, i) {
                  var text = _ref.text,
                      icon = _ref.icon;
                  return new Promise(function (resolve, reject) {
                    // 表示每个奖品在转盘竖直向上顺时针偏离的角度，用于旋转转盘角度以达到抽中该奖品的目的
                    var angle = _this4.fanneAngle * i;

                    if (!icon) {
                      return resolve({
                        text: text,
                        angle: angle
                      });
                    }

                    var img = document.createElement('img');

                    img.onload = function () {
                      resolve({
                        text: text,
                        icon: img,
                        angle: angle
                      });
                    };

                    img.onerror = function (e) {
                      return reject(e);
                    };

                    img.src = icon;
                  });
                }));

              case 2:
                this.innerPrizes = _context.sent;

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleInnerPrizes() {
        return _handleInnerPrizes.apply(this, arguments);
      }

      return handleInnerPrizes;
    }()
    /** 处理抽奖时转盘转动的动画 */

  }, {
    key: "handleInnerRingAnimation",
    value: function handleInnerRingAnimation() {
      var _this5 = this;

      if (!this.running) return; // 逆时针旋转，一次转动一格（即一个扇形区域）

      this.rotateAngle += this.fanneAngle; // 转动了几圈

      var turnsNum = Math.floor(Math.abs(this.rotateAngle) / 360); // 将角度转换成1圈内的角度，方便判断旋转到了那个奖品（此角度+奖品所在角度=360时，表示该奖品旋转到了正上方，表示选中该奖品）

      var angle = this.rotateAngle - Math.floor(this.rotateAngle / 360) * 360;

      if (angle == 0) {
        // 不然无法选中索引为0的奖品
        angle = 360;
      } // 稳定转n圈以上，并且选中奖品首次旋转到正上方时，开始慢慢减速，若外部一直没有调用check选择抽中奖品，那么将会一直转


      if (turnsNum > 3 && this.checkedIndex != null && angle + this.innerPrizes[this.checkedIndex].angle == 360) {
        // 记录减速旋转的圈数
        this.slowDownTurns++;
      } // 开始减速


      if (this.slowDownTurns > 0) {
        this.speed += 0.0001 * this.slowDownTurns;
      }

      new Tween["Tween"]({
        duration: this.fanneAngle * this.speed,
        node: this.innerRingLayer,
        rotation: this.rotateAngle,
        onFinish: function onFinish() {
          // 当减速n圈后再次到达奖品位置处时，停止旋转，表示抽中该奖品
          if (_this5.slowDownTurns == 5 && angle + _this5.innerPrizes[_this5.checkedIndex].angle == 360) {
            _this5.stop();

            _this5.$emit('finish', _this5.checkedIndex);
          } else {
            _this5.handleInnerRingAnimation();
          }
        }
      }).play();
    }
    /** 外部调用（请求服务器得到奖品索引后，调用此方法表示抽中该奖品） */

  }, {
    key: "check",
    value: function check(index) {
      if (index < 0 || index > this.count - 1) {
        this.stop();
        throw new Error('奖品索引越界');
      }

      this.checkedIndex = index;
    }
  }, {
    key: "stop",
    value: function stop() {
      this.running = false;
    }
    /* ============methods event=========== */

  }, {
    key: "onLuckDraw",
    value: function onLuckDraw() {
      // 当前正在抽奖，返回不做处理
      if (this.running) {
        return;
      }

      this.speed = SPEED;
      this.rotateAngle = 0;
      this.slowDownTurns = 0;
      this.checkedIndex = null;
      this.running = true;
      this.handleInnerRingAnimation();
      this.$emit('start');
    }
    /* ============Lifecycle Hooks=========== */

  }, {
    key: "mounted",
    value: function mounted() {
      var _this6 = this;

      this.$nextTick( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var stage, outerRingLayer;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                stage = new Stage["Stage"]({
                  container: _this6.container,
                  width: _this6.size,
                  height: _this6.size
                }); // 外圈

                outerRingLayer = _this6.drawOutRing(); // 外圈动画

                new Animation["Animation"](function () {
                  outerRingLayer.rotate(0.2);
                }, outerRingLayer).start();
                stage.add(outerRingLayer); // 内圈转盘

                _context2.next = 6;
                return _this6.handleInnerPrizes();

              case 6:
                _this6.innerRingLayer = _this6.drawInnerRing();
                stage.add(_this6.innerRingLayer); // 抽奖按钮

                stage.add(_this6.drawBtn());

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      })));
    }
  }, {
    key: "radius",
    get: function get() {
      return this.size * 0.5;
    }
  }, {
    key: "count",
    get: function get() {
      return this.prizes.length;
    }
    /** 扇形的角弧度 */

  }, {
    key: "fanneAngle",
    get: function get() {
      return 360 / this.count;
    }
  }]);

  return default_1;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop({
  type: Array,
  required: true
})], luck_drawvue_type_script_lang_ts_default_1.prototype, "prizes", void 0);

__decorate([Prop({
  type: Number,
  default: 300
})], luck_drawvue_type_script_lang_ts_default_1.prototype, "size", void 0);

__decorate([Prop({
  type: Number,
  default: 40
})], luck_drawvue_type_script_lang_ts_default_1.prototype, "btnSize", void 0);

__decorate([Prop({
  type: Number,
  default: 25
})], luck_drawvue_type_script_lang_ts_default_1.prototype, "iconWidth", void 0);

__decorate([Prop({
  type: Number,
  default: 22
})], luck_drawvue_type_script_lang_ts_default_1.prototype, "borderWidth", void 0);

__decorate([Prop({
  type: Number,
  default: 16
})], luck_drawvue_type_script_lang_ts_default_1.prototype, "fontSize", void 0);

__decorate([Prop({
  type: Array,
  default: function _default() {
    return ['#FEE200', '#FFF'];
  }
})], luck_drawvue_type_script_lang_ts_default_1.prototype, "dotColors", void 0);

__decorate([Prop({
  type: Number,
  default: 24
})], luck_drawvue_type_script_lang_ts_default_1.prototype, "dotCount", void 0);

__decorate([Prop({
  type: Number,
  default: 5
})], luck_drawvue_type_script_lang_ts_default_1.prototype, "dotRadius", void 0);

__decorate([Prop({
  type: Array,
  default: function _default() {
    return ['#FFE62A', '#FECE00'];
  }
})], luck_drawvue_type_script_lang_ts_default_1.prototype, "fanneColors", void 0);

__decorate([Ref('container')], luck_drawvue_type_script_lang_ts_default_1.prototype, "container", void 0);

luck_drawvue_type_script_lang_ts_default_1 = __decorate([vue_class_component_esm({
  name: 'LuckDraw'
})], luck_drawvue_type_script_lang_ts_default_1);
/* harmony default export */ var luck_drawvue_type_script_lang_ts_ = (luck_drawvue_type_script_lang_ts_default_1);
// CONCATENATED MODULE: ./packages/luck-draw/luck-draw.ts?vue&type=script&lang=ts&
 /* harmony default export */ var luck_draw_luck_drawvue_type_script_lang_ts_ = (luck_drawvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./packages/luck-draw/luck-draw.vue?vue&type=style&index=0&id=de7782f2&lang=scss&scoped=true&
var luck_drawvue_type_style_index_0_id_de7782f2_lang_scss_scoped_true_ = __webpack_require__("2ae9");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/luck-draw/luck-draw.vue






/* normalize component */

var component = normalizeComponent(
  luck_draw_luck_drawvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "de7782f2",
  null
  
)

/* harmony default export */ var luck_draw = (component.exports);
// CONCATENATED MODULE: ./packages/index.ts

/* harmony default export */ var packages_0 = ({
  install: function install(Vue) {
    Vue.component('LuckDraw', luck_draw);
  }
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fce6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = __webpack_require__("9cb8");
var Factory_1 = __webpack_require__("f0b4");
var Node_1 = __webpack_require__("4971");
var Validators_1 = __webpack_require__("4546");
var Global_1 = __webpack_require__("d777");
var PointerEvents = __webpack_require__("7d2a");
var HAS_SHADOW = 'hasShadow';
var SHADOW_RGBA = 'shadowRGBA';
var patternImage = 'patternImage';
var linearGradient = 'linearGradient';
var radialGradient = 'radialGradient';
var dummyContext;
function getDummyContext() {
    if (dummyContext) {
        return dummyContext;
    }
    dummyContext = Util_1.Util.createCanvasElement().getContext('2d');
    return dummyContext;
}
exports.shapes = {};
function _fillFunc(context) {
    context.fill();
}
function _strokeFunc(context) {
    context.stroke();
}
function _fillFuncHit(context) {
    context.fill();
}
function _strokeFuncHit(context) {
    context.stroke();
}
function _clearHasShadowCache() {
    this._clearCache(HAS_SHADOW);
}
function _clearGetShadowRGBACache() {
    this._clearCache(SHADOW_RGBA);
}
function _clearFillPatternCache() {
    this._clearCache(patternImage);
}
function _clearLinearGradientCache() {
    this._clearCache(linearGradient);
}
function _clearRadialGradientCache() {
    this._clearCache(radialGradient);
}
var Shape = (function (_super) {
    __extends(Shape, _super);
    function Shape(config) {
        var _this = _super.call(this, config) || this;
        var key;
        while (true) {
            key = Util_1.Util.getRandomColor();
            if (key && !(key in exports.shapes)) {
                break;
            }
        }
        _this.colorKey = key;
        exports.shapes[key] = _this;
        _this.on('shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva', _clearHasShadowCache);
        _this.on('shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva', _clearGetShadowRGBACache);
        _this.on('fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva', _clearFillPatternCache);
        _this.on('fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva', _clearLinearGradientCache);
        _this.on('fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva', _clearRadialGradientCache);
        return _this;
    }
    Shape.prototype.getContext = function () {
        return this.getLayer().getContext();
    };
    Shape.prototype.getCanvas = function () {
        return this.getLayer().getCanvas();
    };
    Shape.prototype.getSceneFunc = function () {
        return this.attrs.sceneFunc || this['_sceneFunc'];
    };
    Shape.prototype.getHitFunc = function () {
        return this.attrs.hitFunc || this['_hitFunc'];
    };
    Shape.prototype.hasShadow = function () {
        return this._getCache(HAS_SHADOW, this._hasShadow);
    };
    Shape.prototype._hasShadow = function () {
        return (this.shadowEnabled() &&
            this.shadowOpacity() !== 0 &&
            !!(this.shadowColor() ||
                this.shadowBlur() ||
                this.shadowOffsetX() ||
                this.shadowOffsetY()));
    };
    Shape.prototype._getFillPattern = function () {
        return this._getCache(patternImage, this.__getFillPattern);
    };
    Shape.prototype.__getFillPattern = function () {
        if (this.fillPatternImage()) {
            var ctx = getDummyContext();
            var pattern = ctx.createPattern(this.fillPatternImage(), this.fillPatternRepeat() || 'repeat');
            return pattern;
        }
    };
    Shape.prototype._getLinearGradient = function () {
        return this._getCache(linearGradient, this.__getLinearGradient);
    };
    Shape.prototype.__getLinearGradient = function () {
        var colorStops = this.fillLinearGradientColorStops();
        if (colorStops) {
            var ctx = getDummyContext();
            var start = this.fillLinearGradientStartPoint();
            var end = this.fillLinearGradientEndPoint();
            var grd = ctx.createLinearGradient(start.x, start.y, end.x, end.y);
            for (var n = 0; n < colorStops.length; n += 2) {
                grd.addColorStop(colorStops[n], colorStops[n + 1]);
            }
            return grd;
        }
    };
    Shape.prototype._getRadialGradient = function () {
        return this._getCache(radialGradient, this.__getRadialGradient);
    };
    Shape.prototype.__getRadialGradient = function () {
        var colorStops = this.fillRadialGradientColorStops();
        if (colorStops) {
            var ctx = getDummyContext();
            var start = this.fillRadialGradientStartPoint();
            var end = this.fillRadialGradientEndPoint();
            var grd = ctx.createRadialGradient(start.x, start.y, this.fillRadialGradientStartRadius(), end.x, end.y, this.fillRadialGradientEndRadius());
            for (var n = 0; n < colorStops.length; n += 2) {
                grd.addColorStop(colorStops[n], colorStops[n + 1]);
            }
            return grd;
        }
    };
    Shape.prototype.getShadowRGBA = function () {
        return this._getCache(SHADOW_RGBA, this._getShadowRGBA);
    };
    Shape.prototype._getShadowRGBA = function () {
        if (this.hasShadow()) {
            var rgba = Util_1.Util.colorToRGBA(this.shadowColor());
            return ('rgba(' +
                rgba.r +
                ',' +
                rgba.g +
                ',' +
                rgba.b +
                ',' +
                rgba.a * (this.shadowOpacity() || 1) +
                ')');
        }
    };
    Shape.prototype.hasFill = function () {
        return (this.fillEnabled() &&
            !!(this.fill() ||
                this.fillPatternImage() ||
                this.fillLinearGradientColorStops() ||
                this.fillRadialGradientColorStops()));
    };
    Shape.prototype.hasStroke = function () {
        return (this.strokeEnabled() &&
            this.strokeWidth() &&
            !!(this.stroke() || this.strokeLinearGradientColorStops()));
    };
    Shape.prototype.hasHitStroke = function () {
        var width = this.hitStrokeWidth();
        if (width === 'auto') {
            return this.hasStroke();
        }
        return this.strokeEnabled() && !!width;
    };
    Shape.prototype.intersects = function (point) {
        var stage = this.getStage(), bufferHitCanvas = stage.bufferHitCanvas, p;
        bufferHitCanvas.getContext().clear();
        this.drawHit(bufferHitCanvas);
        p = bufferHitCanvas.context.getImageData(Math.round(point.x), Math.round(point.y), 1, 1).data;
        return p[3] > 0;
    };
    Shape.prototype.destroy = function () {
        Node_1.Node.prototype.destroy.call(this);
        delete exports.shapes[this.colorKey];
        delete this.colorKey;
        return this;
    };
    Shape.prototype._useBufferCanvas = function (caching) {
        return !!((!caching || this.hasShadow()) &&
            this.perfectDrawEnabled() &&
            this.getAbsoluteOpacity() !== 1 &&
            this.hasFill() &&
            this.hasStroke() &&
            this.getStage());
    };
    Shape.prototype.setStrokeHitEnabled = function (val) {
        Util_1.Util.warn('strokeHitEnabled property is deprecated. Please use hitStrokeWidth instead.');
        if (val) {
            this.hitStrokeWidth('auto');
        }
        else {
            this.hitStrokeWidth(0);
        }
    };
    Shape.prototype.getStrokeHitEnabled = function () {
        if (this.hitStrokeWidth() === 0) {
            return false;
        }
        else {
            return true;
        }
    };
    Shape.prototype.getSelfRect = function () {
        var size = this.size();
        return {
            x: this._centroid ? -size.width / 2 : 0,
            y: this._centroid ? -size.height / 2 : 0,
            width: size.width,
            height: size.height
        };
    };
    Shape.prototype.getClientRect = function (attrs) {
        attrs = attrs || {};
        var skipTransform = attrs.skipTransform;
        var relativeTo = attrs.relativeTo;
        var fillRect = this.getSelfRect();
        var applyStroke = !attrs.skipStroke && this.hasStroke();
        var strokeWidth = (applyStroke && this.strokeWidth()) || 0;
        var fillAndStrokeWidth = fillRect.width + strokeWidth;
        var fillAndStrokeHeight = fillRect.height + strokeWidth;
        var applyShadow = !attrs.skipShadow && this.hasShadow();
        var shadowOffsetX = applyShadow ? this.shadowOffsetX() : 0;
        var shadowOffsetY = applyShadow ? this.shadowOffsetY() : 0;
        var preWidth = fillAndStrokeWidth + Math.abs(shadowOffsetX);
        var preHeight = fillAndStrokeHeight + Math.abs(shadowOffsetY);
        var blurRadius = (applyShadow && this.shadowBlur()) || 0;
        var width = preWidth + blurRadius * 2;
        var height = preHeight + blurRadius * 2;
        var roundingOffset = 0;
        if (Math.round(strokeWidth / 2) !== strokeWidth / 2) {
            roundingOffset = 1;
        }
        var rect = {
            width: width + roundingOffset,
            height: height + roundingOffset,
            x: -Math.round(strokeWidth / 2 + blurRadius) +
                Math.min(shadowOffsetX, 0) +
                fillRect.x,
            y: -Math.round(strokeWidth / 2 + blurRadius) +
                Math.min(shadowOffsetY, 0) +
                fillRect.y
        };
        if (!skipTransform) {
            return this._transformedRect(rect, relativeTo);
        }
        return rect;
    };
    Shape.prototype.drawScene = function (can, top, caching, skipBuffer) {
        var layer = this.getLayer(), canvas = can || layer.getCanvas(), context = canvas.getContext(), cachedCanvas = this._getCanvasCache(), drawFunc = this.sceneFunc(), hasShadow = this.hasShadow(), hasStroke = this.hasStroke(), stage, bufferCanvas, bufferContext;
        if (!this.isVisible() && !caching) {
            return this;
        }
        if (cachedCanvas) {
            context.save();
            layer._applyTransform(this, context, top);
            this._drawCachedSceneCanvas(context);
            context.restore();
            return this;
        }
        if (!drawFunc) {
            return this;
        }
        context.save();
        if (this._useBufferCanvas(caching) && !skipBuffer) {
            stage = this.getStage();
            bufferCanvas = stage.bufferCanvas;
            bufferContext = bufferCanvas.getContext();
            bufferContext.clear();
            bufferContext.save();
            bufferContext._applyLineJoin(this);
            if (!caching) {
                if (layer) {
                    layer._applyTransform(this, bufferContext, top);
                }
                else {
                    var m = this.getAbsoluteTransform(top).getMatrix();
                    context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
                }
            }
            drawFunc.call(this, bufferContext, this);
            bufferContext.restore();
            var ratio = bufferCanvas.pixelRatio;
            if (hasShadow && !canvas.hitCanvas) {
                context.save();
                context._applyShadow(this);
                context._applyOpacity(this);
                context._applyGlobalCompositeOperation(this);
                context.drawImage(bufferCanvas._canvas, 0, 0, bufferCanvas.width / ratio, bufferCanvas.height / ratio);
                context.restore();
            }
            else {
                context._applyOpacity(this);
                context._applyGlobalCompositeOperation(this);
                context.drawImage(bufferCanvas._canvas, 0, 0, bufferCanvas.width / ratio, bufferCanvas.height / ratio);
            }
        }
        else {
            context._applyLineJoin(this);
            if (!caching) {
                if (layer) {
                    layer._applyTransform(this, context, top);
                }
                else {
                    var o = this.getAbsoluteTransform(top).getMatrix();
                    context.transform(o[0], o[1], o[2], o[3], o[4], o[5]);
                }
            }
            if (hasShadow && hasStroke && !canvas.hitCanvas) {
                context.save();
                if (!caching) {
                    context._applyOpacity(this);
                    context._applyGlobalCompositeOperation(this);
                }
                context._applyShadow(this);
                drawFunc.call(this, context, this);
                context.restore();
                if (this.hasFill() && this.shadowForStrokeEnabled()) {
                    drawFunc.call(this, context, this);
                }
            }
            else if (hasShadow && !canvas.hitCanvas) {
                context.save();
                if (!caching) {
                    context._applyOpacity(this);
                    context._applyGlobalCompositeOperation(this);
                }
                context._applyShadow(this);
                drawFunc.call(this, context, this);
                context.restore();
            }
            else {
                if (!caching) {
                    context._applyOpacity(this);
                    context._applyGlobalCompositeOperation(this);
                }
                drawFunc.call(this, context, this);
            }
        }
        context.restore();
        return this;
    };
    Shape.prototype.drawHit = function (can, top, caching) {
        var layer = this.getLayer(), canvas = can || layer.hitCanvas, context = canvas && canvas.getContext(), drawFunc = this.hitFunc() || this.sceneFunc(), cachedCanvas = this._getCanvasCache(), cachedHitCanvas = cachedCanvas && cachedCanvas.hit;
        if (!this.colorKey) {
            console.log(this);
            Util_1.Util.warn('Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. See the shape in logs above. If you want to reuse shape you should call remove() instead of destroy()');
        }
        if (!this.shouldDrawHit() && !caching) {
            return this;
        }
        if (cachedHitCanvas) {
            context.save();
            layer._applyTransform(this, context, top);
            this._drawCachedHitCanvas(context);
            context.restore();
            return this;
        }
        if (!drawFunc) {
            return this;
        }
        context.save();
        context._applyLineJoin(this);
        if (!caching) {
            if (layer) {
                layer._applyTransform(this, context, top);
            }
            else {
                var o = this.getAbsoluteTransform(top).getMatrix();
                context.transform(o[0], o[1], o[2], o[3], o[4], o[5]);
            }
        }
        drawFunc.call(this, context, this);
        context.restore();
        return this;
    };
    Shape.prototype.drawHitFromCache = function (alphaThreshold) {
        if (alphaThreshold === void 0) { alphaThreshold = 0; }
        var cachedCanvas = this._getCanvasCache(), sceneCanvas = this._getCachedSceneCanvas(), hitCanvas = cachedCanvas.hit, hitContext = hitCanvas.getContext(), hitWidth = hitCanvas.getWidth(), hitHeight = hitCanvas.getHeight(), hitImageData, hitData, len, rgbColorKey, i, alpha;
        hitContext.clear();
        hitContext.drawImage(sceneCanvas._canvas, 0, 0, hitWidth, hitHeight);
        try {
            hitImageData = hitContext.getImageData(0, 0, hitWidth, hitHeight);
            hitData = hitImageData.data;
            len = hitData.length;
            rgbColorKey = Util_1.Util._hexToRgb(this.colorKey);
            for (i = 0; i < len; i += 4) {
                alpha = hitData[i + 3];
                if (alpha > alphaThreshold) {
                    hitData[i] = rgbColorKey.r;
                    hitData[i + 1] = rgbColorKey.g;
                    hitData[i + 2] = rgbColorKey.b;
                    hitData[i + 3] = 255;
                }
                else {
                    hitData[i + 3] = 0;
                }
            }
            hitContext.putImageData(hitImageData, 0, 0);
        }
        catch (e) {
            Util_1.Util.error('Unable to draw hit graph from cached scene canvas. ' + e.message);
        }
        return this;
    };
    Shape.prototype.hasPointerCapture = function (pointerId) {
        return PointerEvents.hasPointerCapture(pointerId, this);
    };
    Shape.prototype.setPointerCapture = function (pointerId) {
        PointerEvents.setPointerCapture(pointerId, this);
    };
    Shape.prototype.releaseCapture = function (pointerId) {
        PointerEvents.releaseCapture(pointerId, this);
    };
    return Shape;
}(Node_1.Node));
exports.Shape = Shape;
Shape.prototype._fillFunc = _fillFunc;
Shape.prototype._strokeFunc = _strokeFunc;
Shape.prototype._fillFuncHit = _fillFuncHit;
Shape.prototype._strokeFuncHit = _strokeFuncHit;
Shape.prototype._centroid = false;
Shape.prototype.nodeType = 'Shape';
Global_1._registerNode(Shape);
Factory_1.Factory.addGetterSetter(Shape, 'stroke', undefined, Validators_1.getStringValidator());
Factory_1.Factory.addGetterSetter(Shape, 'strokeWidth', 2, Validators_1.getNumberValidator());
Factory_1.Factory.addGetterSetter(Shape, 'hitStrokeWidth', 'auto', Validators_1.getNumberOrAutoValidator());
Factory_1.Factory.addGetterSetter(Shape, 'strokeHitEnabled', true, Validators_1.getBooleanValidator());
Factory_1.Factory.addGetterSetter(Shape, 'perfectDrawEnabled', true, Validators_1.getBooleanValidator());
Factory_1.Factory.addGetterSetter(Shape, 'shadowForStrokeEnabled', true, Validators_1.getBooleanValidator());
Factory_1.Factory.addGetterSetter(Shape, 'lineJoin');
Factory_1.Factory.addGetterSetter(Shape, 'lineCap');
Factory_1.Factory.addGetterSetter(Shape, 'sceneFunc');
Factory_1.Factory.addGetterSetter(Shape, 'hitFunc');
Factory_1.Factory.addGetterSetter(Shape, 'dash');
Factory_1.Factory.addGetterSetter(Shape, 'dashOffset', 0, Validators_1.getNumberValidator());
Factory_1.Factory.addGetterSetter(Shape, 'shadowColor', undefined, Validators_1.getStringValidator());
Factory_1.Factory.addGetterSetter(Shape, 'shadowBlur', 0, Validators_1.getNumberValidator());
Factory_1.Factory.addGetterSetter(Shape, 'shadowOpacity', 1, Validators_1.getNumberValidator());
Factory_1.Factory.addComponentsGetterSetter(Shape, 'shadowOffset', ['x', 'y']);
Factory_1.Factory.addGetterSetter(Shape, 'shadowOffsetX', 0, Validators_1.getNumberValidator());
Factory_1.Factory.addGetterSetter(Shape, 'shadowOffsetY', 0, Validators_1.getNumberValidator());
Factory_1.Factory.addGetterSetter(Shape, 'fillPatternImage');
Factory_1.Factory.addGetterSetter(Shape, 'fill', undefined, Validators_1.getStringValidator());
Factory_1.Factory.addGetterSetter(Shape, 'fillPatternX', 0, Validators_1.getNumberValidator());
Factory_1.Factory.addGetterSetter(Shape, 'fillPatternY', 0, Validators_1.getNumberValidator());
Factory_1.Factory.addGetterSetter(Shape, 'fillLinearGradientColorStops');
Factory_1.Factory.addGetterSetter(Shape, 'strokeLinearGradientColorStops');
Factory_1.Factory.addGetterSetter(Shape, 'fillRadialGradientStartRadius', 0);
Factory_1.Factory.addGetterSetter(Shape, 'fillRadialGradientEndRadius', 0);
Factory_1.Factory.addGetterSetter(Shape, 'fillRadialGradientColorStops');
Factory_1.Factory.addGetterSetter(Shape, 'fillPatternRepeat', 'repeat');
Factory_1.Factory.addGetterSetter(Shape, 'fillEnabled', true);
Factory_1.Factory.addGetterSetter(Shape, 'strokeEnabled', true);
Factory_1.Factory.addGetterSetter(Shape, 'shadowEnabled', true);
Factory_1.Factory.addGetterSetter(Shape, 'dashEnabled', true);
Factory_1.Factory.addGetterSetter(Shape, 'strokeScaleEnabled', true);
Factory_1.Factory.addGetterSetter(Shape, 'fillPriority', 'color');
Factory_1.Factory.addComponentsGetterSetter(Shape, 'fillPatternOffset', ['x', 'y']);
Factory_1.Factory.addGetterSetter(Shape, 'fillPatternOffsetX', 0, Validators_1.getNumberValidator());
Factory_1.Factory.addGetterSetter(Shape, 'fillPatternOffsetY', 0, Validators_1.getNumberValidator());
Factory_1.Factory.addComponentsGetterSetter(Shape, 'fillPatternScale', ['x', 'y']);
Factory_1.Factory.addGetterSetter(Shape, 'fillPatternScaleX', 1, Validators_1.getNumberValidator());
Factory_1.Factory.addGetterSetter(Shape, 'fillPatternScaleY', 1, Validators_1.getNumberValidator());
Factory_1.Factory.addComponentsGetterSetter(Shape, 'fillLinearGradientStartPoint', [
    'x',
    'y'
]);
Factory_1.Factory.addComponentsGetterSetter(Shape, 'strokeLinearGradientStartPoint', [
    'x',
    'y'
]);
Factory_1.Factory.addGetterSetter(Shape, 'fillLinearGradientStartPointX', 0);
Factory_1.Factory.addGetterSetter(Shape, 'strokeLinearGradientStartPointX', 0);
Factory_1.Factory.addGetterSetter(Shape, 'fillLinearGradientStartPointY', 0);
Factory_1.Factory.addGetterSetter(Shape, 'strokeLinearGradientStartPointY', 0);
Factory_1.Factory.addComponentsGetterSetter(Shape, 'fillLinearGradientEndPoint', [
    'x',
    'y'
]);
Factory_1.Factory.addComponentsGetterSetter(Shape, 'strokeLinearGradientEndPoint', [
    'x',
    'y'
]);
Factory_1.Factory.addGetterSetter(Shape, 'fillLinearGradientEndPointX', 0);
Factory_1.Factory.addGetterSetter(Shape, 'strokeLinearGradientEndPointX', 0);
Factory_1.Factory.addGetterSetter(Shape, 'fillLinearGradientEndPointY', 0);
Factory_1.Factory.addGetterSetter(Shape, 'strokeLinearGradientEndPointY', 0);
Factory_1.Factory.addComponentsGetterSetter(Shape, 'fillRadialGradientStartPoint', [
    'x',
    'y'
]);
Factory_1.Factory.addGetterSetter(Shape, 'fillRadialGradientStartPointX', 0);
Factory_1.Factory.addGetterSetter(Shape, 'fillRadialGradientStartPointY', 0);
Factory_1.Factory.addComponentsGetterSetter(Shape, 'fillRadialGradientEndPoint', [
    'x',
    'y'
]);
Factory_1.Factory.addGetterSetter(Shape, 'fillRadialGradientEndPointX', 0);
Factory_1.Factory.addGetterSetter(Shape, 'fillRadialGradientEndPointY', 0);
Factory_1.Factory.addGetterSetter(Shape, 'fillPatternRotation', 0);
Factory_1.Factory.backCompat(Shape, {
    dashArray: 'dash',
    getDashArray: 'getDash',
    setDashArray: 'getDash',
    drawFunc: 'sceneFunc',
    getDrawFunc: 'getSceneFunc',
    setDrawFunc: 'setSceneFunc',
    drawHitFunc: 'hitFunc',
    getDrawHitFunc: 'getHitFunc',
    setDrawHitFunc: 'setHitFunc'
});
Util_1.Collection.mapMethods(Shape);


/***/ }),

/***/ "fdbc":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__("4930");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "fea9":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global.Promise;


/***/ })

/******/ });
//# sourceMappingURL=luckdraw.common.js.map
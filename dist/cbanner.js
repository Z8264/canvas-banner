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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _water = __webpack_require__(/*! ./effects/water */ \"./src/effects/water.js\");\n\nvar _water2 = _interopRequireDefault(_water);\n\nvar _light = __webpack_require__(/*! ./effects/light */ \"./src/effects/light.js\");\n\nvar _light2 = _interopRequireDefault(_light);\n\nvar _snow = __webpack_require__(/*! ./effects/snow */ \"./src/effects/snow.js\");\n\nvar _snow2 = _interopRequireDefault(_snow);\n\nvar _effect = __webpack_require__(/*! ./effects/effect */ \"./src/effects/effect.js\");\n\nvar _effect2 = _interopRequireDefault(_effect);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\r\n * requestAnimationFrame 兼容方案\r\n */\nwindow.requestAnimationFrame = function () {\n  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {\n    window.setTimeout(callback, 1000 / 60);\n  };\n}();\n\n/**\r\n * CBanner\r\n * @param {Object} options\r\n */\nfunction CBanner() {\n  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n  // 默认设置\n  var defaults = {\n    el: \"\",\n    image: \"\",\n    width: 1000,\n    height: 200,\n    effect: \"\"\n  };\n\n  // 合并设置\n  for (var item in defaults) {\n    if (!options.hasOwnProperty(item)) {\n      options[item] = defaults[item];\n    }\n  }\n\n  // 创建canvas, 添加到el中\n  var canvas = document.createElement(\"canvas\");\n  canvas.width = options.width;\n  canvas.height = options.height;\n  options.el.appendChild(canvas);\n\n  // 创建ctx\n  var ctx = canvas.getContext(\"2d\");\n\n  // 调用效果\n\n  (0, _effect2.default)(ctx, options);\n  return this;\n\n  var image = new Image();\n  image.src = options.image;\n  image.onload = function () {\n    if (!window.requestAnimationFrame) {\n      ctx.drawImage(image, 0, 0);\n      return;\n    }\n    switch (options.effect) {\n      case \"water\":\n        new _water2.default(canvas, ctx, image);\n        break;\n      case \"light\":\n        new _light2.default(canvas, ctx, image);\n        break;\n      case \"snow\":\n        new _snow2.default(canvas, ctx, image);\n        break;\n      default:\n        ctx.drawImage(image, 0, 0);\n    }\n  };\n\n  return this;\n}\n\nwindow.CBanner = CBanner;\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/effects/effect.js":
/*!*******************************!*\
  !*** ./src/effects/effect.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = effect;\nfunction effect(ctx, options) {\n  var image = new Image();\n  image.src = options.image;\n  image.onload = function () {\n    ctx.drawImage(image, 0, 0);\n    loop();\n  };\n\n  function loop() {\n    requestAnimationFrame(loop);\n    // 清除\n    ctx.clearRect(0, 0, options.width, options.height);\n    update();\n\n    update02();\n  }\n\n  // 属性\n  var x = 0;\n  var f = 1;\n  // 更新\n  function update() {\n    if (x > 1200) x = 0;\n    x += f;\n    // 绘制背景\n    ctx.drawImage(image, x, 0);\n  }\n\n  var x2 = -1200;\n  function update02() {\n    if (x2 > 0) x2 = -1200;\n    x2 += f;\n    // 绘制背景\n    ctx.drawImage(image, x2, 0);\n  }\n}\n\n//# sourceURL=webpack:///./src/effects/effect.js?");

/***/ }),

/***/ "./src/effects/light.js":
/*!******************************!*\
  !*** ./src/effects/light.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = Light;\nfunction Light(canvas, ctx, image) {\n\n  var height = canvas.height,\n      width = canvas.width,\n      twopi = Math.PI * 2,\n      parts = [],\n      sizeBase = void 0,\n      opt = void 0,\n      hue = void 0,\n      count = void 0;\n\n  function rand(min, max) {\n    return Math.random() * (max - min) + min;\n  }\n\n  function hsla(h, s, l, a) {\n    return 'hsla(' + h + ',' + s + '%,' + l + '%,' + a + ')';\n  }\n\n  function create() {\n    sizeBase = width + height;\n    count = Math.floor(sizeBase * 0.3), hue = rand(0, 360), opt = {\n      radiusMin: 1,\n      radiusMax: sizeBase * 0.04,\n      blurMin: 10,\n      blurMax: sizeBase * 0.04,\n      hueMin: hue,\n      hueMax: hue + 100,\n      saturationMin: 10,\n      saturationMax: 70,\n      lightnessMin: 20,\n      lightnessMax: 50,\n      alphaMin: 0.1,\n      alphaMax: 0.5\n    };\n    parts.length = 0;\n    for (var i = 0; i < Math.floor((width + height) * 0.03); i++) {\n      parts.push({\n        radius: rand(1, sizeBase * 0.03),\n        x: rand(0, width),\n        y: rand(0, height),\n        angle: rand(0, twopi),\n        vel: rand(0.1, 0.5),\n        tick: rand(0, 10000)\n      });\n    }\n  }\n\n  function loop() {\n    requestAnimationFrame(loop);\n\n    ctx.clearRect(0, 0, width, height);\n    ctx.globalCompositeOperation = 'source-over';\n    ctx.shadowBlur = 0;\n    ctx.drawImage(image, 0, 0);\n    ctx.globalCompositeOperation = 'lighter';\n\n    var i = parts.length;\n    ctx.shadowBlur = 15;\n    ctx.shadowColor = '#fff';\n    while (i--) {\n      var part = parts[i];\n\n      part.x += Math.cos(part.angle) * part.vel;\n      part.y += Math.sin(part.angle) * part.vel;\n      part.angle += rand(-0.05, 0.05);\n\n      ctx.beginPath();\n      ctx.arc(part.x, part.y, part.radius, 0, twopi);\n      ctx.fillStyle = hsla(0, 0, 100, 0.075 + Math.cos(part.tick * 0.02) * 0.05);\n      ctx.fill();\n\n      if (part.x - part.radius > width) {\n        part.x = -part.radius;\n      }\n      if (part.x + part.radius < 0) {\n        part.x = width + part.radius;\n      }\n      if (part.y - part.radius > height) {\n        part.y = -part.radius;\n      }\n      if (part.y + part.radius < 0) {\n        part.y = height + part.radius;\n      }\n\n      part.tick++;\n    }\n  }\n\n  create();\n  loop();\n\n  return this;\n}\n\n//# sourceURL=webpack:///./src/effects/light.js?");

/***/ }),

/***/ "./src/effects/snow.js":
/*!*****************************!*\
  !*** ./src/effects/snow.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = Water;\nfunction Water(canvas, ctx, image) {\n\n  var width, height, circles, target;\n\n  // Main\n  initHeader();\n\n  function initHeader() {\n    width = canvas.width;\n    height = canvas.height;\n\n    // create particles\n    circles = [];\n    for (var x = 0; x < width * 0.5; x++) {\n      var c = new Circle();\n      circles.push(c);\n    }\n    animate();\n  }\n\n  function animate() {\n    requestAnimationFrame(animate);\n\n    // 清除\n    ctx.clearRect(0, 0, width, height);\n    // 绘制背景\n    ctx.drawImage(image, 0, 0);\n    // 绘制圆圈\n    for (var i in circles) {\n      circles[i].draw();\n    }\n  }\n\n  // Canvas manipulation\n  function Circle() {\n    var _this = this;\n\n    // constructor\n    (function () {\n      _this.pos = {};\n      init();\n    })();\n\n    function init() {\n      _this.pos.x = Math.random() * width;\n      _this.pos.y = height + Math.random() * 100;\n      _this.alpha = 0.1 + Math.random() * 0.3;\n      _this.scale = 0.1 + Math.random() * 0.3;\n      _this.velocity = Math.random();\n    }\n\n    this.draw = function () {\n\n      if (_this.alpha <= 0) {\n        init();\n      }\n      _this.pos.y -= _this.velocity;\n      _this.alpha -= 0.0005;\n      ctx.beginPath();\n      ctx.arc(_this.pos.x, _this.pos.y, _this.scale * 10, 0, 2 * Math.PI, false);\n      ctx.fillStyle = 'rgba(255,255,255,' + _this.alpha + ')';\n      ctx.fill();\n    };\n  }\n\n  return this;\n}\n\n//# sourceURL=webpack:///./src/effects/snow.js?");

/***/ }),

/***/ "./src/effects/water.js":
/*!******************************!*\
  !*** ./src/effects/water.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = Water;\nfunction Water(canvas, ctx, image) {\n  var settings = {\n    dropRadius: 3, // 波源半径大小\n    width: canvas.width,\n    height: canvas.height,\n    delay: 0.3,\n    attenuation: 5,\n    maxAmplitude: 1024,\n    sourceAmplitude: 512, // 震源振幅\n    auto: !0\n  };\n\n  var width = settings.width,\n      height = settings.height,\n      dropRadius = settings.dropRadius,\n      delay = settings.delay * 1000,\n      attenuation = settings.attenuation,\n      // 衰减级别\n  maxAmplitude = settings.maxAmplitude,\n      // 最大振幅\n  sourceAmplitude = settings.sourceAmplitude,\n      half_width = width >> 1,\n      half_height = height >> 1,\n      amplitude_size = width * (height + 2) * 2,\n      old_index = width,\n      new_index = width * (height + 3),\n      map_index = void 0,\n      // 振幅数组索引\n  texture = void 0,\n      // 原始图像像素信息\n  ripple = void 0,\n      // 参数波纹的图像像素信息\n  autoRepeat = void 0,\n      // 自动产生波源的重复事件\n  ripple_map = [],\n      last_map = [];\n\n  // 保存图像的所有像素信息\n  function saveImageData() {\n    // 在canvas中绘制图形\n    ctx.drawImage(image, 0, 0);\n    // 图像的ImageData对象\n    texture = ctx.getImageData(0, 0, width, height);\n    ripple = ctx.getImageData(0, 0, width, height);\n  }\n\n  function init() {\n    saveImageData();\n    // 波幅数组初始化为0\n    for (var i = 0; i < amplitude_size; i++) {\n      ripple_map[i] = last_map[i] = 0;\n    }\n\n    animate();\n    // 如果设置了自动产生波源，则随机参数波源\n    // if (settings.auto) {\n    //   autoRepeat = setInterval(function () {\n    //     disturb(Math.random() * width, Math.random() * height);\n    //   }, delay);\n    //   disturb(Math.random() * width, Math.random() * height);\n    // }\n  }\n\n  var count = 0;\n\n  // 动画主循环\n  function animate() {\n    requestAnimationFrame(animate);\n\n    if (count == 0) {\n      disturb(Math.random() * width, Math.random() * height);\n      count = 20;\n    }\n    count--;\n\n    renderRipple();\n  }\n\n  // 在指定地点产生波源\n  function disturb(circleX, circleY) {\n    // 将值向下取整\n    circleX <<= 0;\n    circleY <<= 0;\n    var maxDistanceX = circleX + dropRadius,\n        maxDistanceY = circleY + dropRadius;\n    for (var y = circleY - dropRadius; y < maxDistanceY; y++) {\n      for (var x = circleX - dropRadius; x < maxDistanceX; x++) {\n        ripple_map[old_index + y * width + x] += sourceAmplitude;\n      }\n    }\n  }\n\n  // 渲染下一帧\n  function renderRipple() {\n    var i = old_index,\n        deviation_x,\n        // x水平方向偏移\n    deviation_y,\n        // y竖直方向偏移\n    pixel_deviation,\n        // 偏移后的ImageData对象像素索引\n    pixel_source; // 原始ImageData对象像素索引\n\n    // 交互索引 old_index, new_index\n    old_index = new_index;\n    new_index = i;\n\n    // 设置像素索引和振幅索引\n    i = 0;\n    map_index = old_index;\n\n    // 使用局部变量优化全局作用域查询\n    var _map_index = map_index,\n        _width = width,\n        _height = height,\n        _half_width = half_width,\n        _half_height = half_height,\n        _ripple_map = ripple_map,\n        _last_map = last_map,\n        _ripple_data = ripple.data,\n        // 引用修改\n    _texture_data = texture.data,\n        // 引用修改\n    _new_index = new_index,\n        _attenuation = attenuation,\n        _maxAmplitude = maxAmplitude;\n\n    // 渲染所有像素点\n    for (var y = 0; y < height; y++) {\n      for (var x = 0; x < _width; x++) {\n        var x_boundary = 0,\n            judge = _map_index % _width;\n        if (judge == 0) {\n          x_boundary = 1; // 左边边界\n        } else if (judge == _width - 1) {\n          x_boundary = 2; // 右边边界\n        }\n        var top = _ripple_map[_map_index - _width],\n            // 上边的相邻点\n        bottom = _ripple_map[_map_index + _width],\n            // 下边的相邻点\n        left = x_boundary != 1 ? _ripple_map[_map_index - 1] : 0,\n            // 左边的相邻点\n        right = x_boundary != 2 ? _ripple_map[_map_index + 1] : 0; // 右边的相邻点\n        // 计算当前像素点下一时刻的振幅\n        var amplitude = top + bottom + left + right >> 1;\n        amplitude -= _ripple_map[_new_index + i];\n        amplitude -= amplitude >> _attenuation; // 计算衰减\n\n        // 更新振幅数组\n        _ripple_map[_new_index + i] = amplitude;\n\n        amplitude = _maxAmplitude - amplitude;\n        var old_amplitude = _last_map[i];\n        _last_map[i] = amplitude;\n\n        if (old_amplitude != amplitude) {\n          deviation_x = ((x - _half_width) * amplitude / _maxAmplitude << 0) + _half_width;\n          deviation_y = ((y - _half_height) * amplitude / _maxAmplitude << 0) + _half_height;\n\n          // 检查边界\n          if (deviation_x > _width) {\n            deviation_x = _width - 1;\n          }\n          if (deviation_x < 0) {\n            deviation_x = 0;\n          }\n          if (deviation_y > _height) {\n            deviation_y = _height - 1;\n          }\n          if (deviation_y < 0) {\n            deviation_y = 0;\n          }\n\n          pixel_source = i * 4;\n          pixel_deviation = (deviation_x + deviation_y * width) * 4;\n\n          // 移动像素的RGBA信息\n          _ripple_data[pixel_source] = _texture_data[pixel_deviation];\n          _ripple_data[pixel_source + 1] = _texture_data[pixel_deviation + 1];\n          _ripple_data[pixel_source + 2] = _texture_data[pixel_deviation + 2];\n          //                        ripple.data[pixel_source + 3] = texture.data[pixel_deviation + 3];\n        }\n        ++i;\n        ++_map_index;\n      }\n    }\n\n    map_index = _map_index;\n    ctx.putImageData(ripple, 0, 0);\n  }\n\n  function calculAmplitude(index, old_amplitude) {\n    var x_boundary = 0,\n        judge = map_index % width;\n    if (judge == 0) {\n      x_boundary = 1; // 左边边界\n    } else if (judge == width - 1) {\n      x_boundary = 2; // 右边边界\n    }\n    var top = ripple_map[index - width],\n        // 上边的相邻点\n    bottom = ripple_map[index + width],\n        // 下边的相邻点\n    left = x_boundary != 1 ? ripple_map[index - 1] : 0,\n        // 左边的相邻点\n    right = x_boundary != 2 ? ripple_map[index + 1] : 0; // 右边的相邻点\n    // 计算当前像素点下一时刻的振幅\n    var amplitude = top + bottom + left + right;\n    amplitude >>= 1;\n    amplitude -= old_amplitude;\n    amplitude -= amplitude >> attenuation; // 计算衰减\n    return amplitude;\n  }\n\n  this.disturb = function (a, b) {\n    disturb(a, b);\n  };\n  init();\n  return this;\n}\n\n//# sourceURL=webpack:///./src/effects/water.js?");

/***/ })

/******/ });
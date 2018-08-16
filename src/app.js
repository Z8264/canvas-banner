import Water from "./effects/water";
import Light from "./effects/light";
import Snow from "./effects/snow";

import Effect from "./effects/effect";
/**
 * requestAnimationFrame 兼容方案
 */
window.requestAnimationFrame = (function () {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();

/**
 * CBanner
 * @param {Object} options
 */
function CBanner(options = {}) {
  // 默认设置
  let defaults = {
    el: "",
    image: "",
    width: 1000,
    height: 200,
    effect: ""
  };

  // 合并设置
  for (var item in defaults) {
    if (!options.hasOwnProperty(item)) {
      options[item] = defaults[item];
    }
  }

  // 创建canvas, 添加到el中
  let canvas = document.createElement("canvas");
  canvas.width = options.width;
  canvas.height = options.height;
  options.el.appendChild(canvas);

  // 创建ctx
  let ctx = canvas.getContext("2d");

  // 调用效果

  Effect(ctx, options);
  return this;

  let image = new Image();
  image.src = options.image;
  image.onload = function() {
    if (!window.requestAnimationFrame) {
      ctx.drawImage(image, 0, 0);
      return;
    }
    switch (options.effect) {
      case "water":
        new Water(canvas, ctx, image);
        break;
      case "light":
        new Light(canvas, ctx, image);
        break;
      case "snow":
        new Snow(canvas, ctx, image);
        break;
      default:
        ctx.drawImage(image, 0, 0);
    }
  };

  return this;
}

window.CBanner = CBanner;

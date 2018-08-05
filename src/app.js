
import Water from './effects/water';
import Light from './effects/light';
import Snow from './effects/snow';

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
    target: '',
    image: '',
    width: 1200,
    height: 200,
    effect: ''
  }

  // 合并设置
  for (var item in defaults) {
    if (!options.hasOwnProperty(item)) {
      options[item] = defaults[item]
    }
  }

  // 创建canvas
  let canvas = document.createElement('canvas');
  canvas.width = options.width;
  canvas.height = options.height;
  options.target.appendChild(canvas);

  // 创建ctx,image
  let ctx = canvas.getContext('2d');
  let image = new Image();
  image.src = options.image;
  image.onload = function () {
    switch (options.effect) {
      case 'water':
        new Water(canvas, ctx, image);
        break;
      case 'light':
        new Light(canvas, ctx, image);
        break;
      case 'snow':
        new Snow(canvas, ctx, image);
        break;
      default:
        ctx.drawImage(image, 0, 0);
    }
  }

  return this;
}

window.CBanner = CBanner

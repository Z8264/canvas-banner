export default function Water(canvas, ctx, image) {

  var width, height, circles, target;

  // Main
  initHeader();

  function initHeader() {
    width = canvas.width;
    height = canvas.height;

    // create particles
    circles = [];
    for (var x = 0; x < width * 0.5; x++) {
      var c = new Circle();
      circles.push(c);
    }
    animate();
  }

  function animate() {
    requestAnimationFrame(animate);
    
    // 清除
    ctx.clearRect(0, 0, width, height);
    // 绘制背景
    ctx.drawImage(image, 0, 0);
    // 绘制圆圈
    for (var i in circles) {
      circles[i].draw();
    }
  }

  // Canvas manipulation
  function Circle() {
    var _this = this;

    // constructor
    (function () {
      _this.pos = {};
      init();
    })();

    function init() {
      _this.pos.x = Math.random() * width;
      _this.pos.y = height + Math.random() * 100;
      _this.alpha = 0.1 + Math.random() * 0.3;
      _this.scale = 0.1 + Math.random() * 0.3;
      _this.velocity = Math.random();
    }

    this.draw = function () {

      if (_this.alpha <= 0) {
        init();
      }
      _this.pos.y -= _this.velocity;
      _this.alpha -= 0.0005;
      ctx.beginPath();
      ctx.arc(_this.pos.x, _this.pos.y, _this.scale * 10, 0, 2 * Math.PI, false);
      ctx.fillStyle = 'rgba(255,255,255,' + _this.alpha + ')';
      ctx.fill();
    };
  }

  return this;

}
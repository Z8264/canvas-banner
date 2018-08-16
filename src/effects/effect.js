export default function effect(ctx, options) {
  let image = new Image();
  image.src = options.image;
  image.onload = function() {
    ctx.drawImage(image, 0, 0);
    loop();
  };

  function loop() {
    requestAnimationFrame(loop);
    // 清除
    ctx.clearRect(0, 0, options.width, options.height);
    update();

    update02();
  }

  // 属性
  let x = 0;
  let f = 1;
  // 更新
  function update() {
    if (x > 1200) x = 0;
    x += f;
    // 绘制背景
    ctx.drawImage(image, x,0);
  }

  let x2 = -1200;
  function update02() {
    if (x2 > 0) x2= -1200;
    x2 += f;
    // 绘制背景
    ctx.drawImage(image, x2, 0);
  }
}

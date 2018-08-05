export default function Light(canvas, ctx, image) {

  let height = canvas.height,
    width = canvas.width,
    twopi = Math.PI * 2,
    parts = [],
    sizeBase,
    opt,
    hue,
    count;

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  function hsla(h, s, l, a) {
    return 'hsla(' + h + ',' + s + '%,' + l + '%,' + a + ')';
  }

  function create() {
    sizeBase = width + height;
    count = Math.floor(sizeBase * 0.3),
      hue = rand(0, 360),
      opt = {
        radiusMin: 1,
        radiusMax: sizeBase * 0.04,
        blurMin: 10,
        blurMax: sizeBase * 0.04,
        hueMin: hue,
        hueMax: hue + 100,
        saturationMin: 10,
        saturationMax: 70,
        lightnessMin: 20,
        lightnessMax: 50,
        alphaMin: 0.1,
        alphaMax: 0.5
      }
    parts.length = 0;
    for (var i = 0; i < Math.floor((width + height) * 0.03); i++) {
      parts.push({
        radius: rand(1, sizeBase * 0.03),
        x: rand(0, width),
        y: rand(0, height),
        angle: rand(0, twopi),
        vel: rand(0.1, 0.5),
        tick: rand(0, 10000)
      });
    }
  }


  function loop() {
    requestAnimationFrame(loop);

    ctx.clearRect(0, 0, width, height);
    ctx.globalCompositeOperation = 'source-over';
    ctx.shadowBlur = 0;
    ctx.drawImage(image, 0, 0);
    ctx.globalCompositeOperation = 'lighter';

    var i = parts.length;
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#fff';
    while (i--) {
      var part = parts[i];

      part.x += Math.cos(part.angle) * part.vel;
      part.y += Math.sin(part.angle) * part.vel;
      part.angle += rand(-0.05, 0.05);

      ctx.beginPath();
      ctx.arc(part.x, part.y, part.radius, 0, twopi);
      ctx.fillStyle = hsla(0, 0, 100, 0.075 + Math.cos(part.tick * 0.02) * 0.05);
      ctx.fill();

      if (part.x - part.radius > width) { part.x = -part.radius }
      if (part.x + part.radius < 0) { part.x = width + part.radius }
      if (part.y - part.radius > height) { part.y = -part.radius }
      if (part.y + part.radius < 0) { part.y = height + part.radius }

      part.tick++;
    }
  }

  create();
  loop();

  return this;
}
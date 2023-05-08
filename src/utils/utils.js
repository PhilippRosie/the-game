Array.prototype.createObjectsFrom2D = function () {
  const objects = [];
  this.forEach((row, y) => {
    row.forEach((symbol, x) => {
      if (symbol === 1480 || symbol === 1448) {
        // push a new collision into collisionblocks array
        objects.push(
          new collisionBlock({
            position: {
              x: x * 64,
              y: y * 64,
            },
          })
        );
      }
    });
  });

  return objects;
};

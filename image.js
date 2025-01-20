function blobToImage(blob) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(blob);

    img.onload = () => {
      URL.revokeObjectURL(url); // Clean up the object URL after use
      resolve(img);
    };

    img.onerror = (error) => {
      URL.revokeObjectURL(url); // Clean up even on error
      reject(error);
    };

    img.src = url;
  });
}

function init() {
  const canvas = document.getElementById("mycanvas");
  const context = canvas.getContext("2d");

  var image = new Image();
  image.src = “”;

  const draw = function (fromX, fromY, toX, toY) {
    context.drawImage(image, fromX, fromY, 210, 300, toX, toY, 210, 300);
  };

  const l1 = 0;
  const l2 = 300;
  const l3 = 600;
  const l4 = 900;
  const c1 = 0;
  const c2 = 210;
  const c3 = 420;
  const c4 = 630;

  image.onload = function () {
    draw(c1, l1, c1, l1);
    draw(c2, l1, c1, l2);
    draw(c3, l1, c1, l3);
    draw(c4, l1, c1, l4);

    draw(c1, l2, c2, l1);
    draw(c2, l2, c2, l2);
    draw(c3, l2, c2, l3);
    draw(c4, l2, c2, l4);

    draw(c1, l3, c3, l1);
    draw(c2, l3, c3, l2);
    draw(c3, l3, c3, l3);
    draw(c4, l3, c3, l4);

    draw(c1, l4, c4, l1);
    draw(c2, l4, c4, l2);
    draw(c3, l4, c4, l3);
    draw(c4, l4, c4, l4);
  };
}

window.onload = init();

/*
 * This work is under GNU General Public License.
 * Created by Steven Joe 'Mimi' Zhang in 2017.
 * https://galaxymimi.com
 */

var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
document.getElementsByTagName("body")[0].appendChild(canvas);
canvas.style.cssText = "position: fixed; top: 0; left: 0; background-color: #111; z-index: -1;";
var W = window.innerWidth;
var H = window.innerHeight;
canvas.width = W;
canvas.height = H;
var fontSize = 16;
var colunms = Math.floor(W / fontSize);
var drops = [];
for (var i = 0; i < colunms; i++) {
  drops.push(Math.floor(canvas.height / fontSize) + 1);
}
var str = "QWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()1234567890qwertyuiopasdfghjklzxcvbnm";
function draw() {
  context.fillStyle = "rgba(0,0,0,0.05)";
  context.fillRect(0, 0, W, H);
  context.font = "700 " + fontSize + "px  微软雅黑";
  context.fillStyle = "#00cc33";
  for (var i = 0; i < colunms; i++) {
    var index = Math.floor(Math.random() * str.length);
    var x = i * fontSize;
    var y = drops[i] * fontSize;
    context.fillText(str[index], x, y);
    if (y >= canvas.height && Math.random() > 0.99) {
      drops[i] = 0;
    }
    drops[i]++;
  }
};

setInterval(draw, 120);

window.onresize = function() {
  W = window.innerWidth;
  H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;
  colunms = Math.floor(W / fontSize);
  drops = [];
  for (var i = 0; i < colunms; i++) {
    drops.push(Math.floor(canvas.height / fontSize) + 1);
  }
}
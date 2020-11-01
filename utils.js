var utils = {};

utils.captureMouse = function(element) {

   var mouse = {x: 0, y: 0};
  
   element.addEventListener('mousemove', function(event) {

      var x, y;
    
      if (event.pageX || event.pageY) {
         x = event.pageX;
         y = event.pageY;
      }
      else {
         x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
         y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
      }
    
      x -= element.offsetLeft;
      y -= element.offsetTop;
    
      mouse.x = x;
      mouse.y = y;

   }, false);
  
   return mouse;
};


if (!window.requestAnimationFrame) {
   window.requestAnimationFrame = (window.webkitRequestAnimationFrame ||
                                   window.mozRequestAnimationFrame ||
                                   window.msRequestAnimationFrame ||
                                   window.oRequestAnimationFrame ||
                                   function (callback) {                                    
                                      return window.setTimeout(callback, 1000/60);
                                   });
}

utils.intersects = function (rectA, rectB) {
return !(rectA.x + rectA.width < rectB.x || 
         rectB.x + rectB.width < rectA.x || 
         rectA.y + rectA.height < rectB.y || 
         rectB.y + rectB.height < rectA.y);
};

utils.containsPoint = function (rect, x, y) {
return !(x < rect.x || x > rect.x + rect.width ||
y < rect.y || y > rect.y + rect.height);
};

function SoftScroll () {
  var _this = this;
  window.onmousewheel = function () { return _this.catchScroll(window.event) };
  this.speed = 0;
  this.current = 0;
  this.time = 100;
  this.direction;
  this.timer = false;
}
SoftScroll.prototype = {
  catchScroll: function (e) {
    this.speed += 100;
    if(e.wheelDelta > 0) this.direction = 'up';
    else this.direction = 'down';
    this.timerScroll();
    return false;
  },
  timerScroll: function () {
    _this = this;
    if(_this.timer == true) return;
    _this.timer = true;
    _this.timerId = setInterval(function () {
      var increment = Math.sqrt(_this.speed) / 2.5;
      _this.current += increment;
      if(_this.current > _this.speed) _this.current = _this.speed;
      var y = -Math.pow(_this.current - _this.speed / 2, 2) / Math.pow(_this.speed / 2, 2) * increment + increment;
      if(_this.direction == 'up') y = -y;
      _this.doScroll(Math.floor(y));
      if(y == 0) {
        _this.timer = false;
        _this.speed = 0;
        _this.current = 0;
        clearInterval(_this.timerId);
      }
    }, 10);
  },
  doScroll: function (scroll) {
    document.body.scrollTop = document.body.scrollTop + scroll;
    document.documentElement.scrollTop = document.documentElement.scrollTop + scroll;
  }
}
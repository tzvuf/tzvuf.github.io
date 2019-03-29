const addEvent = (function (window, undefined) {
  let _eventCompat = function (event) {
    let type = event.type;
    if (type == 'DOMMouseScroll' || type == 'mousewheel') {
      event.delta = (event.wheelDelta) ? event.wheelDelta / 120 : -(event.detail || 0) / 3;
    }
    //alert(event.delta);
    if (event.srcElement && !event.target) {
      event.target = event.srcElement;
    }
    if (!event.preventDefault && event.returnValue !== undefined) {
      event.preventDefault = function () {
        event.returnValue = false;
      };
    }
    return event;
  };
  if (window.addEventListener) {
    return function (el, type, fn, capture) {
      if (type === 'mousewheel' && document.mozHidden !== undefined) {
        type = 'DOMMouseScroll';
      }
      el.addEventListener(type, function (event) {
        fn.call(this, _eventCompat(event));
      }, capture || false);
    };
  } else if (window.attachEvent) {
    return function (el, type, fn) {
      el.attachEvent('on' + type, function (event) {
        event = event || window.event;
        fn.call(el, _eventCompat(event));
      });
    };
  }
  return function () {};
})(window);

export const slide = (function () {
  let _timer, _move = function (ele, to, from) {
    from = from || parseFloat(ele.style.left) || 0;
    if (Math.abs(to - from) > 2) {
      ele.style.left = (to - (to - from) / 3) + 'px';
      _timer = setTimeout(function () {
        _move(ele, to);
      }, 50);
    } else {
      ele.style.left = to + 'px';
    }

  };
  return {
    index: 0,
    visible: 4,
    init: function (box, col, _w) {
      let length, self = this;
      if (!box) return;
      length = col.length;
      addEvent(box.parentNode, 'mousewheel', function (event) {
        if (event.delta > 0 && self.index > 0) {
          self.index--;
        } else if (event.delta < 0 && self.index < length - self.visible) {
          self.index++;
        } else {
          return;
        }
        clearTimeout(_timer);
        _move(box, -1 * self.index * _w);
        event.preventDefault();
      });
    }
  };

}());

// 判断客户端是否为PC
export function isPc() {
  var userAgentInfo = navigator.userAgent;
  var Agents = new Array(
    'Android',
    'iPhone',
    'SymbianOS',
    'Windows Phone',
    'iPad',
    'iPod'
  );
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}
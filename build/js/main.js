"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var rulesBtn = document.querySelector('.sam__button-rules');
var overlay = document.querySelector('.sam__overlay');
var rulesContent = document.querySelector('.sam__back');
var closeRules = document.querySelector('.sam__rules-close');
var logo = document.querySelector('.sam__logo');
var mainPage = document.querySelector('.sam');
var wrapperMain = document.querySelector('.sam__wrapper');
var footer = document.querySelector('.sam__footer');

if (window.innerWidth <= 600) {
  window.addEventListener('orientationchange', function () {
    mainPage.classList.add('overflow');
    logo.scrollIntoView();
    footer.classList.remove('visible');
    mobileButton.classList.remove('active');
  });
}

rulesBtn.addEventListener('click', function () {
  overlay.classList.remove('opacity');
  rulesContent.classList.remove('hidden');
  mainPage.classList.add('overflow');
  logo.scrollIntoView();
  wrapperMain.classList.add('blur');
});
closeRules.addEventListener('click', function () {
  overlay.classList.add('opacity');
  rulesContent.classList.add('hidden');
  wrapperMain.classList.remove('blur');

  if (footer.classList.contains('visible')) {
    mainPage.classList.remove('overflow');
  }
});
var copyCodeContent = document.querySelector('.sam__code-text').textContent;
var copyBtn = document.querySelector('.sam__code-copy');
var codeCopy = document.querySelector('.sam__code');
copyBtn.addEventListener('click', function () {
  navigator.clipboard.writeText(copyCodeContent).then(function () {
    console.log('Text copied to clipboard');
    codeCopy.classList.add('copy');
    copyBtn.disabled = true;
    setTimeout(function () {
      codeCopy.classList.remove('copy');
      copyBtn.disabled = false;
    }, 5000);
  });
});
var mobileButton = document.querySelector('.sam__button-mob');
mobileButton.addEventListener('click', function () {
  mainPage.classList.toggle('overflow');
  footer.classList.toggle('visible');
  mobileButton.classList.toggle('active');
  logo.scrollIntoView();
});
var anchors = document.querySelectorAll('a[href*="#"]');

var _iterator = _createForOfIteratorHelper(anchors),
    _step;

try {
  var _loop = function _loop() {
    var anchor = _step.value;
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      var blockID = anchor.getAttribute("href");
      document.querySelector(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  };

  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
"use strict";
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJzZWNvbmQuanMiXSwibmFtZXMiOlsicnVsZXNCdG4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvdmVybGF5IiwicnVsZXNDb250ZW50IiwiY2xvc2VSdWxlcyIsImxvZ28iLCJtYWluUGFnZSIsIndyYXBwZXJNYWluIiwiZm9vdGVyIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJzY3JvbGxJbnRvVmlldyIsInJlbW92ZSIsIm1vYmlsZUJ1dHRvbiIsImNvbnRhaW5zIiwiY29weUNvZGVDb250ZW50IiwidGV4dENvbnRlbnQiLCJjb3B5QnRuIiwiY29kZUNvcHkiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImRpc2FibGVkIiwic2V0VGltZW91dCIsInRvZ2dsZSIsImFuY2hvcnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYW5jaG9yIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYmxvY2tJRCIsImdldEF0dHJpYnV0ZSIsImJlaGF2aW9yIiwiYmxvY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsSUFBTUEsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsb0JBQXZCLENBQWpCO0FBQ0EsSUFBTUMsT0FBTyxHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBaEI7QUFDQSxJQUFNRSxZQUFZLEdBQUdILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixZQUF2QixDQUFyQjtBQUNBLElBQU1HLFVBQVUsR0FBR0osUUFBUSxDQUFDQyxhQUFULENBQXVCLG1CQUF2QixDQUFuQjtBQUNBLElBQU1JLElBQUksR0FBR0wsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLENBQWI7QUFDQSxJQUFNSyxRQUFRLEdBQUdOLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFqQjtBQUNBLElBQU1N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O0FBUUEsSUFBTWlCLE9BQU8sR0FBRy9CLFFBQVEsQ0FBQ2dDLGdCQUFULENBQTBCLGNBQTFCLENBQWhCOzsyQ0FFcUJELE87Ozs7O1FBQVZFLE07SUFDUEEsTUFBTSxDQUFDdEIsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBVXVCLENBQVYsRUFBYTtNQUMxQ0EsQ0FBQyxDQUFDQyxjQUFGO01BQ0EsSUFBTUMsT0FBTyxHQUFHSCxNQUFNLENBQUNJLFlBQVAsQ0FBb0IsTUFBcEIsQ0FBaEI7TUFDQXJDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qm1DLE9BQXZCLEVBQWdDdEIsY0FBaEMsQ0FBK0M7UUFDM0N3QixRQUFRLEVBQUUsUUFEaUM7UUFFM0NDLEtBQUssRUFBRTtNQUZvQyxDQUEvQztJQUlILENBUEQ7OztFQURKLG9EQUE4QjtJQUFBO0VBUzdCOzs7Ozs7QUM1RUQiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJ1bGVzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhbV9fYnV0dG9uLXJ1bGVzJyk7XG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhbV9fb3ZlcmxheScpO1xuY29uc3QgcnVsZXNDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhbV9fYmFjaycpO1xuY29uc3QgY2xvc2VSdWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYW1fX3J1bGVzLWNsb3NlJyk7XG5jb25zdCBsb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhbV9fbG9nbycpXG5jb25zdCBtYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYW0nKTtcbmNvbnN0IHdyYXBwZXJNYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhbV9fd3JhcHBlcicpO1xuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhbV9fZm9vdGVyJyk7XG5cblxuaWYod2luZG93LmlubmVyV2lkdGggPD0gNjAwKXtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25jaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5hZGQoJ292ZXJmbG93Jyk7XG4gICAgICAgIGxvZ28uc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgZm9vdGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICAgICAgbW9iaWxlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH0pO1xufVxuXG5cblxucnVsZXNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnb3BhY2l0eScpO1xuICAgIHJ1bGVzQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICBtYWluUGFnZS5jbGFzc0xpc3QuYWRkKCdvdmVyZmxvdycpO1xuICAgIGxvZ28uc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICB3cmFwcGVyTWFpbi5jbGFzc0xpc3QuYWRkKCdibHVyJyk7XG59KVxuXG5jbG9zZVJ1bGVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ29wYWNpdHknKTtcbiAgICBydWxlc0NvbnRlbnQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgd3JhcHBlck1haW4uY2xhc3NMaXN0LnJlbW92ZSgnYmx1cicpO1xuICAgIGlmKGZvb3Rlci5jbGFzc0xpc3QuY29udGFpbnMoJ3Zpc2libGUnKSl7XG4gICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJmbG93Jyk7XG4gICAgfVxufSlcblxuY29uc3QgY29weUNvZGVDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhbV9fY29kZS10ZXh0JykudGV4dENvbnRlbnQ7XG5jb25zdCBjb3B5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhbV9fY29kZS1jb3B5Jyk7XG5jb25zdCBjb2RlQ29weSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYW1fX2NvZGUnKTtcblxuY29weUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoY29weUNvZGVDb250ZW50KVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVGV4dCBjb3BpZWQgdG8gY2xpcGJvYXJkJyk7XG4gICAgICAgICAgICBjb2RlQ29weS5jbGFzc0xpc3QuYWRkKCdjb3B5JylcbiAgICAgICAgICAgIGNvcHlCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgIGNvZGVDb3B5LmNsYXNzTGlzdC5yZW1vdmUoJ2NvcHknKTtcbiAgICAgICAgICAgICAgICBjb3B5QnRuLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9LCA1MDAwKVxuICAgICAgICB9KVxufSlcblxuY29uc3QgbW9iaWxlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhbV9fYnV0dG9uLW1vYicpO1xuXG5tb2JpbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIG1haW5QYWdlLmNsYXNzTGlzdC50b2dnbGUoJ292ZXJmbG93Jyk7XG4gICAgZm9vdGVyLmNsYXNzTGlzdC50b2dnbGUoJ3Zpc2libGUnKTtcbiAgICBtb2JpbGVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgbG9nby5zY3JvbGxJbnRvVmlldygpO1xuXG59KVxuXG5jb25zdCBhbmNob3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYVtocmVmKj1cIiNcIl0nKTtcblxuZm9yIChjb25zdCBhbmNob3Igb2YgYW5jaG9ycykge1xuICAgIGFuY2hvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBibG9ja0lEID0gYW5jaG9yLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYmxvY2tJRCkuc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgICAgICAgICBibG9jazogXCJzdGFydFwiLFxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuXG5cblxuXG4iLCIiXX0=

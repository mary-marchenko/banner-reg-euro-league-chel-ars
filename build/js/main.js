"use strict";

(function init100vh() {
  function setHeight() {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
  }
  setHeight();
  window.addEventListener('resize', setHeight);
})();
window.addEventListener("orientationchange", function () {
  location.reload(true);
});

// color padding-top
document.addEventListener("DOMContentLoaded", function () {
  function isIOS() {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
  }
  function isMacOS() {
    return navigator.platform === 'MacIntel' && !navigator.userAgent.includes('Mobile');
  }
  var itemMagenta = document.querySelector('.item-magenta');
  var bannerDate = document.querySelector('.banner__date');
  var bannerTime = document.querySelector('.banner__time');
  if (!isIOS() && !isMacOS() && itemMagenta && bannerDate && bannerTime) {
    itemMagenta.classList.add('noios-padding');
    bannerDate.classList.add('noios-padding');
    bannerTime.classList.add('noios-padding');
  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiaW5pdDEwMHZoIiwic2V0SGVpZ2h0IiwidmgiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImFkZEV2ZW50TGlzdGVuZXIiLCJsb2NhdGlvbiIsInJlbG9hZCIsImlzSU9TIiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImlzTWFjT1MiLCJwbGF0Zm9ybSIsImluY2x1ZGVzIiwiaXRlbU1hZ2VudGEiLCJxdWVyeVNlbGVjdG9yIiwiYmFubmVyRGF0ZSIsImJhbm5lclRpbWUiLCJjbGFzc0xpc3QiLCJhZGQiXSwibWFwcGluZ3MiOiI7O0FBQUEsQ0FBQyxTQUFTQSxTQUFTLEdBQUU7RUFDakIsU0FBU0MsU0FBUyxHQUFHO0lBQ2pCLElBQUlDLEVBQUUsR0FBR0MsTUFBTSxDQUFDQyxXQUFXLEdBQUcsSUFBSTtJQUNsQ0MsUUFBUSxDQUFDQyxlQUFlLENBQUNDLEtBQUssQ0FBQ0MsV0FBVyxDQUFDLE1BQU0sWUFBS04sRUFBRSxRQUFLO0VBQ2pFO0VBQ0FELFNBQVMsRUFBRTtFQUNYRSxNQUFNLENBQUNNLGdCQUFnQixDQUFDLFFBQVEsRUFBRVIsU0FBUyxDQUFDO0FBQ2hELENBQUMsR0FBRztBQUVKRSxNQUFNLENBQUNNLGdCQUFnQixDQUFDLG1CQUFtQixFQUFFLFlBQU07RUFDL0NDLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQztBQUN6QixDQUFDLENBQUM7O0FBRUY7QUFDQU4sUUFBUSxDQUFDSSxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFXO0VBQ3JELFNBQVNHLEtBQUssR0FBRztJQUNiLE9BQU8sbUJBQW1CLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxTQUFTLENBQUM7RUFDeEQ7RUFFQSxTQUFTQyxPQUFPLEdBQUc7SUFDZixPQUFPRixTQUFTLENBQUNHLFFBQVEsS0FBSyxVQUFVLElBQUksQ0FBQ0gsU0FBUyxDQUFDQyxTQUFTLENBQUNHLFFBQVEsQ0FBQyxRQUFRLENBQUM7RUFDdkY7RUFFQSxJQUFJQyxXQUFXLEdBQUdkLFFBQVEsQ0FBQ2UsYUFBYSxDQUFDLGVBQWUsQ0FBQztFQUN6RCxJQUFJQyxVQUFVLEdBQUdoQixRQUFRLENBQUNlLGFBQWEsQ0FBQyxlQUFlLENBQUM7RUFDeEQsSUFBSUUsVUFBVSxHQUFHakIsUUFBUSxDQUFDZSxhQUFhLENBQUMsZUFBZSxDQUFDO0VBRXhELElBQUksQ0FBQ1IsS0FBSyxFQUFFLElBQUksQ0FBQ0ksT0FBTyxFQUFFLElBQUlHLFdBQVcsSUFBSUUsVUFBVSxJQUFJQyxVQUFVLEVBQUU7SUFDbkVILFdBQVcsQ0FBQ0ksU0FBUyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO0lBQzFDSCxVQUFVLENBQUNFLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsQ0FBQztJQUN6Q0YsVUFBVSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxlQUFlLENBQUM7RUFDN0M7QUFDSixDQUFDLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBpbml0MTAwdmgoKXtcbiAgICBmdW5jdGlvbiBzZXRIZWlnaHQoKSB7XG4gICAgICAgIGxldCB2aCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMDE7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS12aCcsIGAke3ZofXB4YCk7XG4gICAgfVxuICAgIHNldEhlaWdodCgpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzZXRIZWlnaHQpO1xufSkoKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLCAoKSA9PiB7XG4gICAgbG9jYXRpb24ucmVsb2FkKHRydWUpXG59KTtcblxuLy8gY29sb3IgcGFkZGluZy10b3BcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIGlzSU9TKCkge1xuICAgICAgICByZXR1cm4gL2lQaG9uZXxpUGFkfGlQb2QvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzTWFjT1MoKSB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IucGxhdGZvcm0gPT09ICdNYWNJbnRlbCcgJiYgIW5hdmlnYXRvci51c2VyQWdlbnQuaW5jbHVkZXMoJ01vYmlsZScpO1xuICAgIH1cblxuICAgIGxldCBpdGVtTWFnZW50YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLW1hZ2VudGEnKTtcbiAgICBsZXQgYmFubmVyRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYW5uZXJfX2RhdGUnKTtcbiAgICBsZXQgYmFubmVyVGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYW5uZXJfX3RpbWUnKTtcblxuICAgIGlmICghaXNJT1MoKSAmJiAhaXNNYWNPUygpICYmIGl0ZW1NYWdlbnRhICYmIGJhbm5lckRhdGUgJiYgYmFubmVyVGltZSkge1xuICAgICAgICBpdGVtTWFnZW50YS5jbGFzc0xpc3QuYWRkKCdub2lvcy1wYWRkaW5nJyk7XG4gICAgICAgIGJhbm5lckRhdGUuY2xhc3NMaXN0LmFkZCgnbm9pb3MtcGFkZGluZycpO1xuICAgICAgICBiYW5uZXJUaW1lLmNsYXNzTGlzdC5hZGQoJ25vaW9zLXBhZGRpbmcnKTtcbiAgICB9XG59KTsiXX0=

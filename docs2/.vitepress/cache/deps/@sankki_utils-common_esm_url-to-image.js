import "./chunk-RSJERJUL.js";

// node_modules/@sankki/utils-common/esm/url-to-image.js
var n = (n2) => new Promise(function(o2, e) {
  let r = new Image();
  r.onload = function() {
    o2(r);
  }, r.onerror = function() {
    e();
  }, r.src = n2;
});
var o = { urlToImage: n };
export {
  o as default,
  n as urlToImage
};
//# sourceMappingURL=@sankki_utils-common_esm_url-to-image.js.map

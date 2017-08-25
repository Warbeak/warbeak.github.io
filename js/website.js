//Minified rellax for parallax
(function(h,f){"function"===typeof define&&define.amd?define([],f):"object"===typeof module&&module.exports?module.exports=f():h.Rellax=f()})(this,function(){var h=function(f,l){var b=Object.create(h.prototype),g=0,k=0,c=[],p=!1,u=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(a){setTimeout(a,1E3/60)},m=function(a,b,d){return a<=b?b:a>=d?d:a};b.options={speed:-2,center:!1};l&&
Object.keys(l).forEach(function(a){b.options[a]=l[a]});b.options.speed=m(b.options.speed,-10,10);f||(f=".rellax");var q=document.querySelectorAll(f);if(0<q.length)b.elems=q;else throw Error("The elements you're trying to select don't exist.");var v=function(a){var e=a.getAttribute("data-rellax-percentage"),d=a.getAttribute("data-rellax-speed"),c=e||b.options.center?window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop:0,f=c+a.getBoundingClientRect().top,h=a.clientHeight||
a.offsetHeight||a.scrollHeight,g=e?e:(c-f+k)/(h+k);b.options.center&&(g=.5);c=d?m(d,-10,10):b.options.speed;if(e||b.options.center)c=m(d||b.options.speed,-5,5);e=Math.round(100*c*(1-g));a=a.style.cssText;d="";0<=a.indexOf("transform")&&(d=a.indexOf("transform"),d=a.slice(d),d=(g=d.indexOf(";"))?" "+d.slice(11,g).replace(/\s/g,""):" "+d.slice(11).replace(/\s/g,""));return{base:e,top:f,height:h,speed:c,style:a,transform:d}},r=function(){var a=g;g=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||
document.body.parentNode||document.body).scrollTop;return a!=g?!0:!1},t=function(){r()&&!1===p&&n();u(t)},n=function(){for(var a=0;a<b.elems.length;a++){var e=" translate3d(0,"+(Math.round(100*c[a].speed*(1-(g-c[a].top+k)/(c[a].height+k)))-c[a].base)+"px,0)"+c[a].transform;b.elems[a].style.cssText=c[a].style+"-webkit-transform:"+e+";-moz-transform:"+e+";transform:"+e+";"}};b.destroy=function(){for(var a=0;a<b.elems.length;a++)b.elems[a].style.cssText=c[a].style;p=!0};(function(){k=window.innerHeight;
r();for(var a=0;a<b.elems.length;a++){var e=v(b.elems[a]);c.push(e)}window.addEventListener("resize",function(){n()});t();n()})();return b};return h});

//smooth scroll

!(function (e, t) { "function" == typeof define && define.amd ? define([], (function () { return t(e) })) : "object" == typeof exports ? module.exports = t(e) : e.SmoothScroll = t(e) })("undefined" != typeof global ? global : "undefined" != typeof window ? window : this, (function (e) { "use strict"; var t = "querySelector" in document && "addEventListener" in e && "requestAnimationFrame" in e && "closest" in e.Element.prototype, n = { ignore: "[data-scroll-ignore]", header: null, speed: 500, offset: 0, easing: "easeInOutCubic", customEasing: null, before: function () { }, after: function () { } }, o = function () { for (var e = {}, t = 0, n = arguments.length; t < n; t++) { var o = arguments[t]; !(function (t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(o) } return e }, a = function (t) { return parseInt(e.getComputedStyle(t).height, 10) }, r = function (e) { "#" === e.charAt(0) && (e = e.substr(1)); for (var t, n = String(e), o = n.length, a = -1, r = "", i = n.charCodeAt(0); ++a < o;) { if (0 === (t = n.charCodeAt(a))) throw new InvalidCharacterError("Invalid character: the input contains U+0000."); t >= 1 && t <= 31 || 127 == t || 0 === a && t >= 48 && t <= 57 || 1 === a && t >= 48 && t <= 57 && 45 === i ? r += "\\" + t.toString(16) + " " : r += t >= 128 || 45 === t || 95 === t || t >= 48 && t <= 57 || t >= 65 && t <= 90 || t >= 97 && t <= 122 ? n.charAt(a) : "\\" + n.charAt(a) } return "#" + r }, i = function (e, t) { var n; return "easeInQuad" === e.easing && (n = t * t), "easeOutQuad" === e.easing && (n = t * (2 - t)), "easeInOutQuad" === e.easing && (n = t < .5 ? 2 * t * t : (4 - 2 * t) * t - 1), "easeInCubic" === e.easing && (n = t * t * t), "easeOutCubic" === e.easing && (n = --t * t * t + 1), "easeInOutCubic" === e.easing && (n = t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1), "easeInQuart" === e.easing && (n = t * t * t * t), "easeOutQuart" === e.easing && (n = 1 - --t * t * t * t), "easeInOutQuart" === e.easing && (n = t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t), "easeInQuint" === e.easing && (n = t * t * t * t * t), "easeOutQuint" === e.easing && (n = 1 + --t * t * t * t * t), "easeInOutQuint" === e.easing && (n = t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t), e.customEasing && (n = e.customEasing(t)), n || t }, u = function () { return parseInt(e.getComputedStyle(document.documentElement).height, 10) }, c = function (e, t, n) { var o = 0; if (e.offsetParent) do { o += e.offsetTop, e = e.offsetParent } while (e); return o = Math.max(o - t - n, 0) }, s = function (e) { return e ? a(e) + e.offsetTop : 0 }, l = function (t, n, o) { o || (t.focus(), document.activeElement.id !== t.id && (t.setAttribute("tabindex", "-1"), t.focus(), t.style.outline = "none"), e.scrollTo(0, n)) }, f = function (t) { return !!("matchMedia" in e && e.matchMedia("(prefers-reduced-motion)").matches) }; return function (a, d) { var h, m, g, p, v, b, y, S = {}; S.cancelScroll = function () { cancelAnimationFrame(y) }, S.animateScroll = function (t, a, r) { var f = o(h || n, r || {}), d = "[object Number]" === Object.prototype.toString.call(t), m = d || !t.tagName ? null : t; if (d || m) { var g = e.pageYOffset; f.header && !p && (p = document.querySelector(f.header)), v || (v = s(p)); var b, y, I, O = d ? t : c(m, v, parseInt("function" == typeof f.offset ? f.offset() : f.offset, 10)), A = O - g, E = u(), C = 0, w = function (n, o) { var r = e.pageYOffset; if (n == o || r == o || (g < o && e.innerHeight + r) >= E) return S.cancelScroll(), l(t, o, d), f.after(t, a), b = null, !0 }, Q = function (t) { b || (b = t), C += t - b, y = C / parseInt(f.speed, 10), y = y > 1 ? 1 : y, I = g + A * i(f, y), e.scrollTo(0, Math.floor(I)), w(I, O) || (e.requestAnimationFrame(Q), b = t) }; 0 === e.pageYOffset && e.scrollTo(0, 0), f.before(t, a), S.cancelScroll(), e.requestAnimationFrame(Q) } }; var I = function (e) { m && (m.id = m.getAttribute("data-scroll-id"), S.animateScroll(m, g), m = null, g = null) }, O = function (t) { if (!f() && 0 === t.button && !t.metaKey && !t.ctrlKey && (g = t.target.closest(a)) && "a" === g.tagName.toLowerCase() && !t.target.closest(h.ignore) && g.hostname === e.location.hostname && g.pathname === e.location.pathname && /#/.test(g.href)) { var n; try { n = r(decodeURIComponent(g.hash)) } catch (e) { n = r(g.hash) } if ("#" === n) { t.preventDefault(), m = document.body; var o = m.id ? m.id : "smooth-scroll-top"; return m.setAttribute("data-scroll-id", o), m.id = "", void (e.location.hash.substring(1) === o ? I() : e.location.hash = o) } m = document.querySelector(n), m && (m.setAttribute("data-scroll-id", m.id), m.id = "", g.hash === e.location.hash && (t.preventDefault(), I())) } }, A = function (e) { b || (b = setTimeout((function () { b = null, v = s(p) }), 66)) }; return S.destroy = function () { h && (document.removeEventListener("click", O, !1), e.removeEventListener("resize", A, !1), S.cancelScroll(), h = null, m = null, g = null, p = null, v = null, b = null, y = null) }, S.init = function (a) { t && (S.destroy(), h = o(n, a || {}), p = h.header ? document.querySelector(h.header) : null, v = s(p), document.addEventListener("click", O, !1), e.addEventListener("hashchange", I, !1), p && e.addEventListener("resize", A, !1)) }, S.init(d), S } }));

var scroll = new SmoothScroll('.anchor-link', {
  speed: 750,
  easing: 'easeInOutQuad'
});

//Canvas for the stars!
(function(){
  var colors={
    whiteish : '#FFEDDB',
    yellow : '#F7F7B6',
    pink : '#E96F92',
    purple : '#75517D',
    blackish : '#1B2947',
    green : '#54fad4',
  }
  var heightRefreshThreshold=120;
  var virtualWindowHeight=0;
  var win=window;
  var dpi=win.devicePixelRatio;
  var doc=document;
  var body=doc.body;
  var html=doc.documentElement;
  var sunSize=100;
  var shaders={
    vert:'attribute vec3 position;void main(){gl_Position=vec4(position,1.0);}',
    frag:'uniform float t;uniform float s;uniform vec2 r;uniform sampler2D i;void main(){vec2 pixel=vec2(1.0)/r;vec2 p=gl_FragCoord.xy/r;p=vec2(p.x,1.0-p.y);if(p.y>0.5){float dist=(p.y-0.5)/0.5;float w=(dist*8.5)-t*1.0;float x=(sin(w*3.0-(t*4.0))+3.0)*0.5;w-=x*0.15;w=w-floor(w);w=(floor(w*4.0)-0.4)/4.0;p.y+=w*0.35*dist*s;}gl_FragColor=texture2D(i,p);}',
  };
  
  function getScroll() {
    return win.pageYOffset || html.scrollTop;
  }

  function createCanvas(width,height,userDPI){
    if(typeof userDPI=="undefined") userDPI=dpi;
    var canvas=doc.createElement('canvas');
    setAttribute('width',width*userDPI,canvas);
    setAttribute('height',height*userDPI,canvas);
    return canvas;
  }

  function drawStar(x,y,size,scale,ctx){
    ctx.save();
    ctx.translate(x,y);
    ctx.scale(scale,scale);
    ctx.rotate(Math.PI/4);
    ctx.fillRect(-size/2,-size/2,size,size);
    ctx.restore();
  }

  function querySelector(selector){
    return doc.querySelector(selector);
  }

  function querySelectorAll(selector){
    var nodes=doc.querySelectorAll(selector);
    return [].slice.call(nodes);
  }

  function getContext(canvas){
    return canvas.getContext('2d',{
    
    });
  }

  function getBounds(element){
    return element.getBoundingClientRect();
  }

  function setAttribute(attr,value,element){
    element.setAttribute(attr,value);
  }

  function setFillStyle(fill,ctx){
    ctx.fillStyle=fill;
  }

  function random(max){
    return Math.random()*max;
  }
  
  function smooth(x){
    return x*x*(3 - 2*x);
  }

  function forEach(array,callback){
    for(var i=0;i<array.length;i++){
      callback(array[i],i);
    }
  }

  var raf=requestAnimationFrame;
  function sizeToBounds(bounds,dpi,element){
    setAttribute('width',bounds.width*dpi,element);
    setAttribute('height',bounds.height*dpi,element);
  }

  function initStars(){
    var canvas=querySelector('.Scene-stars');    
    var stopAnim=false;
    var ctx=getContext(canvas);
    var bounds=getBounds(canvas);
    sizeToBounds(bounds,dpi,canvas);
    var stars=[];
    function createStar(){
      return {
        x:random(bounds.width),
        y:random(bounds.height),
        s:0,
        speed:0.01+random(0.035),
        growing:true,
        maxSize:1+(Math.pow(random(1),4)*10),
      }
    };

    (function draw(now){
      var scroll=getScroll();
      if(scroll<win.innerHeight){
        ctx.clearRect(0,0,bounds.width*dpi,bounds.height*dpi);
        setFillStyle(colors.whiteish,ctx);
        var newStars=[];
        forEach(stars,function(star){
          star.s+=star.speed*(star.growing?1:-1);
          if(star.s>1) star.growing=false;
          if(star.s<0){
            return;
          }else{
            newStars.push(star);
          }
          drawStar(
            star.x*dpi,
            star.y*dpi,
            1,
            smooth(star.s)*star.maxSize*dpi,
            ctx
          );
        });
        if(random(1)<0.0000005*(win.innerWidth*win.innerHeight)) newStars.push(createStar());
        stars=newStars;

        var source=(virtualWindowHeight*0.75)-scroll;
        ctx.globalAlpha=1;
      }
      if(!stopAnim)
        raf(draw);
    }());
    return {
      stop:function(){
        stopAnim=true;
      }
    }
  };

  (function(){
    var animStars=initStars();
    var lastResizeW=win.innerWidth;
    var lastResizeH=win.innerHeight;
    var resizeTimer=null;
    win.addEventListener('resize',function(){
      function resize(){
        var ww=win.innerWidth;
        var wh=win.innerHeight;
        if(ww!=lastResizeW){
          lastResizeW=ww;
          animStars.stop();
          var canvases=querySelectorAll('.Scene-mountains');
          forEach(canvases,function(canvas){
            canvas.removeAttribute('width');
            canvas.removeAttribute('height');
          });
          raf(function(){
            animStars=initStars();
          });
        }
        if(Math.abs(wh-lastResizeH)>heightRefreshThreshold){
          lastResizeH=wh;
          animStars.stop();
          raf(function(){
            animStars=initStars();
          });
        }
      }
      if(resizeTimer!=null){
        clearTimeout(resizeTimer);
        resizeTimer=null;
      }
      resizeTimer=setTimeout(resize,1000);
    });
  }());
}());

//Initializes parallax
var rellax = new Rellax('.rellax');

//Fades out scroll-down on scroll
window.onscroll = function () {
  var target = document.querySelector(".container");
  var height = window.innerHeight;
  var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  height = height / 1.25;
  target.style.opacity = (height - scrollTop) / height;
};


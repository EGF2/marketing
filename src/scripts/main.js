function Peppermint(a,b){function c(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])}function d(a){var b=["Webkit","Moz","O","ms"],c=document.createElement("div");if(void 0!==c.style[a])return!0;a=a.charAt(0).toUpperCase()+a.slice(1);for(var d in b)if(void 0!==c.style[b[d]+a])return!0;return!1}function e(a,b){new RegExp("(\\s|^)"+b+"(\\s|$)").test(a.className)||(a.className+=" "+b)}function f(a,b){a.className=a.className.replace(new RegExp("(\\s+|^)"+b+"(\\s+|$)","g")," ").replace(/^\s+|\s+$/g,"")}function g(a,b){0>a?a=0:a>v-1&&(a=v-1);for(var c=C.dots.length-1;c>=0;c--)f(C.dots[c],G.activeDot);return e(C.dots[a],G.activeDot),E=a,h(-a*C.width,void 0===b?F.speed:b),o(),F.onSlideChange&&F.onSlideChange(a),a}function h(a,b){var c=b?b+"ms":"";y.style.webkitTransitionDuration=y.style.MozTransitionDuration=y.style.msTransitionDuration=y.style.OTransitionDuration=y.style.transitionDuration=c,j(a)}function i(a,b){if(B&&clearInterval(B),!b)return void j(a);var c=+new Date,d=C.left;B=setInterval(function(){function e(a,b){return(b-a)*i+a}var f,g,h=+new Date-c,i=h/b,k=[0,.7,1,1];return i>=1?(j(a),void clearInterval(B)):(f=a-d,g=e(e(e(k[0],k[1]),e(k[1],k[2])),e(e(k[1],k[2]),e(k[2],k[3]))),void j(Math.floor(g*f+d)))},15)}function j(a){y.style.webkitTransform="translate("+a+"px,0) translateZ(0)",y.style.msTransform=y.style.MozTransform=y.style.OTransform=y.style.transform="translateX("+a+"px)",C.left=a}function k(a){y.style.left=a+"px",C.left=a}function l(){var a=E+1;return a>v-1&&(a=0),g(a)}function m(){var a=E-1;return 0>a&&(a=v-1),g(a)}function n(){A=!0,o()}function o(){A&&(z&&clearTimeout(z),z=setTimeout(function(){l()},F.slideshowInterval))}function p(){z&&clearTimeout(z)}function q(){A=!1,z&&clearTimeout(z)}function r(){C.width=a.offsetWidth,y.style.width=C.width*v+"px";for(var b=0;v>b;b++)C.slides[b].style.width=C.width+"px";h(-E*C.width)}function s(a,b,c,d){b&&(a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent("on"+b,c))}function t(){EventBurrito(y,{mouse:F.mouseDrag,start:function(){e(a,G.drag)},move:function(a,b,c){p(),c.x=c.x/(!E&&c.x>0||E==v-1&&c.x<0?Math.abs(c.x)/C.width*2+1:1),h(c.x-C.width*E)},end:function(b,c,d){if(d.x){var e=Math.abs(d.x)/C.width,h=Math.floor(e)+(e-Math.floor(e)>.25?1:0),i=d.time<D+D*h/1.8&&Math.abs(d.x)-h*C.width>(h?-C.width/9:20);h+=i?1:0,d.x<0?g(E+h,F.touchSpeed):g(E-h,F.touchSpeed),F.stopSlideshowAfterInteraction&&q()}f(a,G.drag)}})}function u(){var b=F.slidesContainer||a,c=F.dotsContainer||a;if(!(F.disableIfOneSlide&&b.children.length<=1)){(!H.transforms||window.opera)&&(j=k),(!H.transitions||window.opera)&&(h=i),y=F.slidesContainer||document.createElement("div"),e(y,G.slides);for(var d=0,l=b.children.length;l>d;d++){var m=b.children[d],o=document.createElement("li");C.slides.push(m),o.setAttribute("tabindex","0"),o.setAttribute("role","button"),o.innerHTML="<span></span>",function(b,c){s(c,"click",function(){g(b),F.stopSlideshowAfterInteraction&&q()}),s(c,"keyup",function(a){13==a.keyCode&&(g(b),F.stopSlideshowAfterInteraction&&q())}),s(c,"mouseup",function(){e(c,G.mouseClicked)}),s(c,"blur",function(){f(c,G.mouseClicked)},!0),s(m,"focus",m.onfocusin=function(){a.scrollLeft=0,setTimeout(function(){a.scrollLeft=0},0),g(b)},!0)}(d,o),C.dots.push(o)}v=C.slides.length,w=100/v,e(a,G.active),f(a,G.inactive),F.mouseDrag&&e(a,G.mouse),C.width=a.offsetWidth,y.style.width=C.width*v+"px";for(var d=0;v>d;d++)C.slides[d].style.width=C.width+"px",y.appendChild(C.slides[d]);if(F.slidesContainer||a.appendChild(y),F.dots&&v>1){x=document.createElement("ul"),e(x,G.dots);for(var d=0,l=C.dots.length;l>d;d++)x.appendChild(C.dots[d]);F.dotsPrepend?c.insertBefore(x,c.firstChild):c.appendChild(x)}s(window,"resize",r),s(window,"orientationchange",r),setTimeout(function(){g(F.startSlide,0)},0),F.slideshow&&n(),t(),setTimeout(function(){F.onSetup&&F.onSetup(v)},0)}}var v,w,x,y,z,A,B,C={slides:[],dots:[],left:0},D=200,E=0,F={speed:300,touchSpeed:300,slideshow:!1,slideshowInterval:4e3,stopSlideshowAfterInteraction:!1,startSlide:0,mouseDrag:!0,disableIfOneSlide:!0,cssPrefix:"peppermint-",dots:!1,dotsPrepend:!1,dotsContainer:void 0,slidesContainer:void 0,onSlideChange:void 0,onSetup:void 0};b&&c(F,b);var G={inactive:F.cssPrefix+"inactive",active:F.cssPrefix+"active",mouse:F.cssPrefix+"mouse",drag:F.cssPrefix+"drag",slides:F.cssPrefix+"slides",dots:F.cssPrefix+"dots",activeDot:F.cssPrefix+"active-dot",mouseClicked:F.cssPrefix+"mouse-clicked"},H={transforms:d("transform"),transitions:d("transition")};return u(),{slideTo:function(a,b){return g(parseInt(a,10),b)},next:l,prev:m,start:n,stop:q,pause:p,getCurrentPos:function(){return E},getSlidesNumber:function(){return v},recalcWidth:r}}window.jQuery&&!function($){$.fn.Peppermint=function(a){return this.each(function(){$(this).data("Peppermint",Peppermint(this,a))}),this}}(window.jQuery);
function EventBurrito(a,b){function c(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])}function d(a,b,c,d){return b?(a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent("on"+b,c),{remove:function(){e(a,b,c,d)}}):void 0}function e(a,b,c,d){b&&(a.removeEventListener?a.removeEventListener(b,c,!!d):a.detachEvent("on"+b,c))}function f(a){a.preventDefault?a.preventDefault():a.returnValue=!1}function g(a){if(r={x:(o?a.clientX:a.touches[0].clientX)-q.x,y:(o?a.clientY:a.touches[0].clientY)-q.y,time:Number(new Date)-q.time},r.time-t[t.length-1].time){for(var b=0;b<t.length-1&&r.time-t[b].time>80;b++);s={x:(r.x-t[b].x)/(r.time-t[b].time),y:(r.y-t[b].y)/(r.time-t[b].time)},t.length>=5&&t.shift(),t.push({x:r.x,y:r.y,time:r.time})}}function h(a,b){v=!0,o=b,y[o](a)||(d(document,x[o][1],i),d(document,x[o][2],j),d(document,x[o][3],j),m.preventDefault&&o&&f(a),q={x:o?a.clientX:a.touches[0].clientX,y:o?a.clientY:a.touches[0].clientY,time:Number(new Date)},n=void 0,r={x:0,y:0,time:0},s={x:0,y:0},t=[{x:0,y:0,time:0}],m.start(a,q))}function i(a){!m.preventScroll&&n||y[o](a)||(g(a),(Math.abs(r.x)>m.clickTolerance||Math.abs(r.y)>m.clickTolerance)&&(v=!1),void 0===n&&3!==o&&(n=Math.abs(r.x)<Math.abs(r.y)&&!m.preventScroll)||(m.preventDefault&&f(a),m.move(a,q,r,s)))}function j(a){o&&g(a),!v&&a.target&&a.target.blur&&a.target.blur(),e(document,x[o][1],i),e(document,x[o][2],j),e(document,x[o][3],j),m.end(a,q,r,s)}function k(){u.push(d(a,x[w][0],function(a){h(a,w)})),u.push(d(a,"dragstart",f)),m.mouse&&!w&&u.push(d(a,x[3][0],function(a){h(a,3)})),u.push(d(a,"click",function(a){v?m.click(a):f(a)}))}var l=function(){},m={preventDefault:!0,clickTolerance:0,preventScroll:!1,mouse:!0,start:l,move:l,end:l,click:l};b&&c(m,b);var n,o,p={pointerEvents:!!window.navigator.pointerEnabled,msPointerEvents:!!window.navigator.msPointerEnabled},q={},r={},s={},t=[],u=[],v=!0,w=p.pointerEvents?1:p.msPointerEvents?2:0,x=[["touchstart","touchmove","touchend","touchcancel"],["pointerdown","pointermove","pointerup","pointercancel"],["MSPointerDown","MSPointerMove","MSPointerUp","MSPointerCancel"],["mousedown","mousemove","mouseup",!1]],y=[function(a){return a.touches&&a.touches.length>1||a.scale&&1!==a.scale},function(a){return!a.isPrimary||a.buttons&&1!==a.buttons||!m.mouse&&"touch"!==a.pointerType&&"pen"!==a.pointerType},function(a){return!a.isPrimary||a.buttons&&1!==a.buttons||!m.mouse&&a.pointerType!==a.MSPOINTER_TYPE_TOUCH&&a.pointerType!==a.MSPOINTER_TYPE_PEN},function(a){return a.buttons&&1!==a.buttons}];return k(),{getClicksAllowed:function(){return v},kill:function(){for(var a=u.length-1;a>=0;a--)u[a].remove()}}}
function hexToRgb(e){var a=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;e=e.replace(a,function(e,a,t,i){return a+a+t+t+i+i});var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}function clamp(e,a,t){return Math.min(Math.max(e,a),t)}function isInArray(e,a){return a.indexOf(e)>-1}var pJS=function(e,a){var t=document.querySelector("#"+e+" > .particles-js-canvas-el");this.pJS={canvas:{el:t,w:t.offsetWidth,h:t.offsetHeight},particles:{number:{value:400,density:{enable:!0,value_area:800}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#ff0000"},polygon:{nb_sides:5},image:{src:"",width:100,height:100}},opacity:{value:1,random:!1,anim:{enable:!1,speed:2,opacity_min:0,sync:!1}},size:{value:20,random:!1,anim:{enable:!1,speed:20,size_min:0,sync:!1}},line_linked:{enable:!0,distance:100,color:"#fff",opacity:1,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:3e3,rotateY:3e3}},array:[]},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:1}},bubble:{distance:200,size:80,duration:.4},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}},mouse:{}},retina_detect:!1,fn:{interact:{},modes:{},vendors:{}},tmp:{}};var i=this.pJS;a&&Object.deepExtend(i,a),i.tmp.obj={size_value:i.particles.size.value,size_anim_speed:i.particles.size.anim.speed,move_speed:i.particles.move.speed,line_linked_distance:i.particles.line_linked.distance,line_linked_width:i.particles.line_linked.width,mode_grab_distance:i.interactivity.modes.grab.distance,mode_bubble_distance:i.interactivity.modes.bubble.distance,mode_bubble_size:i.interactivity.modes.bubble.size,mode_repulse_distance:i.interactivity.modes.repulse.distance},i.fn.retinaInit=function(){i.retina_detect&&window.devicePixelRatio>1?(i.canvas.pxratio=window.devicePixelRatio,i.tmp.retina=!0):(i.canvas.pxratio=1,i.tmp.retina=!1),i.canvas.w=i.canvas.el.offsetWidth*i.canvas.pxratio,i.canvas.h=i.canvas.el.offsetHeight*i.canvas.pxratio,i.particles.size.value=i.tmp.obj.size_value*i.canvas.pxratio,i.particles.size.anim.speed=i.tmp.obj.size_anim_speed*i.canvas.pxratio,i.particles.move.speed=i.tmp.obj.move_speed*i.canvas.pxratio,i.particles.line_linked.distance=i.tmp.obj.line_linked_distance*i.canvas.pxratio,i.interactivity.modes.grab.distance=i.tmp.obj.mode_grab_distance*i.canvas.pxratio,i.interactivity.modes.bubble.distance=i.tmp.obj.mode_bubble_distance*i.canvas.pxratio,i.particles.line_linked.width=i.tmp.obj.line_linked_width*i.canvas.pxratio,i.interactivity.modes.bubble.size=i.tmp.obj.mode_bubble_size*i.canvas.pxratio,i.interactivity.modes.repulse.distance=i.tmp.obj.mode_repulse_distance*i.canvas.pxratio},i.fn.canvasInit=function(){i.canvas.ctx=i.canvas.el.getContext("2d")},i.fn.canvasSize=function(){i.canvas.el.width=i.canvas.w,i.canvas.el.height=i.canvas.h,i&&i.interactivity.events.resize&&window.addEventListener("resize",function(){i.canvas.w=i.canvas.el.offsetWidth,i.canvas.h=i.canvas.el.offsetHeight,i.tmp.retina&&(i.canvas.w*=i.canvas.pxratio,i.canvas.h*=i.canvas.pxratio),i.canvas.el.width=i.canvas.w,i.canvas.el.height=i.canvas.h,i.particles.move.enable||(i.fn.particlesEmpty(),i.fn.particlesCreate(),i.fn.particlesDraw(),i.fn.vendors.densityAutoParticles()),i.fn.vendors.densityAutoParticles()})},i.fn.canvasPaint=function(){i.canvas.ctx.fillRect(0,0,i.canvas.w,i.canvas.h)},i.fn.canvasClear=function(){i.canvas.ctx.clearRect(0,0,i.canvas.w,i.canvas.h)},i.fn.particle=function(e,a,t){if(this.radius=(i.particles.size.random?Math.random():1)*i.particles.size.value,i.particles.size.anim.enable&&(this.size_status=!1,this.vs=i.particles.size.anim.speed/100,i.particles.size.anim.sync||(this.vs=this.vs*Math.random())),this.x=t?t.x:Math.random()*i.canvas.w,this.y=t?t.y:Math.random()*i.canvas.h,this.x>i.canvas.w-2*this.radius?this.x=this.x-this.radius:this.x<2*this.radius&&(this.x=this.x+this.radius),this.y>i.canvas.h-2*this.radius?this.y=this.y-this.radius:this.y<2*this.radius&&(this.y=this.y+this.radius),i.particles.move.bounce&&i.fn.vendors.checkOverlap(this,t),this.color={},"object"==typeof e.value)if(e.value instanceof Array){var s=e.value[Math.floor(Math.random()*i.particles.color.value.length)];this.color.rgb=hexToRgb(s)}else void 0!=e.value.r&&void 0!=e.value.g&&void 0!=e.value.b&&(this.color.rgb={r:e.value.r,g:e.value.g,b:e.value.b}),void 0!=e.value.h&&void 0!=e.value.s&&void 0!=e.value.l&&(this.color.hsl={h:e.value.h,s:e.value.s,l:e.value.l});else"random"==e.value?this.color.rgb={r:Math.floor(256*Math.random())+0,g:Math.floor(256*Math.random())+0,b:Math.floor(256*Math.random())+0}:"string"==typeof e.value&&(this.color=e,this.color.rgb=hexToRgb(this.color.value));this.opacity=(i.particles.opacity.random?Math.random():1)*i.particles.opacity.value,i.particles.opacity.anim.enable&&(this.opacity_status=!1,this.vo=i.particles.opacity.anim.speed/100,i.particles.opacity.anim.sync||(this.vo=this.vo*Math.random()));var n={};switch(i.particles.move.direction){case"top":n={x:0,y:-1};break;case"top-right":n={x:.5,y:-.5};break;case"right":n={x:1,y:-0};break;case"bottom-right":n={x:.5,y:.5};break;case"bottom":n={x:0,y:1};break;case"bottom-left":n={x:-.5,y:1};break;case"left":n={x:-1,y:0};break;case"top-left":n={x:-.5,y:-.5};break;default:n={x:0,y:0}}i.particles.move.straight?(this.vx=n.x,this.vy=n.y,i.particles.move.random&&(this.vx=this.vx*Math.random(),this.vy=this.vy*Math.random())):(this.vx=n.x+Math.random()-.5,this.vy=n.y+Math.random()-.5),this.vx_i=this.vx,this.vy_i=this.vy;var r=i.particles.shape.type;if("object"==typeof r){if(r instanceof Array){var c=r[Math.floor(Math.random()*r.length)];this.shape=c}}else this.shape=r;if("image"==this.shape){var o=i.particles.shape;this.img={src:o.image.src,ratio:o.image.width/o.image.height},this.img.ratio||(this.img.ratio=1),"svg"==i.tmp.img_type&&void 0!=i.tmp.source_svg&&(i.fn.vendors.createSvgImg(this),i.tmp.pushing&&(this.img.loaded=!1))}},i.fn.particle.prototype.draw=function(){function e(){i.canvas.ctx.drawImage(r,a.x-t,a.y-t,2*t,2*t/a.img.ratio)}var a=this;if(void 0!=a.radius_bubble)var t=a.radius_bubble;else var t=a.radius;if(void 0!=a.opacity_bubble)var s=a.opacity_bubble;else var s=a.opacity;if(a.color.rgb)var n="rgba("+a.color.rgb.r+","+a.color.rgb.g+","+a.color.rgb.b+","+s+")";else var n="hsla("+a.color.hsl.h+","+a.color.hsl.s+"%,"+a.color.hsl.l+"%,"+s+")";switch(i.canvas.ctx.fillStyle=n,i.canvas.ctx.beginPath(),a.shape){case"circle":i.canvas.ctx.arc(a.x,a.y,t,0,2*Math.PI,!1);break;case"edge":i.canvas.ctx.rect(a.x-t,a.y-t,2*t,2*t);break;case"triangle":i.fn.vendors.drawShape(i.canvas.ctx,a.x-t,a.y+t/1.66,2*t,3,2);break;case"polygon":i.fn.vendors.drawShape(i.canvas.ctx,a.x-t/(i.particles.shape.polygon.nb_sides/3.5),a.y-t/.76,2.66*t/(i.particles.shape.polygon.nb_sides/3),i.particles.shape.polygon.nb_sides,1);break;case"star":i.fn.vendors.drawShape(i.canvas.ctx,a.x-2*t/(i.particles.shape.polygon.nb_sides/4),a.y-t/1.52,2*t*2.66/(i.particles.shape.polygon.nb_sides/3),i.particles.shape.polygon.nb_sides,2);break;case"image":if("svg"==i.tmp.img_type)var r=a.img.obj;else var r=i.tmp.img_obj;r&&e()}i.canvas.ctx.closePath(),i.particles.shape.stroke.width>0&&(i.canvas.ctx.strokeStyle=i.particles.shape.stroke.color,i.canvas.ctx.lineWidth=i.particles.shape.stroke.width,i.canvas.ctx.stroke()),i.canvas.ctx.fill()},i.fn.particlesCreate=function(){for(var e=0;e<i.particles.number.value;e++)i.particles.array.push(new i.fn.particle(i.particles.color,i.particles.opacity.value))},i.fn.particlesUpdate=function(){for(var e=0;e<i.particles.array.length;e++){var a=i.particles.array[e];if(i.particles.move.enable){var t=i.particles.move.speed/2;a.x+=a.vx*t,a.y+=a.vy*t}if(i.particles.opacity.anim.enable&&(1==a.opacity_status?(a.opacity>=i.particles.opacity.value&&(a.opacity_status=!1),a.opacity+=a.vo):(a.opacity<=i.particles.opacity.anim.opacity_min&&(a.opacity_status=!0),a.opacity-=a.vo),a.opacity<0&&(a.opacity=0)),i.particles.size.anim.enable&&(1==a.size_status?(a.radius>=i.particles.size.value&&(a.size_status=!1),a.radius+=a.vs):(a.radius<=i.particles.size.anim.size_min&&(a.size_status=!0),a.radius-=a.vs),a.radius<0&&(a.radius=0)),"bounce"==i.particles.move.out_mode)var s={x_left:a.radius,x_right:i.canvas.w,y_top:a.radius,y_bottom:i.canvas.h};else var s={x_left:-a.radius,x_right:i.canvas.w+a.radius,y_top:-a.radius,y_bottom:i.canvas.h+a.radius};switch(a.x-a.radius>i.canvas.w?(a.x=s.x_left,a.y=Math.random()*i.canvas.h):a.x+a.radius<0&&(a.x=s.x_right,a.y=Math.random()*i.canvas.h),a.y-a.radius>i.canvas.h?(a.y=s.y_top,a.x=Math.random()*i.canvas.w):a.y+a.radius<0&&(a.y=s.y_bottom,a.x=Math.random()*i.canvas.w),i.particles.move.out_mode){case"bounce":a.x+a.radius>i.canvas.w?a.vx=-a.vx:a.x-a.radius<0&&(a.vx=-a.vx),a.y+a.radius>i.canvas.h?a.vy=-a.vy:a.y-a.radius<0&&(a.vy=-a.vy)}if(isInArray("grab",i.interactivity.events.onhover.mode)&&i.fn.modes.grabParticle(a),(isInArray("bubble",i.interactivity.events.onhover.mode)||isInArray("bubble",i.interactivity.events.onclick.mode))&&i.fn.modes.bubbleParticle(a),(isInArray("repulse",i.interactivity.events.onhover.mode)||isInArray("repulse",i.interactivity.events.onclick.mode))&&i.fn.modes.repulseParticle(a),i.particles.line_linked.enable||i.particles.move.attract.enable)for(var n=e+1;n<i.particles.array.length;n++){var r=i.particles.array[n];i.particles.line_linked.enable&&i.fn.interact.linkParticles(a,r),i.particles.move.attract.enable&&i.fn.interact.attractParticles(a,r),i.particles.move.bounce&&i.fn.interact.bounceParticles(a,r)}}},i.fn.particlesDraw=function(){i.canvas.ctx.clearRect(0,0,i.canvas.w,i.canvas.h),i.fn.particlesUpdate();for(var e=0;e<i.particles.array.length;e++){var a=i.particles.array[e];a.draw()}},i.fn.particlesEmpty=function(){i.particles.array=[]},i.fn.particlesRefresh=function(){cancelRequestAnimFrame(i.fn.checkAnimFrame),cancelRequestAnimFrame(i.fn.drawAnimFrame),i.tmp.source_svg=void 0,i.tmp.img_obj=void 0,i.tmp.count_svg=0,i.fn.particlesEmpty(),i.fn.canvasClear(),i.fn.vendors.start()},i.fn.interact.linkParticles=function(e,a){var t=e.x-a.x,s=e.y-a.y,n=Math.sqrt(t*t+s*s);if(n<=i.particles.line_linked.distance){var r=i.particles.line_linked.opacity-n/(1/i.particles.line_linked.opacity)/i.particles.line_linked.distance;if(r>0){var c=i.particles.line_linked.color_rgb_line;i.canvas.ctx.strokeStyle="rgba("+c.r+","+c.g+","+c.b+","+r+")",i.canvas.ctx.lineWidth=i.particles.line_linked.width,i.canvas.ctx.beginPath(),i.canvas.ctx.moveTo(e.x,e.y),i.canvas.ctx.lineTo(a.x,a.y),i.canvas.ctx.stroke(),i.canvas.ctx.closePath()}}},i.fn.interact.attractParticles=function(e,a){var t=e.x-a.x,s=e.y-a.y,n=Math.sqrt(t*t+s*s);if(n<=i.particles.line_linked.distance){var r=t/(1e3*i.particles.move.attract.rotateX),c=s/(1e3*i.particles.move.attract.rotateY);e.vx-=r,e.vy-=c,a.vx+=r,a.vy+=c}},i.fn.interact.bounceParticles=function(e,a){var t=e.x-a.x,i=e.y-a.y,s=Math.sqrt(t*t+i*i),n=e.radius+a.radius;n>=s&&(e.vx=-e.vx,e.vy=-e.vy,a.vx=-a.vx,a.vy=-a.vy)},i.fn.modes.pushParticles=function(e,a){i.tmp.pushing=!0;for(var t=0;e>t;t++)i.particles.array.push(new i.fn.particle(i.particles.color,i.particles.opacity.value,{x:a?a.pos_x:Math.random()*i.canvas.w,y:a?a.pos_y:Math.random()*i.canvas.h})),t==e-1&&(i.particles.move.enable||i.fn.particlesDraw(),i.tmp.pushing=!1)},i.fn.modes.removeParticles=function(e){i.particles.array.splice(0,e),i.particles.move.enable||i.fn.particlesDraw()},i.fn.modes.bubbleParticle=function(e){function a(){e.opacity_bubble=e.opacity,e.radius_bubble=e.radius}function t(a,t,s,n,c){if(a!=t)if(i.tmp.bubble_duration_end){if(void 0!=s){var o=n-p*(n-a)/i.interactivity.modes.bubble.duration,l=a-o;d=a+l,"size"==c&&(e.radius_bubble=d),"opacity"==c&&(e.opacity_bubble=d)}}else if(r<=i.interactivity.modes.bubble.distance){if(void 0!=s)var v=s;else var v=n;if(v!=a){var d=n-p*(n-a)/i.interactivity.modes.bubble.duration;"size"==c&&(e.radius_bubble=d),"opacity"==c&&(e.opacity_bubble=d)}}else"size"==c&&(e.radius_bubble=void 0),"opacity"==c&&(e.opacity_bubble=void 0)}if(i.interactivity.events.onhover.enable&&isInArray("bubble",i.interactivity.events.onhover.mode)){var s=e.x-i.interactivity.mouse.pos_x,n=e.y-i.interactivity.mouse.pos_y,r=Math.sqrt(s*s+n*n),c=1-r/i.interactivity.modes.bubble.distance;if(r<=i.interactivity.modes.bubble.distance){if(c>=0&&"mousemove"==i.interactivity.status){if(i.interactivity.modes.bubble.size!=i.particles.size.value)if(i.interactivity.modes.bubble.size>i.particles.size.value){var o=e.radius+i.interactivity.modes.bubble.size*c;o>=0&&(e.radius_bubble=o)}else{var l=e.radius-i.interactivity.modes.bubble.size,o=e.radius-l*c;o>0?e.radius_bubble=o:e.radius_bubble=0}if(i.interactivity.modes.bubble.opacity!=i.particles.opacity.value)if(i.interactivity.modes.bubble.opacity>i.particles.opacity.value){var v=i.interactivity.modes.bubble.opacity*c;v>e.opacity&&v<=i.interactivity.modes.bubble.opacity&&(e.opacity_bubble=v)}else{var v=e.opacity-(i.particles.opacity.value-i.interactivity.modes.bubble.opacity)*c;v<e.opacity&&v>=i.interactivity.modes.bubble.opacity&&(e.opacity_bubble=v)}}}else a();"mouseleave"==i.interactivity.status&&a()}else if(i.interactivity.events.onclick.enable&&isInArray("bubble",i.interactivity.events.onclick.mode)){if(i.tmp.bubble_clicking){var s=e.x-i.interactivity.mouse.click_pos_x,n=e.y-i.interactivity.mouse.click_pos_y,r=Math.sqrt(s*s+n*n),p=((new Date).getTime()-i.interactivity.mouse.click_time)/1e3;p>i.interactivity.modes.bubble.duration&&(i.tmp.bubble_duration_end=!0),p>2*i.interactivity.modes.bubble.duration&&(i.tmp.bubble_clicking=!1,i.tmp.bubble_duration_end=!1)}i.tmp.bubble_clicking&&(t(i.interactivity.modes.bubble.size,i.particles.size.value,e.radius_bubble,e.radius,"size"),t(i.interactivity.modes.bubble.opacity,i.particles.opacity.value,e.opacity_bubble,e.opacity,"opacity"))}},i.fn.modes.repulseParticle=function(e){function a(){var a=Math.atan2(d,p);if(e.vx=u*Math.cos(a),e.vy=u*Math.sin(a),"bounce"==i.particles.move.out_mode){var t={x:e.x+e.vx,y:e.y+e.vy};t.x+e.radius>i.canvas.w?e.vx=-e.vx:t.x-e.radius<0&&(e.vx=-e.vx),t.y+e.radius>i.canvas.h?e.vy=-e.vy:t.y-e.radius<0&&(e.vy=-e.vy)}}if(i.interactivity.events.onhover.enable&&isInArray("repulse",i.interactivity.events.onhover.mode)&&"mousemove"==i.interactivity.status){var t=e.x-i.interactivity.mouse.pos_x,s=e.y-i.interactivity.mouse.pos_y,n=Math.sqrt(t*t+s*s),r={x:t/n,y:s/n},c=i.interactivity.modes.repulse.distance,o=100,l=clamp(1/c*(-1*Math.pow(n/c,2)+1)*c*o,0,50),v={x:e.x+r.x*l,y:e.y+r.y*l};"bounce"==i.particles.move.out_mode?(v.x-e.radius>0&&v.x+e.radius<i.canvas.w&&(e.x=v.x),v.y-e.radius>0&&v.y+e.radius<i.canvas.h&&(e.y=v.y)):(e.x=v.x,e.y=v.y)}else if(i.interactivity.events.onclick.enable&&isInArray("repulse",i.interactivity.events.onclick.mode))if(i.tmp.repulse_finish||(i.tmp.repulse_count++,i.tmp.repulse_count==i.particles.array.length&&(i.tmp.repulse_finish=!0)),i.tmp.repulse_clicking){var c=Math.pow(i.interactivity.modes.repulse.distance/6,3),p=i.interactivity.mouse.click_pos_x-e.x,d=i.interactivity.mouse.click_pos_y-e.y,m=p*p+d*d,u=-c/m*1;c>=m&&a()}else 0==i.tmp.repulse_clicking&&(e.vx=e.vx_i,e.vy=e.vy_i)},i.fn.modes.grabParticle=function(e){if(i.interactivity.events.onhover.enable&&"mousemove"==i.interactivity.status){var a=e.x-i.interactivity.mouse.pos_x,t=e.y-i.interactivity.mouse.pos_y,s=Math.sqrt(a*a+t*t);if(s<=i.interactivity.modes.grab.distance){var n=i.interactivity.modes.grab.line_linked.opacity-s/(1/i.interactivity.modes.grab.line_linked.opacity)/i.interactivity.modes.grab.distance;if(n>0){var r=i.particles.line_linked.color_rgb_line;i.canvas.ctx.strokeStyle="rgba("+r.r+","+r.g+","+r.b+","+n+")",i.canvas.ctx.lineWidth=i.particles.line_linked.width,i.canvas.ctx.beginPath(),i.canvas.ctx.moveTo(e.x,e.y),i.canvas.ctx.lineTo(i.interactivity.mouse.pos_x,i.interactivity.mouse.pos_y),i.canvas.ctx.stroke(),i.canvas.ctx.closePath()}}}},i.fn.vendors.eventsListeners=function(){"window"==i.interactivity.detect_on?i.interactivity.el=window:i.interactivity.el=i.canvas.el,(i.interactivity.events.onhover.enable||i.interactivity.events.onclick.enable)&&(i.interactivity.el.addEventListener("mousemove",function(e){if(i.interactivity.el==window)var a=e.clientX,t=e.clientY;else var a=e.offsetX||e.clientX,t=e.offsetY||e.clientY;i.interactivity.mouse.pos_x=a,i.interactivity.mouse.pos_y=t,i.tmp.retina&&(i.interactivity.mouse.pos_x*=i.canvas.pxratio,i.interactivity.mouse.pos_y*=i.canvas.pxratio),i.interactivity.status="mousemove"}),i.interactivity.el.addEventListener("mouseleave",function(e){i.interactivity.mouse.pos_x=null,i.interactivity.mouse.pos_y=null,i.interactivity.status="mouseleave"})),i.interactivity.events.onclick.enable&&i.interactivity.el.addEventListener("click",function(){if(i.interactivity.mouse.click_pos_x=i.interactivity.mouse.pos_x,i.interactivity.mouse.click_pos_y=i.interactivity.mouse.pos_y,i.interactivity.mouse.click_time=(new Date).getTime(),i.interactivity.events.onclick.enable)switch(i.interactivity.events.onclick.mode){case"push":i.particles.move.enable?i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb,i.interactivity.mouse):1==i.interactivity.modes.push.particles_nb?i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb,i.interactivity.mouse):i.interactivity.modes.push.particles_nb>1&&i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb);break;case"remove":i.fn.modes.removeParticles(i.interactivity.modes.remove.particles_nb);break;case"bubble":i.tmp.bubble_clicking=!0;break;case"repulse":i.tmp.repulse_clicking=!0,i.tmp.repulse_count=0,i.tmp.repulse_finish=!1,setTimeout(function(){i.tmp.repulse_clicking=!1},1e3*i.interactivity.modes.repulse.duration)}})},i.fn.vendors.densityAutoParticles=function(){if(i.particles.number.density.enable){var e=i.canvas.el.width*i.canvas.el.height/1e3;i.tmp.retina&&(e/=2*i.canvas.pxratio);var a=e*i.particles.number.value/i.particles.number.density.value_area,t=i.particles.array.length-a;0>t?i.fn.modes.pushParticles(Math.abs(t)):i.fn.modes.removeParticles(t)}},i.fn.vendors.checkOverlap=function(e,a){for(var t=0;t<i.particles.array.length;t++){var s=i.particles.array[t],n=e.x-s.x,r=e.y-s.y,c=Math.sqrt(n*n+r*r);c<=e.radius+s.radius&&(e.x=a?a.x:Math.random()*i.canvas.w,e.y=a?a.y:Math.random()*i.canvas.h,i.fn.vendors.checkOverlap(e))}},i.fn.vendors.createSvgImg=function(e){var a=i.tmp.source_svg,t=/#([0-9A-F]{3,6})/gi,s=a.replace(t,function(a,t,i,s){if(e.color.rgb)var n="rgba("+e.color.rgb.r+","+e.color.rgb.g+","+e.color.rgb.b+","+e.opacity+")";else var n="hsla("+e.color.hsl.h+","+e.color.hsl.s+"%,"+e.color.hsl.l+"%,"+e.opacity+")";return n}),n=new Blob([s],{type:"image/svg+xml;charset=utf-8"}),r=window.URL||window.webkitURL||window,c=r.createObjectURL(n),o=new Image;o.addEventListener("load",function(){e.img.obj=o,e.img.loaded=!0,r.revokeObjectURL(c),i.tmp.count_svg++}),o.src=c},i.fn.vendors.destroypJS=function(){cancelAnimationFrame(i.fn.drawAnimFrame),t.remove(),pJSDom=null},i.fn.vendors.drawShape=function(e,a,t,i,s,n){var r=s*n,c=s/n,o=180*(c-2)/c,l=Math.PI-Math.PI*o/180;e.save(),e.beginPath(),e.translate(a,t),e.moveTo(0,0);for(var v=0;r>v;v++)e.lineTo(i,0),e.translate(i,0),e.rotate(l);e.fill(),e.restore()},i.fn.vendors.exportImg=function(){window.open(i.canvas.el.toDataURL("image/png"),"_blank")},i.fn.vendors.loadImg=function(e){if(i.tmp.img_error=void 0,""!=i.particles.shape.image.src)if("svg"==e){var a=new XMLHttpRequest;a.open("GET",i.particles.shape.image.src),a.onreadystatechange=function(e){4==a.readyState&&(200==a.status?(i.tmp.source_svg=e.currentTarget.response,i.fn.vendors.checkBeforeDraw()):(console.log("Error pJS - Image not found"),i.tmp.img_error=!0))},a.send()}else{var t=new Image;t.addEventListener("load",function(){i.tmp.img_obj=t,i.fn.vendors.checkBeforeDraw()}),t.src=i.particles.shape.image.src}else console.log("Error pJS - No image.src"),i.tmp.img_error=!0},i.fn.vendors.draw=function(){"image"==i.particles.shape.type?"svg"==i.tmp.img_type?i.tmp.count_svg>=i.particles.number.value?(i.fn.particlesDraw(),i.particles.move.enable?i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw):cancelRequestAnimFrame(i.fn.drawAnimFrame)):i.tmp.img_error||(i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw)):void 0!=i.tmp.img_obj?(i.fn.particlesDraw(),i.particles.move.enable?i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw):cancelRequestAnimFrame(i.fn.drawAnimFrame)):i.tmp.img_error||(i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw)):(i.fn.particlesDraw(),i.particles.move.enable?i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw):cancelRequestAnimFrame(i.fn.drawAnimFrame))},i.fn.vendors.checkBeforeDraw=function(){"image"==i.particles.shape.type?"svg"==i.tmp.img_type&&void 0==i.tmp.source_svg?i.tmp.checkAnimFrame=requestAnimFrame(check):(cancelRequestAnimFrame(i.tmp.checkAnimFrame),i.tmp.img_error||(i.fn.vendors.init(),i.fn.vendors.draw())):(i.fn.vendors.init(),i.fn.vendors.draw())},i.fn.vendors.init=function(){i.fn.retinaInit(),i.fn.canvasInit(),i.fn.canvasSize(),i.fn.canvasPaint(),i.fn.particlesCreate(),i.fn.vendors.densityAutoParticles(),i.particles.line_linked.color_rgb_line=hexToRgb(i.particles.line_linked.color)},i.fn.vendors.start=function(){isInArray("image",i.particles.shape.type)?(i.tmp.img_type=i.particles.shape.image.src.substr(i.particles.shape.image.src.length-3),i.fn.vendors.loadImg(i.tmp.img_type)):i.fn.vendors.checkBeforeDraw()},i.fn.vendors.eventsListeners(),i.fn.vendors.start()};Object.deepExtend=function(e,a){for(var t in a)a[t]&&a[t].constructor&&a[t].constructor===Object?(e[t]=e[t]||{},arguments.callee(e[t],a[t])):e[t]=a[t];return e},window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}(),window.cancelRequestAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout}(),window.pJSDom=[],window.particlesJS=function(e,a){"string"!=typeof e&&(a=e,e="particles-js"),e||(e="particles-js");var t=document.getElementById(e),i="particles-js-canvas-el",s=t.getElementsByClassName(i);if(s.length)for(;s.length>0;)t.removeChild(s[0]);var n=document.createElement("canvas");n.className=i,n.style.width="100%",n.style.height="100%";var r=document.getElementById(e).appendChild(n);null!=r&&pJSDom.push(new pJS(e,a))},window.particlesJS.load=function(e,a,t){var i=new XMLHttpRequest;i.open("GET",a),i.onreadystatechange=function(a){if(4==i.readyState)if(200==i.status){var s=JSON.parse(a.currentTarget.response);window.particlesJS(e,s),t&&t()}else console.log("Error pJS - XMLHttpRequest status: "+i.status),console.log("Error pJS - File config not found")},i.send()};

$(document).ready(function(){

  $(window).resize(function() {
    if($(window).width() > 1000 && $('header').hasClass('mobile')) {
      $('header').removeClass('mobile')
      $('header ul').removeClass('mobile')
    }
  })

  particlesJS.load('particles', 'assets/particles.json', function() {
  });

  $('footer p').text('@ ' + new Date().getFullYear() + ' OOO "Flow Health"');

  $('.toggle-nav').click(function() {
    $(this).toggleClass('active')
    $('header').toggleClass('mobile')
    $('header ul').toggleClass('mobile')
  })

  $('.contact-form #close').click(function() {
    $('.contact-form').removeClass('active')
  })

  $('.m-w').click(function() {
    $(this).removeClass('active')
    $('body').css({
      overflowY: 'auto'
    })
  })

  $('.down').click(function() {
    $('html, body').animate({scrollTop: $('#two').offset().top -130 }, 'slow');
  })

  $('#s1').click(function() {
    $('header').removeClass('mobile')
    $('header ul').removeClass('mobile')
    $('.toggle-nav').removeClass('mobile')
    $('html, body').animate({scrollTop: $('#two').offset().top -70 }, 'slow');
  })

  $('#s2').click(function() {
    $('header').removeClass('mobile')
    $('header ul').removeClass('mobile')
    $('.toggle-nav').removeClass('mobile')
    $('html, body').animate({scrollTop: $('#three').offset().top -300}, 'slow');
  })

  $('#s3').click(function() {
    $('header').removeClass('mobile')
    $('header ul').removeClass('mobile')
    $('.toggle-nav').removeClass('mobile')
    $('html, body').animate({scrollTop: $('#three').offset().top + 200}, 'slow');
  })

  $('#s4').click(function() {
    $('header').removeClass('mobile')
    $('header ul').removeClass('mobile')
    $('.toggle-nav').removeClass('mobile')
    $('html, body').animate({scrollTop: $('#four').offset().top + 100}, 'slow');
  })

  $('#s5').click(function() {
    $('header').removeClass('mobile')
    $('header ul').removeClass('mobile')
    $('.toggle-nav').removeClass('mobile')
    $('html, body').animate({scrollTop: $('#five').offset().top}, 'slow');
  })

  $('#s6').click(function() {
    $('header').removeClass('mobile')
    $('header ul').removeClass('mobile')
    $('.toggle-nav').removeClass('mobile')
    $('html, body').animate({scrollTop: $('#six').offset().top -300}, 'slow');
  })

  $('#s7').click(function() {
    $('header').removeClass('mobile')
    $('header ul').removeClass('mobile')
    $('.toggle-nav').removeClass('mobile')
    $('html, body').animate({scrollTop: $('#six').offset().top }, 'slow');
  })

  var slider = $('.peppermint').Peppermint({
    dots: false,
    slideShow: false,
    onSlideChange: function() {
      var activeSlide = slider.data('Peppermint').getCurrentPos();
      if(activeSlide+1 === 1) {
        $('#slide-2').removeClass('active')
        $('#slide-3').removeClass('active')
      }
      if(activeSlide+1 === 2) {
        $('#slide-1').removeClass('active')
        $('#slide-3').removeClass('active')
      }
      if(activeSlide+1 === 3) {
        $('#slide-1').removeClass('active')
        $('#slide-2').removeClass('active')
      }
      $('#slide-' + (activeSlide+1)).addClass('active')
    }
  });



  $('#slide-1').click(function() {
    if($('#slide-2').hasClass('active')) {
      $('#slide-2').removeClass('active')
    }
    if($('#slide-3').hasClass('active')) {
      $('#slide-3').removeClass('active')
    }
    $(this).addClass('active')
    slider.data('Peppermint').slideTo(0)
  })


  $('#slide-2').click(function() {
    if($('#slide-1').hasClass('active')) {
      $('#slide-1').removeClass('active')
    }
    if($('#slide-3').hasClass('active')) {
      $('#slide-3').removeClass('active')
    }
    $(this).addClass('active')
    slider.data('Peppermint').slideTo(1)
  })

  $('#slide-3').click(function() {
    if($('#slide-1').hasClass('active')) {
      $('#slide-1').removeClass('active')
    }
    if($('#slide-2').hasClass('active')) {
      $('#slide-2').removeClass('active')
    }
    $(this).addClass('active')
    slider.data('Peppermint').slideTo(2)
  })

  $('#contact').click(function() {
    $('.toggle-nav').toggleClass('mobile')
    $('.contact-form').toggleClass('active')
  })

  $('.modal-contact').click(function() {
    $('.m-w').removeClass('active');
    $('.contact-form').addClass('active')
  })

  $('.contact').click(function() {
    $('.toggle-nav').toggleClass('mobile')
    $('.contact-form').toggleClass('active')
  })

  $('.open-modal').click(function() {
    $('.m-w').addClass('active');
    $('body').css({
      overflowY: 'hidden'
    })
  })

  $('.submit').click(function() {
    var name = $('#name').val()
    var email = $('#email').val()
    var message = $('#message').val()
    if(!name || !email || !message) {
      var error = 'All fields are required.'
      $('.n').addClass('active')
      $('.n').find('p').text(error)
      setTimeout(function() {
        $('.n').removeClass('active')
      }, 3000)
    } else if (name && email && message){

      if(!ValidateEmail(email)) {
        $('.n').addClass('active')
        $('.n').find('p').text("You have entered an invalid email address!")
        setTimeout(function() {
          $('.n').removeClass('active')
        }, 3000)
        return
      }

      var data = {
        name: name,
        email: email,
        message: message
      }
      var request = $.ajax({
        method: "POST",
        url: 'http://eigengraph.com/v1/contact',
        data: data
      })
      request.done(function(res) {
        $('.n').addClass('active')
        $('.n').find('p').text('Success!')
        setTimeout(function() {
          $('.contact-form').removeClass('active')
          $('.n').removeClass('active')
        }, 3000)
      })

      request.fail(function( jqXHR, textStatus ) {
        $('.n').addClass('active')
        $('.n').find('p').text('Something went wrong! Please try again later.')
        setTimeout(function() {
          $('.contact-form').removeClass('active')
          $('.n').removeClass('active')
        }, 3000)
      });
    }
  })

});

function ValidateEmail(mail)
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    return (false)
}

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-40015416-3', 'auto');
ga('send', 'pageview');
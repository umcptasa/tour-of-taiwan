(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{C331:function(t,e,n){"use strict";n("2Spj"),n("HAE/"),n("pIFo");var i="bfred-it:object-fit-images",a=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,o="undefined"==typeof Image?{style:{"object-position":1}}:new Image,r="object-fit"in o.style,c="object-position"in o.style,l="background-size"in o.style,s="string"==typeof o.currentSrc,f=o.getAttribute,d=o.setAttribute,u=!1;function p(t,e,n){var i="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+(e||1)+"' height='"+(n||0)+"'%3E%3C/svg%3E";f.call(t,"src")!==i&&d.call(t,"src",i)}function g(t,e){t.naturalWidth?e(t):setTimeout(g,100,t,e)}function m(t){var e=function(t){for(var e,n=getComputedStyle(t).fontFamily,i={};null!==(e=a.exec(n));)i[e[1]]=e[2];return i}(t),n=t[i];if(e["object-fit"]=e["object-fit"]||"fill",!n.img){if("fill"===e["object-fit"])return;if(!n.skipTest&&r&&!e["object-position"])return}if(!n.img){n.img=new Image(t.width,t.height),n.img.srcset=f.call(t,"data-ofi-srcset")||t.srcset,n.img.src=f.call(t,"data-ofi-src")||t.src,d.call(t,"data-ofi-src",t.src),t.srcset&&d.call(t,"data-ofi-srcset",t.srcset),p(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{!function(t){var e={get:function(e){return t[i].img[e||"src"]},set:function(e,n){return t[i].img[n||"src"]=e,d.call(t,"data-ofi-"+n,e),m(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}(t)}catch(o){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}!function(t){if(t.srcset&&!s&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}(n.img),t.style.backgroundImage='url("'+(n.img.currentSrc||n.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=e["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(e["object-fit"])?g(n.img,(function(){n.img.naturalWidth>t.width||n.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"})):t.style.backgroundSize=e["object-fit"].replace("none","auto").replace("fill","100% 100%"),g(n.img,(function(e){p(t,e.naturalWidth,e.naturalHeight)}))}function b(t,e){var n=!u&&!t;if(e=e||{},t=t||"img",c&&!e.skipTest||!l)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var a=0;a<t.length;a++)t[a][i]=t[a][i]||{skipTest:e.skipTest},m(t[a]);n&&(document.body.addEventListener("load",(function(t){"IMG"===t.target.tagName&&b(t.target,{skipTest:e.skipTest})}),!0),u=!0,t="img"),e.watchMQ&&window.addEventListener("resize",b.bind(null,t,{skipTest:e.skipTest}))}b.supportsObjectFit=r,b.supportsObjectPosition=c,function(){function t(t,e){return t[i]&&t[i].img&&("src"===e||"srcset"===e)?t[i].img:t}c||(HTMLImageElement.prototype.getAttribute=function(e){return f.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,n){return d.call(t(this,e),e,String(n))})}(),t.exports=b},HWyw:function(t,e,n){"use strict";var i=n("vm6e"),a=n.n(i);n.d(e,"a",(function(){return a.a}));var o=n("WB8x"),r=n.n(o);n.d(e,"b",(function(){return r.a}))},J8Af:function(t,e,n){"use strict";n("91GP");var i=n("y4MT"),a={tooltip:{padding:"10px 15px",minWidth:"130px",color:"#555555",lineHeight:"1.7em",background:"#FFFFFF",border:"none",borderRadius:"3px",boxShadow:"0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)",maxWidth:"200px",textAlign:"center",fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif',fontSize:"0.875em",fontStyle:"normal",fontWeight:"400",textShadow:"none",textTransform:"none",letterSpacing:"normal",wordBreak:"normal",wordSpacing:"normal",wordWrap:"normal",whiteSpace:"normal",lineBreak:"auto"}};e.a=function(t){var e,n;return Object.assign({list:Object.assign({},i.f,{fontSize:"14px",margin:0,paddingLeft:"0",listStyle:"none",paddingTop:"0",paddingBottom:"0",color:"inherit"}),listItem:(e={float:"left",color:"inherit",position:"relative",display:"block",width:"auto",margin:"0",padding:"0"},e[t.breakpoints.down("sm")]={width:"100%","&:after":{width:"calc(100% - 30px)",content:'""',display:"block",height:"1px",marginLeft:"15px",backgroundColor:"#e5e5e5"}},e),listItemText:{padding:"0 !important"},navLink:(n={color:"inherit",position:"relative",padding:"0.9375rem",fontWeight:"400",fontSize:"12px",textTransform:"uppercase",borderRadius:"3px",lineHeight:"20px",textDecoration:"none",margin:"0px",display:"inline-flex","&:hover,&:focus":{color:"inherit",background:"rgba(200, 200, 200, 0.2)"}},n[t.breakpoints.down("sm")]={width:"calc(100% - 30px)",marginLeft:"15px",marginBottom:"8px",marginTop:"8px",textAlign:"left","& > span:first-child":{justifyContent:"flex-start"}},n),notificationNavLink:{color:"inherit",padding:"0.9375rem",fontWeight:"400",fontSize:"12px",textTransform:"uppercase",lineHeight:"20px",textDecoration:"none",margin:"0px",display:"inline-flex",top:"4px"},registerNavLink:{top:"3px",position:"relative",fontWeight:"400",fontSize:"12px",textTransform:"uppercase",lineHeight:"20px",textDecoration:"none",margin:"0px",display:"inline-flex"},navLinkActive:{color:"inherit",backgroundColor:"rgba(255, 255, 255, 0.1)"},icons:{width:"20px",height:"20px",marginRight:"3px"},socialIcons:{position:"relative",fontSize:"20px !important",marginRight:"4px"},dropdownLink:{"&,&:hover,&:focus":{color:"inherit",textDecoration:"none",display:"block",padding:"10px 20px"}}},a,{marginRight5:{marginRight:"5px"}})}},JM68:function(t){t.exports=JSON.parse('{"data":{"file":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,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","aspectRatio":0.5625,"src":"/tour-of-taiwan/static/12941f3608f583c55842fcf81f0dbfa3/af144/totmap.png","srcSet":"/tour-of-taiwan/static/12941f3608f583c55842fcf81f0dbfa3/7c0ed/totmap.png 200w,\\n/tour-of-taiwan/static/12941f3608f583c55842fcf81f0dbfa3/647de/totmap.png 400w,\\n/tour-of-taiwan/static/12941f3608f583c55842fcf81f0dbfa3/af144/totmap.png 800w,\\n/tour-of-taiwan/static/12941f3608f583c55842fcf81f0dbfa3/728bb/totmap.png 1080w","sizes":"(max-width: 800px) 100vw, 800px"}}}}}')},PVRY:function(t,e,n){"use strict";n.r(e);var i=n("JM68"),a=n("q1tI"),o=n.n(a),r=n("ciIH"),c=n.n(r),l=n("Hk+Y"),s=n.n(l),f=n("1OZW"),d=n.n(f),u=n("0G56"),p=n.n(u),g=n("Sk/v"),m=n.n(g),b=n("SNP2"),h=n.n(b),v=n("HWyw"),x=n("J8Af");e.default=s()(x.a)((function(t){var e=t.classes,n=o.a.useState(!1),a=n[0],r=n[1],l=i.data,s=function(){r(!1)};return o.a.createElement("div",null,o.a.createElement(d.a,{className:e.navLink,onClick:function(){r(!0)}},o.a.createElement(v.a,{className:e.icons}),"Map"),o.a.createElement(p.a,{fullWidth:!0,open:a,onClose:s,"aria-labelledby":"map-dialog-title","aria-describedby":"map-dialog-description"},o.a.createElement(h.a,null,o.a.createElement(c.a,{fluid:l.file.childImageSharp.fluid,objectFit:"contain",style:{width:"100%",height:"100%"},alt:"Map"})),o.a.createElement(m.a,null,o.a.createElement(d.a,{autoFocus:!0,onClick:s,color:"primary"},"Close"))))}))},WB8x:function(t,e,n){"use strict";n("HAE/");var i=n("TqRt");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("q1tI")),o=(0,i(n("8/g6")).default)(a.default.createElement(a.default.Fragment,null,a.default.createElement("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),a.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),a.default.createElement("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"})),"Schedule");e.default=o},ciIH:function(t,e,n){"use strict";n("VRzm"),n("Btvt");var i=n("284h"),a=n("TqRt");e.__esModule=!0,e.default=void 0;var o=a(n("pVnL")),r=a(n("8OQS")),c=a(n("284h")),l=a(n("PJYZ")),s=a(n("VbXa")),f=a(n("lSNA")),d=i(n("q1tI")),u=a(n("17x9")),p=a(n("9eSz")),g=function(t){function e(){for(var e,n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return e=t.call.apply(t,[this].concat(i))||this,(0,f.default)((0,l.default)(e),"imageRef",e.props.innerRef||(0,d.createRef)()),e}(0,s.default)(e,t);var i=e.prototype;return i.componentDidMount=function(){var t=this,e=document.createElement("img");void 0!==e.style.objectFit&&void 0!==e.style.objectPosition||Promise.resolve().then((function(){return(0,c.default)(n("C331"))})).then((function(e){return(0,e.default)(t.imageRef.current.imageRef.current)}))},i.render=function(){var t=this.props,e=t.objectFit,n=t.objectPosition,i=(0,r.default)(t,["objectFit","objectPosition"]);return d.default.createElement(p.default,(0,o.default)({ref:this.imageRef},i,{imgStyle:(0,o.default)({},i.imgStyle,{objectFit:e,objectPosition:n,fontFamily:'"object-fit: '+e+"; object-position: "+n+'"'})}))},e}(d.Component);g.propTypes={objectFit:u.default.string,objectPosition:u.default.string},g.defaultProps={objectFit:"cover",objectPosition:"50% 50%"};var m=(0,d.forwardRef)((function(t,e){return d.default.createElement(g,(0,o.default)({},t,{innerRef:e}))}));e.default=m},vm6e:function(t,e,n){"use strict";n("HAE/");var i=n("TqRt");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("q1tI")),o=(0,i(n("8/g6")).default)(a.default.createElement(a.default.Fragment,null,a.default.createElement("path",{d:"M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"}),a.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"Map");e.default=o}}]);
//# sourceMappingURL=component---src-pages-map-page-map-dialog-jsx-21eb82eaf06b77038c38.js.map
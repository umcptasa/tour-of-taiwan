(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("0mN4");var i=a("TqRt");t.__esModule=!0,t.default=void 0;var r,s=i(a("PJYZ")),n=i(a("VbXa")),o=i(a("8OQS")),d=i(a("pVnL")),l=i(a("q1tI")),u=i(a("17x9")),c=function(e){var t=(0,d.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},g=Object.create({}),p=function(e){var t=c(e),a=f(t);return g[a]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,b=m&&window.IntersectionObserver,y=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,s=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},i&&l.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:s}),l.default.createElement("source",{media:r,srcSet:a,sizes:s}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function E(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function v(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function A(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,s=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(s?'sizes="'+s+'" ':"")+"/>"}var R=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',n=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?A(e,!0):"")+A(e)})).join("")+"<img "+l+n+o+a+i+t+s+r+d+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=function(e){var t=e.src,a=e.imageVariants,i=e.generateSources,r=e.spreadProps,s=l.default.createElement(C,(0,d.default)({src:t},r));return a.length>1?l.default.createElement("picture",null,i(a),s):s},C=l.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,s=e.style,n=e.onLoad,u=e.onError,c=e.onClick,f=e.loading,g=e.draggable,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","onClick","loading","draggable"]);return l.default.createElement("img",(0,d.default)({sizes:a,srcSet:i,src:r},p,{onLoad:n,onError:u,onClick:c,ref:t,loading:f,draggable:g,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))}));C.propTypes={style:u.default.object,onError:u.default.func,onClick:u.default.func,onLoad:u.default.func};var V=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=m&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!h&&b&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||m&&(h||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)(a)),a.handleRef=a.handleRef.bind((0,s.default)(a)),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=f(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,s=void 0===r?{}:r,n=e.imgStyle,o=void 0===n?{}:n,u=e.placeholderStyle,f=void 0===u?{}:u,g=e.placeholderClassName,p=e.fluid,h=e.fixed,m=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,w=e.itemProp,A=e.loading,R=e.draggable,V=!1===this.state.fadeIn||this.state.imgLoaded,k=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,d.default)({opacity:V?1:0,transition:k?"opacity "+b+"ms":"none"},o),N="boolean"==typeof m?"lightgray":m,z={transitionDelay:b+"ms"},P=(0,d.default)({opacity:this.state.imgLoaded?0:1},k&&z,{},o,{},f),x={title:t,alt:this.state.isVisible?"":a,style:P,className:g,itemProp:w};if(p){var G=p,T=G[0];return l.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},l.default.createElement(y,{style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),N&&l.default.createElement(y,{title:t,style:(0,d.default)({backgroundColor:N,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},k&&z)}),T.base64&&l.default.createElement(L,{src:T.base64,spreadProps:x,imageVariants:G,generateSources:v}),T.tracedSVG&&l.default.createElement(L,{src:T.tracedSVG,spreadProps:x,imageVariants:G,generateSources:E}),this.state.isVisible&&l.default.createElement("picture",null,S(G),l.default.createElement(C,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:w,loading:A,draggable:R})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,d.default)({alt:a,title:t,loading:A},T,{imageVariants:G}))}}))}if(h){var q=h,K=q[0],F=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:K.width,height:K.height},s);return"inherit"===s.display&&delete F.display,l.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:F,ref:this.handleRef,key:"fixed-"+JSON.stringify(K.srcSet)},N&&l.default.createElement(y,{title:t,style:(0,d.default)({backgroundColor:N,width:K.width,opacity:this.state.imgLoaded?0:1,height:K.height},k&&z)}),K.base64&&l.default.createElement(L,{src:K.base64,spreadProps:x,imageVariants:q,generateSources:v}),K.tracedSVG&&l.default.createElement(L,{src:K.tracedSVG,spreadProps:x,imageVariants:q,generateSources:E}),this.state.isVisible&&l.default.createElement("picture",null,S(q),l.default.createElement(C,{alt:a,title:t,width:K.width,height:K.height,sizes:K.sizes,src:K.src,crossOrigin:this.props.crossOrigin,srcSet:K.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:w,loading:A,draggable:R})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,d.default)({alt:a,title:t,loading:A},K,{imageVariants:q}))}}))}return null},t}(l.default.Component);V.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var k=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),O=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});V.propTypes={resolutions:k,sizes:O,fixed:u.default.oneOfType([k,u.default.arrayOf(k)]),fluid:u.default.oneOfType([O,u.default.arrayOf(O)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onClick:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var N=V;t.default=N},sH1A:function(e,t,a){"use strict";a.r(t);var i=a("u/+f"),r=a("q1tI"),s=a.n(r),n=a("9eSz"),o=a.n(n);a("fYq0");t.default=function(e){var t=e.amount,a=i.data;return s.a.createElement("div",{id:"f1_container"},s.a.createElement("div",{id:"f1_card",className:"shadow"},s.a.createElement("div",{className:"front face center"},s.a.createElement(o.a,{fluid:a.file.childImageSharp.fluid,alt:"Youyouka"})),s.a.createElement("div",{className:"back face center"},s.a.createElement("p",null,s.a.createElement("b",null,"Remaining balance:")," ",t))))}},"u/+f":function(e){e.exports=JSON.parse('{"data":{"file":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAAC/ElEQVQ4y42T109UQRSHB1ysWFAffPLBGCMmiA1Rog+amOiDGDWW+E9orIDIgonRF6OIgkZYIGhslF0NRo0obKG5S01AAdeVBXFXKdvu3jo/586Fd0/uuTNnynfKzJBJ20lPvPEoQrYjWsiaTUPWwwjVH4Tw4yMkDVBlEVPRONKKv8CUb0dykRPLrzuxoMCONbc6MRAQ6HRUpqpKIYpihIi2AxBeZlChdg+E+n0QbAxWvx/x92egyVHo0jMRBclzguS7kFDgArliZ9qKhq4BhGe8eNT9FRqNUX0tEbwfNGXAAtGVQ4XG4zRWuxexF1mIPtmKeL+FA5/1/uaQJHMrSI4daSVdsA5OsRkZEVsHhtocNIowQEGJzH4whFJxGoqvCfKwBZLnHKKOC3ziXtsvDiK5Dqy/48FfQeLjU+EIppuGIXunEYpFoKoKiCTGGUpjn4Y5UUYExJ72QgoGuP2gnQEvtWBRURs84yHDuwo4W+1o9tjh7nNj7NsPPk4kyfA2BwzfaoHfZIaPXELwRC0f6x6LgFxsRuEnH7c/j7tx+uN5ZFpPI+15NjLrTuGs6yZ6J7/NAlU6C3PgJwONkgL4E8ysvQqR1U+Xis5xSDLwyvsWiyu2gTzciPnl6VhYvoW1m5m9AaursxhQEPmGeJOXA/zEDH9iIddRkofgoRooM3G+pqS/BkmPNyPZsh0rq3ZheeVOrisqM7m91LIDRFaYW1nDxKb7LLo8+OcV8gh5lElF+E7Ogt7uQk3wPRJLN/GNq6p3I4W1KVWZHKiDdCccqLDyRYrbGewy9ZuKDBAxG1ATi5Q5+VPZgdR3x0CK14I8SuXpkbINvK+nvKwyg6fLUxZnYnRi3V09XarXbQ6mR/qT5CCQXgZZFNEW7MHToTd4PPgKFV/r8GykEa99n/FpvB0dgT7axw6EKSXhCjcD5FJetzkYP5B8jC25Aan7F/5TjJcyurN0+LcOSTRro8SI0ABfg9AwaKxUVHYRVCiawlSdVaOvGqrfZCiqovwDzgYVOjVYZwkAAAAASUVORK5CYII=","aspectRatio":1.5686274509803921,"src":"/tour-of-taiwan/static/70ed27b2cad2228b859bf84a12823287/af144/youyouka.png","srcSet":"/tour-of-taiwan/static/70ed27b2cad2228b859bf84a12823287/7c0ed/youyouka.png 200w,\\n/tour-of-taiwan/static/70ed27b2cad2228b859bf84a12823287/647de/youyouka.png 400w,\\n/tour-of-taiwan/static/70ed27b2cad2228b859bf84a12823287/af144/youyouka.png 800w,\\n/tour-of-taiwan/static/70ed27b2cad2228b859bf84a12823287/ba299/youyouka.png 1200w","sizes":"(max-width: 800px) 100vw, 800px"}}}}}')}}]);
//# sourceMappingURL=component---src-pages-main-page-card-jsx-5027f148bbb522977a4d.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"3nLz":function(e,t,a){"use strict";a("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("YbXK"),a("eMsz"),a("3nLz");var r=a("5NKs");t.__esModule=!0,t.default=void 0;var i,n=r(a("v06X")),s=r(a("XEEL")),o=r(a("uDP2")),d=r(a("j8BX")),l=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},g=Object.create({}),p=function(e){var t=u(e),a=f(t);return g[a]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,b=m&&window.IntersectionObserver,y=new WeakMap;function v(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),l.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function E(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+l+s+o+a+r+t+n+i+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=l.default.createElement(A,(0,d.default)({src:t},i));return a.length>1?l.default.createElement("picture",null,r(a),n):n},A=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return l.default.createElement("img",(0,d.default)({sizes:a,srcSet:r,src:i},g,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));A.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var z=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=m&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!h&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||m&&(h||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,g=e.placeholderClassName,p=e.fluid,h=e.fixed,m=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,S=e.itemProp,I=e.loading,L=e.draggable,z=!1===this.state.fadeIn||this.state.imgLoaded,V=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,d.default)({opacity:z?1:0,transition:V?"opacity "+b+"ms":"none"},o),j="boolean"==typeof m?"lightgray":m,B={transitionDelay:b+"ms"},N=(0,d.default)({opacity:this.state.imgLoaded?0:1},V&&B,{},o,{},f),k={title:t,alt:this.state.isVisible?"":a,style:N,className:g};if(p){var x=p,D=x[0];return l.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(D.srcSet)},l.default.createElement(y,{style:{width:"100%",paddingBottom:100/D.aspectRatio+"%"}}),j&&l.default.createElement(y,{title:t,style:(0,d.default)({backgroundColor:j,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},V&&B)}),D.base64&&l.default.createElement(O,{src:D.base64,spreadProps:k,imageVariants:x,generateSources:E}),D.tracedSVG&&l.default.createElement(O,{src:D.tracedSVG,spreadProps:k,imageVariants:x,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,v(x),l.default.createElement(A,{alt:a,title:t,sizes:D.sizes,src:D.src,crossOrigin:this.props.crossOrigin,srcSet:D.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:I,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,d.default)({alt:a,title:t,loading:I},D,{imageVariants:x}))}}))}if(h){var M=h,P=M[0],U=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},n);return"inherit"===n.display&&delete U.display,l.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:U,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},j&&l.default.createElement(y,{title:t,style:(0,d.default)({backgroundColor:j,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},V&&B)}),P.base64&&l.default.createElement(O,{src:P.base64,spreadProps:k,imageVariants:M,generateSources:E}),P.tracedSVG&&l.default.createElement(O,{src:P.tracedSVG,spreadProps:k,imageVariants:M,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,v(M),l.default.createElement(A,{alt:a,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:I,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,d.default)({alt:a,title:t,loading:I},P,{imageVariants:M}))}}))}return null},t}(l.default.Component);z.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var V=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),C=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});z.propTypes={resolutions:V,sizes:C,fixed:c.default.oneOfType([V,c.default.arrayOf(V)]),fluid:c.default.oneOfType([C,c.default.arrayOf(C)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var j=z;t.default=j},SGlo:function(e,t,a){"use strict";var r=a("rj/q"),i=a("N+BI").getWeak,n=a("1a8y"),s=a("BjK0"),o=a("xa9o"),d=a("yde8"),l=a("Wadk"),c=a("qDzq"),u=a("O1i0"),f=l(5),g=l(6),p=0,h=function(e){return e._l||(e._l=new m)},m=function(){this.a=[]},b=function(e,t){return f(e.a,(function(e){return e[0]===t}))};m.prototype={get:function(e){var t=b(this,e);if(t)return t[1]},has:function(e){return!!b(this,e)},set:function(e,t){var a=b(this,e);a?a[1]=t:this.a.push([e,t])},delete:function(e){var t=g(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,a,n){var l=e((function(e,r){o(e,l,t,"_i"),e._t=t,e._i=p++,e._l=void 0,null!=r&&d(r,a,e[n],e)}));return r(l.prototype,{delete:function(e){if(!s(e))return!1;var a=i(e);return!0===a?h(u(this,t)).delete(e):a&&c(a,this._i)&&delete a[this._i]},has:function(e){if(!s(e))return!1;var a=i(e);return!0===a?h(u(this,t)).has(e):a&&c(a,this._i)}}),l},def:function(e,t,a){var r=i(n(t),!0);return!0===r?h(e).set(t,a):r[e._i]=a,e},ufstore:h}},eMsz:function(e,t,a){"use strict";var r,i=a("emib"),n=a("Wadk")(0),s=a("IYdN"),o=a("N+BI"),d=a("k5Iv"),l=a("SGlo"),c=a("BjK0"),u=a("O1i0"),f=a("O1i0"),g=!i.ActiveXObject&&"ActiveXObject"in i,p=o.getWeak,h=Object.isExtensible,m=l.ufstore,b=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},y={get:function(e){if(c(e)){var t=p(e);return!0===t?m(u(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return l.def(u(this,"WeakMap"),e,t)}},v=e.exports=a("94Pd")("WeakMap",b,y,l,!0,!0);f&&g&&(d((r=l.getConstructor(b,"WeakMap")).prototype,y),o.NEED=!0,n(["delete","has","get","set"],(function(e){var t=v.prototype,a=t[e];s(t,e,(function(t,i){if(c(t)&&!h(t)){this._f||(this._f=new r);var n=this._f[e](t,i);return"set"==e?this:n}return a.call(this,t,i)}))})))},"lxE/":function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADkUlEQVQ4y41UWyh0URSe5kzyqkhE4UFCI68e3FMolxc0GCLKJbmmRIRCRJQSJTIGDy4hD0iamCH0j6HcUzxKIWKcY69/rc0ZM37yr9qdvc/ea+1vfd/aS6H4xgBAwRjjc/raD/t/vxoFmpiY4PPDw0PF6OioEB8fL8j75+fnwtrammAwGPh6bGzs58C0UVtby+enp6fKrxfRsDej0cjPeHp6KiRJ+heZbHq9Xvj4p9zY2Mjo7+/XlZWVGba2tgyPj4/jFxcXGtzjZwYHBwV7QDYbGhr6Giyoq6trLyYmBvLz86G8vBympqbAZDJBTU0NtLa2/sEzajrb09PDfdra2hzRzc7O8hQsFktQZ2fnfXp6OoSHh4tJSUliVFSU1N7eLlVUVIjZ2dliU1MT4OUPyDMPOjMzw33f3t7eoR4dHcnBlZjeXnBwMERGRlojIiIgMDCQ+fn5sbi4OFZUVMQIrUajsTY3N0Nvb69ZTn97e5t4fUeJiPjP6enpDLVaDa6urqK/vz/4+PgwFxcX5ubmBr6+voAXsMrKSoa8UuqvsbGxMDc3l0W+IyMjgo1MZ2dnvsDDOi8vL3B3dxc9PDwYoQsICABvb2/ANWAVgNlsZi0tLayhoUHUarVQVVWl/5BCyemT1aEF8mNARIBDooDJyclchLy8PEDS4fLyEpAeyMzMZJiVhDUKyLFR1uHg4MAxYGNjo6G+vh4KCwslRMrCwsIgNzcXUBBITU2Fvr4+uL6+hpSUFJaWliYRcvya5IAo6HvA7u5unvLy8vL4ysoKbG5ukrJcCBIGXwdgTcL+/j5YrVaG5BN6EbmGkpISx5TJdnd3eUDkR7O+vg5LS0tiSEgIlJaWsuLiYkb19/T0BFdXVwydGAIAlUr1SgJOTk5qyRcV/xQF05DTFlDBP5Sqk5OTtaCgAHJychiWCDs+PuYDEVKaVtynoregj0rmDwv+s7B3dnbk4lR3dHQ8EEIcr6Tm8PCwhOik29tb8e7u7jU6OhqQjsf7+/tQ8sF9pcPzkwtyfn5efnrqgYEBc0JCAiQmJsLCwgKlS/wBXgjYkSzIKQ9WXV3NfbB8HDuNbMifHFRYXV3Nqqur02MbM2K5mBCRXhRFrZwmov++OZBRCwoN5Zcqzs7Ofm1fOp3OdgbR/9wTFxcX+fz5+ZmcCIHN8eTkRIlpC3L/e3l5+b/OTV0D+55tfnNzo8BeaEOJ4vwY6C9cN4/y0oO7PgAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/c8b9e2c5b6584f142d2ccc4a15ff45e8/b74f5/me.png","srcSet":"/static/c8b9e2c5b6584f142d2ccc4a15ff45e8/7c0ed/me.png 200w,\\n/static/c8b9e2c5b6584f142d2ccc4a15ff45e8/647de/me.png 400w,\\n/static/c8b9e2c5b6584f142d2ccc4a15ff45e8/b74f5/me.png 660w","sizes":"(max-width: 660px) 100vw, 660px"}}}}}')},"t+fG":function(e,t,a){var r=a("P8UN"),i=a("96qb"),n=a("ap2Z"),s=/"/g,o=function(e,t,a,r){var i=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},tBDR:function(e,t,a){"use strict";var r=a("lxE/"),i=a("q1tI"),n=a.n(i),s=a("9eSz"),o=a.n(s);t.a=function(){var e=r.data;return n.a.createElement(o.a,{fluid:e.placeholderImage.childImageSharp.fluid,style:{zIndex:"-100"}})}}}]);
//# sourceMappingURL=08210923eff1326b612ab412984fdacafa9bc529-161a01776d85dcd41100.js.map
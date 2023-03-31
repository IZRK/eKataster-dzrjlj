import{_ as st,ag as M,j as ut,k as ft,d as G,I as U,F as ct}from"./index.be0ba1f9.js";var C={RADIANS:"radians",DEGREES:"degrees",FEET:"ft",METERS:"m",PIXELS:"pixels",TILE_PIXELS:"tile-pixels",USFEET:"us-ft"},P={};P[C.RADIANS]=6370997/(2*Math.PI);P[C.DEGREES]=2*Math.PI*6370997/360;P[C.FEET]=.3048;P[C.METERS]=1;P[C.USFEET]=1200/3937;var X=C,lt=function(){function n(e){this.code_=e.code,this.units_=e.units,this.extent_=e.extent!==void 0?e.extent:null,this.worldExtent_=e.worldExtent!==void 0?e.worldExtent:null,this.axisOrientation_=e.axisOrientation!==void 0?e.axisOrientation:"enu",this.global_=e.global!==void 0?e.global:!1,this.canWrapX_=!!(this.global_&&this.extent_),this.getPointResolutionFunc_=e.getPointResolution,this.defaultTileGrid_=null,this.metersPerUnit_=e.metersPerUnit}return n.prototype.canWrapX=function(){return this.canWrapX_},n.prototype.getCode=function(){return this.code_},n.prototype.getExtent=function(){return this.extent_},n.prototype.getUnits=function(){return this.units_},n.prototype.getMetersPerUnit=function(){return this.metersPerUnit_||P[this.units_]},n.prototype.getWorldExtent=function(){return this.worldExtent_},n.prototype.getAxisOrientation=function(){return this.axisOrientation_},n.prototype.isGlobal=function(){return this.global_},n.prototype.setGlobal=function(e){this.global_=e,this.canWrapX_=!!(e&&this.extent_)},n.prototype.getDefaultTileGrid=function(){return this.defaultTileGrid_},n.prototype.setDefaultTileGrid=function(e){this.defaultTileGrid_=e},n.prototype.setExtent=function(e){this.extent_=e,this.canWrapX_=!!(this.global_&&e)},n.prototype.setWorldExtent=function(e){this.worldExtent_=e},n.prototype.setGetPointResolution=function(e){this.getPointResolutionFunc_=e},n.prototype.getPointResolutionFunc=function(){return this.getPointResolutionFunc_},n}(),b=lt,ht=function(){var n;return"cosh"in Math?n=Math.cosh:n=function(e){var t=Math.exp(e);return(t+1/t)/2},n}();function Fe(n,e,t,r,o,i){var a=o-t,s=i-r;if(a!==0||s!==0){var u=((n-t)*a+(e-r)*s)/(a*a+s*s);u>1?(t=o,r=i):u>0&&(t+=a*u,r+=s*u)}return Q(n,e,t,r)}function Q(n,e,t,r){var o=t-n,i=r-e;return o*o+i*i}function xe(n){return n*180/Math.PI}function $e(n){return n*Math.PI/180}function Xe(n,e,t){return n+t*(e-n)}var pt=globalThis&&globalThis.__extends||function(){var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(r[i]=o[i])},n(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");n(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}(),w=6378137,T=Math.PI*w,vt=[-T,-T,T,T],yt=[-180,-85,180,85],R=w*Math.log(Math.tan(Math.PI/2)),S=function(n){pt(e,n);function e(t){return n.call(this,{code:t,units:X.METERS,extent:vt,global:!0,worldExtent:yt,getPointResolution:function(r,o){return r/ht(o[1]/w)}})||this}return e}(b),D=[new S("EPSG:3857"),new S("EPSG:102100"),new S("EPSG:102113"),new S("EPSG:900913"),new S("http://www.opengis.net/def/crs/EPSG/0/3857"),new S("http://www.opengis.net/gml/srs/epsg.xml#3857")];function dt(n,e,t){var r=n.length,o=t>1?t:2,i=e;i===void 0&&(o>2?i=n.slice():i=new Array(r));for(var a=0;a<r;a+=o){i[a]=T*n[a]/180;var s=w*Math.log(Math.tan(Math.PI*(+n[a+1]+90)/360));s>R?s=R:s<-R&&(s=-R),i[a+1]=s}return i}function gt(n,e,t){var r=n.length,o=t>1?t:2,i=e;i===void 0&&(o>2?i=n.slice():i=new Array(r));for(var a=0;a<r;a+=o)i[a]=180*n[a]/T,i[a+1]=360*Math.atan(Math.exp(n[a+1]/w))/Math.PI-90;return i}var _t=globalThis&&globalThis.__extends||function(){var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(r[i]=o[i])},n(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");n(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}(),mt=6378137,Y=[-180,-90,180,90],Et=Math.PI*mt/180,E=function(n){_t(e,n);function e(t,r){return n.call(this,{code:t,units:X.DEGREES,extent:Y,axisOrientation:r,global:!0,metersPerUnit:Et,worldExtent:Y})||this}return e}(b),j=[new E("CRS:84"),new E("EPSG:4326","neu"),new E("urn:ogc:def:crs:OGC:1.3:CRS84"),new E("urn:ogc:def:crs:OGC:2:84"),new E("http://www.opengis.net/def/crs/OGC/1.3/CRS84"),new E("http://www.opengis.net/gml/srs/epsg.xml#4326","neu"),new E("http://www.opengis.net/def/crs/EPSG/0/4326","neu")],L={};function St(n){return L[n]||L[n.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/,"EPSG:$3")]||null}function Tt(n,e){L[n]=e}var B=typeof Object.assign=="function"?Object.assign:function(n,e){if(n==null)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(n),r=1,o=arguments.length;r<o;++r){var i=arguments[r];if(i!=null)for(var a in i)i.hasOwnProperty(a)&&(t[a]=i[a])}return t};function k(n){for(var e in n)delete n[e]}function Ot(n){var e;for(e in n)return!1;return!e}var O={};function I(n,e,t){var r=n.getCode(),o=e.getCode();r in O||(O[r]={}),O[r][o]=t}function Ct(n,e){var t;return n in O&&e in O[n]&&(t=O[n][e]),t}var h={UNKNOWN:0,INTERSECTING:1,ABOVE:2,RIGHT:4,BELOW:8,LEFT:16};function d(){return function(){throw new Error("Unimplemented abstract method.")}()}var Pt=0;function wt(n){return n.ol_uid||(n.ol_uid=String(++Pt))}var Gt="6.15.1",Rt=globalThis&&globalThis.__extends||function(){var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(r[i]=o[i])},n(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");n(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}(),It=function(n){Rt(e,n);function e(t){var r=this,o="v"+Gt.split("-")[0],i="Assertion failed. See https://openlayers.org/en/"+o+"/doc/errors/#"+t+" for details.";return r=n.call(this,i)||this,r.code=t,r.name="AssertionError",r.message=i,r}return e}(Error),At=It;function Nt(n,e){if(!n)throw new At(e)}function Ue(n,e,t){var r,o;return e<n[0]?r=n[0]-e:n[2]<e?r=e-n[2]:r=0,t<n[1]?o=n[1]-t:n[3]<t?o=t-n[3]:o=0,r*r+o*o}function De(n,e){return n[0]<=e[0]&&e[2]<=n[2]&&n[1]<=e[1]&&e[3]<=n[3]}function Mt(n,e,t){return n[0]<=e&&e<=n[2]&&n[1]<=t&&t<=n[3]}function W(n,e){var t=n[0],r=n[1],o=n[2],i=n[3],a=e[0],s=e[1],u=h.UNKNOWN;return a<t?u=u|h.LEFT:a>o&&(u=u|h.RIGHT),s<r?u=u|h.BELOW:s>i&&(u=u|h.ABOVE),u===h.UNKNOWN&&(u=h.INTERSECTING),u}function Lt(){return[1/0,1/0,-1/0,-1/0]}function tt(n,e,t,r,o){return o?(o[0]=n,o[1]=e,o[2]=t,o[3]=r,o):[n,e,t,r]}function et(n){return tt(1/0,1/0,-1/0,-1/0,n)}function Ft(n,e){var t=n[0],r=n[1];return tt(t,r,t,r,e)}function xt(n,e,t,r,o){var i=et(o);return $t(i,n,e,t,r)}function $t(n,e,t,r,o){for(;t<r;t+=o)Xt(n,e[t],e[t+1]);return n}function Xt(n,e,t){n[0]=Math.min(n[0],e),n[1]=Math.min(n[1],t),n[2]=Math.max(n[2],e),n[3]=Math.max(n[3],t)}function Ye(n,e){var t;return t=e(Ut(n)),t||(t=e(Dt(n)),t)||(t=e(Bt(n)),t)||(t=e(jt(n)),t)?t:!1}function Ut(n){return[n[0],n[1]]}function Dt(n){return[n[2],n[1]]}function Yt(n){return[(n[0]+n[2])/2,(n[1]+n[3])/2]}function K(n){return n[3]-n[1]}function jt(n){return[n[0],n[3]]}function Bt(n){return[n[2],n[3]]}function je(n,e){return n[0]<=e[2]&&n[2]>=e[0]&&n[1]<=e[3]&&n[3]>=e[1]}function Wt(n,e){return e?(e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e):n}function Be(n,e,t){var r=!1,o=W(n,e),i=W(n,t);if(o===h.INTERSECTING||i===h.INTERSECTING)r=!0;else{var a=n[0],s=n[1],u=n[2],f=n[3],c=e[0],p=e[1],l=t[0],v=t[1],_=(v-p)/(l-c),y=void 0,g=void 0;!!(i&h.ABOVE)&&!(o&h.ABOVE)&&(y=l-(v-f)/_,r=y>=a&&y<=u),!r&&!!(i&h.RIGHT)&&!(o&h.RIGHT)&&(g=v-(l-u)*_,r=g>=s&&g<=f),!r&&!!(i&h.BELOW)&&!(o&h.BELOW)&&(y=l-(v-s)/_,r=y>=a&&y<=u),!r&&!!(i&h.LEFT)&&!(o&h.LEFT)&&(g=v-(l-a)*_,r=g>=s&&g<=f)}return r}function nt(n,e,t){var r;if(e!==void 0){for(var o=0,i=n.length;o<i;++o)e[o]=n[o];r=e}else r=n.slice();return r}function Kt(n,e,t){if(e!==void 0&&n!==e){for(var r=0,o=n.length;r<o;++r)e[r]=n[r];n=e}return n}function Ht(n){Tt(n.getCode(),n),I(n,n,nt)}function qt(n){n.forEach(Ht)}function F(n){return typeof n=="string"?St(n):n||null}function H(n){qt(n),n.forEach(function(e){n.forEach(function(t){e!==t&&I(e,t,nt)})})}function Zt(n,e,t,r){n.forEach(function(o){e.forEach(function(i){I(o,i,t),I(i,o,r)})})}function We(n,e){return zt(n,"EPSG:4326",e!==void 0?e:"EPSG:3857")}function Vt(n,e){var t=n.getCode(),r=e.getCode(),o=Ct(t,r);return o||(o=Kt),o}function x(n,e){var t=F(n),r=F(e);return Vt(t,r)}function zt(n,e,t){var r=x(e,t);return r(n,void 0,n.length)}function Jt(){H(D),H(j),Zt(j,D,dt,gt)}Jt();var bt=function(){function n(e){this.propagationStopped,this.defaultPrevented,this.type=e,this.target=null}return n.prototype.preventDefault=function(){this.defaultPrevented=!0},n.prototype.stopPropagation=function(){this.propagationStopped=!0},n}(),rt=bt,Qt={PROPERTYCHANGE:"propertychange"},kt=function(){function n(){this.disposed=!1}return n.prototype.dispose=function(){this.disposed||(this.disposed=!0,this.disposeInternal())},n.prototype.disposeInternal=function(){},n}(),te=kt;function Ke(n,e,t){for(var r,o,i=t||ee,a=0,s=n.length,u=!1;a<s;)r=a+(s-a>>1),o=+i(n[r],e),o<0?a=r+1:(s=r,u=!o);return u?a:~a}function ee(n,e){return n>e?1:n<e?-1:0}function He(n,e){for(var t=Array.isArray(e)?e:[e],r=t.length,o=0;o<r;o++)n[n.length]=t[o]}function ne(n,e){var t=n.length;if(t!==e.length)return!1;for(var r=0;r<t;r++)if(n[r]!==e[r])return!1;return!0}function q(){}function re(n){var e=!1,t,r,o;return function(){var i=Array.prototype.slice.call(arguments);return(!e||this!==o||!ne(i,r))&&(e=!0,o=this,r=i,t=n.apply(this,arguments)),t}}var oe=globalThis&&globalThis.__extends||function(){var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(r[i]=o[i])},n(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");n(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}(),ie=function(n){oe(e,n);function e(t){var r=n.call(this)||this;return r.eventTarget_=t,r.pendingRemovals_=null,r.dispatching_=null,r.listeners_=null,r}return e.prototype.addEventListener=function(t,r){if(!(!t||!r)){var o=this.listeners_||(this.listeners_={}),i=o[t]||(o[t]=[]);i.indexOf(r)===-1&&i.push(r)}},e.prototype.dispatchEvent=function(t){var r=typeof t=="string",o=r?t:t.type,i=this.listeners_&&this.listeners_[o];if(!!i){var a=r?new rt(t):t;a.target||(a.target=this.eventTarget_||this);var s=this.dispatching_||(this.dispatching_={}),u=this.pendingRemovals_||(this.pendingRemovals_={});o in s||(s[o]=0,u[o]=0),++s[o];for(var f,c=0,p=i.length;c<p;++c)if("handleEvent"in i[c]?f=i[c].handleEvent(a):f=i[c].call(this,a),f===!1||a.propagationStopped){f=!1;break}if(--s[o]===0){var l=u[o];for(delete u[o];l--;)this.removeEventListener(o,q);delete s[o]}return f}},e.prototype.disposeInternal=function(){this.listeners_&&k(this.listeners_)},e.prototype.getListeners=function(t){return this.listeners_&&this.listeners_[t]||void 0},e.prototype.hasListener=function(t){return this.listeners_?t?t in this.listeners_:Object.keys(this.listeners_).length>0:!1},e.prototype.removeEventListener=function(t,r){var o=this.listeners_&&this.listeners_[t];if(o){var i=o.indexOf(r);i!==-1&&(this.pendingRemovals_&&t in this.pendingRemovals_?(o[i]=q,++this.pendingRemovals_[t]):(o.splice(i,1),o.length===0&&delete this.listeners_[t]))}},e}(te),ae=ie,ot={CHANGE:"change",ERROR:"error",BLUR:"blur",CLEAR:"clear",CONTEXTMENU:"contextmenu",CLICK:"click",DBLCLICK:"dblclick",DRAGENTER:"dragenter",DRAGOVER:"dragover",DROP:"drop",FOCUS:"focus",KEYDOWN:"keydown",KEYPRESS:"keypress",LOAD:"load",RESIZE:"resize",TOUCHMOVE:"touchmove",WHEEL:"wheel"};function A(n,e,t,r,o){if(r&&r!==n&&(t=t.bind(r)),o){var i=t;t=function(){n.removeEventListener(e,t),i.apply(this,arguments)}}var a={target:n,type:e,listener:t};return n.addEventListener(e,t),a}function Z(n,e,t,r){return A(n,e,t,r,!0)}function $(n){n&&n.target&&(n.target.removeEventListener(n.type,n.listener),k(n))}var se=globalThis&&globalThis.__extends||function(){var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(r[i]=o[i])},n(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");n(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}(),N=function(n){se(e,n);function e(){var t=n.call(this)||this;return t.on=t.onInternal,t.once=t.onceInternal,t.un=t.unInternal,t.revision_=0,t}return e.prototype.changed=function(){++this.revision_,this.dispatchEvent(ot.CHANGE)},e.prototype.getRevision=function(){return this.revision_},e.prototype.onInternal=function(t,r){if(Array.isArray(t)){for(var o=t.length,i=new Array(o),a=0;a<o;++a)i[a]=A(this,t[a],r);return i}else return A(this,t,r)},e.prototype.onceInternal=function(t,r){var o;if(Array.isArray(t)){var i=t.length;o=new Array(i);for(var a=0;a<i;++a)o[a]=Z(this,t[a],r)}else o=Z(this,t,r);return r.ol_key=o,o},e.prototype.unInternal=function(t,r){var o=r.ol_key;if(o)ue(o);else if(Array.isArray(t))for(var i=0,a=t.length;i<a;++i)this.removeEventListener(t[i],r);else this.removeEventListener(t,r)},e}(ae);N.prototype.on;N.prototype.once;N.prototype.un;function ue(n){if(Array.isArray(n))for(var e=0,t=n.length;e<t;++e)$(n[e]);else $(n)}var fe=N,it=globalThis&&globalThis.__extends||function(){var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(r[i]=o[i])},n(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");n(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}(),V=function(n){it(e,n);function e(t,r,o){var i=n.call(this,t)||this;return i.key=r,i.oldValue=o,i}return e}(rt),ce=function(n){it(e,n);function e(t){var r=n.call(this)||this;return r.on,r.once,r.un,wt(r),r.values_=null,t!==void 0&&r.setProperties(t),r}return e.prototype.get=function(t){var r;return this.values_&&this.values_.hasOwnProperty(t)&&(r=this.values_[t]),r},e.prototype.getKeys=function(){return this.values_&&Object.keys(this.values_)||[]},e.prototype.getProperties=function(){return this.values_&&B({},this.values_)||{}},e.prototype.hasProperties=function(){return!!this.values_},e.prototype.notify=function(t,r){var o;o="change:".concat(t),this.hasListener(o)&&this.dispatchEvent(new V(o,t,r)),o=Qt.PROPERTYCHANGE,this.hasListener(o)&&this.dispatchEvent(new V(o,t,r))},e.prototype.addChangeListener=function(t,r){this.addEventListener("change:".concat(t),r)},e.prototype.removeChangeListener=function(t,r){this.removeEventListener("change:".concat(t),r)},e.prototype.set=function(t,r,o){var i=this.values_||(this.values_={});if(o)i[t]=r;else{var a=i[t];i[t]=r,a!==r&&this.notify(t,a)}},e.prototype.setProperties=function(t,r){for(var o in t)this.set(o,t[o],r)},e.prototype.applyProperties=function(t){!t.values_||B(this.values_||(this.values_={}),t.values_)},e.prototype.unset=function(t,r){if(this.values_&&t in this.values_){var o=this.values_[t];delete this.values_[t],Ot(this.values_)&&(this.values_=null),r||this.notify(t,o)}},e}(fe),at=ce;new Array(6);function le(){return[1,0,0,1,0,0]}function he(n,e,t,r,o,i,a,s){var u=Math.sin(i),f=Math.cos(i);return n[0]=r*f,n[1]=o*u,n[2]=-r*u,n[3]=o*f,n[4]=a*r*f-s*r*u+e,n[5]=a*o*u+s*o*f+t,n}function pe(n,e,t,r,o,i){for(var a=i||[],s=0,u=e;u<t;u+=r){var f=n[u],c=n[u+1];a[s++]=o[0]*f+o[2]*c+o[4],a[s++]=o[1]*f+o[3]*c+o[5]}return i&&a.length!=s&&(a.length=s),a}function ve(n,e,t,r,o,i,a){for(var s=a||[],u=Math.cos(o),f=Math.sin(o),c=i[0],p=i[1],l=0,v=e;v<t;v+=r){var _=n[v]-c,y=n[v+1]-p;s[l++]=c+_*u-y*f,s[l++]=p+_*f+y*u;for(var g=v+2;g<v+r;++g)s[l++]=n[g]}return a&&s.length!=l&&(s.length=l),s}function ye(n,e,t,r,o,i,a,s){for(var u=s||[],f=a[0],c=a[1],p=0,l=e;l<t;l+=r){var v=n[l]-f,_=n[l+1]-c;u[p++]=f+o*v,u[p++]=c+i*_;for(var y=l+2;y<l+r;++y)u[p++]=n[y]}return s&&u.length!=p&&(u.length=p),u}function de(n,e,t,r,o,i,a){for(var s=a||[],u=0,f=e;f<t;f+=r){s[u++]=n[f]+o,s[u++]=n[f+1]+i;for(var c=f+2;c<f+r;++c)s[u++]=n[c]}return a&&s.length!=u&&(s.length=u),s}var ge=globalThis&&globalThis.__extends||function(){var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(r[i]=o[i])},n(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");n(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}(),z=le(),_e=function(n){ge(e,n);function e(){var t=n.call(this)||this;return t.extent_=Lt(),t.extentRevision_=-1,t.simplifiedGeometryMaxMinSquaredTolerance=0,t.simplifiedGeometryRevision=0,t.simplifyTransformedInternal=re(function(r,o,i){if(!i)return this.getSimplifiedGeometry(o);var a=this.clone();return a.applyTransform(i),a.getSimplifiedGeometry(o)}),t}return e.prototype.simplifyTransformed=function(t,r){return this.simplifyTransformedInternal(this.getRevision(),t,r)},e.prototype.clone=function(){return d()},e.prototype.closestPointXY=function(t,r,o,i){return d()},e.prototype.containsXY=function(t,r){var o=this.getClosestPoint([t,r]);return o[0]===t&&o[1]===r},e.prototype.getClosestPoint=function(t,r){var o=r||[NaN,NaN];return this.closestPointXY(t[0],t[1],o,1/0),o},e.prototype.intersectsCoordinate=function(t){return this.containsXY(t[0],t[1])},e.prototype.computeExtent=function(t){return d()},e.prototype.getExtent=function(t){if(this.extentRevision_!=this.getRevision()){var r=this.computeExtent(this.extent_);(isNaN(r[0])||isNaN(r[1]))&&et(r),this.extentRevision_=this.getRevision()}return Wt(this.extent_,t)},e.prototype.rotate=function(t,r){d()},e.prototype.scale=function(t,r,o){d()},e.prototype.simplify=function(t){return this.getSimplifiedGeometry(t*t)},e.prototype.getSimplifiedGeometry=function(t){return d()},e.prototype.getType=function(){return d()},e.prototype.applyTransform=function(t){d()},e.prototype.intersectsExtent=function(t){return d()},e.prototype.translate=function(t,r){d()},e.prototype.transform=function(t,r){var o=F(t),i=o.getUnits()==X.TILE_PIXELS?function(a,s,u){var f=o.getExtent(),c=o.getWorldExtent(),p=K(c)/K(f);return he(z,c[0],c[3],p,-p,0,0,0),pe(a,0,a.length,u,z,s),x(o,r)(a,s,u)}:x(o,r);return this.applyTransform(i),this},e}(at),me=_e,m={XY:"XY",XYZ:"XYZ",XYM:"XYM",XYZM:"XYZM"},Ee=globalThis&&globalThis.__extends||function(){var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(r[i]=o[i])},n(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");n(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}(),Se=function(n){Ee(e,n);function e(){var t=n.call(this)||this;return t.layout=m.XY,t.stride=2,t.flatCoordinates=null,t}return e.prototype.computeExtent=function(t){return xt(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t)},e.prototype.getCoordinates=function(){return d()},e.prototype.getFirstCoordinate=function(){return this.flatCoordinates.slice(0,this.stride)},e.prototype.getFlatCoordinates=function(){return this.flatCoordinates},e.prototype.getLastCoordinate=function(){return this.flatCoordinates.slice(this.flatCoordinates.length-this.stride)},e.prototype.getLayout=function(){return this.layout},e.prototype.getSimplifiedGeometry=function(t){if(this.simplifiedGeometryRevision!==this.getRevision()&&(this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=this.getRevision()),t<0||this.simplifiedGeometryMaxMinSquaredTolerance!==0&&t<=this.simplifiedGeometryMaxMinSquaredTolerance)return this;var r=this.getSimplifiedGeometryInternal(t),o=r.getFlatCoordinates();return o.length<this.flatCoordinates.length?r:(this.simplifiedGeometryMaxMinSquaredTolerance=t,this)},e.prototype.getSimplifiedGeometryInternal=function(t){return this},e.prototype.getStride=function(){return this.stride},e.prototype.setFlatCoordinates=function(t,r){this.stride=J(t),this.layout=t,this.flatCoordinates=r},e.prototype.setCoordinates=function(t,r){d()},e.prototype.setLayout=function(t,r,o){var i;if(t)i=J(t);else{for(var a=0;a<o;++a)if(r.length===0){this.layout=m.XY,this.stride=2;return}else r=r[0];i=r.length,t=Te(i)}this.layout=t,this.stride=i},e.prototype.applyTransform=function(t){this.flatCoordinates&&(t(this.flatCoordinates,this.flatCoordinates,this.stride),this.changed())},e.prototype.rotate=function(t,r){var o=this.getFlatCoordinates();if(o){var i=this.getStride();ve(o,0,o.length,i,t,r,o),this.changed()}},e.prototype.scale=function(t,r,o){var i=r;i===void 0&&(i=t);var a=o;a||(a=Yt(this.getExtent()));var s=this.getFlatCoordinates();if(s){var u=this.getStride();ye(s,0,s.length,u,t,i,a,s),this.changed()}},e.prototype.translate=function(t,r){var o=this.getFlatCoordinates();if(o){var i=this.getStride();de(o,0,o.length,i,t,r,o),this.changed()}},e}(me);function Te(n){var e;return n==2?e=m.XY:n==3?e=m.XYZ:n==4&&(e=m.XYZM),e}function J(n){var e;return n==m.XY?e=2:n==m.XYZ||n==m.XYM?e=3:n==m.XYZM&&(e=4),e}var Oe=Se;function Ce(n,e,t,r){for(var o=0,i=t.length;o<i;++o)n[e++]=t[o];return e}function Pe(n,e,t,r){for(var o=0,i=t.length;o<i;++o)for(var a=t[o],s=0;s<r;++s)n[e++]=a[s];return e}function qe(n,e,t,r,o){for(var i=o||[],a=0,s=0,u=t.length;s<u;++s){var f=Pe(n,e,t[s],r);i[a++]=f,e=f}return i.length=a,i}var we=globalThis&&globalThis.__extends||function(){var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(r[i]=o[i])},n(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");n(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}(),Ge=function(n){we(e,n);function e(t,r){var o=n.call(this)||this;return o.setCoordinates(t,r),o}return e.prototype.clone=function(){var t=new e(this.flatCoordinates.slice(),this.layout);return t.applyProperties(this),t},e.prototype.closestPointXY=function(t,r,o,i){var a=this.flatCoordinates,s=Q(t,r,a[0],a[1]);if(s<i){for(var u=this.stride,f=0;f<u;++f)o[f]=a[f];return o.length=u,s}else return i},e.prototype.getCoordinates=function(){return this.flatCoordinates?this.flatCoordinates.slice():[]},e.prototype.computeExtent=function(t){return Ft(this.flatCoordinates,t)},e.prototype.getType=function(){return"Point"},e.prototype.intersectsExtent=function(t){return Mt(t,this.flatCoordinates[0],this.flatCoordinates[1])},e.prototype.setCoordinates=function(t,r){this.setLayout(r,t,0),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=Ce(this.flatCoordinates,0,t,this.stride),this.changed()},e}(Oe),Ze=Ge,Re=globalThis&&globalThis.__extends||function(){var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(r[i]=o[i])},n(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");n(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}(),Ie=function(n){Re(e,n);function e(t){var r=n.call(this)||this;if(r.on,r.once,r.un,r.id_=void 0,r.geometryName_="geometry",r.style_=null,r.styleFunction_=void 0,r.geometryChangeKey_=null,r.addChangeListener(r.geometryName_,r.handleGeometryChanged_),t)if(typeof t.getSimplifiedGeometry=="function"){var o=t;r.setGeometry(o)}else{var i=t;r.setProperties(i)}return r}return e.prototype.clone=function(){var t=new e(this.hasProperties()?this.getProperties():null);t.setGeometryName(this.getGeometryName());var r=this.getGeometry();r&&t.setGeometry(r.clone());var o=this.getStyle();return o&&t.setStyle(o),t},e.prototype.getGeometry=function(){return this.get(this.geometryName_)},e.prototype.getId=function(){return this.id_},e.prototype.getGeometryName=function(){return this.geometryName_},e.prototype.getStyle=function(){return this.style_},e.prototype.getStyleFunction=function(){return this.styleFunction_},e.prototype.handleGeometryChange_=function(){this.changed()},e.prototype.handleGeometryChanged_=function(){this.geometryChangeKey_&&($(this.geometryChangeKey_),this.geometryChangeKey_=null);var t=this.getGeometry();t&&(this.geometryChangeKey_=A(t,ot.CHANGE,this.handleGeometryChange_,this)),this.changed()},e.prototype.setGeometry=function(t){this.set(this.geometryName_,t)},e.prototype.setStyle=function(t){this.style_=t,this.styleFunction_=t?Ae(t):void 0,this.changed()},e.prototype.setId=function(t){this.id_=t,this.changed()},e.prototype.setGeometryName=function(t){this.removeChangeListener(this.geometryName_,this.handleGeometryChanged_),this.geometryName_=t,this.addChangeListener(this.geometryName_,this.handleGeometryChanged_),this.handleGeometryChanged_()},e}(at);function Ae(n){if(typeof n=="function")return n;var e;if(Array.isArray(n))e=n;else{Nt(typeof n.getZIndex=="function",41);var t=n;e=[t]}return function(){return e}}var Ve=Ie;const Ne={data(){return{}}};function Me(n,e,t,r,o,i){const a=M("ol-source-osm"),s=M("ol-tile-layer"),u=M("ol-source-xyz");return ut(),ft(ct,null,[G(s,null,{default:U(()=>[G(a)]),_:1}),G(s,null,{default:U(()=>[G(u,{url:"https://services7.arcgis.com/V2VriwTjJDabpGg6/ArcGIS/rest/services/2022_marec_export_ekataster_tile_layer/MapServer/WMTS/tile/1.0.0/2022_marec_export_ekataster_tile_layer/default/default028mm/{z}/{y}/{x}.png"})]),_:1})],64)}var ze=st(Ne,[["render",Me]]);export{ze as C,Ve as F,m as G,Ze as P,Oe as S,xe as a,Fe as b,Ue as c,Pe as d,$t as e,Ye as f,Lt as g,De as h,je as i,Be as j,He as k,Xe as l,Yt as m,ee as n,qe as o,Ke as p,We as q,Q as s,$e as t};

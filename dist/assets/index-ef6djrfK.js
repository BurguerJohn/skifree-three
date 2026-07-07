(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fs="165",Go=0,Ts=1,Vo=2,to=1,ko=2,Ke=3,dn=0,Me=1,$e=2,cn=0,ei=1,As=2,bs=3,Rs=4,Wo=5,Rn=100,Xo=101,Yo=102,qo=103,Ko=104,$o=200,Zo=201,jo=202,Jo=203,is=204,rs=205,Qo=206,tl=207,el=208,nl=209,il=210,rl=211,sl=212,al=213,ol=214,ll=0,cl=1,hl=2,ir=3,ul=4,dl=5,fl=6,pl=7,eo=0,ml=1,_l=2,hn=0,gl=1,vl=2,xl=3,Sl=4,Ml=5,El=6,yl=7,no=300,ri=301,si=302,ss=303,as=304,dr=306,os=1e3,Cn=1001,ls=1002,Se=1003,Tl=1004,wi=1005,Ue=1006,Mr=1007,Pn=1008,fn=1009,Al=1010,bl=1011,rr=1012,io=1013,ai=1014,ln=1015,fr=1016,ro=1017,so=1018,oi=1020,Rl=35902,wl=1021,Cl=1022,Ge=1023,Pl=1024,Ll=1025,ni=1026,li=1027,Il=1028,ao=1029,Dl=1030,oo=1031,lo=1033,Er=33776,yr=33777,Tr=33778,Ar=33779,ws=35840,Cs=35841,Ps=35842,Ls=35843,Is=36196,Ds=37492,Us=37496,Ns=37808,Fs=37809,Os=37810,Bs=37811,zs=37812,Hs=37813,Gs=37814,Vs=37815,ks=37816,Ws=37817,Xs=37818,Ys=37819,qs=37820,Ks=37821,br=36492,$s=36494,Zs=36495,Ul=36283,js=36284,Js=36285,Qs=36286,Nl=3200,Fl=3201,Ol=0,Bl=1,on="",Ie="srgb",mn="srgb-linear",ps="display-p3",pr="display-p3-linear",sr="linear",jt="srgb",ar="rec709",or="p3",Dn=7680,ta=519,zl=512,Hl=513,Gl=514,co=515,Vl=516,kl=517,Wl=518,Xl=519,cs=35044,ea="300 es",Ze=2e3,lr=2001;class hi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rr=Math.PI/180,hs=180/Math.PI;function un(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fe[i&255]+fe[i>>8&255]+fe[i>>16&255]+fe[i>>24&255]+"-"+fe[t&255]+fe[t>>8&255]+"-"+fe[t>>16&15|64]+fe[t>>24&255]+"-"+fe[e&63|128]+fe[e>>8&255]+"-"+fe[e>>16&255]+fe[e>>24&255]+fe[n&255]+fe[n>>8&255]+fe[n>>16&255]+fe[n>>24&255]).toLowerCase()}function xe(i,t,e){return Math.max(t,Math.min(e,i))}function Yl(i,t){return(i%t+t)%t}function wr(i,t,e){return(1-e)*i+e*t}function He(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Zt(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Dt{constructor(t=0,e=0){Dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Rt{constructor(t,e,n,r,s,a,o,l,c){Rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c)}set(t,e,n,r,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],p=n[7],d=n[2],m=n[5],v=n[8],S=r[0],f=r[3],h=r[6],T=r[1],E=r[4],A=r[7],B=r[2],C=r[5],b=r[8];return s[0]=a*S+o*T+l*B,s[3]=a*f+o*E+l*C,s[6]=a*h+o*A+l*b,s[1]=c*S+u*T+p*B,s[4]=c*f+u*E+p*C,s[7]=c*h+u*A+p*b,s[2]=d*S+m*T+v*B,s[5]=d*f+m*E+v*C,s[8]=d*h+m*A+v*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],p=u*a-o*c,d=o*l-u*s,m=c*s-a*l,v=e*p+n*d+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return t[0]=p*S,t[1]=(r*c-u*n)*S,t[2]=(o*n-r*a)*S,t[3]=d*S,t[4]=(u*e-r*l)*S,t[5]=(r*s-o*e)*S,t[6]=m*S,t[7]=(n*l-c*e)*S,t[8]=(a*e-n*s)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Cr.makeScale(t,e)),this}rotate(t){return this.premultiply(Cr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Cr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Cr=new Rt;function ho(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function cr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ql(){const i=cr("canvas");return i.style.display="block",i}const na={};function ms(i){i in na||(na[i]=!0,console.warn(i))}function Kl(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const ia=new Rt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ra=new Rt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ci={[mn]:{transfer:sr,primaries:ar,toReference:i=>i,fromReference:i=>i},[Ie]:{transfer:jt,primaries:ar,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[pr]:{transfer:sr,primaries:or,toReference:i=>i.applyMatrix3(ra),fromReference:i=>i.applyMatrix3(ia)},[ps]:{transfer:jt,primaries:or,toReference:i=>i.convertSRGBToLinear().applyMatrix3(ra),fromReference:i=>i.applyMatrix3(ia).convertLinearToSRGB()}},$l=new Set([mn,pr]),Xt={enabled:!0,_workingColorSpace:mn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!$l.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Ci[t].toReference,r=Ci[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Ci[i].primaries},getTransfer:function(i){return i===on?sr:Ci[i].transfer}};function ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Pr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Un;class Zl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Un===void 0&&(Un=cr("canvas")),Un.width=t.width,Un.height=t.height;const n=Un.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Un}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=cr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ii(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ii(e[n]/255)*255):e[n]=ii(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let jl=0;class uo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jl++}),this.uuid=un(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Lr(r[a].image)):s.push(Lr(r[a]))}else s=Lr(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Lr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Zl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jl=0;class ve extends hi{constructor(t=ve.DEFAULT_IMAGE,e=ve.DEFAULT_MAPPING,n=Cn,r=Cn,s=Ue,a=Pn,o=Ge,l=fn,c=ve.DEFAULT_ANISOTROPY,u=on){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jl++}),this.uuid=un(),this.name="",this.source=new uo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==no)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case os:t.x=t.x-Math.floor(t.x);break;case Cn:t.x=t.x<0?0:1;break;case ls:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case os:t.y=t.y-Math.floor(t.y);break;case Cn:t.y=t.y<0?0:1;break;case ls:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ve.DEFAULT_IMAGE=null;ve.DEFAULT_MAPPING=no;ve.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,n=0,r=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],u=l[4],p=l[8],d=l[1],m=l[5],v=l[9],S=l[2],f=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(p-S)<.01&&Math.abs(v-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(p+S)<.1&&Math.abs(v+f)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,A=(m+1)/2,B=(h+1)/2,C=(u+d)/4,b=(p+S)/4,F=(v+f)/4;return E>A&&E>B?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=C/n,s=b/n):A>B?A<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),n=C/r,s=F/r):B<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(B),n=b/s,r=F/s),this.set(n,r,s,e),this}let T=Math.sqrt((f-v)*(f-v)+(p-S)*(p-S)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(f-v)/T,this.y=(p-S)/T,this.z=(d-u)/T,this.w=Math.acos((c+m+h-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ql extends hi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ue,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new ve(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new uo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class In extends Ql{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class fo extends ve{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Se,this.minFilter=Se,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class tc extends ve{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Se,this.minFilter=Se,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mi{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],p=n[r+3];const d=s[a+0],m=s[a+1],v=s[a+2],S=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=p;return}if(o===1){t[e+0]=d,t[e+1]=m,t[e+2]=v,t[e+3]=S;return}if(p!==S||l!==d||c!==m||u!==v){let f=1-o;const h=l*d+c*m+u*v+p*S,T=h>=0?1:-1,E=1-h*h;if(E>Number.EPSILON){const B=Math.sqrt(E),C=Math.atan2(B,h*T);f=Math.sin(f*C)/B,o=Math.sin(o*C)/B}const A=o*T;if(l=l*f+d*A,c=c*f+m*A,u=u*f+v*A,p=p*f+S*A,f===1-o){const B=1/Math.sqrt(l*l+c*c+u*u+p*p);l*=B,c*=B,u*=B,p*=B}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],p=s[a],d=s[a+1],m=s[a+2],v=s[a+3];return t[e]=o*v+u*p+l*m-c*d,t[e+1]=l*v+u*d+c*p-o*m,t[e+2]=c*v+u*m+o*d-l*p,t[e+3]=u*v-o*p-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),p=o(s/2),d=l(n/2),m=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=d*u*p+c*m*v,this._y=c*m*p-d*u*v,this._z=c*u*v+d*m*p,this._w=c*u*p-d*m*v;break;case"YXZ":this._x=d*u*p+c*m*v,this._y=c*m*p-d*u*v,this._z=c*u*v-d*m*p,this._w=c*u*p+d*m*v;break;case"ZXY":this._x=d*u*p-c*m*v,this._y=c*m*p+d*u*v,this._z=c*u*v+d*m*p,this._w=c*u*p-d*m*v;break;case"ZYX":this._x=d*u*p-c*m*v,this._y=c*m*p+d*u*v,this._z=c*u*v-d*m*p,this._w=c*u*p+d*m*v;break;case"YZX":this._x=d*u*p+c*m*v,this._y=c*m*p+d*u*v,this._z=c*u*v-d*m*p,this._w=c*u*p-d*m*v;break;case"XZY":this._x=d*u*p-c*m*v,this._y=c*m*p-d*u*v,this._z=c*u*v+d*m*p,this._w=c*u*p+d*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],p=e[10],d=n+o+p;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(n>o&&n>p){const m=2*Math.sqrt(1+n-o-p);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>p){const m=2*Math.sqrt(1+o-n-p);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+p-n-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),p=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=a*p+this._w*d,this._x=n*p+this._x*d,this._y=r*p+this._y*d,this._z=s*p+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(sa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(sa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*n),u=2*(o*e-s*r),p=2*(s*n-a*e);return this.x=e+l*c+a*p-o*u,this.y=n+l*u+o*c-s*p,this.z=r+l*p+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ir.copy(this).projectOnVector(t),this.sub(Ir)}reflect(t){return this.sub(Ir.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ir=new U,sa=new Mi;class Ei{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(we.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(we.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=we.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,we):we.fromBufferAttribute(s,a),we.applyMatrix4(t.matrixWorld),this.expandByPoint(we);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Pi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Pi.copy(n.boundingBox)),Pi.applyMatrix4(t.matrixWorld),this.union(Pi)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,we),we.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(di),Li.subVectors(this.max,di),Nn.subVectors(t.a,di),Fn.subVectors(t.b,di),On.subVectors(t.c,di),tn.subVectors(Fn,Nn),en.subVectors(On,Fn),xn.subVectors(Nn,On);let e=[0,-tn.z,tn.y,0,-en.z,en.y,0,-xn.z,xn.y,tn.z,0,-tn.x,en.z,0,-en.x,xn.z,0,-xn.x,-tn.y,tn.x,0,-en.y,en.x,0,-xn.y,xn.x,0];return!Dr(e,Nn,Fn,On,Li)||(e=[1,0,0,0,1,0,0,0,1],!Dr(e,Nn,Fn,On,Li))?!1:(Ii.crossVectors(tn,en),e=[Ii.x,Ii.y,Ii.z],Dr(e,Nn,Fn,On,Li))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,we).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(we).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ke[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ke[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ke[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ke[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ke[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ke[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ke[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ke[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ke),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ke=[new U,new U,new U,new U,new U,new U,new U,new U],we=new U,Pi=new Ei,Nn=new U,Fn=new U,On=new U,tn=new U,en=new U,xn=new U,di=new U,Li=new U,Ii=new U,Sn=new U;function Dr(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Sn.fromArray(i,s);const o=r.x*Math.abs(Sn.x)+r.y*Math.abs(Sn.y)+r.z*Math.abs(Sn.z),l=t.dot(Sn),c=e.dot(Sn),u=n.dot(Sn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const ec=new Ei,fi=new U,Ur=new U;class _s{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ec.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fi.subVectors(t,this.center);const e=fi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(fi,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ur.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fi.copy(t.center).add(Ur)),this.expandByPoint(fi.copy(t.center).sub(Ur))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const We=new U,Nr=new U,Di=new U,nn=new U,Fr=new U,Ui=new U,Or=new U;class nc{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,We)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=We.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(We.copy(this.origin).addScaledVector(this.direction,e),We.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Nr.copy(t).add(e).multiplyScalar(.5),Di.copy(e).sub(t).normalize(),nn.copy(this.origin).sub(Nr);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Di),o=nn.dot(this.direction),l=-nn.dot(Di),c=nn.lengthSq(),u=Math.abs(1-a*a);let p,d,m,v;if(u>0)if(p=a*l-o,d=a*o-l,v=s*u,p>=0)if(d>=-v)if(d<=v){const S=1/u;p*=S,d*=S,m=p*(p+a*d+2*o)+d*(a*p+d+2*l)+c}else d=s,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*l)+c;else d=-s,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*l)+c;else d<=-v?(p=Math.max(0,-(-a*s+o)),d=p>0?-s:Math.min(Math.max(-s,-l),s),m=-p*p+d*(d+2*l)+c):d<=v?(p=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(p=Math.max(0,-(a*s+o)),d=p>0?s:Math.min(Math.max(-s,-l),s),m=-p*p+d*(d+2*l)+c);else d=a>0?-s:s,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Nr).addScaledVector(Di,d),m}intersectSphere(t,e){We.subVectors(t.center,this.origin);const n=We.dot(this.direction),r=We.dot(We)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,r=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,r=(t.min.x-d.x)*c),u>=0?(s=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(t.min.z-d.z)*p,l=(t.max.z-d.z)*p):(o=(t.max.z-d.z)*p,l=(t.min.z-d.z)*p),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,We)!==null}intersectTriangle(t,e,n,r,s){Fr.subVectors(e,t),Ui.subVectors(n,t),Or.crossVectors(Fr,Ui);let a=this.direction.dot(Or),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;nn.subVectors(this.origin,t);const l=o*this.direction.dot(Ui.crossVectors(nn,Ui));if(l<0)return null;const c=o*this.direction.dot(Fr.cross(nn));if(c<0||l+c>a)return null;const u=-o*nn.dot(Or);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(t,e,n,r,s,a,o,l,c,u,p,d,m,v,S,f){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c,u,p,d,m,v,S,f)}set(t,e,n,r,s,a,o,l,c,u,p,d,m,v,S,f){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=p,h[14]=d,h[3]=m,h[7]=v,h[11]=S,h[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Bn.setFromMatrixColumn(t,0).length(),s=1/Bn.setFromMatrixColumn(t,1).length(),a=1/Bn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),p=Math.sin(s);if(t.order==="XYZ"){const d=a*u,m=a*p,v=o*u,S=o*p;e[0]=l*u,e[4]=-l*p,e[8]=c,e[1]=m+v*c,e[5]=d-S*c,e[9]=-o*l,e[2]=S-d*c,e[6]=v+m*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*u,m=l*p,v=c*u,S=c*p;e[0]=d+S*o,e[4]=v*o-m,e[8]=a*c,e[1]=a*p,e[5]=a*u,e[9]=-o,e[2]=m*o-v,e[6]=S+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*u,m=l*p,v=c*u,S=c*p;e[0]=d-S*o,e[4]=-a*p,e[8]=v+m*o,e[1]=m+v*o,e[5]=a*u,e[9]=S-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*u,m=a*p,v=o*u,S=o*p;e[0]=l*u,e[4]=v*c-m,e[8]=d*c+S,e[1]=l*p,e[5]=S*c+d,e[9]=m*c-v,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,m=a*c,v=o*l,S=o*c;e[0]=l*u,e[4]=S-d*p,e[8]=v*p+m,e[1]=p,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=m*p+v,e[10]=d-S*p}else if(t.order==="XZY"){const d=a*l,m=a*c,v=o*l,S=o*c;e[0]=l*u,e[4]=-p,e[8]=c*u,e[1]=d*p+S,e[5]=a*u,e[9]=m*p-v,e[2]=v*p-m,e[6]=o*u,e[10]=S*p+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ic,t,rc)}lookAt(t,e,n){const r=this.elements;return Te.subVectors(t,e),Te.lengthSq()===0&&(Te.z=1),Te.normalize(),rn.crossVectors(n,Te),rn.lengthSq()===0&&(Math.abs(n.z)===1?Te.x+=1e-4:Te.z+=1e-4,Te.normalize(),rn.crossVectors(n,Te)),rn.normalize(),Ni.crossVectors(Te,rn),r[0]=rn.x,r[4]=Ni.x,r[8]=Te.x,r[1]=rn.y,r[5]=Ni.y,r[9]=Te.y,r[2]=rn.z,r[6]=Ni.z,r[10]=Te.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],p=n[5],d=n[9],m=n[13],v=n[2],S=n[6],f=n[10],h=n[14],T=n[3],E=n[7],A=n[11],B=n[15],C=r[0],b=r[4],F=r[8],M=r[12],x=r[1],P=r[5],k=r[9],z=r[13],q=r[2],Y=r[6],W=r[10],$=r[14],H=r[3],ht=r[7],ft=r[11],mt=r[15];return s[0]=a*C+o*x+l*q+c*H,s[4]=a*b+o*P+l*Y+c*ht,s[8]=a*F+o*k+l*W+c*ft,s[12]=a*M+o*z+l*$+c*mt,s[1]=u*C+p*x+d*q+m*H,s[5]=u*b+p*P+d*Y+m*ht,s[9]=u*F+p*k+d*W+m*ft,s[13]=u*M+p*z+d*$+m*mt,s[2]=v*C+S*x+f*q+h*H,s[6]=v*b+S*P+f*Y+h*ht,s[10]=v*F+S*k+f*W+h*ft,s[14]=v*M+S*z+f*$+h*mt,s[3]=T*C+E*x+A*q+B*H,s[7]=T*b+E*P+A*Y+B*ht,s[11]=T*F+E*k+A*W+B*ft,s[15]=T*M+E*z+A*$+B*mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],p=t[6],d=t[10],m=t[14],v=t[3],S=t[7],f=t[11],h=t[15];return v*(+s*l*p-r*c*p-s*o*d+n*c*d+r*o*m-n*l*m)+S*(+e*l*m-e*c*d+s*a*d-r*a*m+r*c*u-s*l*u)+f*(+e*c*p-e*o*m-s*a*p+n*a*m+s*o*u-n*c*u)+h*(-r*o*u-e*l*p+e*o*d+r*a*p-n*a*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],p=t[9],d=t[10],m=t[11],v=t[12],S=t[13],f=t[14],h=t[15],T=p*f*c-S*d*c+S*l*m-o*f*m-p*l*h+o*d*h,E=v*d*c-u*f*c-v*l*m+a*f*m+u*l*h-a*d*h,A=u*S*c-v*p*c+v*o*m-a*S*m-u*o*h+a*p*h,B=v*p*l-u*S*l-v*o*d+a*S*d+u*o*f-a*p*f,C=e*T+n*E+r*A+s*B;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return t[0]=T*b,t[1]=(S*d*s-p*f*s-S*r*m+n*f*m+p*r*h-n*d*h)*b,t[2]=(o*f*s-S*l*s+S*r*c-n*f*c-o*r*h+n*l*h)*b,t[3]=(p*l*s-o*d*s-p*r*c+n*d*c+o*r*m-n*l*m)*b,t[4]=E*b,t[5]=(u*f*s-v*d*s+v*r*m-e*f*m-u*r*h+e*d*h)*b,t[6]=(v*l*s-a*f*s-v*r*c+e*f*c+a*r*h-e*l*h)*b,t[7]=(a*d*s-u*l*s+u*r*c-e*d*c-a*r*m+e*l*m)*b,t[8]=A*b,t[9]=(v*p*s-u*S*s-v*n*m+e*S*m+u*n*h-e*p*h)*b,t[10]=(a*S*s-v*o*s+v*n*c-e*S*c-a*n*h+e*o*h)*b,t[11]=(u*o*s-a*p*s-u*n*c+e*p*c+a*n*m-e*o*m)*b,t[12]=B*b,t[13]=(u*S*r-v*p*r+v*n*d-e*S*d-u*n*f+e*p*f)*b,t[14]=(v*o*r-a*S*r-v*n*l+e*S*l+a*n*f-e*o*f)*b,t[15]=(a*p*r-u*o*r+u*n*l-e*p*l-a*n*d+e*o*d)*b,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,p=o+o,d=s*c,m=s*u,v=s*p,S=a*u,f=a*p,h=o*p,T=l*c,E=l*u,A=l*p,B=n.x,C=n.y,b=n.z;return r[0]=(1-(S+h))*B,r[1]=(m+A)*B,r[2]=(v-E)*B,r[3]=0,r[4]=(m-A)*C,r[5]=(1-(d+h))*C,r[6]=(f+T)*C,r[7]=0,r[8]=(v+E)*b,r[9]=(f-T)*b,r[10]=(1-(d+S))*b,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Bn.set(r[0],r[1],r[2]).length();const a=Bn.set(r[4],r[5],r[6]).length(),o=Bn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Ce.copy(this);const c=1/s,u=1/a,p=1/o;return Ce.elements[0]*=c,Ce.elements[1]*=c,Ce.elements[2]*=c,Ce.elements[4]*=u,Ce.elements[5]*=u,Ce.elements[6]*=u,Ce.elements[8]*=p,Ce.elements[9]*=p,Ce.elements[10]*=p,e.setFromRotationMatrix(Ce),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=Ze){const l=this.elements,c=2*s/(e-t),u=2*s/(n-r),p=(e+t)/(e-t),d=(n+r)/(n-r);let m,v;if(o===Ze)m=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===lr)m=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=Ze){const l=this.elements,c=1/(e-t),u=1/(n-r),p=1/(a-s),d=(e+t)*c,m=(n+r)*u;let v,S;if(o===Ze)v=(a+s)*p,S=-2*p;else if(o===lr)v=s*p,S=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=S,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Bn=new U,Ce=new ae,ic=new U(0,0,0),rc=new U(1,1,1),rn=new U,Ni=new U,Te=new U,aa=new ae,oa=new Mi;class Je{constructor(t=0,e=0,n=0,r=Je.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],p=r[2],d=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-xe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return aa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(aa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return oa.setFromEuler(this),this.setFromQuaternion(oa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Je.DEFAULT_ORDER="XYZ";class po{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let sc=0;const la=new U,zn=new Mi,Xe=new ae,Fi=new U,pi=new U,ac=new U,oc=new Mi,ca=new U(1,0,0),ha=new U(0,1,0),ua=new U(0,0,1),da={type:"added"},lc={type:"removed"},Hn={type:"childadded",child:null},Br={type:"childremoved",child:null};class Ee extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sc++}),this.uuid=un(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new U,e=new Je,n=new Mi,r=new U(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ae},normalMatrix:{value:new Rt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zn.setFromAxisAngle(t,e),this.quaternion.multiply(zn),this}rotateOnWorldAxis(t,e){return zn.setFromAxisAngle(t,e),this.quaternion.premultiply(zn),this}rotateX(t){return this.rotateOnAxis(ca,t)}rotateY(t){return this.rotateOnAxis(ha,t)}rotateZ(t){return this.rotateOnAxis(ua,t)}translateOnAxis(t,e){return la.copy(t).applyQuaternion(this.quaternion),this.position.add(la.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ca,t)}translateY(t){return this.translateOnAxis(ha,t)}translateZ(t){return this.translateOnAxis(ua,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xe.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fi.copy(t):Fi.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),pi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xe.lookAt(pi,Fi,this.up):Xe.lookAt(Fi,pi,this.up),this.quaternion.setFromRotationMatrix(Xe),r&&(Xe.extractRotation(r.matrixWorld),zn.setFromRotationMatrix(Xe),this.quaternion.premultiply(zn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(da),Hn.child=t,this.dispatchEvent(Hn),Hn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(lc),Br.child=t,this.dispatchEvent(Br),Br.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xe.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xe.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xe),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(da),Hn.child=t,this.dispatchEvent(Hn),Hn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pi,t,ac),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pi,oc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const p=l[c];s(t.shapes,p)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),p=a(t.shapes),d=a(t.skeletons),m=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Ee.DEFAULT_UP=new U(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pe=new U,Ye=new U,zr=new U,qe=new U,Gn=new U,Vn=new U,fa=new U,Hr=new U,Gr=new U,Vr=new U;class Ne{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Pe.subVectors(t,e),r.cross(Pe);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Pe.subVectors(r,e),Ye.subVectors(n,e),zr.subVectors(t,e);const a=Pe.dot(Pe),o=Pe.dot(Ye),l=Pe.dot(zr),c=Ye.dot(Ye),u=Ye.dot(zr),p=a*c-o*o;if(p===0)return s.set(0,0,0),null;const d=1/p,m=(c*l-o*u)*d,v=(a*u-o*l)*d;return s.set(1-m-v,v,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,qe)===null?!1:qe.x>=0&&qe.y>=0&&qe.x+qe.y<=1}static getInterpolation(t,e,n,r,s,a,o,l){return this.getBarycoord(t,e,n,r,qe)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,qe.x),l.addScaledVector(a,qe.y),l.addScaledVector(o,qe.z),l)}static isFrontFacing(t,e,n,r){return Pe.subVectors(n,e),Ye.subVectors(t,e),Pe.cross(Ye).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pe.subVectors(this.c,this.b),Ye.subVectors(this.a,this.b),Pe.cross(Ye).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ne.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ne.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Ne.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Ne.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ne.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;Gn.subVectors(r,n),Vn.subVectors(s,n),Hr.subVectors(t,n);const l=Gn.dot(Hr),c=Vn.dot(Hr);if(l<=0&&c<=0)return e.copy(n);Gr.subVectors(t,r);const u=Gn.dot(Gr),p=Vn.dot(Gr);if(u>=0&&p<=u)return e.copy(r);const d=l*p-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Gn,a);Vr.subVectors(t,s);const m=Gn.dot(Vr),v=Vn.dot(Vr);if(v>=0&&m<=v)return e.copy(s);const S=m*c-l*v;if(S<=0&&c>=0&&v<=0)return o=c/(c-v),e.copy(n).addScaledVector(Vn,o);const f=u*v-m*p;if(f<=0&&p-u>=0&&m-v>=0)return fa.subVectors(s,r),o=(p-u)/(p-u+(m-v)),e.copy(r).addScaledVector(fa,o);const h=1/(f+S+d);return a=S*h,o=d*h,e.copy(n).addScaledVector(Gn,a).addScaledVector(Vn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const mo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sn={h:0,s:0,l:0},Oi={h:0,s:0,l:0};function kr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Yt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xt.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Xt.workingColorSpace){if(t=Yl(t,1),e=xe(e,0,1),n=xe(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=kr(a,s,t+1/3),this.g=kr(a,s,t),this.b=kr(a,s,t-1/3)}return Xt.toWorkingColorSpace(this,r),this}setStyle(t,e=Ie){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){const n=mo[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ii(t.r),this.g=ii(t.g),this.b=ii(t.b),this}copyLinearToSRGB(t){return this.r=Pr(t.r),this.g=Pr(t.g),this.b=Pr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return Xt.fromWorkingColorSpace(pe.copy(this),t),Math.round(xe(pe.r*255,0,255))*65536+Math.round(xe(pe.g*255,0,255))*256+Math.round(xe(pe.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.fromWorkingColorSpace(pe.copy(this),e);const n=pe.r,r=pe.g,s=pe.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=u<=.5?p/(a+o):p/(2-a-o),a){case n:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-n)/p+2;break;case s:l=(n-r)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(pe.copy(this),e),t.r=pe.r,t.g=pe.g,t.b=pe.b,t}getStyle(t=Ie){Xt.fromWorkingColorSpace(pe.copy(this),t);const e=pe.r,n=pe.g,r=pe.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(sn),this.setHSL(sn.h+t,sn.s+e,sn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(sn),t.getHSL(Oi);const n=wr(sn.h,Oi.h,e),r=wr(sn.s,Oi.s,e),s=wr(sn.l,Oi.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pe=new Yt;Yt.NAMES=mo;let cc=0;class yi extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cc++}),this.uuid=un(),this.name="",this.type="Material",this.blending=ei,this.side=dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=is,this.blendDst=rs,this.blendEquation=Rn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ta,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dn,this.stencilZFail=Dn,this.stencilZPass=Dn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ei&&(n.blending=this.blending),this.side!==dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==is&&(n.blendSrc=this.blendSrc),this.blendDst!==rs&&(n.blendDst=this.blendDst),this.blendEquation!==Rn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ir&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ta&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Dn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Dn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Dn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class _o extends yi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Je,this.combine=eo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const se=new U,Bi=new Dt;class Fe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=cs,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return ms("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Bi.fromBufferAttribute(this,e),Bi.applyMatrix3(t),this.setXY(e,Bi.x,Bi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyMatrix3(t),this.setXYZ(e,se.x,se.y,se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyMatrix4(t),this.setXYZ(e,se.x,se.y,se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyNormalMatrix(t),this.setXYZ(e,se.x,se.y,se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.transformDirection(t),this.setXYZ(e,se.x,se.y,se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=He(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=He(e,this.array)),e}setX(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=He(e,this.array)),e}setY(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=He(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=He(e,this.array)),e}setW(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),r=Zt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),r=Zt(r,this.array),s=Zt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==cs&&(t.usage=this.usage),t}}class go extends Fe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class vo extends Fe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ln extends Fe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let hc=0;const Re=new ae,Wr=new Ee,kn=new U,Ae=new Ei,mi=new Ei,ue=new U;class _n extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hc++}),this.uuid=un(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ho(t)?vo:go)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Rt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Re.makeRotationFromQuaternion(t),this.applyMatrix4(Re),this}rotateX(t){return Re.makeRotationX(t),this.applyMatrix4(Re),this}rotateY(t){return Re.makeRotationY(t),this.applyMatrix4(Re),this}rotateZ(t){return Re.makeRotationZ(t),this.applyMatrix4(Re),this}translate(t,e,n){return Re.makeTranslation(t,e,n),this.applyMatrix4(Re),this}scale(t,e,n){return Re.makeScale(t,e,n),this.applyMatrix4(Re),this}lookAt(t){return Wr.lookAt(t),Wr.updateMatrix(),this.applyMatrix4(Wr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kn).negate(),this.translate(kn.x,kn.y,kn.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ln(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Ae.setFromBufferAttribute(s),this.morphTargetsRelative?(ue.addVectors(this.boundingBox.min,Ae.min),this.boundingBox.expandByPoint(ue),ue.addVectors(this.boundingBox.max,Ae.max),this.boundingBox.expandByPoint(ue)):(this.boundingBox.expandByPoint(Ae.min),this.boundingBox.expandByPoint(Ae.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _s);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(Ae.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];mi.setFromBufferAttribute(o),this.morphTargetsRelative?(ue.addVectors(Ae.min,mi.min),Ae.expandByPoint(ue),ue.addVectors(Ae.max,mi.max),Ae.expandByPoint(ue)):(Ae.expandByPoint(mi.min),Ae.expandByPoint(mi.max))}Ae.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)ue.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(ue));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ue.fromBufferAttribute(o,c),l&&(kn.fromBufferAttribute(t,c),ue.add(kn)),r=Math.max(r,n.distanceToSquared(ue))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fe(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let F=0;F<n.count;F++)o[F]=new U,l[F]=new U;const c=new U,u=new U,p=new U,d=new Dt,m=new Dt,v=new Dt,S=new U,f=new U;function h(F,M,x){c.fromBufferAttribute(n,F),u.fromBufferAttribute(n,M),p.fromBufferAttribute(n,x),d.fromBufferAttribute(s,F),m.fromBufferAttribute(s,M),v.fromBufferAttribute(s,x),u.sub(c),p.sub(c),m.sub(d),v.sub(d);const P=1/(m.x*v.y-v.x*m.y);isFinite(P)&&(S.copy(u).multiplyScalar(v.y).addScaledVector(p,-m.y).multiplyScalar(P),f.copy(p).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(P),o[F].add(S),o[M].add(S),o[x].add(S),l[F].add(f),l[M].add(f),l[x].add(f))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let F=0,M=T.length;F<M;++F){const x=T[F],P=x.start,k=x.count;for(let z=P,q=P+k;z<q;z+=3)h(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const E=new U,A=new U,B=new U,C=new U;function b(F){B.fromBufferAttribute(r,F),C.copy(B);const M=o[F];E.copy(M),E.sub(B.multiplyScalar(B.dot(M))).normalize(),A.crossVectors(C,M);const P=A.dot(l[F])<0?-1:1;a.setXYZW(F,E.x,E.y,E.z,P)}for(let F=0,M=T.length;F<M;++F){const x=T[F],P=x.start,k=x.count;for(let z=P,q=P+k;z<q;z+=3)b(t.getX(z+0)),b(t.getX(z+1)),b(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Fe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const r=new U,s=new U,a=new U,o=new U,l=new U,c=new U,u=new U,p=new U;if(t)for(let d=0,m=t.count;d<m;d+=3){const v=t.getX(d+0),S=t.getX(d+1),f=t.getX(d+2);r.fromBufferAttribute(e,v),s.fromBufferAttribute(e,S),a.fromBufferAttribute(e,f),u.subVectors(a,s),p.subVectors(r,s),u.cross(p),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,f),o.add(u),l.add(u),c.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,s),p.subVectors(r,s),u.cross(p),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ue.fromBufferAttribute(t,e),ue.normalize(),t.setXYZ(e,ue.x,ue.y,ue.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,p=o.normalized,d=new c.constructor(l.length*u);let m=0,v=0;for(let S=0,f=l.length;S<f;S++){o.isInterleavedBufferAttribute?m=l[S]*o.data.stride+o.offset:m=l[S]*u;for(let h=0;h<u;h++)d[v++]=c[m++]}return new Fe(d,u,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _n,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,p=c.length;u<p;u++){const d=c[u],m=t(d,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let p=0,d=c.length;p<d;p++){const m=c[p];u.push(m.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],p=s[c];for(let d=0,m=p.length;d<m;d++)u.push(p[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pa=new ae,Mn=new nc,zi=new _s,ma=new U,Wn=new U,Xn=new U,Yn=new U,Xr=new U,Hi=new U,Gi=new Dt,Vi=new Dt,ki=new Dt,_a=new U,ga=new U,va=new U,Wi=new U,Xi=new U;class je extends Ee{constructor(t=new _n,e=new _o){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Hi.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],p=s[l];u!==0&&(Xr.fromBufferAttribute(p,t),a?Hi.addScaledVector(Xr,u):Hi.addScaledVector(Xr.sub(e),u))}e.add(Hi)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zi.copy(n.boundingSphere),zi.applyMatrix4(s),Mn.copy(t.ray).recast(t.near),!(zi.containsPoint(Mn.origin)===!1&&(Mn.intersectSphere(zi,ma)===null||Mn.origin.distanceToSquared(ma)>(t.far-t.near)**2))&&(pa.copy(s).invert(),Mn.copy(t.ray).applyMatrix4(pa),!(n.boundingBox!==null&&Mn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Mn)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,p=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,S=d.length;v<S;v++){const f=d[v],h=a[f.materialIndex],T=Math.max(f.start,m.start),E=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let A=T,B=E;A<B;A+=3){const C=o.getX(A),b=o.getX(A+1),F=o.getX(A+2);r=Yi(this,h,t,n,c,u,p,C,b,F),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{const v=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let f=v,h=S;f<h;f+=3){const T=o.getX(f),E=o.getX(f+1),A=o.getX(f+2);r=Yi(this,a,t,n,c,u,p,T,E,A),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,S=d.length;v<S;v++){const f=d[v],h=a[f.materialIndex],T=Math.max(f.start,m.start),E=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let A=T,B=E;A<B;A+=3){const C=A,b=A+1,F=A+2;r=Yi(this,h,t,n,c,u,p,C,b,F),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{const v=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let f=v,h=S;f<h;f+=3){const T=f,E=f+1,A=f+2;r=Yi(this,a,t,n,c,u,p,T,E,A),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}}}function uc(i,t,e,n,r,s,a,o){let l;if(t.side===Me?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===dn,o),l===null)return null;Xi.copy(o),Xi.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Xi);return c<e.near||c>e.far?null:{distance:c,point:Xi.clone(),object:i}}function Yi(i,t,e,n,r,s,a,o,l,c){i.getVertexPosition(o,Wn),i.getVertexPosition(l,Xn),i.getVertexPosition(c,Yn);const u=uc(i,t,e,n,Wn,Xn,Yn,Wi);if(u){r&&(Gi.fromBufferAttribute(r,o),Vi.fromBufferAttribute(r,l),ki.fromBufferAttribute(r,c),u.uv=Ne.getInterpolation(Wi,Wn,Xn,Yn,Gi,Vi,ki,new Dt)),s&&(Gi.fromBufferAttribute(s,o),Vi.fromBufferAttribute(s,l),ki.fromBufferAttribute(s,c),u.uv1=Ne.getInterpolation(Wi,Wn,Xn,Yn,Gi,Vi,ki,new Dt)),a&&(_a.fromBufferAttribute(a,o),ga.fromBufferAttribute(a,l),va.fromBufferAttribute(a,c),u.normal=Ne.getInterpolation(Wi,Wn,Xn,Yn,_a,ga,va,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new U,materialIndex:0};Ne.getNormal(Wn,Xn,Yn,p.normal),u.face=p}return u}class Ti extends _n{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],p=[];let d=0,m=0;v("z","y","x",-1,-1,n,e,t,a,s,0),v("z","y","x",1,-1,n,e,-t,a,s,1),v("x","z","y",1,1,t,n,e,r,a,2),v("x","z","y",1,-1,t,n,-e,r,a,3),v("x","y","z",1,-1,t,e,n,r,s,4),v("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Ln(c,3)),this.setAttribute("normal",new Ln(u,3)),this.setAttribute("uv",new Ln(p,2));function v(S,f,h,T,E,A,B,C,b,F,M){const x=A/b,P=B/F,k=A/2,z=B/2,q=C/2,Y=b+1,W=F+1;let $=0,H=0;const ht=new U;for(let ft=0;ft<W;ft++){const mt=ft*P-z;for(let Ot=0;Ot<Y;Ot++){const qt=Ot*x-k;ht[S]=qt*T,ht[f]=mt*E,ht[h]=q,c.push(ht.x,ht.y,ht.z),ht[S]=0,ht[f]=0,ht[h]=C>0?1:-1,u.push(ht.x,ht.y,ht.z),p.push(Ot/b),p.push(1-ft/F),$+=1}}for(let ft=0;ft<F;ft++)for(let mt=0;mt<b;mt++){const Ot=d+mt+Y*ft,qt=d+mt+Y*(ft+1),V=d+(mt+1)+Y*(ft+1),J=d+(mt+1)+Y*ft;l.push(Ot,qt,J),l.push(qt,V,J),H+=6}o.addGroup(m,H,M),m+=H,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ti(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ci(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function ge(i){const t={};for(let e=0;e<i.length;e++){const n=ci(i[e]);for(const r in n)t[r]=n[r]}return t}function dc(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function xo(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}const fc={clone:ci,merge:ge};var pc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pn extends yi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pc,this.fragmentShader=mc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ci(t.uniforms),this.uniformsGroups=dc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class So extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=Ze}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const an=new U,xa=new Dt,Sa=new Dt;class De extends So{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=hs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Rr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hs*2*Math.atan(Math.tan(Rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){an.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(an.x,an.y).multiplyScalar(-t/an.z),an.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(an.x,an.y).multiplyScalar(-t/an.z)}getViewSize(t,e){return this.getViewBounds(t,xa,Sa),e.subVectors(Sa,xa)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Rr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const qn=-90,Kn=1;class _c extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new De(qn,Kn,t,e);r.layers=this.layers,this.add(r);const s=new De(qn,Kn,t,e);s.layers=this.layers,this.add(s);const a=new De(qn,Kn,t,e);a.layers=this.layers,this.add(a);const o=new De(qn,Kn,t,e);o.layers=this.layers,this.add(o);const l=new De(qn,Kn,t,e);l.layers=this.layers,this.add(l);const c=new De(qn,Kn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Ze)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,p=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(p,d,m),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Mo extends ve{constructor(t,e,n,r,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ri,super(t,e,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class gc extends In{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Mo(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ue}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ti(5,5,5),s=new pn({name:"CubemapFromEquirect",uniforms:ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Me,blending:cn});s.uniforms.tEquirect.value=e;const a=new je(r,s),o=e.minFilter;return e.minFilter===Pn&&(e.minFilter=Ue),new _c(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}const Yr=new U,vc=new U,xc=new Rt;class An{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Yr.subVectors(n,e).cross(vc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Yr),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||xc.getNormalMatrix(t),r=this.coplanarPoint(Yr).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const En=new _s,qi=new U;class Eo{constructor(t=new An,e=new An,n=new An,r=new An,s=new An,a=new An){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ze){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],p=r[6],d=r[7],m=r[8],v=r[9],S=r[10],f=r[11],h=r[12],T=r[13],E=r[14],A=r[15];if(n[0].setComponents(l-s,d-c,f-m,A-h).normalize(),n[1].setComponents(l+s,d+c,f+m,A+h).normalize(),n[2].setComponents(l+a,d+u,f+v,A+T).normalize(),n[3].setComponents(l-a,d-u,f-v,A-T).normalize(),n[4].setComponents(l-o,d-p,f-S,A-E).normalize(),e===Ze)n[5].setComponents(l+o,d+p,f+S,A+E).normalize();else if(e===lr)n[5].setComponents(o,p,S,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),En.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),En.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(En)}intersectsSprite(t){return En.center.set(0,0,0),En.radius=.7071067811865476,En.applyMatrix4(t.matrixWorld),this.intersectsSphere(En)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(qi.x=r.normal.x>0?t.max.x:t.min.x,qi.y=r.normal.y>0?t.max.y:t.min.y,qi.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(qi)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yo(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Sc(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,p=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){const u=l.array,p=l._updateRange,d=l.updateRanges;if(i.bindBuffer(c,o),p.count===-1&&d.length===0&&i.bufferSubData(c,0,u),d.length!==0){for(let m=0,v=d.length;m<v;m++){const S=d[m];i.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}p.count!==-1&&(i.bufferSubData(c,p.offset*u.BYTES_PER_ELEMENT,u,p.offset,p.count),p.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class mr extends _n{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,p=t/o,d=e/l,m=[],v=[],S=[],f=[];for(let h=0;h<u;h++){const T=h*d-a;for(let E=0;E<c;E++){const A=E*p-s;v.push(A,-T,0),S.push(0,0,1),f.push(E/o),f.push(1-h/l)}}for(let h=0;h<l;h++)for(let T=0;T<o;T++){const E=T+c*h,A=T+c*(h+1),B=T+1+c*(h+1),C=T+1+c*h;m.push(E,A,C),m.push(A,B,C)}this.setIndex(m),this.setAttribute("position",new Ln(v,3)),this.setAttribute("normal",new Ln(S,3)),this.setAttribute("uv",new Ln(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mr(t.width,t.height,t.widthSegments,t.heightSegments)}}var Mc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ec=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ac=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cc=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Pc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Lc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ic=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dc=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Uc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Nc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Oc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,Wc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Xc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Yc=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$c=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jc=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Qc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,th=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ih=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ah=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ch=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ph=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_h=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Sh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Eh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Th=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ah=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ch=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ph=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ih=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Uh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Oh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Wh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$h=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Zh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,iu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ru=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,su=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,au=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ou=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,du=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_u=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Su=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Au=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ru=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,wu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Cu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Pu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Du=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Uu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Nu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ou=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ku=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Xu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ku=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$u=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zu=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ju=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ju=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,bt={alphahash_fragment:Mc,alphahash_pars_fragment:Ec,alphamap_fragment:yc,alphamap_pars_fragment:Tc,alphatest_fragment:Ac,alphatest_pars_fragment:bc,aomap_fragment:Rc,aomap_pars_fragment:wc,batching_pars_vertex:Cc,batching_vertex:Pc,begin_vertex:Lc,beginnormal_vertex:Ic,bsdfs:Dc,iridescence_fragment:Uc,bumpmap_pars_fragment:Nc,clipping_planes_fragment:Fc,clipping_planes_pars_fragment:Oc,clipping_planes_pars_vertex:Bc,clipping_planes_vertex:zc,color_fragment:Hc,color_pars_fragment:Gc,color_pars_vertex:Vc,color_vertex:kc,common:Wc,cube_uv_reflection_fragment:Xc,defaultnormal_vertex:Yc,displacementmap_pars_vertex:qc,displacementmap_vertex:Kc,emissivemap_fragment:$c,emissivemap_pars_fragment:Zc,colorspace_fragment:jc,colorspace_pars_fragment:Jc,envmap_fragment:Qc,envmap_common_pars_fragment:th,envmap_pars_fragment:eh,envmap_pars_vertex:nh,envmap_physical_pars_fragment:fh,envmap_vertex:ih,fog_vertex:rh,fog_pars_vertex:sh,fog_fragment:ah,fog_pars_fragment:oh,gradientmap_pars_fragment:lh,lightmap_pars_fragment:ch,lights_lambert_fragment:hh,lights_lambert_pars_fragment:uh,lights_pars_begin:dh,lights_toon_fragment:ph,lights_toon_pars_fragment:mh,lights_phong_fragment:_h,lights_phong_pars_fragment:gh,lights_physical_fragment:vh,lights_physical_pars_fragment:xh,lights_fragment_begin:Sh,lights_fragment_maps:Mh,lights_fragment_end:Eh,logdepthbuf_fragment:yh,logdepthbuf_pars_fragment:Th,logdepthbuf_pars_vertex:Ah,logdepthbuf_vertex:bh,map_fragment:Rh,map_pars_fragment:wh,map_particle_fragment:Ch,map_particle_pars_fragment:Ph,metalnessmap_fragment:Lh,metalnessmap_pars_fragment:Ih,morphinstance_vertex:Dh,morphcolor_vertex:Uh,morphnormal_vertex:Nh,morphtarget_pars_vertex:Fh,morphtarget_vertex:Oh,normal_fragment_begin:Bh,normal_fragment_maps:zh,normal_pars_fragment:Hh,normal_pars_vertex:Gh,normal_vertex:Vh,normalmap_pars_fragment:kh,clearcoat_normal_fragment_begin:Wh,clearcoat_normal_fragment_maps:Xh,clearcoat_pars_fragment:Yh,iridescence_pars_fragment:qh,opaque_fragment:Kh,packing:$h,premultiplied_alpha_fragment:Zh,project_vertex:jh,dithering_fragment:Jh,dithering_pars_fragment:Qh,roughnessmap_fragment:tu,roughnessmap_pars_fragment:eu,shadowmap_pars_fragment:nu,shadowmap_pars_vertex:iu,shadowmap_vertex:ru,shadowmask_pars_fragment:su,skinbase_vertex:au,skinning_pars_vertex:ou,skinning_vertex:lu,skinnormal_vertex:cu,specularmap_fragment:hu,specularmap_pars_fragment:uu,tonemapping_fragment:du,tonemapping_pars_fragment:fu,transmission_fragment:pu,transmission_pars_fragment:mu,uv_pars_fragment:_u,uv_pars_vertex:gu,uv_vertex:vu,worldpos_vertex:xu,background_vert:Su,background_frag:Mu,backgroundCube_vert:Eu,backgroundCube_frag:yu,cube_vert:Tu,cube_frag:Au,depth_vert:bu,depth_frag:Ru,distanceRGBA_vert:wu,distanceRGBA_frag:Cu,equirect_vert:Pu,equirect_frag:Lu,linedashed_vert:Iu,linedashed_frag:Du,meshbasic_vert:Uu,meshbasic_frag:Nu,meshlambert_vert:Fu,meshlambert_frag:Ou,meshmatcap_vert:Bu,meshmatcap_frag:zu,meshnormal_vert:Hu,meshnormal_frag:Gu,meshphong_vert:Vu,meshphong_frag:ku,meshphysical_vert:Wu,meshphysical_frag:Xu,meshtoon_vert:Yu,meshtoon_frag:qu,points_vert:Ku,points_frag:$u,shadow_vert:Zu,shadow_frag:ju,sprite_vert:Ju,sprite_frag:Qu},it={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Rt}},envmap:{envMap:{value:null},envMapRotation:{value:new Rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Rt},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0},uvTransform:{value:new Rt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}}},ze={basic:{uniforms:ge([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:bt.meshbasic_vert,fragmentShader:bt.meshbasic_frag},lambert:{uniforms:ge([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Yt(0)}}]),vertexShader:bt.meshlambert_vert,fragmentShader:bt.meshlambert_frag},phong:{uniforms:ge([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:bt.meshphong_vert,fragmentShader:bt.meshphong_frag},standard:{uniforms:ge([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag},toon:{uniforms:ge([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Yt(0)}}]),vertexShader:bt.meshtoon_vert,fragmentShader:bt.meshtoon_frag},matcap:{uniforms:ge([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:bt.meshmatcap_vert,fragmentShader:bt.meshmatcap_frag},points:{uniforms:ge([it.points,it.fog]),vertexShader:bt.points_vert,fragmentShader:bt.points_frag},dashed:{uniforms:ge([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:bt.linedashed_vert,fragmentShader:bt.linedashed_frag},depth:{uniforms:ge([it.common,it.displacementmap]),vertexShader:bt.depth_vert,fragmentShader:bt.depth_frag},normal:{uniforms:ge([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:bt.meshnormal_vert,fragmentShader:bt.meshnormal_frag},sprite:{uniforms:ge([it.sprite,it.fog]),vertexShader:bt.sprite_vert,fragmentShader:bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:bt.background_vert,fragmentShader:bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Rt}},vertexShader:bt.backgroundCube_vert,fragmentShader:bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:bt.cube_vert,fragmentShader:bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:bt.equirect_vert,fragmentShader:bt.equirect_frag},distanceRGBA:{uniforms:ge([it.common,it.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:bt.distanceRGBA_vert,fragmentShader:bt.distanceRGBA_frag},shadow:{uniforms:ge([it.lights,it.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:bt.shadow_vert,fragmentShader:bt.shadow_frag}};ze.physical={uniforms:ge([ze.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Rt},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Rt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Rt},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Rt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Rt},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Rt}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag};const Ki={r:0,b:0,g:0},yn=new Je,td=new ae;function ed(i,t,e,n,r,s,a){const o=new Yt(0);let l=s===!0?0:1,c,u,p=null,d=0,m=null;function v(T){let E=T.isScene===!0?T.background:null;return E&&E.isTexture&&(E=(T.backgroundBlurriness>0?e:t).get(E)),E}function S(T){let E=!1;const A=v(T);A===null?h(o,l):A&&A.isColor&&(h(A,1),E=!0);const B=i.xr.getEnvironmentBlendMode();B==="additive"?n.buffers.color.setClear(0,0,0,1,a):B==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(T,E){const A=v(E);A&&(A.isCubeTexture||A.mapping===dr)?(u===void 0&&(u=new je(new Ti(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:ci(ze.backgroundCube.uniforms),vertexShader:ze.backgroundCube.vertexShader,fragmentShader:ze.backgroundCube.fragmentShader,side:Me,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(B,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),yn.copy(E.backgroundRotation),yn.x*=-1,yn.y*=-1,yn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(yn.y*=-1,yn.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(td.makeRotationFromEuler(yn)),u.material.toneMapped=Xt.getTransfer(A.colorSpace)!==jt,(p!==A||d!==A.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,p=A,d=A.version,m=i.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new je(new mr(2,2),new pn({name:"BackgroundMaterial",uniforms:ci(ze.background.uniforms),vertexShader:ze.background.vertexShader,fragmentShader:ze.background.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Xt.getTransfer(A.colorSpace)!==jt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(p!==A||d!==A.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,p=A,d=A.version,m=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function h(T,E){T.getRGB(Ki,xo(i)),n.buffers.color.setClear(Ki.r,Ki.g,Ki.b,E,a)}return{getClearColor:function(){return o},setClearColor:function(T,E=1){o.set(T),l=E,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,h(o,l)},render:S,addToRenderList:f}}function nd(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(x,P,k,z,q){let Y=!1;const W=p(z,k,P);s!==W&&(s=W,c(s.object)),Y=m(x,z,k,q),Y&&v(x,z,k,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,A(x,P,k,z),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function u(x){return i.deleteVertexArray(x)}function p(x,P,k){const z=k.wireframe===!0;let q=n[x.id];q===void 0&&(q={},n[x.id]=q);let Y=q[P.id];Y===void 0&&(Y={},q[P.id]=Y);let W=Y[z];return W===void 0&&(W=d(l()),Y[z]=W),W}function d(x){const P=[],k=[],z=[];for(let q=0;q<e;q++)P[q]=0,k[q]=0,z[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:k,attributeDivisors:z,object:x,attributes:{},index:null}}function m(x,P,k,z){const q=s.attributes,Y=P.attributes;let W=0;const $=k.getAttributes();for(const H in $)if($[H].location>=0){const ft=q[H];let mt=Y[H];if(mt===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(mt=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(mt=x.instanceColor)),ft===void 0||ft.attribute!==mt||mt&&ft.data!==mt.data)return!0;W++}return s.attributesNum!==W||s.index!==z}function v(x,P,k,z){const q={},Y=P.attributes;let W=0;const $=k.getAttributes();for(const H in $)if($[H].location>=0){let ft=Y[H];ft===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(ft=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(ft=x.instanceColor));const mt={};mt.attribute=ft,ft&&ft.data&&(mt.data=ft.data),q[H]=mt,W++}s.attributes=q,s.attributesNum=W,s.index=z}function S(){const x=s.newAttributes;for(let P=0,k=x.length;P<k;P++)x[P]=0}function f(x){h(x,0)}function h(x,P){const k=s.newAttributes,z=s.enabledAttributes,q=s.attributeDivisors;k[x]=1,z[x]===0&&(i.enableVertexAttribArray(x),z[x]=1),q[x]!==P&&(i.vertexAttribDivisor(x,P),q[x]=P)}function T(){const x=s.newAttributes,P=s.enabledAttributes;for(let k=0,z=P.length;k<z;k++)P[k]!==x[k]&&(i.disableVertexAttribArray(k),P[k]=0)}function E(x,P,k,z,q,Y,W){W===!0?i.vertexAttribIPointer(x,P,k,q,Y):i.vertexAttribPointer(x,P,k,z,q,Y)}function A(x,P,k,z){S();const q=z.attributes,Y=k.getAttributes(),W=P.defaultAttributeValues;for(const $ in Y){const H=Y[$];if(H.location>=0){let ht=q[$];if(ht===void 0&&($==="instanceMatrix"&&x.instanceMatrix&&(ht=x.instanceMatrix),$==="instanceColor"&&x.instanceColor&&(ht=x.instanceColor)),ht!==void 0){const ft=ht.normalized,mt=ht.itemSize,Ot=t.get(ht);if(Ot===void 0)continue;const qt=Ot.buffer,V=Ot.type,J=Ot.bytesPerElement,dt=V===i.INT||V===i.UNSIGNED_INT||ht.gpuType===io;if(ht.isInterleavedBufferAttribute){const at=ht.data,Lt=at.stride,wt=ht.offset;if(at.isInstancedInterleavedBuffer){for(let zt=0;zt<H.locationSize;zt++)h(H.location+zt,at.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let zt=0;zt<H.locationSize;zt++)f(H.location+zt);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let zt=0;zt<H.locationSize;zt++)E(H.location+zt,mt/H.locationSize,V,ft,Lt*J,(wt+mt/H.locationSize*zt)*J,dt)}else{if(ht.isInstancedBufferAttribute){for(let at=0;at<H.locationSize;at++)h(H.location+at,ht.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let at=0;at<H.locationSize;at++)f(H.location+at);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let at=0;at<H.locationSize;at++)E(H.location+at,mt/H.locationSize,V,ft,mt*J,mt/H.locationSize*at*J,dt)}}else if(W!==void 0){const ft=W[$];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv(H.location,ft);break;case 3:i.vertexAttrib3fv(H.location,ft);break;case 4:i.vertexAttrib4fv(H.location,ft);break;default:i.vertexAttrib1fv(H.location,ft)}}}}T()}function B(){F();for(const x in n){const P=n[x];for(const k in P){const z=P[k];for(const q in z)u(z[q].object),delete z[q];delete P[k]}delete n[x]}}function C(x){if(n[x.id]===void 0)return;const P=n[x.id];for(const k in P){const z=P[k];for(const q in z)u(z[q].object),delete z[q];delete P[k]}delete n[x.id]}function b(x){for(const P in n){const k=n[P];if(k[x.id]===void 0)continue;const z=k[x.id];for(const q in z)u(z[q].object),delete z[q];delete k[x.id]}}function F(){M(),a=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:F,resetDefaultState:M,dispose:B,releaseStatesOfGeometry:C,releaseStatesOfProgram:b,initAttributes:S,enableAttribute:f,disableUnusedAttributes:T}}function id(i,t,e){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,p){p!==0&&(i.drawArraysInstanced(n,c,u,p),e.update(u,n,p))}function o(c,u,p){if(p===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<p;m++)this.render(c[m],u[m]);else{d.multiDrawArraysWEBGL(n,c,0,u,0,p);let m=0;for(let v=0;v<p;v++)m+=u[v];e.update(m,n,1)}}function l(c,u,p,d){if(p===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)a(c[v],u[v],d[v]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,p);let v=0;for(let S=0;S<p;S++)v+=u[S];for(let S=0;S<d.length;S++)e.update(v,n,d[S])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function rd(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==Ge&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const b=C===fr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==fn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ln&&!b)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const p=e.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),S=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),h=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,B=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,maxTextures:d,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:S,maxAttributes:f,maxVertexUniforms:h,maxVaryings:T,maxFragmentUniforms:E,vertexTextures:A,maxSamples:B}}function sd(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new An,o=new Rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){const m=p.length!==0||d||n!==0||r;return r=d,n=p.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,d){e=u(p,d,0)},this.setState=function(p,d,m){const v=p.clippingPlanes,S=p.clipIntersection,f=p.clipShadows,h=i.get(p);if(!r||v===null||v.length===0||s&&!f)s?u(null):c();else{const T=s?0:n,E=T*4;let A=h.clippingState||null;l.value=A,A=u(v,d,E,m);for(let B=0;B!==E;++B)A[B]=e[B];h.clippingState=A,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(p,d,m,v){const S=p!==null?p.length:0;let f=null;if(S!==0){if(f=l.value,v!==!0||f===null){const h=m+S*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(f===null||f.length<h)&&(f=new Float32Array(h));for(let E=0,A=m;E!==S;++E,A+=4)a.copy(p[E]).applyMatrix4(T,o),a.normal.toArray(f,A),f[A+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,f}}function ad(i){let t=new WeakMap;function e(a,o){return o===ss?a.mapping=ri:o===as&&(a.mapping=si),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ss||o===as)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new gc(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class To extends So{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ti=4,Ma=[.125,.215,.35,.446,.526,.582],wn=20,qr=new To,Ea=new Yt;let Kr=null,$r=0,Zr=0,jr=!1;const bn=(1+Math.sqrt(5))/2,$n=1/bn,ya=[new U(-bn,$n,0),new U(bn,$n,0),new U(-$n,0,bn),new U($n,0,bn),new U(0,bn,-$n),new U(0,bn,$n),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Ta{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Kr=this._renderer.getRenderTarget(),$r=this._renderer.getActiveCubeFace(),Zr=this._renderer.getActiveMipmapLevel(),jr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ra(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ba(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Kr,$r,Zr),this._renderer.xr.enabled=jr,t.scissorTest=!1,$i(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ri||t.mapping===si?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Kr=this._renderer.getRenderTarget(),$r=this._renderer.getActiveCubeFace(),Zr=this._renderer.getActiveMipmapLevel(),jr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ue,minFilter:Ue,generateMipmaps:!1,type:fr,format:Ge,colorSpace:mn,depthBuffer:!1},r=Aa(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Aa(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=od(s)),this._blurMaterial=ld(s,t,e)}return r}_compileMaterial(t){const e=new je(this._lodPlanes[0],t);this._renderer.compile(e,qr)}_sceneToCubeUV(t,e,n,r){const o=new De(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,d=u.toneMapping;u.getClearColor(Ea),u.toneMapping=hn,u.autoClear=!1;const m=new _o({name:"PMREM.Background",side:Me,depthWrite:!1,depthTest:!1}),v=new je(new Ti,m);let S=!1;const f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,S=!0):(m.color.copy(Ea),S=!0);for(let h=0;h<6;h++){const T=h%3;T===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):T===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const E=this._cubeSize;$i(r,T*E,h>2?E:0,E,E),u.setRenderTarget(r),S&&u.render(v,o),u.render(t,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=p,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===ri||t.mapping===si;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ra()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ba());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new je(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;$i(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,qr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=ya[(r-s-1)%ya.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,p=new je(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*wn-1),S=s/v,f=isFinite(s)?1+Math.floor(u*S):wn;f>wn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${wn}`);const h=[];let T=0;for(let b=0;b<wn;++b){const F=b/S,M=Math.exp(-F*F/2);h.push(M),b===0?T+=M:b<f&&(T+=2*M)}for(let b=0;b<h.length;b++)h[b]=h[b]/T;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=v,d.mipInt.value=E-n;const A=this._sizeLods[r],B=3*A*(r>E-ti?r-E+ti:0),C=4*(this._cubeSize-A);$i(e,B,C,3*A,2*A),l.setRenderTarget(e),l.render(p,qr)}}function od(i){const t=[],e=[],n=[];let r=i;const s=i-ti+1+Ma.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-ti?l=Ma[a-i+ti-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,p=1+c,d=[u,u,p,u,p,p,u,u,p,p,u,p],m=6,v=6,S=3,f=2,h=1,T=new Float32Array(S*v*m),E=new Float32Array(f*v*m),A=new Float32Array(h*v*m);for(let C=0;C<m;C++){const b=C%3*2/3-1,F=C>2?0:-1,M=[b,F,0,b+2/3,F,0,b+2/3,F+1,0,b,F,0,b+2/3,F+1,0,b,F+1,0];T.set(M,S*v*C),E.set(d,f*v*C);const x=[C,C,C,C,C,C];A.set(x,h*v*C)}const B=new _n;B.setAttribute("position",new Fe(T,S)),B.setAttribute("uv",new Fe(E,f)),B.setAttribute("faceIndex",new Fe(A,h)),t.push(B),r>ti&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Aa(i,t,e){const n=new In(i,t,e);return n.texture.mapping=dr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $i(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function ld(i,t,e){const n=new Float32Array(wn),r=new U(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:wn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:gs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function ba(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function Ra(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function gs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function cd(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ss||l===as,u=l===ri||l===si;if(c||u){let p=t.get(o);const d=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Ta(i)),p=c?e.fromEquirectangular(o,p):e.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,t.set(o,p),p.texture;if(p!==void 0)return p.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&r(m)?(e===null&&(e=new Ta(i)),p=c?e.fromEquirectangular(o):e.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,t.set(o,p),o.addEventListener("dispose",s),p.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function hd(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&ms("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function ud(i,t,e,n){const r={},s=new WeakMap;function a(p){const d=p.target;d.index!==null&&t.remove(d.index);for(const v in d.attributes)t.remove(d.attributes[v]);for(const v in d.morphAttributes){const S=d.morphAttributes[v];for(let f=0,h=S.length;f<h;f++)t.remove(S[f])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(t.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(p,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,e.memory.geometries++),d}function l(p){const d=p.attributes;for(const v in d)t.update(d[v],i.ARRAY_BUFFER);const m=p.morphAttributes;for(const v in m){const S=m[v];for(let f=0,h=S.length;f<h;f++)t.update(S[f],i.ARRAY_BUFFER)}}function c(p){const d=[],m=p.index,v=p.attributes.position;let S=0;if(m!==null){const T=m.array;S=m.version;for(let E=0,A=T.length;E<A;E+=3){const B=T[E+0],C=T[E+1],b=T[E+2];d.push(B,C,C,b,b,B)}}else if(v!==void 0){const T=v.array;S=v.version;for(let E=0,A=T.length/3-1;E<A;E+=3){const B=E+0,C=E+1,b=E+2;d.push(B,C,C,b,b,B)}}else return;const f=new(ho(d)?vo:go)(d,1);f.version=S;const h=s.get(p);h&&t.remove(h),s.set(p,f)}function u(p){const d=s.get(p);if(d){const m=p.index;m!==null&&d.version<m.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:u}}function dd(i,t,e){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,m){i.drawElements(n,m,s,d*a),e.update(m,n,1)}function c(d,m,v){v!==0&&(i.drawElementsInstanced(n,m,s,d*a,v),e.update(m,n,v))}function u(d,m,v){if(v===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let f=0;f<v;f++)this.render(d[f]/a,m[f]);else{S.multiDrawElementsWEBGL(n,m,0,s,d,0,v);let f=0;for(let h=0;h<v;h++)f+=m[h];e.update(f,n,1)}}function p(d,m,v,S){if(v===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let h=0;h<d.length;h++)c(d[h]/a,m[h],S[h]);else{f.multiDrawElementsInstancedWEBGL(n,m,0,s,d,0,S,0,v);let h=0;for(let T=0;T<v;T++)h+=m[T];for(let T=0;T<S.length;T++)e.update(h,n,S[T])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=p}function fd(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function pd(i,t,e){const n=new WeakMap,r=new de;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==p){let x=function(){F.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var m=x;d!==void 0&&d.texture.dispose();const v=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let A=0;v===!0&&(A=1),S===!0&&(A=2),f===!0&&(A=3);let B=o.attributes.position.count*A,C=1;B>t.maxTextureSize&&(C=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const b=new Float32Array(B*C*4*p),F=new fo(b,B,C,p);F.type=ln,F.needsUpdate=!0;const M=A*4;for(let P=0;P<p;P++){const k=h[P],z=T[P],q=E[P],Y=B*C*4*P;for(let W=0;W<k.count;W++){const $=W*M;v===!0&&(r.fromBufferAttribute(k,W),b[Y+$+0]=r.x,b[Y+$+1]=r.y,b[Y+$+2]=r.z,b[Y+$+3]=0),S===!0&&(r.fromBufferAttribute(z,W),b[Y+$+4]=r.x,b[Y+$+5]=r.y,b[Y+$+6]=r.z,b[Y+$+7]=0),f===!0&&(r.fromBufferAttribute(q,W),b[Y+$+8]=r.x,b[Y+$+9]=r.y,b[Y+$+10]=r.z,b[Y+$+11]=q.itemSize===4?r.w:1)}}d={count:p,texture:F,size:new Dt(B,C)},n.set(o,d),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let v=0;for(let f=0;f<c.length;f++)v+=c[f];const S=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",S),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function md(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,p=t.get(l,u);if(r.get(p)!==c&&(t.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return p}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class Ao extends ve{constructor(t,e,n,r,s,a,o,l,c,u=ni){if(u!==ni&&u!==li)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ni&&(n=ai),n===void 0&&u===li&&(n=oi),super(null,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Se,this.minFilter=l!==void 0?l:Se,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const bo=new ve,Ro=new Ao(1,1);Ro.compareFunction=co;const wo=new fo,Co=new tc,Po=new Mo,wa=[],Ca=[],Pa=new Float32Array(16),La=new Float32Array(9),Ia=new Float32Array(4);function ui(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=wa[r];if(s===void 0&&(s=new Float32Array(r),wa[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function oe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function le(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function _r(i,t){let e=Ca[t];e===void 0&&(e=new Int32Array(t),Ca[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function _d(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function gd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(oe(e,t))return;i.uniform2fv(this.addr,t),le(e,t)}}function vd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(oe(e,t))return;i.uniform3fv(this.addr,t),le(e,t)}}function xd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(oe(e,t))return;i.uniform4fv(this.addr,t),le(e,t)}}function Sd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(oe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),le(e,t)}else{if(oe(e,n))return;Ia.set(n),i.uniformMatrix2fv(this.addr,!1,Ia),le(e,n)}}function Md(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(oe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),le(e,t)}else{if(oe(e,n))return;La.set(n),i.uniformMatrix3fv(this.addr,!1,La),le(e,n)}}function Ed(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(oe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),le(e,t)}else{if(oe(e,n))return;Pa.set(n),i.uniformMatrix4fv(this.addr,!1,Pa),le(e,n)}}function yd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Td(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(oe(e,t))return;i.uniform2iv(this.addr,t),le(e,t)}}function Ad(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(oe(e,t))return;i.uniform3iv(this.addr,t),le(e,t)}}function bd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(oe(e,t))return;i.uniform4iv(this.addr,t),le(e,t)}}function Rd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function wd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(oe(e,t))return;i.uniform2uiv(this.addr,t),le(e,t)}}function Cd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(oe(e,t))return;i.uniform3uiv(this.addr,t),le(e,t)}}function Pd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(oe(e,t))return;i.uniform4uiv(this.addr,t),le(e,t)}}function Ld(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?Ro:bo;e.setTexture2D(t||s,r)}function Id(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Co,r)}function Dd(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Po,r)}function Ud(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||wo,r)}function Nd(i){switch(i){case 5126:return _d;case 35664:return gd;case 35665:return vd;case 35666:return xd;case 35674:return Sd;case 35675:return Md;case 35676:return Ed;case 5124:case 35670:return yd;case 35667:case 35671:return Td;case 35668:case 35672:return Ad;case 35669:case 35673:return bd;case 5125:return Rd;case 36294:return wd;case 36295:return Cd;case 36296:return Pd;case 35678:case 36198:case 36298:case 36306:case 35682:return Ld;case 35679:case 36299:case 36307:return Id;case 35680:case 36300:case 36308:case 36293:return Dd;case 36289:case 36303:case 36311:case 36292:return Ud}}function Fd(i,t){i.uniform1fv(this.addr,t)}function Od(i,t){const e=ui(t,this.size,2);i.uniform2fv(this.addr,e)}function Bd(i,t){const e=ui(t,this.size,3);i.uniform3fv(this.addr,e)}function zd(i,t){const e=ui(t,this.size,4);i.uniform4fv(this.addr,e)}function Hd(i,t){const e=ui(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Gd(i,t){const e=ui(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Vd(i,t){const e=ui(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function kd(i,t){i.uniform1iv(this.addr,t)}function Wd(i,t){i.uniform2iv(this.addr,t)}function Xd(i,t){i.uniform3iv(this.addr,t)}function Yd(i,t){i.uniform4iv(this.addr,t)}function qd(i,t){i.uniform1uiv(this.addr,t)}function Kd(i,t){i.uniform2uiv(this.addr,t)}function $d(i,t){i.uniform3uiv(this.addr,t)}function Zd(i,t){i.uniform4uiv(this.addr,t)}function jd(i,t,e){const n=this.cache,r=t.length,s=_r(e,r);oe(n,s)||(i.uniform1iv(this.addr,s),le(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||bo,s[a])}function Jd(i,t,e){const n=this.cache,r=t.length,s=_r(e,r);oe(n,s)||(i.uniform1iv(this.addr,s),le(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Co,s[a])}function Qd(i,t,e){const n=this.cache,r=t.length,s=_r(e,r);oe(n,s)||(i.uniform1iv(this.addr,s),le(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Po,s[a])}function tf(i,t,e){const n=this.cache,r=t.length,s=_r(e,r);oe(n,s)||(i.uniform1iv(this.addr,s),le(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||wo,s[a])}function ef(i){switch(i){case 5126:return Fd;case 35664:return Od;case 35665:return Bd;case 35666:return zd;case 35674:return Hd;case 35675:return Gd;case 35676:return Vd;case 5124:case 35670:return kd;case 35667:case 35671:return Wd;case 35668:case 35672:return Xd;case 35669:case 35673:return Yd;case 5125:return qd;case 36294:return Kd;case 36295:return $d;case 36296:return Zd;case 35678:case 36198:case 36298:case 36306:case 35682:return jd;case 35679:case 36299:case 36307:return Jd;case 35680:case 36300:case 36308:case 36293:return Qd;case 36289:case 36303:case 36311:case 36292:return tf}}class nf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Nd(e.type)}}class rf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ef(e.type)}}class sf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const Jr=/(\w+)(\])?(\[|\.)?/g;function Da(i,t){i.seq.push(t),i.map[t.id]=t}function af(i,t,e){const n=i.name,r=n.length;for(Jr.lastIndex=0;;){const s=Jr.exec(n),a=Jr.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Da(e,c===void 0?new nf(o,i,t):new rf(o,i,t));break}else{let p=e.map[o];p===void 0&&(p=new sf(o),Da(e,p)),e=p}}}class nr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);af(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function Ua(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const of=37297;let lf=0;function cf(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function hf(i){const t=Xt.getPrimaries(Xt.workingColorSpace),e=Xt.getPrimaries(i);let n;switch(t===e?n="":t===or&&e===ar?n="LinearDisplayP3ToLinearSRGB":t===ar&&e===or&&(n="LinearSRGBToLinearDisplayP3"),i){case mn:case pr:return[n,"LinearTransferOETF"];case Ie:case ps:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Na(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+cf(i.getShaderSource(t),a)}else return r}function uf(i,t){const e=hf(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function df(i,t){let e;switch(t){case gl:e="Linear";break;case vl:e="Reinhard";break;case xl:e="OptimizedCineon";break;case Sl:e="ACESFilmic";break;case El:e="AgX";break;case yl:e="Neutral";break;case Ml:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function ff(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Si).join(`
`)}function pf(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function mf(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Si(i){return i!==""}function Fa(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Oa(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const _f=/^[ \t]*#include +<([\w\d./]+)>/gm;function us(i){return i.replace(_f,vf)}const gf=new Map;function vf(i,t){let e=bt[t];if(e===void 0){const n=gf.get(t);if(n!==void 0)e=bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return us(e)}const xf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ba(i){return i.replace(xf,Sf)}function Sf(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function za(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Mf(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===to?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ko?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ke&&(t="SHADOWMAP_TYPE_VSM"),t}function Ef(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ri:case si:t="ENVMAP_TYPE_CUBE";break;case dr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function yf(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case si:t="ENVMAP_MODE_REFRACTION";break}return t}function Tf(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case eo:t="ENVMAP_BLENDING_MULTIPLY";break;case ml:t="ENVMAP_BLENDING_MIX";break;case _l:t="ENVMAP_BLENDING_ADD";break}return t}function Af(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function bf(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Mf(e),c=Ef(e),u=yf(e),p=Tf(e),d=Af(e),m=ff(e),v=pf(s),S=r.createProgram();let f,h,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Si).join(`
`),f.length>0&&(f+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Si).join(`
`),h.length>0&&(h+=`
`)):(f=[za(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Si).join(`
`),h=[za(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hn?"#define TONE_MAPPING":"",e.toneMapping!==hn?bt.tonemapping_pars_fragment:"",e.toneMapping!==hn?df("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",bt.colorspace_pars_fragment,uf("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Si).join(`
`)),a=us(a),a=Fa(a,e),a=Oa(a,e),o=us(o),o=Fa(o,e),o=Oa(o,e),a=Ba(a),o=Ba(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,h=["#define varying in",e.glslVersion===ea?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ea?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const E=T+f+a,A=T+h+o,B=Ua(r,r.VERTEX_SHADER,E),C=Ua(r,r.FRAGMENT_SHADER,A);r.attachShader(S,B),r.attachShader(S,C),e.index0AttributeName!==void 0?r.bindAttribLocation(S,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function b(P){if(i.debug.checkShaderErrors){const k=r.getProgramInfoLog(S).trim(),z=r.getShaderInfoLog(B).trim(),q=r.getShaderInfoLog(C).trim();let Y=!0,W=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,S,B,C);else{const $=Na(r,B,"vertex"),H=Na(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+$+`
`+H)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(z===""||q==="")&&(W=!1);W&&(P.diagnostics={runnable:Y,programLog:k,vertexShader:{log:z,prefix:f},fragmentShader:{log:q,prefix:h}})}r.deleteShader(B),r.deleteShader(C),F=new nr(r,S),M=mf(r,S)}let F;this.getUniforms=function(){return F===void 0&&b(this),F};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(S,of)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=lf++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=B,this.fragmentShader=C,this}let Rf=0;class wf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Cf(t),e.set(t,n)),n}}class Cf{constructor(t){this.id=Rf++,this.code=t,this.usedTimes=0}}function Pf(i,t,e,n,r,s,a){const o=new po,l=new wf,c=new Set,u=[],p=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(M){return c.add(M),M===0?"uv":`uv${M}`}function f(M,x,P,k,z){const q=k.fog,Y=z.geometry,W=M.isMeshStandardMaterial?k.environment:null,$=(M.isMeshStandardMaterial?e:t).get(M.envMap||W),H=$&&$.mapping===dr?$.image.height:null,ht=v[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const ft=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,mt=ft!==void 0?ft.length:0;let Ot=0;Y.morphAttributes.position!==void 0&&(Ot=1),Y.morphAttributes.normal!==void 0&&(Ot=2),Y.morphAttributes.color!==void 0&&(Ot=3);let qt,V,J,dt;if(ht){const Kt=ze[ht];qt=Kt.vertexShader,V=Kt.fragmentShader}else qt=M.vertexShader,V=M.fragmentShader,l.update(M),J=l.getVertexShaderID(M),dt=l.getFragmentShaderID(M);const at=i.getRenderTarget(),Lt=z.isInstancedMesh===!0,wt=z.isBatchedMesh===!0,zt=!!M.map,w=!!M.matcap,Bt=!!$,Nt=!!M.aoMap,Jt=!!M.lightMap,St=!!M.bumpMap,Gt=!!M.normalMap,It=!!M.displacementMap,At=!!M.emissiveMap,re=!!M.metalnessMap,y=!!M.roughnessMap,_=M.anisotropy>0,O=M.clearcoat>0,K=M.dispersion>0,Z=M.iridescence>0,j=M.sheen>0,vt=M.transmission>0,rt=_&&!!M.anisotropyMap,st=O&&!!M.clearcoatMap,Ct=O&&!!M.clearcoatNormalMap,Q=O&&!!M.clearcoatRoughnessMap,_t=Z&&!!M.iridescenceMap,Ut=Z&&!!M.iridescenceThicknessMap,yt=j&&!!M.sheenColorMap,ot=j&&!!M.sheenRoughnessMap,Pt=!!M.specularMap,Ft=!!M.specularColorMap,ne=!!M.specularIntensityMap,R=vt&&!!M.transmissionMap,lt=vt&&!!M.thicknessMap,G=!!M.gradientMap,X=!!M.alphaMap,et=M.alphaTest>0,Tt=!!M.alphaHash,Vt=!!M.extensions;let ie=hn;M.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(ie=i.toneMapping);const ce={shaderID:ht,shaderType:M.type,shaderName:M.name,vertexShader:qt,fragmentShader:V,defines:M.defines,customVertexShaderID:J,customFragmentShaderID:dt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:wt,batchingColor:wt&&z._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&z.instanceColor!==null,instancingMorph:Lt&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:mn,alphaToCoverage:!!M.alphaToCoverage,map:zt,matcap:w,envMap:Bt,envMapMode:Bt&&$.mapping,envMapCubeUVHeight:H,aoMap:Nt,lightMap:Jt,bumpMap:St,normalMap:Gt,displacementMap:d&&It,emissiveMap:At,normalMapObjectSpace:Gt&&M.normalMapType===Bl,normalMapTangentSpace:Gt&&M.normalMapType===Ol,metalnessMap:re,roughnessMap:y,anisotropy:_,anisotropyMap:rt,clearcoat:O,clearcoatMap:st,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Q,dispersion:K,iridescence:Z,iridescenceMap:_t,iridescenceThicknessMap:Ut,sheen:j,sheenColorMap:yt,sheenRoughnessMap:ot,specularMap:Pt,specularColorMap:Ft,specularIntensityMap:ne,transmission:vt,transmissionMap:R,thicknessMap:lt,gradientMap:G,opaque:M.transparent===!1&&M.blending===ei&&M.alphaToCoverage===!1,alphaMap:X,alphaTest:et,alphaHash:Tt,combine:M.combine,mapUv:zt&&S(M.map.channel),aoMapUv:Nt&&S(M.aoMap.channel),lightMapUv:Jt&&S(M.lightMap.channel),bumpMapUv:St&&S(M.bumpMap.channel),normalMapUv:Gt&&S(M.normalMap.channel),displacementMapUv:It&&S(M.displacementMap.channel),emissiveMapUv:At&&S(M.emissiveMap.channel),metalnessMapUv:re&&S(M.metalnessMap.channel),roughnessMapUv:y&&S(M.roughnessMap.channel),anisotropyMapUv:rt&&S(M.anisotropyMap.channel),clearcoatMapUv:st&&S(M.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&S(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&S(M.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&S(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&S(M.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&S(M.sheenColorMap.channel),sheenRoughnessMapUv:ot&&S(M.sheenRoughnessMap.channel),specularMapUv:Pt&&S(M.specularMap.channel),specularColorMapUv:Ft&&S(M.specularColorMap.channel),specularIntensityMapUv:ne&&S(M.specularIntensityMap.channel),transmissionMapUv:R&&S(M.transmissionMap.channel),thicknessMapUv:lt&&S(M.thicknessMap.channel),alphaMapUv:X&&S(M.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Gt||_),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Y.attributes.uv&&(zt||X),fog:!!q,useFog:M.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:z.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:Ot,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:ie,decodeVideoTexture:zt&&M.map.isVideoTexture===!0&&Xt.getTransfer(M.map.colorSpace)===jt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===$e,flipSided:M.side===Me,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Vt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Vt&&M.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ce.vertexUv1s=c.has(1),ce.vertexUv2s=c.has(2),ce.vertexUv3s=c.has(3),c.clear(),ce}function h(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)x.push(P),x.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(T(x,M),E(x,M),x.push(i.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function T(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function E(M,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.skinning&&o.enable(4),x.morphTargets&&o.enable(5),x.morphNormals&&o.enable(6),x.morphColors&&o.enable(7),x.premultipliedAlpha&&o.enable(8),x.shadowMapEnabled&&o.enable(9),x.doubleSided&&o.enable(10),x.flipSided&&o.enable(11),x.useDepthPacking&&o.enable(12),x.dithering&&o.enable(13),x.transmission&&o.enable(14),x.sheen&&o.enable(15),x.opaque&&o.enable(16),x.pointsUvs&&o.enable(17),x.decodeVideoTexture&&o.enable(18),x.alphaToCoverage&&o.enable(19),M.push(o.mask)}function A(M){const x=v[M.type];let P;if(x){const k=ze[x];P=fc.clone(k.uniforms)}else P=M.uniforms;return P}function B(M,x){let P;for(let k=0,z=u.length;k<z;k++){const q=u[k];if(q.cacheKey===x){P=q,++P.usedTimes;break}}return P===void 0&&(P=new bf(i,x,M,s),u.push(P)),P}function C(M){if(--M.usedTimes===0){const x=u.indexOf(M);u[x]=u[u.length-1],u.pop(),M.destroy()}}function b(M){l.remove(M)}function F(){l.dispose()}return{getParameters:f,getProgramCacheKey:h,getUniforms:A,acquireProgram:B,releaseProgram:C,releaseShaderCache:b,programs:u,dispose:F}}function Lf(){let i=new WeakMap;function t(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function e(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function If(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ha(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ga(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(p,d,m,v,S,f){let h=i[t];return h===void 0?(h={id:p.id,object:p,geometry:d,material:m,groupOrder:v,renderOrder:p.renderOrder,z:S,group:f},i[t]=h):(h.id=p.id,h.object=p,h.geometry=d,h.material=m,h.groupOrder=v,h.renderOrder=p.renderOrder,h.z=S,h.group=f),t++,h}function o(p,d,m,v,S,f){const h=a(p,d,m,v,S,f);m.transmission>0?n.push(h):m.transparent===!0?r.push(h):e.push(h)}function l(p,d,m,v,S,f){const h=a(p,d,m,v,S,f);m.transmission>0?n.unshift(h):m.transparent===!0?r.unshift(h):e.unshift(h)}function c(p,d){e.length>1&&e.sort(p||If),n.length>1&&n.sort(d||Ha),r.length>1&&r.sort(d||Ha)}function u(){for(let p=t,d=i.length;p<d;p++){const m=i[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Df(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new Ga,i.set(n,[a])):r>=s.length?(a=new Ga,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Uf(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Yt};break;case"SpotLight":e={position:new U,direction:new U,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function Nf(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Ff=0;function Of(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Bf(i){const t=new Uf,e=Nf(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const r=new U,s=new ae,a=new ae;function o(c){let u=0,p=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let m=0,v=0,S=0,f=0,h=0,T=0,E=0,A=0,B=0,C=0,b=0;c.sort(Of);for(let M=0,x=c.length;M<x;M++){const P=c[M],k=P.color,z=P.intensity,q=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=k.r*z,p+=k.g*z,d+=k.b*z;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],z);b++}else if(P.isDirectionalLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const $=P.shadow,H=e.get(P);H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=Y,n.directionalShadowMatrix[m]=P.shadow.matrix,T++}n.directional[m]=W,m++}else if(P.isSpotLight){const W=t.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(k).multiplyScalar(z),W.distance=q,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[S]=W;const $=P.shadow;if(P.map&&(n.spotLightMap[B]=P.map,B++,$.updateMatrices(P),P.castShadow&&C++),n.spotLightMatrix[S]=$.matrix,P.castShadow){const H=e.get(P);H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.spotShadow[S]=H,n.spotShadowMap[S]=Y,A++}S++}else if(P.isRectAreaLight){const W=t.get(P);W.color.copy(k).multiplyScalar(z),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[f]=W,f++}else if(P.isPointLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const $=P.shadow,H=e.get(P);H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,H.shadowCameraNear=$.camera.near,H.shadowCameraFar=$.camera.far,n.pointShadow[v]=H,n.pointShadowMap[v]=Y,n.pointShadowMatrix[v]=P.shadow.matrix,E++}n.point[v]=W,v++}else if(P.isHemisphereLight){const W=t.get(P);W.skyColor.copy(P.color).multiplyScalar(z),W.groundColor.copy(P.groundColor).multiplyScalar(z),n.hemi[h]=W,h++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=d;const F=n.hash;(F.directionalLength!==m||F.pointLength!==v||F.spotLength!==S||F.rectAreaLength!==f||F.hemiLength!==h||F.numDirectionalShadows!==T||F.numPointShadows!==E||F.numSpotShadows!==A||F.numSpotMaps!==B||F.numLightProbes!==b)&&(n.directional.length=m,n.spot.length=S,n.rectArea.length=f,n.point.length=v,n.hemi.length=h,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=A+B-C,n.spotLightMap.length=B,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=b,F.directionalLength=m,F.pointLength=v,F.spotLength=S,F.rectAreaLength=f,F.hemiLength=h,F.numDirectionalShadows=T,F.numPointShadows=E,F.numSpotShadows=A,F.numSpotMaps=B,F.numLightProbes=b,n.version=Ff++)}function l(c,u){let p=0,d=0,m=0,v=0,S=0;const f=u.matrixWorldInverse;for(let h=0,T=c.length;h<T;h++){const E=c[h];if(E.isDirectionalLight){const A=n.directional[p];A.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(f),p++}else if(E.isSpotLight){const A=n.spot[m];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(f),A.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(f),m++}else if(E.isRectAreaLight){const A=n.rectArea[v];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(f),a.identity(),s.copy(E.matrixWorld),s.premultiply(f),a.extractRotation(s),A.halfWidth.set(E.width*.5,0,0),A.halfHeight.set(0,E.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),v++}else if(E.isPointLight){const A=n.point[d];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(f),d++}else if(E.isHemisphereLight){const A=n.hemi[S];A.direction.setFromMatrixPosition(E.matrixWorld),A.direction.transformDirection(f),S++}}}return{setup:o,setupView:l,state:n}}function Va(i){const t=new Bf(i),e=[],n=[];function r(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function zf(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Va(i),t.set(r,[o])):s>=a.length?(o=new Va(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Hf extends yi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Gf extends yi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Vf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Wf(i,t,e){let n=new Eo;const r=new Dt,s=new Dt,a=new de,o=new Hf({depthPacking:Fl}),l=new Gf,c={},u=e.maxTextureSize,p={[dn]:Me,[Me]:dn,[$e]:$e},d=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:Vf,fragmentShader:kf}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new _n;v.setAttribute("position",new Fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new je(v,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=to;let h=this.type;this.render=function(C,b,F){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||C.length===0)return;const M=i.getRenderTarget(),x=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),k=i.state;k.setBlending(cn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const z=h!==Ke&&this.type===Ke,q=h===Ke&&this.type!==Ke;for(let Y=0,W=C.length;Y<W;Y++){const $=C[Y],H=$.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const ht=H.getFrameExtents();if(r.multiply(ht),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ht.x),r.x=s.x*ht.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ht.y),r.y=s.y*ht.y,H.mapSize.y=s.y)),H.map===null||z===!0||q===!0){const mt=this.type!==Ke?{minFilter:Se,magFilter:Se}:{};H.map!==null&&H.map.dispose(),H.map=new In(r.x,r.y,mt),H.map.texture.name=$.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const ft=H.getViewportCount();for(let mt=0;mt<ft;mt++){const Ot=H.getViewport(mt);a.set(s.x*Ot.x,s.y*Ot.y,s.x*Ot.z,s.y*Ot.w),k.viewport(a),H.updateMatrices($,mt),n=H.getFrustum(),A(b,F,H.camera,$,this.type)}H.isPointLightShadow!==!0&&this.type===Ke&&T(H,F),H.needsUpdate=!1}h=this.type,f.needsUpdate=!1,i.setRenderTarget(M,x,P)};function T(C,b){const F=t.update(S);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new In(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(b,null,F,d,S,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(b,null,F,m,S,null)}function E(C,b,F,M){let x=null;const P=F.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)x=P;else if(x=F.isPointLight===!0?l:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const k=x.uuid,z=b.uuid;let q=c[k];q===void 0&&(q={},c[k]=q);let Y=q[z];Y===void 0&&(Y=x.clone(),q[z]=Y,b.addEventListener("dispose",B)),x=Y}if(x.visible=b.visible,x.wireframe=b.wireframe,M===Ke?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:p[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,F.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const k=i.properties.get(x);k.light=F}return x}function A(C,b,F,M,x){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===Ke)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld);const z=t.update(C),q=C.material;if(Array.isArray(q)){const Y=z.groups;for(let W=0,$=Y.length;W<$;W++){const H=Y[W],ht=q[H.materialIndex];if(ht&&ht.visible){const ft=E(C,ht,M,x);C.onBeforeShadow(i,C,b,F,z,ft,H),i.renderBufferDirect(F,null,z,ft,C,H),C.onAfterShadow(i,C,b,F,z,ft,H)}}}else if(q.visible){const Y=E(C,q,M,x);C.onBeforeShadow(i,C,b,F,z,Y,null),i.renderBufferDirect(F,null,z,Y,C,null),C.onAfterShadow(i,C,b,F,z,Y,null)}}const k=C.children;for(let z=0,q=k.length;z<q;z++)A(k[z],b,F,M,x)}function B(C){C.target.removeEventListener("dispose",B);for(const F in c){const M=c[F],x=C.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}function Xf(i){function t(){let R=!1;const lt=new de;let G=null;const X=new de(0,0,0,0);return{setMask:function(et){G!==et&&!R&&(i.colorMask(et,et,et,et),G=et)},setLocked:function(et){R=et},setClear:function(et,Tt,Vt,ie,ce){ce===!0&&(et*=ie,Tt*=ie,Vt*=ie),lt.set(et,Tt,Vt,ie),X.equals(lt)===!1&&(i.clearColor(et,Tt,Vt,ie),X.copy(lt))},reset:function(){R=!1,G=null,X.set(-1,0,0,0)}}}function e(){let R=!1,lt=null,G=null,X=null;return{setTest:function(et){et?dt(i.DEPTH_TEST):at(i.DEPTH_TEST)},setMask:function(et){lt!==et&&!R&&(i.depthMask(et),lt=et)},setFunc:function(et){if(G!==et){switch(et){case ll:i.depthFunc(i.NEVER);break;case cl:i.depthFunc(i.ALWAYS);break;case hl:i.depthFunc(i.LESS);break;case ir:i.depthFunc(i.LEQUAL);break;case ul:i.depthFunc(i.EQUAL);break;case dl:i.depthFunc(i.GEQUAL);break;case fl:i.depthFunc(i.GREATER);break;case pl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}G=et}},setLocked:function(et){R=et},setClear:function(et){X!==et&&(i.clearDepth(et),X=et)},reset:function(){R=!1,lt=null,G=null,X=null}}}function n(){let R=!1,lt=null,G=null,X=null,et=null,Tt=null,Vt=null,ie=null,ce=null;return{setTest:function(Kt){R||(Kt?dt(i.STENCIL_TEST):at(i.STENCIL_TEST))},setMask:function(Kt){lt!==Kt&&!R&&(i.stencilMask(Kt),lt=Kt)},setFunc:function(Kt,Oe,Be){(G!==Kt||X!==Oe||et!==Be)&&(i.stencilFunc(Kt,Oe,Be),G=Kt,X=Oe,et=Be)},setOp:function(Kt,Oe,Be){(Tt!==Kt||Vt!==Oe||ie!==Be)&&(i.stencilOp(Kt,Oe,Be),Tt=Kt,Vt=Oe,ie=Be)},setLocked:function(Kt){R=Kt},setClear:function(Kt){ce!==Kt&&(i.clearStencil(Kt),ce=Kt)},reset:function(){R=!1,lt=null,G=null,X=null,et=null,Tt=null,Vt=null,ie=null,ce=null}}}const r=new t,s=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},u={},p=new WeakMap,d=[],m=null,v=!1,S=null,f=null,h=null,T=null,E=null,A=null,B=null,C=new Yt(0,0,0),b=0,F=!1,M=null,x=null,P=null,k=null,z=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,W=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec($)[1]),Y=W>=1):$.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Y=W>=2);let H=null,ht={};const ft=i.getParameter(i.SCISSOR_BOX),mt=i.getParameter(i.VIEWPORT),Ot=new de().fromArray(ft),qt=new de().fromArray(mt);function V(R,lt,G,X){const et=new Uint8Array(4),Tt=i.createTexture();i.bindTexture(R,Tt),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<G;Vt++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,X,0,i.RGBA,i.UNSIGNED_BYTE,et):i.texImage2D(lt+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,et);return Tt}const J={};J[i.TEXTURE_2D]=V(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=V(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=V(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=V(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),dt(i.DEPTH_TEST),s.setFunc(ir),St(!1),Gt(Ts),dt(i.CULL_FACE),Nt(cn);function dt(R){c[R]!==!0&&(i.enable(R),c[R]=!0)}function at(R){c[R]!==!1&&(i.disable(R),c[R]=!1)}function Lt(R,lt){return u[R]!==lt?(i.bindFramebuffer(R,lt),u[R]=lt,R===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=lt),R===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function wt(R,lt){let G=d,X=!1;if(R){G=p.get(lt),G===void 0&&(G=[],p.set(lt,G));const et=R.textures;if(G.length!==et.length||G[0]!==i.COLOR_ATTACHMENT0){for(let Tt=0,Vt=et.length;Tt<Vt;Tt++)G[Tt]=i.COLOR_ATTACHMENT0+Tt;G.length=et.length,X=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,X=!0);X&&i.drawBuffers(G)}function zt(R){return m!==R?(i.useProgram(R),m=R,!0):!1}const w={[Rn]:i.FUNC_ADD,[Xo]:i.FUNC_SUBTRACT,[Yo]:i.FUNC_REVERSE_SUBTRACT};w[qo]=i.MIN,w[Ko]=i.MAX;const Bt={[$o]:i.ZERO,[Zo]:i.ONE,[jo]:i.SRC_COLOR,[is]:i.SRC_ALPHA,[il]:i.SRC_ALPHA_SATURATE,[el]:i.DST_COLOR,[Qo]:i.DST_ALPHA,[Jo]:i.ONE_MINUS_SRC_COLOR,[rs]:i.ONE_MINUS_SRC_ALPHA,[nl]:i.ONE_MINUS_DST_COLOR,[tl]:i.ONE_MINUS_DST_ALPHA,[rl]:i.CONSTANT_COLOR,[sl]:i.ONE_MINUS_CONSTANT_COLOR,[al]:i.CONSTANT_ALPHA,[ol]:i.ONE_MINUS_CONSTANT_ALPHA};function Nt(R,lt,G,X,et,Tt,Vt,ie,ce,Kt){if(R===cn){v===!0&&(at(i.BLEND),v=!1);return}if(v===!1&&(dt(i.BLEND),v=!0),R!==Wo){if(R!==S||Kt!==F){if((f!==Rn||E!==Rn)&&(i.blendEquation(i.FUNC_ADD),f=Rn,E=Rn),Kt)switch(R){case ei:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case As:i.blendFunc(i.ONE,i.ONE);break;case bs:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rs:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case ei:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case As:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case bs:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rs:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}h=null,T=null,A=null,B=null,C.set(0,0,0),b=0,S=R,F=Kt}return}et=et||lt,Tt=Tt||G,Vt=Vt||X,(lt!==f||et!==E)&&(i.blendEquationSeparate(w[lt],w[et]),f=lt,E=et),(G!==h||X!==T||Tt!==A||Vt!==B)&&(i.blendFuncSeparate(Bt[G],Bt[X],Bt[Tt],Bt[Vt]),h=G,T=X,A=Tt,B=Vt),(ie.equals(C)===!1||ce!==b)&&(i.blendColor(ie.r,ie.g,ie.b,ce),C.copy(ie),b=ce),S=R,F=!1}function Jt(R,lt){R.side===$e?at(i.CULL_FACE):dt(i.CULL_FACE);let G=R.side===Me;lt&&(G=!G),St(G),R.blending===ei&&R.transparent===!1?Nt(cn):Nt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),s.setFunc(R.depthFunc),s.setTest(R.depthTest),s.setMask(R.depthWrite),r.setMask(R.colorWrite);const X=R.stencilWrite;a.setTest(X),X&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),At(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?dt(i.SAMPLE_ALPHA_TO_COVERAGE):at(i.SAMPLE_ALPHA_TO_COVERAGE)}function St(R){M!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),M=R)}function Gt(R){R!==Go?(dt(i.CULL_FACE),R!==x&&(R===Ts?i.cullFace(i.BACK):R===Vo?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):at(i.CULL_FACE),x=R}function It(R){R!==P&&(Y&&i.lineWidth(R),P=R)}function At(R,lt,G){R?(dt(i.POLYGON_OFFSET_FILL),(k!==lt||z!==G)&&(i.polygonOffset(lt,G),k=lt,z=G)):at(i.POLYGON_OFFSET_FILL)}function re(R){R?dt(i.SCISSOR_TEST):at(i.SCISSOR_TEST)}function y(R){R===void 0&&(R=i.TEXTURE0+q-1),H!==R&&(i.activeTexture(R),H=R)}function _(R,lt,G){G===void 0&&(H===null?G=i.TEXTURE0+q-1:G=H);let X=ht[G];X===void 0&&(X={type:void 0,texture:void 0},ht[G]=X),(X.type!==R||X.texture!==lt)&&(H!==G&&(i.activeTexture(G),H=G),i.bindTexture(R,lt||J[R]),X.type=R,X.texture=lt)}function O(){const R=ht[H];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function vt(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function rt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function st(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ct(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function _t(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ut(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function yt(R){Ot.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),Ot.copy(R))}function ot(R){qt.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),qt.copy(R))}function Pt(R,lt){let G=l.get(lt);G===void 0&&(G=new WeakMap,l.set(lt,G));let X=G.get(R);X===void 0&&(X=i.getUniformBlockIndex(lt,R.name),G.set(R,X))}function Ft(R,lt){const X=l.get(lt).get(R);o.get(lt)!==X&&(i.uniformBlockBinding(lt,X,R.__bindingPointIndex),o.set(lt,X))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},H=null,ht={},u={},p=new WeakMap,d=[],m=null,v=!1,S=null,f=null,h=null,T=null,E=null,A=null,B=null,C=new Yt(0,0,0),b=0,F=!1,M=null,x=null,P=null,k=null,z=null,Ot.set(0,0,i.canvas.width,i.canvas.height),qt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:dt,disable:at,bindFramebuffer:Lt,drawBuffers:wt,useProgram:zt,setBlending:Nt,setMaterial:Jt,setFlipSided:St,setCullFace:Gt,setLineWidth:It,setPolygonOffset:At,setScissorTest:re,activeTexture:y,bindTexture:_,unbindTexture:O,compressedTexImage2D:K,compressedTexImage3D:Z,texImage2D:_t,texImage3D:Ut,updateUBOMapping:Pt,uniformBlockBinding:Ft,texStorage2D:Ct,texStorage3D:Q,texSubImage2D:j,texSubImage3D:vt,compressedTexSubImage2D:rt,compressedTexSubImage3D:st,scissor:yt,viewport:ot,reset:ne}}function Yf(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Dt,u=new WeakMap;let p;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(y,_){return m?new OffscreenCanvas(y,_):cr("canvas")}function S(y,_,O){let K=1;const Z=re(y);if((Z.width>O||Z.height>O)&&(K=O/Math.max(Z.width,Z.height)),K<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const j=Math.floor(K*Z.width),vt=Math.floor(K*Z.height);p===void 0&&(p=v(j,vt));const rt=_?v(j,vt):p;return rt.width=j,rt.height=vt,rt.getContext("2d").drawImage(y,0,0,j,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+j+"x"+vt+")."),rt}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),y;return y}function f(y){return y.generateMipmaps&&y.minFilter!==Se&&y.minFilter!==Ue}function h(y){i.generateMipmap(y)}function T(y,_,O,K,Z=!1){if(y!==null){if(i[y]!==void 0)return i[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let j=_;if(_===i.RED&&(O===i.FLOAT&&(j=i.R32F),O===i.HALF_FLOAT&&(j=i.R16F),O===i.UNSIGNED_BYTE&&(j=i.R8)),_===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(j=i.R8UI),O===i.UNSIGNED_SHORT&&(j=i.R16UI),O===i.UNSIGNED_INT&&(j=i.R32UI),O===i.BYTE&&(j=i.R8I),O===i.SHORT&&(j=i.R16I),O===i.INT&&(j=i.R32I)),_===i.RG&&(O===i.FLOAT&&(j=i.RG32F),O===i.HALF_FLOAT&&(j=i.RG16F),O===i.UNSIGNED_BYTE&&(j=i.RG8)),_===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(j=i.RG8UI),O===i.UNSIGNED_SHORT&&(j=i.RG16UI),O===i.UNSIGNED_INT&&(j=i.RG32UI),O===i.BYTE&&(j=i.RG8I),O===i.SHORT&&(j=i.RG16I),O===i.INT&&(j=i.RG32I)),_===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),_===i.RGBA){const vt=Z?sr:Xt.getTransfer(K);O===i.FLOAT&&(j=i.RGBA32F),O===i.HALF_FLOAT&&(j=i.RGBA16F),O===i.UNSIGNED_BYTE&&(j=vt===jt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function E(y,_){let O;return y?_===null||_===ai||_===oi?O=i.DEPTH24_STENCIL8:_===ln?O=i.DEPTH32F_STENCIL8:_===rr&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ai||_===oi?O=i.DEPTH_COMPONENT24:_===ln?O=i.DEPTH_COMPONENT32F:_===rr&&(O=i.DEPTH_COMPONENT16),O}function A(y,_){return f(y)===!0||y.isFramebufferTexture&&y.minFilter!==Se&&y.minFilter!==Ue?Math.log2(Math.max(_.width,_.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?_.mipmaps.length:1}function B(y){const _=y.target;_.removeEventListener("dispose",B),b(_),_.isVideoTexture&&u.delete(_)}function C(y){const _=y.target;_.removeEventListener("dispose",C),M(_)}function b(y){const _=n.get(y);if(_.__webglInit===void 0)return;const O=y.source,K=d.get(O);if(K){const Z=K[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&F(y),Object.keys(K).length===0&&d.delete(O)}n.remove(y)}function F(y){const _=n.get(y);i.deleteTexture(_.__webglTexture);const O=y.source,K=d.get(O);delete K[_.__cacheKey],a.memory.textures--}function M(y){const _=n.get(y);if(y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(_.__webglFramebuffer[K]))for(let Z=0;Z<_.__webglFramebuffer[K].length;Z++)i.deleteFramebuffer(_.__webglFramebuffer[K][Z]);else i.deleteFramebuffer(_.__webglFramebuffer[K]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[K])}else{if(Array.isArray(_.__webglFramebuffer))for(let K=0;K<_.__webglFramebuffer.length;K++)i.deleteFramebuffer(_.__webglFramebuffer[K]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let K=0;K<_.__webglColorRenderbuffer.length;K++)_.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[K]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=y.textures;for(let K=0,Z=O.length;K<Z;K++){const j=n.get(O[K]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(O[K])}n.remove(y)}let x=0;function P(){x=0}function k(){const y=x;return y>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),x+=1,y}function z(y){const _=[];return _.push(y.wrapS),_.push(y.wrapT),_.push(y.wrapR||0),_.push(y.magFilter),_.push(y.minFilter),_.push(y.anisotropy),_.push(y.internalFormat),_.push(y.format),_.push(y.type),_.push(y.generateMipmaps),_.push(y.premultiplyAlpha),_.push(y.flipY),_.push(y.unpackAlignment),_.push(y.colorSpace),_.join()}function q(y,_){const O=n.get(y);if(y.isVideoTexture&&It(y),y.isRenderTargetTexture===!1&&y.version>0&&O.__version!==y.version){const K=y.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{qt(O,y,_);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+_)}function Y(y,_){const O=n.get(y);if(y.version>0&&O.__version!==y.version){qt(O,y,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+_)}function W(y,_){const O=n.get(y);if(y.version>0&&O.__version!==y.version){qt(O,y,_);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+_)}function $(y,_){const O=n.get(y);if(y.version>0&&O.__version!==y.version){V(O,y,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+_)}const H={[os]:i.REPEAT,[Cn]:i.CLAMP_TO_EDGE,[ls]:i.MIRRORED_REPEAT},ht={[Se]:i.NEAREST,[Tl]:i.NEAREST_MIPMAP_NEAREST,[wi]:i.NEAREST_MIPMAP_LINEAR,[Ue]:i.LINEAR,[Mr]:i.LINEAR_MIPMAP_NEAREST,[Pn]:i.LINEAR_MIPMAP_LINEAR},ft={[zl]:i.NEVER,[Xl]:i.ALWAYS,[Hl]:i.LESS,[co]:i.LEQUAL,[Gl]:i.EQUAL,[Wl]:i.GEQUAL,[Vl]:i.GREATER,[kl]:i.NOTEQUAL};function mt(y,_){if(_.type===ln&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ue||_.magFilter===Mr||_.magFilter===wi||_.magFilter===Pn||_.minFilter===Ue||_.minFilter===Mr||_.minFilter===wi||_.minFilter===Pn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(y,i.TEXTURE_WRAP_S,H[_.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,H[_.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,H[_.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,ht[_.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,ht[_.minFilter]),_.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,ft[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Se||_.minFilter!==wi&&_.minFilter!==Pn||_.type===ln&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(y,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Ot(y,_){let O=!1;y.__webglInit===void 0&&(y.__webglInit=!0,_.addEventListener("dispose",B));const K=_.source;let Z=d.get(K);Z===void 0&&(Z={},d.set(K,Z));const j=z(_);if(j!==y.__cacheKey){Z[j]===void 0&&(Z[j]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Z[j].usedTimes++;const vt=Z[y.__cacheKey];vt!==void 0&&(Z[y.__cacheKey].usedTimes--,vt.usedTimes===0&&F(_)),y.__cacheKey=j,y.__webglTexture=Z[j].texture}return O}function qt(y,_,O){let K=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(K=i.TEXTURE_3D);const Z=Ot(y,_),j=_.source;e.bindTexture(K,y.__webglTexture,i.TEXTURE0+O);const vt=n.get(j);if(j.version!==vt.__version||Z===!0){e.activeTexture(i.TEXTURE0+O);const rt=Xt.getPrimaries(Xt.workingColorSpace),st=_.colorSpace===on?null:Xt.getPrimaries(_.colorSpace),Ct=_.colorSpace===on||rt===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let Q=S(_.image,!1,r.maxTextureSize);Q=At(_,Q);const _t=s.convert(_.format,_.colorSpace),Ut=s.convert(_.type);let yt=T(_.internalFormat,_t,Ut,_.colorSpace,_.isVideoTexture);mt(K,_);let ot;const Pt=_.mipmaps,Ft=_.isVideoTexture!==!0,ne=vt.__version===void 0||Z===!0,R=j.dataReady,lt=A(_,Q);if(_.isDepthTexture)yt=E(_.format===li,_.type),ne&&(Ft?e.texStorage2D(i.TEXTURE_2D,1,yt,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,yt,Q.width,Q.height,0,_t,Ut,null));else if(_.isDataTexture)if(Pt.length>0){Ft&&ne&&e.texStorage2D(i.TEXTURE_2D,lt,yt,Pt[0].width,Pt[0].height);for(let G=0,X=Pt.length;G<X;G++)ot=Pt[G],Ft?R&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,ot.width,ot.height,_t,Ut,ot.data):e.texImage2D(i.TEXTURE_2D,G,yt,ot.width,ot.height,0,_t,Ut,ot.data);_.generateMipmaps=!1}else Ft?(ne&&e.texStorage2D(i.TEXTURE_2D,lt,yt,Q.width,Q.height),R&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,_t,Ut,Q.data)):e.texImage2D(i.TEXTURE_2D,0,yt,Q.width,Q.height,0,_t,Ut,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ft&&ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,yt,Pt[0].width,Pt[0].height,Q.depth);for(let G=0,X=Pt.length;G<X;G++)if(ot=Pt[G],_.format!==Ge)if(_t!==null)if(Ft){if(R)if(_.layerUpdates.size>0){for(const et of _.layerUpdates){const Tt=ot.width*ot.height;e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,et,ot.width,ot.height,1,_t,ot.data.slice(Tt*et,Tt*(et+1)),0,0)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,ot.width,ot.height,Q.depth,_t,ot.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,yt,ot.width,ot.height,Q.depth,0,ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?R&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,ot.width,ot.height,Q.depth,_t,Ut,ot.data):e.texImage3D(i.TEXTURE_2D_ARRAY,G,yt,ot.width,ot.height,Q.depth,0,_t,Ut,ot.data)}else{Ft&&ne&&e.texStorage2D(i.TEXTURE_2D,lt,yt,Pt[0].width,Pt[0].height);for(let G=0,X=Pt.length;G<X;G++)ot=Pt[G],_.format!==Ge?_t!==null?Ft?R&&e.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,ot.width,ot.height,_t,ot.data):e.compressedTexImage2D(i.TEXTURE_2D,G,yt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?R&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,ot.width,ot.height,_t,Ut,ot.data):e.texImage2D(i.TEXTURE_2D,G,yt,ot.width,ot.height,0,_t,Ut,ot.data)}else if(_.isDataArrayTexture)if(Ft){if(ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,yt,Q.width,Q.height,Q.depth),R)if(_.layerUpdates.size>0){let G;switch(Ut){case i.UNSIGNED_BYTE:switch(_t){case i.ALPHA:G=1;break;case i.LUMINANCE:G=1;break;case i.LUMINANCE_ALPHA:G=2;break;case i.RGB:G=3;break;case i.RGBA:G=4;break;default:throw new Error(`Unknown texel size for format ${_t}.`)}break;case i.UNSIGNED_SHORT_4_4_4_4:case i.UNSIGNED_SHORT_5_5_5_1:case i.UNSIGNED_SHORT_5_6_5:G=1;break;default:throw new Error(`Unknown texel size for type ${Ut}.`)}const X=Q.width*Q.height*G;for(const et of _.layerUpdates)e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,et,Q.width,Q.height,1,_t,Ut,Q.data.slice(X*et,X*(et+1)));_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,_t,Ut,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,yt,Q.width,Q.height,Q.depth,0,_t,Ut,Q.data);else if(_.isData3DTexture)Ft?(ne&&e.texStorage3D(i.TEXTURE_3D,lt,yt,Q.width,Q.height,Q.depth),R&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,_t,Ut,Q.data)):e.texImage3D(i.TEXTURE_3D,0,yt,Q.width,Q.height,Q.depth,0,_t,Ut,Q.data);else if(_.isFramebufferTexture){if(ne)if(Ft)e.texStorage2D(i.TEXTURE_2D,lt,yt,Q.width,Q.height);else{let G=Q.width,X=Q.height;for(let et=0;et<lt;et++)e.texImage2D(i.TEXTURE_2D,et,yt,G,X,0,_t,Ut,null),G>>=1,X>>=1}}else if(Pt.length>0){if(Ft&&ne){const G=re(Pt[0]);e.texStorage2D(i.TEXTURE_2D,lt,yt,G.width,G.height)}for(let G=0,X=Pt.length;G<X;G++)ot=Pt[G],Ft?R&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,_t,Ut,ot):e.texImage2D(i.TEXTURE_2D,G,yt,_t,Ut,ot);_.generateMipmaps=!1}else if(Ft){if(ne){const G=re(Q);e.texStorage2D(i.TEXTURE_2D,lt,yt,G.width,G.height)}R&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t,Ut,Q)}else e.texImage2D(i.TEXTURE_2D,0,yt,_t,Ut,Q);f(_)&&h(K),vt.__version=j.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function V(y,_,O){if(_.image.length!==6)return;const K=Ot(y,_),Z=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+O);const j=n.get(Z);if(Z.version!==j.__version||K===!0){e.activeTexture(i.TEXTURE0+O);const vt=Xt.getPrimaries(Xt.workingColorSpace),rt=_.colorSpace===on?null:Xt.getPrimaries(_.colorSpace),st=_.colorSpace===on||vt===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);const Ct=_.isCompressedTexture||_.image[0].isCompressedTexture,Q=_.image[0]&&_.image[0].isDataTexture,_t=[];for(let X=0;X<6;X++)!Ct&&!Q?_t[X]=S(_.image[X],!0,r.maxCubemapSize):_t[X]=Q?_.image[X].image:_.image[X],_t[X]=At(_,_t[X]);const Ut=_t[0],yt=s.convert(_.format,_.colorSpace),ot=s.convert(_.type),Pt=T(_.internalFormat,yt,ot,_.colorSpace),Ft=_.isVideoTexture!==!0,ne=j.__version===void 0||K===!0,R=Z.dataReady;let lt=A(_,Ut);mt(i.TEXTURE_CUBE_MAP,_);let G;if(Ct){Ft&&ne&&e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Pt,Ut.width,Ut.height);for(let X=0;X<6;X++){G=_t[X].mipmaps;for(let et=0;et<G.length;et++){const Tt=G[et];_.format!==Ge?yt!==null?Ft?R&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,et,0,0,Tt.width,Tt.height,yt,Tt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,et,Pt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,et,0,0,Tt.width,Tt.height,yt,ot,Tt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,et,Pt,Tt.width,Tt.height,0,yt,ot,Tt.data)}}}else{if(G=_.mipmaps,Ft&&ne){G.length>0&&lt++;const X=re(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Pt,X.width,X.height)}for(let X=0;X<6;X++)if(Q){Ft?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,_t[X].width,_t[X].height,yt,ot,_t[X].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Pt,_t[X].width,_t[X].height,0,yt,ot,_t[X].data);for(let et=0;et<G.length;et++){const Vt=G[et].image[X].image;Ft?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,et+1,0,0,Vt.width,Vt.height,yt,ot,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,et+1,Pt,Vt.width,Vt.height,0,yt,ot,Vt.data)}}else{Ft?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,yt,ot,_t[X]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Pt,yt,ot,_t[X]);for(let et=0;et<G.length;et++){const Tt=G[et];Ft?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,et+1,0,0,yt,ot,Tt.image[X]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,et+1,Pt,yt,ot,Tt.image[X])}}}f(_)&&h(i.TEXTURE_CUBE_MAP),j.__version=Z.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function J(y,_,O,K,Z,j){const vt=s.convert(O.format,O.colorSpace),rt=s.convert(O.type),st=T(O.internalFormat,vt,rt,O.colorSpace);if(!n.get(_).__hasExternalTextures){const Q=Math.max(1,_.width>>j),_t=Math.max(1,_.height>>j);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,j,st,Q,_t,_.depth,0,vt,rt,null):e.texImage2D(Z,j,st,Q,_t,0,vt,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,y),Gt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Z,n.get(O).__webglTexture,0,St(_)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,Z,n.get(O).__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(y,_,O){if(i.bindRenderbuffer(i.RENDERBUFFER,y),_.depthBuffer){const K=_.depthTexture,Z=K&&K.isDepthTexture?K.type:null,j=E(_.stencilBuffer,Z),vt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=St(_);Gt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,j,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,j,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,j,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,y)}else{const K=_.textures;for(let Z=0;Z<K.length;Z++){const j=K[Z],vt=s.convert(j.format,j.colorSpace),rt=s.convert(j.type),st=T(j.internalFormat,vt,rt,j.colorSpace),Ct=St(_);O&&Gt(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,st,_.width,_.height):Gt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ct,st,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,st,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function at(y,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,y),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q(_.depthTexture,0);const K=n.get(_.depthTexture).__webglTexture,Z=St(_);if(_.depthTexture.format===ni)Gt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(_.depthTexture.format===li)Gt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Lt(y){const _=n.get(y),O=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!_.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");at(_.__webglFramebuffer,y)}else if(O){_.__webglDepthbuffer=[];for(let K=0;K<6;K++)e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[K]),_.__webglDepthbuffer[K]=i.createRenderbuffer(),dt(_.__webglDepthbuffer[K],y,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=i.createRenderbuffer(),dt(_.__webglDepthbuffer,y,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function wt(y,_,O){const K=n.get(y);_!==void 0&&J(K.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Lt(y)}function zt(y){const _=y.texture,O=n.get(y),K=n.get(_);y.addEventListener("dispose",C);const Z=y.textures,j=y.isWebGLCubeRenderTarget===!0,vt=Z.length>1;if(vt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=_.version,a.memory.textures++),j){O.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[rt]=[];for(let st=0;st<_.mipmaps.length;st++)O.__webglFramebuffer[rt][st]=i.createFramebuffer()}else O.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let rt=0;rt<_.mipmaps.length;rt++)O.__webglFramebuffer[rt]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(vt)for(let rt=0,st=Z.length;rt<st;rt++){const Ct=n.get(Z[rt]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=i.createTexture(),a.memory.textures++)}if(y.samples>0&&Gt(y)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let rt=0;rt<Z.length;rt++){const st=Z[rt];O.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[rt]);const Ct=s.convert(st.format,st.colorSpace),Q=s.convert(st.type),_t=T(st.internalFormat,Ct,Q,st.colorSpace,y.isXRRenderTarget===!0),Ut=St(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,_t,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,O.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),dt(O.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),mt(i.TEXTURE_CUBE_MAP,_);for(let rt=0;rt<6;rt++)if(_.mipmaps&&_.mipmaps.length>0)for(let st=0;st<_.mipmaps.length;st++)J(O.__webglFramebuffer[rt][st],y,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,st);else J(O.__webglFramebuffer[rt],y,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);f(_)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let rt=0,st=Z.length;rt<st;rt++){const Ct=Z[rt],Q=n.get(Ct);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture),mt(i.TEXTURE_2D,Ct),J(O.__webglFramebuffer,y,Ct,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,0),f(Ct)&&h(i.TEXTURE_2D)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(rt=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,K.__webglTexture),mt(rt,_),_.mipmaps&&_.mipmaps.length>0)for(let st=0;st<_.mipmaps.length;st++)J(O.__webglFramebuffer[st],y,_,i.COLOR_ATTACHMENT0,rt,st);else J(O.__webglFramebuffer,y,_,i.COLOR_ATTACHMENT0,rt,0);f(_)&&h(rt),e.unbindTexture()}y.depthBuffer&&Lt(y)}function w(y){const _=y.textures;for(let O=0,K=_.length;O<K;O++){const Z=_[O];if(f(Z)){const j=y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,vt=n.get(Z).__webglTexture;e.bindTexture(j,vt),h(j),e.unbindTexture()}}}const Bt=[],Nt=[];function Jt(y){if(y.samples>0){if(Gt(y)===!1){const _=y.textures,O=y.width,K=y.height;let Z=i.COLOR_BUFFER_BIT;const j=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(y),rt=_.length>1;if(rt)for(let st=0;st<_.length;st++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let st=0;st<_.length;st++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[st]);const Ct=n.get(_[st]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ct,0)}i.blitFramebuffer(0,0,O,K,0,0,O,K,Z,i.NEAREST),l===!0&&(Bt.length=0,Nt.length=0,Bt.push(i.COLOR_ATTACHMENT0+st),y.depthBuffer&&y.resolveDepthBuffer===!1&&(Bt.push(j),Nt.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Nt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Bt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let st=0;st<_.length;st++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,vt.__webglColorRenderbuffer[st]);const Ct=n.get(_[st]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.TEXTURE_2D,Ct,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const _=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function St(y){return Math.min(r.maxSamples,y.samples)}function Gt(y){const _=n.get(y);return y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function It(y){const _=a.render.frame;u.get(y)!==_&&(u.set(y,_),y.update())}function At(y,_){const O=y.colorSpace,K=y.format,Z=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||O!==mn&&O!==on&&(Xt.getTransfer(O)===jt?(K!==Ge||Z!==fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),_}function re(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=P,this.setTexture2D=q,this.setTexture2DArray=Y,this.setTexture3D=W,this.setTextureCube=$,this.rebindTextures=wt,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=w,this.updateMultisampleRenderTarget=Jt,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Gt}function qf(i,t){function e(n,r=on){let s;const a=Xt.getTransfer(r);if(n===fn)return i.UNSIGNED_BYTE;if(n===ro)return i.UNSIGNED_SHORT_4_4_4_4;if(n===so)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Rl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Al)return i.BYTE;if(n===bl)return i.SHORT;if(n===rr)return i.UNSIGNED_SHORT;if(n===io)return i.INT;if(n===ai)return i.UNSIGNED_INT;if(n===ln)return i.FLOAT;if(n===fr)return i.HALF_FLOAT;if(n===wl)return i.ALPHA;if(n===Cl)return i.RGB;if(n===Ge)return i.RGBA;if(n===Pl)return i.LUMINANCE;if(n===Ll)return i.LUMINANCE_ALPHA;if(n===ni)return i.DEPTH_COMPONENT;if(n===li)return i.DEPTH_STENCIL;if(n===Il)return i.RED;if(n===ao)return i.RED_INTEGER;if(n===Dl)return i.RG;if(n===oo)return i.RG_INTEGER;if(n===lo)return i.RGBA_INTEGER;if(n===Er||n===yr||n===Tr||n===Ar)if(a===jt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Er)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===yr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Tr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ar)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Er)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Tr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ar)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ws||n===Cs||n===Ps||n===Ls)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ws)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Cs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ps)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ls)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Is||n===Ds||n===Us)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Is||n===Ds)return a===jt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Us)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ns||n===Fs||n===Os||n===Bs||n===zs||n===Hs||n===Gs||n===Vs||n===ks||n===Ws||n===Xs||n===Ys||n===qs||n===Ks)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ns)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fs)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Os)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bs)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===zs)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Hs)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Gs)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vs)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ks)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ws)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xs)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ys)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qs)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ks)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===br||n===$s||n===Zs)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===br)return a===jt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$s)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zs)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ul||n===js||n===Js||n===Qs)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===br)return s.COMPRESSED_RED_RGTC1_EXT;if(n===js)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Js)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qs)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===oi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Kf extends De{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Zi extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $f={type:"move"};class Qr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const S of t.hand.values()){const f=e.getJointPose(S,n),h=this._getHandJoint(c,S);f!==null&&(h.matrix.fromArray(f.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=f.radius),h.visible=f!==null}const u=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=u.position.distanceTo(p.position),m=.02,v=.005;c.inputState.pinching&&d>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($f)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Zi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Zf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jf=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Jf{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new ve,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new pn({vertexShader:Zf,fragmentShader:jf,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new je(new mr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class Qf extends hi{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,p=null,d=null,m=null,v=null;const S=new Jf,f=e.getContextAttributes();let h=null,T=null;const E=[],A=[],B=new Dt;let C=null;const b=new De;b.layers.enable(1),b.viewport=new de;const F=new De;F.layers.enable(2),F.viewport=new de;const M=[b,F],x=new Kf;x.layers.enable(1),x.layers.enable(2);let P=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let J=E[V];return J===void 0&&(J=new Qr,E[V]=J),J.getTargetRaySpace()},this.getControllerGrip=function(V){let J=E[V];return J===void 0&&(J=new Qr,E[V]=J),J.getGripSpace()},this.getHand=function(V){let J=E[V];return J===void 0&&(J=new Qr,E[V]=J),J.getHandSpace()};function z(V){const J=A.indexOf(V.inputSource);if(J===-1)return;const dt=E[J];dt!==void 0&&(dt.update(V.inputSource,V.frame,c||a),dt.dispatchEvent({type:V.type,data:V.inputSource}))}function q(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",Y);for(let V=0;V<E.length;V++){const J=A[V];J!==null&&(A[V]=null,E[V].disconnect(J))}P=null,k=null,S.reset(),t.setRenderTarget(h),m=null,d=null,p=null,r=null,T=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(B.width,B.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return p},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(h=t.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",q),r.addEventListener("inputsourceschange",Y),f.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(B),r.renderState.layers===void 0){const J={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,J),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new In(m.framebufferWidth,m.framebufferHeight,{format:Ge,type:fn,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let J=null,dt=null,at=null;f.depth&&(at=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=f.stencil?li:ni,dt=f.stencil?oi:ai);const Lt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:s};p=new XRWebGLBinding(r,e),d=p.createProjectionLayer(Lt),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new In(d.textureWidth,d.textureHeight,{format:Ge,type:fn,depthTexture:new Ao(d.textureWidth,d.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),qt.setContext(r),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Y(V){for(let J=0;J<V.removed.length;J++){const dt=V.removed[J],at=A.indexOf(dt);at>=0&&(A[at]=null,E[at].disconnect(dt))}for(let J=0;J<V.added.length;J++){const dt=V.added[J];let at=A.indexOf(dt);if(at===-1){for(let wt=0;wt<E.length;wt++)if(wt>=A.length){A.push(dt),at=wt;break}else if(A[wt]===null){A[wt]=dt,at=wt;break}if(at===-1)break}const Lt=E[at];Lt&&Lt.connect(dt)}}const W=new U,$=new U;function H(V,J,dt){W.setFromMatrixPosition(J.matrixWorld),$.setFromMatrixPosition(dt.matrixWorld);const at=W.distanceTo($),Lt=J.projectionMatrix.elements,wt=dt.projectionMatrix.elements,zt=Lt[14]/(Lt[10]-1),w=Lt[14]/(Lt[10]+1),Bt=(Lt[9]+1)/Lt[5],Nt=(Lt[9]-1)/Lt[5],Jt=(Lt[8]-1)/Lt[0],St=(wt[8]+1)/wt[0],Gt=zt*Jt,It=zt*St,At=at/(-Jt+St),re=At*-Jt;J.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(re),V.translateZ(At),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const y=zt+At,_=w+At,O=Gt-re,K=It+(at-re),Z=Bt*w/_*y,j=Nt*w/_*y;V.projectionMatrix.makePerspective(O,K,Z,j,y,_),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function ht(V,J){J===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(J.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;S.texture!==null&&(V.near=S.depthNear,V.far=S.depthFar),x.near=F.near=b.near=V.near,x.far=F.far=b.far=V.far,(P!==x.near||k!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),P=x.near,k=x.far,b.near=P,b.far=k,F.near=P,F.far=k,b.updateProjectionMatrix(),F.updateProjectionMatrix(),V.updateProjectionMatrix());const J=V.parent,dt=x.cameras;ht(x,J);for(let at=0;at<dt.length;at++)ht(dt[at],J);dt.length===2?H(x,b,F):x.projectionMatrix.copy(b.projectionMatrix),ft(V,x,J)};function ft(V,J,dt){dt===null?V.matrix.copy(J.matrixWorld):(V.matrix.copy(dt.matrixWorld),V.matrix.invert(),V.matrix.multiply(J.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(J.projectionMatrix),V.projectionMatrixInverse.copy(J.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=hs*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(x)};let mt=null;function Ot(V,J){if(u=J.getViewerPose(c||a),v=J,u!==null){const dt=u.views;m!==null&&(t.setRenderTargetFramebuffer(T,m.framebuffer),t.setRenderTarget(T));let at=!1;dt.length!==x.cameras.length&&(x.cameras.length=0,at=!0);for(let wt=0;wt<dt.length;wt++){const zt=dt[wt];let w=null;if(m!==null)w=m.getViewport(zt);else{const Nt=p.getViewSubImage(d,zt);w=Nt.viewport,wt===0&&(t.setRenderTargetTextures(T,Nt.colorTexture,d.ignoreDepthValues?void 0:Nt.depthStencilTexture),t.setRenderTarget(T))}let Bt=M[wt];Bt===void 0&&(Bt=new De,Bt.layers.enable(wt),Bt.viewport=new de,M[wt]=Bt),Bt.matrix.fromArray(zt.transform.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale),Bt.projectionMatrix.fromArray(zt.projectionMatrix),Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(),Bt.viewport.set(w.x,w.y,w.width,w.height),wt===0&&(x.matrix.copy(Bt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),at===!0&&x.cameras.push(Bt)}const Lt=r.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")){const wt=p.getDepthInformation(dt[0]);wt&&wt.isValid&&wt.texture&&S.init(t,wt,r.renderState)}}for(let dt=0;dt<E.length;dt++){const at=A[dt],Lt=E[dt];at!==null&&Lt!==void 0&&Lt.update(at,J,c||a)}mt&&mt(V,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),v=null}const qt=new yo;qt.setAnimationLoop(Ot),this.setAnimationLoop=function(V){mt=V},this.dispose=function(){}}}const Tn=new Je,tp=new ae;function ep(i,t){function e(f,h){f.matrixAutoUpdate===!0&&f.updateMatrix(),h.value.copy(f.matrix)}function n(f,h){h.color.getRGB(f.fogColor.value,xo(i)),h.isFog?(f.fogNear.value=h.near,f.fogFar.value=h.far):h.isFogExp2&&(f.fogDensity.value=h.density)}function r(f,h,T,E,A){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(f,h):h.isMeshToonMaterial?(s(f,h),p(f,h)):h.isMeshPhongMaterial?(s(f,h),u(f,h)):h.isMeshStandardMaterial?(s(f,h),d(f,h),h.isMeshPhysicalMaterial&&m(f,h,A)):h.isMeshMatcapMaterial?(s(f,h),v(f,h)):h.isMeshDepthMaterial?s(f,h):h.isMeshDistanceMaterial?(s(f,h),S(f,h)):h.isMeshNormalMaterial?s(f,h):h.isLineBasicMaterial?(a(f,h),h.isLineDashedMaterial&&o(f,h)):h.isPointsMaterial?l(f,h,T,E):h.isSpriteMaterial?c(f,h):h.isShadowMaterial?(f.color.value.copy(h.color),f.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(f,h){f.opacity.value=h.opacity,h.color&&f.diffuse.value.copy(h.color),h.emissive&&f.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(f.map.value=h.map,e(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,e(h.alphaMap,f.alphaMapTransform)),h.bumpMap&&(f.bumpMap.value=h.bumpMap,e(h.bumpMap,f.bumpMapTransform),f.bumpScale.value=h.bumpScale,h.side===Me&&(f.bumpScale.value*=-1)),h.normalMap&&(f.normalMap.value=h.normalMap,e(h.normalMap,f.normalMapTransform),f.normalScale.value.copy(h.normalScale),h.side===Me&&f.normalScale.value.negate()),h.displacementMap&&(f.displacementMap.value=h.displacementMap,e(h.displacementMap,f.displacementMapTransform),f.displacementScale.value=h.displacementScale,f.displacementBias.value=h.displacementBias),h.emissiveMap&&(f.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,f.emissiveMapTransform)),h.specularMap&&(f.specularMap.value=h.specularMap,e(h.specularMap,f.specularMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest);const T=t.get(h),E=T.envMap,A=T.envMapRotation;E&&(f.envMap.value=E,Tn.copy(A),Tn.x*=-1,Tn.y*=-1,Tn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Tn.y*=-1,Tn.z*=-1),f.envMapRotation.value.setFromMatrix4(tp.makeRotationFromEuler(Tn)),f.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=h.reflectivity,f.ior.value=h.ior,f.refractionRatio.value=h.refractionRatio),h.lightMap&&(f.lightMap.value=h.lightMap,f.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,f.lightMapTransform)),h.aoMap&&(f.aoMap.value=h.aoMap,f.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,f.aoMapTransform))}function a(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,h.map&&(f.map.value=h.map,e(h.map,f.mapTransform))}function o(f,h){f.dashSize.value=h.dashSize,f.totalSize.value=h.dashSize+h.gapSize,f.scale.value=h.scale}function l(f,h,T,E){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.size.value=h.size*T,f.scale.value=E*.5,h.map&&(f.map.value=h.map,e(h.map,f.uvTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,e(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function c(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.rotation.value=h.rotation,h.map&&(f.map.value=h.map,e(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,e(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function u(f,h){f.specular.value.copy(h.specular),f.shininess.value=Math.max(h.shininess,1e-4)}function p(f,h){h.gradientMap&&(f.gradientMap.value=h.gradientMap)}function d(f,h){f.metalness.value=h.metalness,h.metalnessMap&&(f.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,f.metalnessMapTransform)),f.roughness.value=h.roughness,h.roughnessMap&&(f.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,f.roughnessMapTransform)),h.envMap&&(f.envMapIntensity.value=h.envMapIntensity)}function m(f,h,T){f.ior.value=h.ior,h.sheen>0&&(f.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),f.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(f.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,f.sheenColorMapTransform)),h.sheenRoughnessMap&&(f.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,f.sheenRoughnessMapTransform))),h.clearcoat>0&&(f.clearcoat.value=h.clearcoat,f.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(f.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,f.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(f.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Me&&f.clearcoatNormalScale.value.negate())),h.dispersion>0&&(f.dispersion.value=h.dispersion),h.iridescence>0&&(f.iridescence.value=h.iridescence,f.iridescenceIOR.value=h.iridescenceIOR,f.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(f.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,f.iridescenceMapTransform)),h.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),h.transmission>0&&(f.transmission.value=h.transmission,f.transmissionSamplerMap.value=T.texture,f.transmissionSamplerSize.value.set(T.width,T.height),h.transmissionMap&&(f.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,f.transmissionMapTransform)),f.thickness.value=h.thickness,h.thicknessMap&&(f.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=h.attenuationDistance,f.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(f.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(f.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=h.specularIntensity,f.specularColor.value.copy(h.specularColor),h.specularColorMap&&(f.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,f.specularColorMapTransform)),h.specularIntensityMap&&(f.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,f.specularIntensityMapTransform))}function v(f,h){h.matcap&&(f.matcap.value=h.matcap)}function S(f,h){const T=t.get(h).light;f.referencePosition.value.setFromMatrixPosition(T.matrixWorld),f.nearDistance.value=T.shadow.camera.near,f.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function np(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,E){const A=E.program;n.uniformBlockBinding(T,A)}function c(T,E){let A=r[T.id];A===void 0&&(v(T),A=u(T),r[T.id]=A,T.addEventListener("dispose",f));const B=E.program;n.updateUBOMapping(T,B);const C=t.render.frame;s[T.id]!==C&&(d(T),s[T.id]=C)}function u(T){const E=p();T.__bindingPointIndex=E;const A=i.createBuffer(),B=T.__size,C=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,B,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,A),A}function p(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const E=r[T.id],A=T.uniforms,B=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let C=0,b=A.length;C<b;C++){const F=Array.isArray(A[C])?A[C]:[A[C]];for(let M=0,x=F.length;M<x;M++){const P=F[M];if(m(P,C,M,B)===!0){const k=P.__offset,z=Array.isArray(P.value)?P.value:[P.value];let q=0;for(let Y=0;Y<z.length;Y++){const W=z[Y],$=S(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,k+q,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,q),q+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(T,E,A,B){const C=T.value,b=E+"_"+A;if(B[b]===void 0)return typeof C=="number"||typeof C=="boolean"?B[b]=C:B[b]=C.clone(),!0;{const F=B[b];if(typeof C=="number"||typeof C=="boolean"){if(F!==C)return B[b]=C,!0}else if(F.equals(C)===!1)return F.copy(C),!0}return!1}function v(T){const E=T.uniforms;let A=0;const B=16;for(let b=0,F=E.length;b<F;b++){const M=Array.isArray(E[b])?E[b]:[E[b]];for(let x=0,P=M.length;x<P;x++){const k=M[x],z=Array.isArray(k.value)?k.value:[k.value];for(let q=0,Y=z.length;q<Y;q++){const W=z[q],$=S(W),H=A%B;H!==0&&B-H<$.boundary&&(A+=B-H),k.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=A,A+=$.storage}}}const C=A%B;return C>0&&(A+=B-C),T.__size=A,T.__cache={},this}function S(T){const E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function f(T){const E=T.target;E.removeEventListener("dispose",f);const A=a.indexOf(E.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function h(){for(const T in r)i.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}class ip{constructor(t={}){const{canvas:e=ql(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const m=new Uint32Array(4),v=new Int32Array(4);let S=null,f=null;const h=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ie,this.toneMapping=hn,this.toneMappingExposure=1;const E=this;let A=!1,B=0,C=0,b=null,F=-1,M=null;const x=new de,P=new de;let k=null;const z=new Yt(0);let q=0,Y=e.width,W=e.height,$=1,H=null,ht=null;const ft=new de(0,0,Y,W),mt=new de(0,0,Y,W);let Ot=!1;const qt=new Eo;let V=!1,J=!1;const dt=new ae,at=new U,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let wt=!1;function zt(){return b===null?$:1}let w=n;function Bt(g,L){return e.getContext(g,L)}try{const g={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fs}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",G,!1),e.addEventListener("webglcontextcreationerror",X,!1),w===null){const L="webgl2";if(w=Bt(L,g),w===null)throw Bt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(g){throw console.error("THREE.WebGLRenderer: "+g.message),g}let Nt,Jt,St,Gt,It,At,re,y,_,O,K,Z,j,vt,rt,st,Ct,Q,_t,Ut,yt,ot,Pt,Ft;function ne(){Nt=new hd(w),Nt.init(),ot=new qf(w,Nt),Jt=new rd(w,Nt,t,ot),St=new Xf(w),Gt=new fd(w),It=new Lf,At=new Yf(w,Nt,St,It,Jt,ot,Gt),re=new ad(E),y=new cd(E),_=new Sc(w),Pt=new nd(w,_),O=new ud(w,_,Gt,Pt),K=new md(w,O,_,Gt),_t=new pd(w,Jt,At),st=new sd(It),Z=new Pf(E,re,y,Nt,Jt,Pt,st),j=new ep(E,It),vt=new Df,rt=new zf(Nt),Q=new ed(E,re,y,St,K,d,l),Ct=new Wf(E,K,Jt),Ft=new np(w,Gt,Jt,St),Ut=new id(w,Nt,Gt),yt=new dd(w,Nt,Gt),Gt.programs=Z.programs,E.capabilities=Jt,E.extensions=Nt,E.properties=It,E.renderLists=vt,E.shadowMap=Ct,E.state=St,E.info=Gt}ne();const R=new Qf(E,w);this.xr=R,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const g=Nt.get("WEBGL_lose_context");g&&g.loseContext()},this.forceContextRestore=function(){const g=Nt.get("WEBGL_lose_context");g&&g.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(g){g!==void 0&&($=g,this.setSize(Y,W,!1))},this.getSize=function(g){return g.set(Y,W)},this.setSize=function(g,L,D=!0){if(R.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=g,W=L,e.width=Math.floor(g*$),e.height=Math.floor(L*$),D===!0&&(e.style.width=g+"px",e.style.height=L+"px"),this.setViewport(0,0,g,L)},this.getDrawingBufferSize=function(g){return g.set(Y*$,W*$).floor()},this.setDrawingBufferSize=function(g,L,D){Y=g,W=L,$=D,e.width=Math.floor(g*D),e.height=Math.floor(L*D),this.setViewport(0,0,g,L)},this.getCurrentViewport=function(g){return g.copy(x)},this.getViewport=function(g){return g.copy(ft)},this.setViewport=function(g,L,D,N){g.isVector4?ft.set(g.x,g.y,g.z,g.w):ft.set(g,L,D,N),St.viewport(x.copy(ft).multiplyScalar($).round())},this.getScissor=function(g){return g.copy(mt)},this.setScissor=function(g,L,D,N){g.isVector4?mt.set(g.x,g.y,g.z,g.w):mt.set(g,L,D,N),St.scissor(P.copy(mt).multiplyScalar($).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(g){St.setScissorTest(Ot=g)},this.setOpaqueSort=function(g){H=g},this.setTransparentSort=function(g){ht=g},this.getClearColor=function(g){return g.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(g=!0,L=!0,D=!0){let N=0;if(g){let I=!1;if(b!==null){const tt=b.texture.format;I=tt===lo||tt===oo||tt===ao}if(I){const tt=b.texture.type,ct=tt===fn||tt===ai||tt===rr||tt===oi||tt===ro||tt===so,ut=Q.getClearColor(),pt=Q.getClearAlpha(),Mt=ut.r,Et=ut.g,xt=ut.b;ct?(m[0]=Mt,m[1]=Et,m[2]=xt,m[3]=pt,w.clearBufferuiv(w.COLOR,0,m)):(v[0]=Mt,v[1]=Et,v[2]=xt,v[3]=pt,w.clearBufferiv(w.COLOR,0,v))}else N|=w.COLOR_BUFFER_BIT}L&&(N|=w.DEPTH_BUFFER_BIT),D&&(N|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",G,!1),e.removeEventListener("webglcontextcreationerror",X,!1),vt.dispose(),rt.dispose(),It.dispose(),re.dispose(),y.dispose(),K.dispose(),Pt.dispose(),Ft.dispose(),Z.dispose(),R.dispose(),R.removeEventListener("sessionstart",Oe),R.removeEventListener("sessionend",Be),gn.stop()};function lt(g){g.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const g=Gt.autoReset,L=Ct.enabled,D=Ct.autoUpdate,N=Ct.needsUpdate,I=Ct.type;ne(),Gt.autoReset=g,Ct.enabled=L,Ct.autoUpdate=D,Ct.needsUpdate=N,Ct.type=I}function X(g){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",g.statusMessage)}function et(g){const L=g.target;L.removeEventListener("dispose",et),Tt(L)}function Tt(g){Vt(g),It.remove(g)}function Vt(g){const L=It.get(g).programs;L!==void 0&&(L.forEach(function(D){Z.releaseProgram(D)}),g.isShaderMaterial&&Z.releaseShaderCache(g))}this.renderBufferDirect=function(g,L,D,N,I,tt){L===null&&(L=Lt);const ct=I.isMesh&&I.matrixWorld.determinant()<0,ut=Oo(g,L,D,N,I);St.setMaterial(N,ct);let pt=D.index,Mt=1;if(N.wireframe===!0){if(pt=O.getWireframeAttribute(D),pt===void 0)return;Mt=2}const Et=D.drawRange,xt=D.attributes.position;let kt=Et.start*Mt,Qt=(Et.start+Et.count)*Mt;tt!==null&&(kt=Math.max(kt,tt.start*Mt),Qt=Math.min(Qt,(tt.start+tt.count)*Mt)),pt!==null?(kt=Math.max(kt,0),Qt=Math.min(Qt,pt.count)):xt!=null&&(kt=Math.max(kt,0),Qt=Math.min(Qt,xt.count));const te=Qt-kt;if(te<0||te===1/0)return;Pt.setup(I,N,ut,D,pt);let ye,Wt=Ut;if(pt!==null&&(ye=_.get(pt),Wt=yt,Wt.setIndex(ye)),I.isMesh)N.wireframe===!0?(St.setLineWidth(N.wireframeLinewidth*zt()),Wt.setMode(w.LINES)):Wt.setMode(w.TRIANGLES);else if(I.isLine){let gt=N.linewidth;gt===void 0&&(gt=1),St.setLineWidth(gt*zt()),I.isLineSegments?Wt.setMode(w.LINES):I.isLineLoop?Wt.setMode(w.LINE_LOOP):Wt.setMode(w.LINE_STRIP)}else I.isPoints?Wt.setMode(w.POINTS):I.isSprite&&Wt.setMode(w.TRIANGLES);if(I.isBatchedMesh)I._multiDrawInstances!==null?Wt.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances):Wt.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else if(I.isInstancedMesh)Wt.renderInstances(kt,te,I.count);else if(D.isInstancedBufferGeometry){const gt=D._maxInstanceCount!==void 0?D._maxInstanceCount:1/0,me=Math.min(D.instanceCount,gt);Wt.renderInstances(kt,te,me)}else Wt.render(kt,te)};function ie(g,L,D){g.transparent===!0&&g.side===$e&&g.forceSinglePass===!1?(g.side=Me,g.needsUpdate=!0,bi(g,L,D),g.side=dn,g.needsUpdate=!0,bi(g,L,D),g.side=$e):bi(g,L,D)}this.compile=function(g,L,D=null){D===null&&(D=g),f=rt.get(D),f.init(L),T.push(f),D.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),g!==D&&g.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),f.setupLights();const N=new Set;return g.traverse(function(I){const tt=I.material;if(tt)if(Array.isArray(tt))for(let ct=0;ct<tt.length;ct++){const ut=tt[ct];ie(ut,D,I),N.add(ut)}else ie(tt,D,I),N.add(tt)}),T.pop(),f=null,N},this.compileAsync=function(g,L,D=null){const N=this.compile(g,L,D);return new Promise(I=>{function tt(){if(N.forEach(function(ct){It.get(ct).currentProgram.isReady()&&N.delete(ct)}),N.size===0){I(g);return}setTimeout(tt,10)}Nt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let ce=null;function Kt(g){ce&&ce(g)}function Oe(){gn.stop()}function Be(){gn.start()}const gn=new yo;gn.setAnimationLoop(Kt),typeof self<"u"&&gn.setContext(self),this.setAnimationLoop=function(g){ce=g,R.setAnimationLoop(g),g===null?gn.stop():gn.start()},R.addEventListener("sessionstart",Oe),R.addEventListener("sessionend",Be),this.render=function(g,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),R.enabled===!0&&R.isPresenting===!0&&(R.cameraAutoUpdate===!0&&R.updateCamera(L),L=R.getCamera()),g.isScene===!0&&g.onBeforeRender(E,g,L,b),f=rt.get(g,T.length),f.init(L),T.push(f),dt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),qt.setFromProjectionMatrix(dt),J=this.localClippingEnabled,V=st.init(this.clippingPlanes,J),S=vt.get(g,h.length),S.init(),h.push(S),R.enabled===!0&&R.isPresenting===!0){const tt=E.xr.getDepthSensingMesh();tt!==null&&gr(tt,L,-1/0,E.sortObjects)}gr(g,L,0,E.sortObjects),S.finish(),E.sortObjects===!0&&S.sort(H,ht),wt=R.enabled===!1||R.isPresenting===!1||R.hasDepthSensing()===!1,wt&&Q.addToRenderList(S,g),this.info.render.frame++,V===!0&&st.beginShadows();const D=f.state.shadowsArray;Ct.render(D,g,L),V===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const N=S.opaque,I=S.transmissive;if(f.setupLights(),L.isArrayCamera){const tt=L.cameras;if(I.length>0)for(let ct=0,ut=tt.length;ct<ut;ct++){const pt=tt[ct];xs(N,I,g,pt)}wt&&Q.render(g);for(let ct=0,ut=tt.length;ct<ut;ct++){const pt=tt[ct];vs(S,g,pt,pt.viewport)}}else I.length>0&&xs(N,I,g,L),wt&&Q.render(g),vs(S,g,L);b!==null&&(At.updateMultisampleRenderTarget(b),At.updateRenderTargetMipmap(b)),g.isScene===!0&&g.onAfterRender(E,g,L),Pt.resetDefaultState(),F=-1,M=null,T.pop(),T.length>0?(f=T[T.length-1],V===!0&&st.setGlobalState(E.clippingPlanes,f.state.camera)):f=null,h.pop(),h.length>0?S=h[h.length-1]:S=null};function gr(g,L,D,N){if(g.visible===!1)return;if(g.layers.test(L.layers)){if(g.isGroup)D=g.renderOrder;else if(g.isLOD)g.autoUpdate===!0&&g.update(L);else if(g.isLight)f.pushLight(g),g.castShadow&&f.pushShadow(g);else if(g.isSprite){if(!g.frustumCulled||qt.intersectsSprite(g)){N&&at.setFromMatrixPosition(g.matrixWorld).applyMatrix4(dt);const ct=K.update(g),ut=g.material;ut.visible&&S.push(g,ct,ut,D,at.z,null)}}else if((g.isMesh||g.isLine||g.isPoints)&&(!g.frustumCulled||qt.intersectsObject(g))){const ct=K.update(g),ut=g.material;if(N&&(g.boundingSphere!==void 0?(g.boundingSphere===null&&g.computeBoundingSphere(),at.copy(g.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),at.copy(ct.boundingSphere.center)),at.applyMatrix4(g.matrixWorld).applyMatrix4(dt)),Array.isArray(ut)){const pt=ct.groups;for(let Mt=0,Et=pt.length;Mt<Et;Mt++){const xt=pt[Mt],kt=ut[xt.materialIndex];kt&&kt.visible&&S.push(g,ct,kt,D,at.z,xt)}}else ut.visible&&S.push(g,ct,ut,D,at.z,null)}}const tt=g.children;for(let ct=0,ut=tt.length;ct<ut;ct++)gr(tt[ct],L,D,N)}function vs(g,L,D,N){const I=g.opaque,tt=g.transmissive,ct=g.transparent;f.setupLightsView(D),V===!0&&st.setGlobalState(E.clippingPlanes,D),N&&St.viewport(x.copy(N)),I.length>0&&Ai(I,L,D),tt.length>0&&Ai(tt,L,D),ct.length>0&&Ai(ct,L,D),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function xs(g,L,D,N){if((D.isScene===!0?D.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[N.id]===void 0&&(f.state.transmissionRenderTarget[N.id]=new In(1,1,{generateMipmaps:!0,type:Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float")?fr:fn,minFilter:Pn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace}));const tt=f.state.transmissionRenderTarget[N.id],ct=N.viewport||x;tt.setSize(ct.z,ct.w);const ut=E.getRenderTarget();E.setRenderTarget(tt),E.getClearColor(z),q=E.getClearAlpha(),q<1&&E.setClearColor(16777215,.5),wt?Q.render(D):E.clear();const pt=E.toneMapping;E.toneMapping=hn;const Mt=N.viewport;if(N.viewport!==void 0&&(N.viewport=void 0),f.setupLightsView(N),V===!0&&st.setGlobalState(E.clippingPlanes,N),Ai(g,D,N),At.updateMultisampleRenderTarget(tt),At.updateRenderTargetMipmap(tt),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let Et=!1;for(let xt=0,kt=L.length;xt<kt;xt++){const Qt=L[xt],te=Qt.object,ye=Qt.geometry,Wt=Qt.material,gt=Qt.group;if(Wt.side===$e&&te.layers.test(N.layers)){const me=Wt.side;Wt.side=Me,Wt.needsUpdate=!0,Ss(te,D,N,ye,Wt,gt),Wt.side=me,Wt.needsUpdate=!0,Et=!0}}Et===!0&&(At.updateMultisampleRenderTarget(tt),At.updateRenderTargetMipmap(tt))}E.setRenderTarget(ut),E.setClearColor(z,q),Mt!==void 0&&(N.viewport=Mt),E.toneMapping=pt}function Ai(g,L,D){const N=L.isScene===!0?L.overrideMaterial:null;for(let I=0,tt=g.length;I<tt;I++){const ct=g[I],ut=ct.object,pt=ct.geometry,Mt=N===null?ct.material:N,Et=ct.group;ut.layers.test(D.layers)&&Ss(ut,L,D,pt,Mt,Et)}}function Ss(g,L,D,N,I,tt){g.onBeforeRender(E,L,D,N,I,tt),g.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,g.matrixWorld),g.normalMatrix.getNormalMatrix(g.modelViewMatrix),I.onBeforeRender(E,L,D,N,g,tt),I.transparent===!0&&I.side===$e&&I.forceSinglePass===!1?(I.side=Me,I.needsUpdate=!0,E.renderBufferDirect(D,L,N,I,g,tt),I.side=dn,I.needsUpdate=!0,E.renderBufferDirect(D,L,N,I,g,tt),I.side=$e):E.renderBufferDirect(D,L,N,I,g,tt),g.onAfterRender(E,L,D,N,I,tt)}function bi(g,L,D){L.isScene!==!0&&(L=Lt);const N=It.get(g),I=f.state.lights,tt=f.state.shadowsArray,ct=I.state.version,ut=Z.getParameters(g,I.state,tt,L,D),pt=Z.getProgramCacheKey(ut);let Mt=N.programs;N.environment=g.isMeshStandardMaterial?L.environment:null,N.fog=L.fog,N.envMap=(g.isMeshStandardMaterial?y:re).get(g.envMap||N.environment),N.envMapRotation=N.environment!==null&&g.envMap===null?L.environmentRotation:g.envMapRotation,Mt===void 0&&(g.addEventListener("dispose",et),Mt=new Map,N.programs=Mt);let Et=Mt.get(pt);if(Et!==void 0){if(N.currentProgram===Et&&N.lightsStateVersion===ct)return Es(g,ut),Et}else ut.uniforms=Z.getUniforms(g),g.onBuild(D,ut,E),g.onBeforeCompile(ut,E),Et=Z.acquireProgram(ut,pt),Mt.set(pt,Et),N.uniforms=ut.uniforms;const xt=N.uniforms;return(!g.isShaderMaterial&&!g.isRawShaderMaterial||g.clipping===!0)&&(xt.clippingPlanes=st.uniform),Es(g,ut),N.needsLights=zo(g),N.lightsStateVersion=ct,N.needsLights&&(xt.ambientLightColor.value=I.state.ambient,xt.lightProbe.value=I.state.probe,xt.directionalLights.value=I.state.directional,xt.directionalLightShadows.value=I.state.directionalShadow,xt.spotLights.value=I.state.spot,xt.spotLightShadows.value=I.state.spotShadow,xt.rectAreaLights.value=I.state.rectArea,xt.ltc_1.value=I.state.rectAreaLTC1,xt.ltc_2.value=I.state.rectAreaLTC2,xt.pointLights.value=I.state.point,xt.pointLightShadows.value=I.state.pointShadow,xt.hemisphereLights.value=I.state.hemi,xt.directionalShadowMap.value=I.state.directionalShadowMap,xt.directionalShadowMatrix.value=I.state.directionalShadowMatrix,xt.spotShadowMap.value=I.state.spotShadowMap,xt.spotLightMatrix.value=I.state.spotLightMatrix,xt.spotLightMap.value=I.state.spotLightMap,xt.pointShadowMap.value=I.state.pointShadowMap,xt.pointShadowMatrix.value=I.state.pointShadowMatrix),N.currentProgram=Et,N.uniformsList=null,Et}function Ms(g){if(g.uniformsList===null){const L=g.currentProgram.getUniforms();g.uniformsList=nr.seqWithValue(L.seq,g.uniforms)}return g.uniformsList}function Es(g,L){const D=It.get(g);D.outputColorSpace=L.outputColorSpace,D.batching=L.batching,D.batchingColor=L.batchingColor,D.instancing=L.instancing,D.instancingColor=L.instancingColor,D.instancingMorph=L.instancingMorph,D.skinning=L.skinning,D.morphTargets=L.morphTargets,D.morphNormals=L.morphNormals,D.morphColors=L.morphColors,D.morphTargetsCount=L.morphTargetsCount,D.numClippingPlanes=L.numClippingPlanes,D.numIntersection=L.numClipIntersection,D.vertexAlphas=L.vertexAlphas,D.vertexTangents=L.vertexTangents,D.toneMapping=L.toneMapping}function Oo(g,L,D,N,I){L.isScene!==!0&&(L=Lt),At.resetTextureUnits();const tt=L.fog,ct=N.isMeshStandardMaterial?L.environment:null,ut=b===null?E.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:mn,pt=(N.isMeshStandardMaterial?y:re).get(N.envMap||ct),Mt=N.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,Et=!!D.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),xt=!!D.morphAttributes.position,kt=!!D.morphAttributes.normal,Qt=!!D.morphAttributes.color;let te=hn;N.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(te=E.toneMapping);const ye=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,Wt=ye!==void 0?ye.length:0,gt=It.get(N),me=f.state.lights;if(V===!0&&(J===!0||g!==M)){const be=g===M&&N.id===F;st.setState(N,g,be)}let $t=!1;N.version===gt.__version?(gt.needsLights&&gt.lightsStateVersion!==me.state.version||gt.outputColorSpace!==ut||I.isBatchedMesh&&gt.batching===!1||!I.isBatchedMesh&&gt.batching===!0||I.isBatchedMesh&&gt.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&gt.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&gt.instancing===!1||!I.isInstancedMesh&&gt.instancing===!0||I.isSkinnedMesh&&gt.skinning===!1||!I.isSkinnedMesh&&gt.skinning===!0||I.isInstancedMesh&&gt.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&gt.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&gt.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&gt.instancingMorph===!1&&I.morphTexture!==null||gt.envMap!==pt||N.fog===!0&&gt.fog!==tt||gt.numClippingPlanes!==void 0&&(gt.numClippingPlanes!==st.numPlanes||gt.numIntersection!==st.numIntersection)||gt.vertexAlphas!==Mt||gt.vertexTangents!==Et||gt.morphTargets!==xt||gt.morphNormals!==kt||gt.morphColors!==Qt||gt.toneMapping!==te||gt.morphTargetsCount!==Wt)&&($t=!0):($t=!0,gt.__version=N.version);let Ve=gt.currentProgram;$t===!0&&(Ve=bi(N,L,I));let Ri=!1,vn=!1,vr=!1;const he=Ve.getUniforms(),Qe=gt.uniforms;if(St.useProgram(Ve.program)&&(Ri=!0,vn=!0,vr=!0),N.id!==F&&(F=N.id,vn=!0),Ri||M!==g){he.setValue(w,"projectionMatrix",g.projectionMatrix),he.setValue(w,"viewMatrix",g.matrixWorldInverse);const be=he.map.cameraPosition;be!==void 0&&be.setValue(w,at.setFromMatrixPosition(g.matrixWorld)),Jt.logarithmicDepthBuffer&&he.setValue(w,"logDepthBufFC",2/(Math.log(g.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&he.setValue(w,"isOrthographic",g.isOrthographicCamera===!0),M!==g&&(M=g,vn=!0,vr=!0)}if(I.isSkinnedMesh){he.setOptional(w,I,"bindMatrix"),he.setOptional(w,I,"bindMatrixInverse");const be=I.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),he.setValue(w,"boneTexture",be.boneTexture,At))}I.isBatchedMesh&&(he.setOptional(w,I,"batchingTexture"),he.setValue(w,"batchingTexture",I._matricesTexture,At),he.setOptional(w,I,"batchingColorTexture"),I._colorsTexture!==null&&he.setValue(w,"batchingColorTexture",I._colorsTexture,At));const xr=D.morphAttributes;if((xr.position!==void 0||xr.normal!==void 0||xr.color!==void 0)&&_t.update(I,D,Ve),(vn||gt.receiveShadow!==I.receiveShadow)&&(gt.receiveShadow=I.receiveShadow,he.setValue(w,"receiveShadow",I.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(Qe.envMap.value=pt,Qe.flipEnvMap.value=pt.isCubeTexture&&pt.isRenderTargetTexture===!1?-1:1),N.isMeshStandardMaterial&&N.envMap===null&&L.environment!==null&&(Qe.envMapIntensity.value=L.environmentIntensity),vn&&(he.setValue(w,"toneMappingExposure",E.toneMappingExposure),gt.needsLights&&Bo(Qe,vr),tt&&N.fog===!0&&j.refreshFogUniforms(Qe,tt),j.refreshMaterialUniforms(Qe,N,$,W,f.state.transmissionRenderTarget[g.id]),nr.upload(w,Ms(gt),Qe,At)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(nr.upload(w,Ms(gt),Qe,At),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&he.setValue(w,"center",I.center),he.setValue(w,"modelViewMatrix",I.modelViewMatrix),he.setValue(w,"normalMatrix",I.normalMatrix),he.setValue(w,"modelMatrix",I.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const be=N.uniformsGroups;for(let Sr=0,Ho=be.length;Sr<Ho;Sr++){const ys=be[Sr];Ft.update(ys,Ve),Ft.bind(ys,Ve)}}return Ve}function Bo(g,L){g.ambientLightColor.needsUpdate=L,g.lightProbe.needsUpdate=L,g.directionalLights.needsUpdate=L,g.directionalLightShadows.needsUpdate=L,g.pointLights.needsUpdate=L,g.pointLightShadows.needsUpdate=L,g.spotLights.needsUpdate=L,g.spotLightShadows.needsUpdate=L,g.rectAreaLights.needsUpdate=L,g.hemisphereLights.needsUpdate=L}function zo(g){return g.isMeshLambertMaterial||g.isMeshToonMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isShadowMaterial||g.isShaderMaterial&&g.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(g,L,D){It.get(g.texture).__webglTexture=L,It.get(g.depthTexture).__webglTexture=D;const N=It.get(g);N.__hasExternalTextures=!0,N.__autoAllocateDepthBuffer=D===void 0,N.__autoAllocateDepthBuffer||Nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(g,L){const D=It.get(g);D.__webglFramebuffer=L,D.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(g,L=0,D=0){b=g,B=L,C=D;let N=!0,I=null,tt=!1,ct=!1;if(g){const pt=It.get(g);pt.__useDefaultFramebuffer!==void 0?(St.bindFramebuffer(w.FRAMEBUFFER,null),N=!1):pt.__webglFramebuffer===void 0?At.setupRenderTarget(g):pt.__hasExternalTextures&&At.rebindTextures(g,It.get(g.texture).__webglTexture,It.get(g.depthTexture).__webglTexture);const Mt=g.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(ct=!0);const Et=It.get(g).__webglFramebuffer;g.isWebGLCubeRenderTarget?(Array.isArray(Et[L])?I=Et[L][D]:I=Et[L],tt=!0):g.samples>0&&At.useMultisampledRTT(g)===!1?I=It.get(g).__webglMultisampledFramebuffer:Array.isArray(Et)?I=Et[D]:I=Et,x.copy(g.viewport),P.copy(g.scissor),k=g.scissorTest}else x.copy(ft).multiplyScalar($).floor(),P.copy(mt).multiplyScalar($).floor(),k=Ot;if(St.bindFramebuffer(w.FRAMEBUFFER,I)&&N&&St.drawBuffers(g,I),St.viewport(x),St.scissor(P),St.setScissorTest(k),tt){const pt=It.get(g.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+L,pt.__webglTexture,D)}else if(ct){const pt=It.get(g.texture),Mt=L||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,pt.__webglTexture,D||0,Mt)}F=-1},this.readRenderTargetPixels=function(g,L,D,N,I,tt,ct){if(!(g&&g.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ut=It.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&ct!==void 0&&(ut=ut[ct]),ut){St.bindFramebuffer(w.FRAMEBUFFER,ut);try{const pt=g.texture,Mt=pt.format,Et=pt.type;if(!Jt.textureFormatReadable(Mt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Jt.textureTypeReadable(Et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=g.width-N&&D>=0&&D<=g.height-I&&w.readPixels(L,D,N,I,ot.convert(Mt),ot.convert(Et),tt)}finally{const pt=b!==null?It.get(b).__webglFramebuffer:null;St.bindFramebuffer(w.FRAMEBUFFER,pt)}}},this.readRenderTargetPixelsAsync=async function(g,L,D,N,I,tt,ct){if(!(g&&g.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ut=It.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&ct!==void 0&&(ut=ut[ct]),ut){St.bindFramebuffer(w.FRAMEBUFFER,ut);try{const pt=g.texture,Mt=pt.format,Et=pt.type;if(!Jt.textureFormatReadable(Mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Jt.textureTypeReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=g.width-N&&D>=0&&D<=g.height-I){const xt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,xt),w.bufferData(w.PIXEL_PACK_BUFFER,tt.byteLength,w.STREAM_READ),w.readPixels(L,D,N,I,ot.convert(Mt),ot.convert(Et),0),w.flush();const kt=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);await Kl(w,kt,4);try{w.bindBuffer(w.PIXEL_PACK_BUFFER,xt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,tt)}finally{w.deleteBuffer(xt),w.deleteSync(kt)}return tt}}finally{const pt=b!==null?It.get(b).__webglFramebuffer:null;St.bindFramebuffer(w.FRAMEBUFFER,pt)}}},this.copyFramebufferToTexture=function(g,L=null,D=0){g.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,g=arguments[1]);const N=Math.pow(2,-D),I=Math.floor(g.image.width*N),tt=Math.floor(g.image.height*N),ct=L!==null?L.x:0,ut=L!==null?L.y:0;At.setTexture2D(g,0),w.copyTexSubImage2D(w.TEXTURE_2D,D,0,0,ct,ut,I,tt),St.unbindTexture()},this.copyTextureToTexture=function(g,L,D=null,N=null,I=0){g.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),N=arguments[0]||null,g=arguments[1],L=arguments[2],I=arguments[3]||0,D=null);let tt,ct,ut,pt,Mt,Et;D!==null?(tt=D.max.x-D.min.x,ct=D.max.y-D.min.y,ut=D.min.x,pt=D.min.y):(tt=g.image.width,ct=g.image.height,ut=0,pt=0),N!==null?(Mt=N.x,Et=N.y):(Mt=0,Et=0);const xt=ot.convert(L.format),kt=ot.convert(L.type);At.setTexture2D(L,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,L.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,L.unpackAlignment);const Qt=w.getParameter(w.UNPACK_ROW_LENGTH),te=w.getParameter(w.UNPACK_IMAGE_HEIGHT),ye=w.getParameter(w.UNPACK_SKIP_PIXELS),Wt=w.getParameter(w.UNPACK_SKIP_ROWS),gt=w.getParameter(w.UNPACK_SKIP_IMAGES),me=g.isCompressedTexture?g.mipmaps[I]:g.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,me.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,me.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,ut),w.pixelStorei(w.UNPACK_SKIP_ROWS,pt),g.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,I,Mt,Et,tt,ct,xt,kt,me.data):g.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,I,Mt,Et,me.width,me.height,xt,me.data):w.texSubImage2D(w.TEXTURE_2D,I,Mt,Et,xt,kt,me),w.pixelStorei(w.UNPACK_ROW_LENGTH,Qt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,te),w.pixelStorei(w.UNPACK_SKIP_PIXELS,ye),w.pixelStorei(w.UNPACK_SKIP_ROWS,Wt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,gt),I===0&&L.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),St.unbindTexture()},this.copyTextureToTexture3D=function(g,L,D=null,N=null,I=0){g.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),D=arguments[0]||null,N=arguments[1]||null,g=arguments[2],L=arguments[3],I=arguments[4]||0);let tt,ct,ut,pt,Mt,Et,xt,kt,Qt;const te=g.isCompressedTexture?g.mipmaps[I]:g.image;D!==null?(tt=D.max.x-D.min.x,ct=D.max.y-D.min.y,ut=D.max.z-D.min.z,pt=D.min.x,Mt=D.min.y,Et=D.min.z):(tt=te.width,ct=te.height,ut=te.depth,pt=0,Mt=0,Et=0),N!==null?(xt=N.x,kt=N.y,Qt=N.z):(xt=0,kt=0,Qt=0);const ye=ot.convert(L.format),Wt=ot.convert(L.type);let gt;if(L.isData3DTexture)At.setTexture3D(L,0),gt=w.TEXTURE_3D;else if(L.isDataArrayTexture||L.isCompressedArrayTexture)At.setTexture2DArray(L,0),gt=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,L.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,L.unpackAlignment);const me=w.getParameter(w.UNPACK_ROW_LENGTH),$t=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Ve=w.getParameter(w.UNPACK_SKIP_PIXELS),Ri=w.getParameter(w.UNPACK_SKIP_ROWS),vn=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,te.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,te.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,pt),w.pixelStorei(w.UNPACK_SKIP_ROWS,Mt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Et),g.isDataTexture||g.isData3DTexture?w.texSubImage3D(gt,I,xt,kt,Qt,tt,ct,ut,ye,Wt,te.data):L.isCompressedArrayTexture?w.compressedTexSubImage3D(gt,I,xt,kt,Qt,tt,ct,ut,ye,te.data):w.texSubImage3D(gt,I,xt,kt,Qt,tt,ct,ut,ye,Wt,te),w.pixelStorei(w.UNPACK_ROW_LENGTH,me),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,$t),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ve),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ri),w.pixelStorei(w.UNPACK_SKIP_IMAGES,vn),I===0&&L.generateMipmaps&&w.generateMipmap(gt),St.unbindTexture()},this.initRenderTarget=function(g){It.get(g).__webglFramebuffer===void 0&&At.setupRenderTarget(g)},this.initTexture=function(g){g.isCubeTexture?At.setTextureCube(g,0):g.isData3DTexture?At.setTexture3D(g,0):g.isDataArrayTexture||g.isCompressedArrayTexture?At.setTexture2DArray(g,0):At.setTexture2D(g,0),St.unbindTexture()},this.resetState=function(){B=0,C=0,b=null,St.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ze}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ps?"display-p3":"srgb",e.unpackColorSpace=Xt.workingColorSpace===pr?"display-p3":"srgb"}}class rp extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Je,this.environmentIntensity=1,this.environmentRotation=new Je,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class sp{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=cs,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=un()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return ms("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=un()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=un()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const _e=new U;class hr{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=He(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Zt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=He(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=He(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=He(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=He(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),r=Zt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),r=Zt(r,this.array),s=Zt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Fe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new hr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Lo extends yi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Zn;const _i=new U,jn=new U,Jn=new U,Qn=new Dt,gi=new Dt,Io=new ae,ji=new U,vi=new U,Ji=new U,ka=new Dt,ts=new Dt,Wa=new Dt;class ap extends Ee{constructor(t=new Lo){if(super(),this.isSprite=!0,this.type="Sprite",Zn===void 0){Zn=new _n;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new sp(e,5);Zn.setIndex([0,1,2,0,2,3]),Zn.setAttribute("position",new hr(n,3,0,!1)),Zn.setAttribute("uv",new hr(n,2,3,!1))}this.geometry=Zn,this.material=t,this.center=new Dt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),jn.setFromMatrixScale(this.matrixWorld),Io.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Jn.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&jn.multiplyScalar(-Jn.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;Qi(ji.set(-.5,-.5,0),Jn,a,jn,r,s),Qi(vi.set(.5,-.5,0),Jn,a,jn,r,s),Qi(Ji.set(.5,.5,0),Jn,a,jn,r,s),ka.set(0,0),ts.set(1,0),Wa.set(1,1);let o=t.ray.intersectTriangle(ji,vi,Ji,!1,_i);if(o===null&&(Qi(vi.set(-.5,.5,0),Jn,a,jn,r,s),ts.set(0,1),o=t.ray.intersectTriangle(ji,Ji,vi,!1,_i),o===null))return;const l=t.ray.origin.distanceTo(_i);l<t.near||l>t.far||e.push({distance:l,point:_i.clone(),uv:Ne.getInterpolation(_i,ji,vi,Ji,ka,ts,Wa,new Dt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Qi(i,t,e,n,r,s){Qn.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(gi.x=s*Qn.x-r*Qn.y,gi.y=r*Qn.x+s*Qn.y):gi.copy(Qn),i.copy(t),i.x+=gi.x,i.y+=gi.y,i.applyMatrix4(Io)}class op extends ve{constructor(t,e,n,r,s,a,o,l,c){super(t,e,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fs);const Xa=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,83,84,85,84],Ya=[[1,4],[2,0],[3,1],[7,2],[0,5],[4,6],[5,8],[3,2],[5,6],[9,2],[5,10],[3,6],[3,6],[14,15],[16,13],[13,16],[15,14],[14,15],[20,21],[20,21],[16,13],[13,16]],Ht=Object.freeze({PLAYER:0,ANIMATED:1,DOG:2,MONSTER:3,MARKER:4,TREE:10,ROCK:11,STUMP:12,MOGUL:13,RAMP:14,SIGN:15,FIRE:16,PATCH:17}),ee=Object.freeze({FLAG_RED:23,FLAG_BLUE:24,ROCK:45,STUMP:46,TRACK_LEFT:47,TRACK_RIGHT:48,TREE_SMALL:49,TREE_DEAD:50,TREE_LARGE:51,RAINBOW:52,START_LEFT:57,START_RIGHT:58,FINISH_LEFT:59,FINISH_RIGHT:60,SLALOM_SIGN:61,TREE_SLALOM_SIGN:62,FREESTYLE_SIGN:63,YELLOW_PATCH:82,FIRE_FIRST:83}),nt=Object.freeze({STRAIGHT:0,LEFT_1:1,LEFT_2:2,LEFT_3:3,RIGHT_1:4,RIGHT_2:5,RIGHT_3:6,HARD_LEFT:7,HARD_RIGHT:8,JUMP_LEFT:9,JUMP_RIGHT:10,CRASHED:11,RECOVERING:12,TRICK:13,TRICK_LEFT:14,TRICK_RIGHT:15,TRICK_BACK:16,FALLEN:17,SPIN:18,SPIN_BACK:19,FLIP_LEFT:20,FLIP_RIGHT:21}),qa={0:{targetVx:0,targetSpeed:3.85,turn:7.5,accel:2.4},1:{targetVx:-1.15,targetSpeed:3.75,turn:7.5,accel:2.1},2:{targetVx:-2.1,targetSpeed:3.55,turn:7.2,accel:1.9},3:{targetVx:-3,targetSpeed:3.25,turn:7,accel:1.7},4:{targetVx:1.15,targetSpeed:3.75,turn:7.5,accel:2.1},5:{targetVx:2.1,targetSpeed:3.55,turn:7.2,accel:1.9},6:{targetVx:3,targetSpeed:3.25,turn:7,accel:1.7},7:{targetVx:-3.6,targetSpeed:3.05,turn:8,accel:1.5},8:{targetVx:3.6,targetSpeed:3.05,turn:8,accel:1.5},9:{targetVx:-1.7,targetSpeed:4.2,turn:4.2,accel:2.7},10:{targetVx:1.7,targetSpeed:4.2,turn:4.2,accel:2.7},11:{targetVx:0,targetSpeed:0,turn:6,accel:5},12:{targetVx:0,targetSpeed:1.25,turn:4.8,accel:3.6},13:{targetVx:0,targetSpeed:4.45,turn:2.4,accel:2.2},14:{targetVx:-1.25,targetSpeed:4.35,turn:2.7,accel:2.1},15:{targetVx:1.25,targetSpeed:4.35,turn:2.7,accel:2.1},16:{targetVx:0,targetSpeed:4.15,turn:2.5,accel:2},17:{targetVx:0,targetSpeed:.35,turn:3,accel:4},18:{targetVx:-.8,targetSpeed:4.5,turn:2.1,accel:2},19:{targetVx:0,targetSpeed:4.55,turn:2,accel:2},20:{targetVx:-1.1,targetSpeed:4.45,turn:2,accel:1.9},21:{targetVx:1.1,targetSpeed:4.45,turn:2,accel:1.9}},lp=Array.from({length:86},(i,t)=>t+1);function Ka(i){return Xa[i]||Xa[0]}const Do=60,tr=1e3/Do,ds=16,cp=.08,$a=120,Uo=2e3,Za=Uo*ds,hp=.45,ja=120,up=4.8,dp=6.25,fp=.95,pp=360,Ja=.13,er=Object.freeze({down:[68,69],right:[70,71],left:[72,73],up:[74,75]}),es=.42,mp=.45,Qa=.65,_p=.82,gp=1.7,vp=.2,ns=[76,77,78,79,80,81],xi=640,No=8640,ur=16640,xp=5e3,Le=Object.freeze({race:{label:"Race",startMinX:-576,startMaxX:-320,signX:-448,finishY:No},freestyle:{label:"Free style",startMinX:-160,startMaxX:160,signX:0,finishY:ur},treeSlalom:{label:"Tree Slalom",startMinX:320,startMaxX:512,signX:416,finishY:ur}});class Sp{constructor(t=1374772973){this.state=t>>>0}next(){return this.state=1664525*this.state+1013904223>>>0,this.state/4294967296}range(t,e){return t+(e-t)*this.next()}int(t,e){return Math.floor(this.range(t,e+1))}chance(t){return this.next()<t}weighted(t){const e=t.reduce((r,s)=>r+s.weight,0);let n=this.range(0,e);for(const r of t)if(n-=r.weight,n<=0)return r.value;return t[t.length-1].value}}class Mp{constructor(t){this.basePath=t,this.textures=new Map,this.sizes=new Map,this.materials=new Map}async loadAll(t){await Promise.all(t.map(e=>this.loadBitmap(e)))}async loadBitmap(t){const e=await this.loadImage(`${this.basePath}/bitmap_${t}_${t}.bmp`),{canvas:n,width:r,height:s}=this.makeTransparentCanvas(e),a=new op(n);a.colorSpace=Ie,a.magFilter=Se,a.minFilter=Se,a.generateMipmaps=!1,this.textures.set(t,a),this.sizes.set(t,{width:r,height:s})}loadImage(t){return new Promise((e,n)=>{const r=new Image;r.onload=()=>e(r),r.onerror=()=>n(new Error(`Could not load ${t}`)),r.src=t})}makeTransparentCanvas(t){const e=t.naturalWidth||t.width,n=t.naturalHeight||t.height,r=document.createElement("canvas");r.width=e,r.height=n;const s=r.getContext("2d",{willReadFrequently:!0});s.drawImage(t,0,0);const a=s.getImageData(0,0,e,n),o=a.data,l=[this.pixelAt(o,e,0,0),this.pixelAt(o,e,e-1,0),this.pixelAt(o,e,0,n-1),this.pixelAt(o,e,e-1,n-1)],c=new Uint8Array(e*n),u=[],p=(d,m)=>{if(d<0||m<0||d>=e||m>=n)return;const v=m*e+d;c[v]||this.isBackgroundPixel(o,v*4,l)&&(c[v]=1,u.push(v))};for(let d=0;d<e;d+=1)p(d,0),p(d,n-1);for(let d=0;d<n;d+=1)p(0,d),p(e-1,d);for(;u.length>0;){const d=u.pop(),m=d*4;o[m+3]=0;const v=d%e,S=(d-v)/e;p(v+1,S),p(v-1,S),p(v,S+1),p(v,S-1)}return s.putImageData(a,0,0),{canvas:r,width:e,height:n}}pixelAt(t,e,n,r){const s=(r*e+n)*4;return[t[s],t[s+1],t[s+2]]}isBackgroundPixel(t,e,n){const r=t[e],s=t[e+1],a=t[e+2];return n.some(([o,l,c])=>{const u=r-o,p=s-l,d=a-c;return u*u+p*p+d*d<=64})}material(t){if(!this.materials.has(t)){const e=this.textures.get(t),n=new Lo({map:e,transparent:!0,alphaTest:.05,depthTest:!1,depthWrite:!1});this.materials.set(t,n)}return this.materials.get(t)}size(t){return this.sizes.get(t)||{width:24,height:24}}}class Ep{constructor(){this.canvas=document.querySelector("#game"),this.loadingCard=document.querySelector("#load-card"),this.pauseCard=document.querySelector("#pause-card"),this.hud={time:document.querySelector("#time-value"),distance:document.querySelector("#distance-value"),speed:document.querySelector("#speed-value"),style:document.querySelector("#style-value")},this.renderer=new ip({canvas:this.canvas,antialias:!1,alpha:!1}),this.renderer.setClearColor(16251124,1),this.renderer.sortObjects=!0,this.scene=new rp,this.camera=new To(-400,400,300,-300,.1,1e3),this.camera.position.z=100,this.assets=new Mp("/assets/bitmaps"),this.viewport={width:800,height:600},this.input={pointerActive:!1,pointerX:0,pointerY:0,keys:new Set},this.lastTime=performance.now(),this.accumulatorMs=0,this.debugFast=!1,this.paused=!1,this.started=!1,this.resize=this.resize.bind(this),this.frame=this.frame.bind(this)}async start(){window.addEventListener("resize",this.resize),window.addEventListener("keydown",t=>this.onKeyDown(t)),window.addEventListener("keyup",t=>this.input.keys.delete(t.code)),window.addEventListener("pointermove",t=>this.onPointerMove(t)),window.addEventListener("pointerdown",t=>this.onPointerDown(t)),window.addEventListener("blur",()=>this.setPaused(!0)),this.resize(),await this.assets.loadAll(lp),this.loadingCard.hidden=!0,this.restart(),requestAnimationFrame(this.frame)}resize(){const t=Math.max(320,window.innerWidth),e=Math.max(240,window.innerHeight);this.viewport.width=t,this.viewport.height=e,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.setSize(t,e,!1),this.camera.left=-t/2,this.camera.right=t/2,this.camera.top=e/2,this.camera.bottom=-e/2,this.camera.updateProjectionMatrix()}restart(){for(const t of this.objects||[])this.removeSprite(t);for(const t of this.trails||[])this.scene.remove(t.sprite);this.rng=new Sp,this.objects=[],this.trails=[],this.nextSpawnY=-120,this.elapsedMs=0,this.styleScore=0,this.lastTrailY=-9999,this.monster=null,this.yetiAttack={active:!1,finished:!1,elapsed:0,monster:null},this.gameOver=!1,this.courseMessage="",this.lastFinishedCourse="",this.courseModes=this.createCourseModes(),this.paused=!1,this.started=!0,document.title="SkiFree",this.pauseCard.textContent="Paused",this.pauseCard.hidden=!0,this.player={kind:Ht.PLAYER,state:nt.STRAIGHT,spriteId:Ka(nt.STRAIGHT),x:0,y:0,vx:0,speed:3.4,turnVelocity:0,actionTimer:0,pendingAction:0,mode:0,crashedUntil:0,renderScale:1,collidable:!0},this.attachSprite(this.player),this.player.sprite.visible=!0,this.syncPlayerDataset(),this.addCourseMarkers(),this.spawnCourseUntil(this.viewport.height*2),this.updateCamera(),this.updateHud()}createCourseModes(){return{race:{...Le.race,active:!1,finished:!1,elapsedMs:0,penaltyMs:0,missedGates:0,nextGate:0,resultMs:0,gates:this.buildGateSet(Le.race.signX,1120,680,11,74)},freestyle:{...Le.freestyle,active:!1,finished:!1,elapsedMs:0,penaltyMs:0,missedGates:0,nextGate:0,resultMs:0,gates:[]},treeSlalom:{...Le.treeSlalom,active:!1,finished:!1,elapsedMs:0,penaltyMs:0,missedGates:0,nextGate:0,resultMs:0,gates:this.buildGateSet(Le.treeSlalom.signX,1180,760,19,70)}}}buildGateSet(t,e,n,r,s){return Array.from({length:r},(a,o)=>{const l=o%2===0?-30:30,c=t+l;return{x:c,y:e+o*n,left:c-s,right:c+s,passed:!1,missed:!1}})}addCourseMarkers(){this.addCourseSignPair(Le.race.signX,xi-72,ee.SLALOM_SIGN),this.addCourseSignPair(Le.freestyle.signX,xi-72,ee.FREESTYLE_SIGN),this.addCourseSignPair(Le.treeSlalom.signX,xi-72,ee.TREE_SLALOM_SIGN),this.addCourseSignPair(Le.race.signX,No,ee.FINISH_LEFT,ee.FINISH_RIGHT),this.addCourseSignPair(Le.freestyle.signX,ur,ee.FINISH_LEFT,ee.FINISH_RIGHT),this.addCourseSignPair(Le.treeSlalom.signX,ur,ee.FINISH_LEFT,ee.FINISH_RIGHT);for(const t of[this.courseModes.race,this.courseModes.treeSlalom])for(const e of t.gates)this.addGateSprites(e)}addCourseSignPair(t,e,n,r=n){this.addObject({kind:Ht.SIGN,spriteId:n,x:t-34,y:e,collidable:!1}),this.addObject({kind:Ht.SIGN,spriteId:r,x:t+34,y:e,collidable:!1})}addGateSprites(t){this.addObject({kind:Ht.MARKER,spriteId:ee.FLAG_RED,x:t.left,y:t.y,collidable:!1}),this.addObject({kind:Ht.MARKER,spriteId:ee.FLAG_BLUE,x:t.right,y:t.y,collidable:!1})}frame(t){const e=Math.min(cp,(t-this.lastTime)/1e3);if(this.lastTime=t,!this.paused)for(this.accumulatorMs+=e*1e3;this.accumulatorMs>=tr;)this.update(tr/1e3),this.accumulatorMs-=tr;this.render(),requestAnimationFrame(this.frame)}update(t){const e=this.debugFast?t*2:t,n={x:this.player.x,y:this.player.y};if(this.yetiAttack.active){this.updateYetiAttack(e),this.updateCamera(),this.updateHud();return}if(this.gameOver){this.updateCamera(),this.updateHud();return}this.elapsedMs+=e*1e3,this.applyPointerState(),this.integratePlayer(e),this.updateCourseModes(n,e),this.updateCourseObjects(e),this.checkCollisions(),this.updateTrails(),this.spawnCourseUntil(this.player.y+this.viewport.height*2.1),this.pruneObjects(),this.updateCamera(),this.updateHud()}integratePlayer(t){const e=this.player;e.actionTimer>0&&(e.actionTimer=Math.max(0,e.actionTimer-t),e.actionTimer===0&&e.state!==nt.CRASHED&&(e.pendingAction=0,e.mode=0,this.setPlayerState(nt.STRAIGHT))),e.crashedUntil>0&&(e.crashedUntil=Math.max(0,e.crashedUntil-t),e.crashedUntil===0&&e.state===nt.CRASHED&&this.setPlayerState(nt.RECOVERING));const n=qa[e.state]||qa[0],r=n.targetVx+e.turnVelocity*.07,s=Math.min(1,t*n.turn),a=Math.min(1,t*n.accel);e.vx+=(r-e.vx)*s,e.speed+=(n.targetSpeed-e.speed)*a,e.x+=e.vx*t*60,e.y+=Math.max(0,e.speed)*t*60,e.state===nt.RECOVERING&&e.speed>1&&this.setPlayerState(nt.STRAIGHT)}updateCourseModes(t,e){const n=this.activeCourseMode();if(n){n.elapsedMs+=e*1e3,this.checkCourseGates(n,t),this.crossedY(t.y,this.player.y,n.finishY)&&this.finishCourseMode(n);return}for(const[r,s]of Object.entries(this.courseModes)){if(s.finished||!this.crossedY(t.y,this.player.y,xi))continue;const a=this.xAtY(t,this.player,xi);if(a>=s.startMinX&&a<=s.startMaxX){this.startCourseMode(r);return}}}activeCourseMode(){return Object.values(this.courseModes).find(t=>t.active)||null}activeCourseName(){var t;return((t=Object.entries(this.courseModes).find(([,e])=>e.active))==null?void 0:t[0])||""}displayCourseMode(){return this.activeCourseMode()||this.courseModes[this.lastFinishedCourse]||null}startCourseMode(t){const e=this.courseModes[t];e.active=!0,e.elapsedMs=0,e.penaltyMs=0,e.missedGates=0,e.nextGate=0,e.resultMs=0,e.gates.forEach(n=>{n.passed=!1,n.missed=!1}),this.courseMessage=`${e.label} started`}finishCourseMode(t){var e;t.active=!1,t.finished=!0,t.resultMs=t.elapsedMs+t.penaltyMs,this.lastFinishedCourse=((e=Object.entries(this.courseModes).find(([,n])=>n===t))==null?void 0:e[0])||"",this.courseMessage=t.label==="Free style"?`${t.label} finished: ${Math.floor(this.styleScore)} style`:`${t.label} finished: ${this.formatTime(t.resultMs)}`}checkCourseGates(t,e){for(;t.nextGate<t.gates.length;){const n=t.gates[t.nextGate];if(!this.crossedY(e.y,this.player.y,n.y))break;const r=this.xAtY(e,this.player,n.y);r>=n.left&&r<=n.right?n.passed=!0:(n.missed=!0,t.missedGates+=1,t.penaltyMs+=xp),t.nextGate+=1}}crossedY(t,e,n){return t<n&&e>=n}xAtY(t,e,n){const r=e.y-t.y;if(Math.abs(r)<1e-4)return e.x;const s=Math.min(1,Math.max(0,(n-t.y)/r));return t.x+(e.x-t.x)*s}addStyleScore(t){this.courseModes.freestyle.active&&(this.styleScore+=t)}applyPointerState(){if(!this.input.pointerActive||this.player.actionTimer>0||this.player.state===nt.CRASHED||this.player.state===nt.FALLEN)return;const t=this.viewport.width/2,e=this.viewport.height/3,n=this.input.pointerX-t,r=this.input.pointerY-e,s=this.player.mode===0?this.mapMouseDirection(n,r):this.mapTrickDirection(n,r);this.setPlayerState(s)}mapMouseDirection(t,e){if(e<-18)return t<0?nt.LEFT_3:nt.RIGHT_3;const n=Math.abs(e)<1?1:e,r=t*4/n;return r<-6?nt.LEFT_3:r<-3?nt.LEFT_2:r<-1?nt.LEFT_1:r<=1?nt.STRAIGHT:r<=3?nt.RIGHT_1:r<=6?nt.RIGHT_2:nt.RIGHT_3}mapTrickDirection(t,e){return Math.abs(t)>Math.abs(e)?t<0?nt.TRICK_LEFT:nt.TRICK_RIGHT:e<0?nt.TRICK_BACK:nt.TRICK}updateCourseObjects(t){for(const e of this.objects)e.kind===Ht.DOG?(e.x+=Math.sin((this.elapsedMs+e.y*7)/240)*t*25,e.stateTimer=(e.stateTimer||0)+t,e.stateTimer>.18&&(e.stateTimer=0,e.spriteId=e.spriteId===33?34:33,this.refreshSprite(e))):e.kind===Ht.FIRE?(e.stateTimer=(e.stateTimer||0)+t,e.stateTimer>.12&&(e.stateTimer=0,e.spriteId+=1,e.spriteId>85&&(e.spriteId=83),this.refreshSprite(e))):e.kind===Ht.MONSTER&&this.updateMonster(e,t);!this.monster&&this.player.y>Za&&(this.monster=this.addObject({kind:Ht.MONSTER,spriteId:68,x:this.player.x+this.rng.range(-ja,ja),y:this.player.y-this.viewport.height*hp,runFramePhase:0,collidable:!0,radius:20}))}updateMonster(t,e){if(t.attackActive)return;const n=this.player.x-t.x,r=this.player.y-t.y,s=Math.hypot(n,r)||1,a=Math.min(1,Math.max(0,(s-180)/pp)),o=Math.min(dp,Math.max(up,this.player.speed+fp)+a);for(t.x+=n/s*o*e*60,t.y+=r/s*o*e*60,t.stateTimer=(t.stateTimer||0)+e;t.stateTimer>=Ja;)t.stateTimer-=Ja,t.runFramePhase=((t.runFramePhase||0)+1)%2;const l=this.yetiRunSprite(t,n,r);t.spriteId!==l&&(t.spriteId=l,this.refreshSprite(t))}yetiRunSprite(t,e,n){const r=t.runFramePhase||0;return Math.abs(e)>Math.abs(n)*.7?(e>0?er.right:er.left)[r]:(n>=0?er.down:er.up)[r]}startYetiAttack(t){this.yetiAttack.active||this.yetiAttack.finished||(this.yetiAttack={active:!0,finished:!1,elapsed:0,monster:t},this.gameOver=!1,this.courseMessage="Caught by the yeti",this.player.speed=0,this.player.vx=0,this.player.actionTimer=0,this.player.mode=0,this.player.crashedUntil=0,this.setPlayerState(nt.FALLEN),this.player.sprite.visible=!1,t.attackActive=!0,t.collidable=!1,t.x=this.player.x,t.y=this.player.y-4,t.spriteId=ns[0],this.refreshSprite(t),this.pauseCard.hidden=!0,document.title="SkiFree - Caught by the yeti",this.syncPlayerDataset())}updateYetiAttack(t){const e=this.yetiAttack,n=e.monster;if(e.elapsed+=t,n){const r=Math.min(ns.length-1,Math.floor(e.elapsed/vp)),s=ns[r];n.x=this.player.x,n.y=this.player.y-4,n.spriteId!==s&&(n.spriteId=s,this.refreshSprite(n))}e.elapsed>=gp&&(e.active=!1,e.finished=!0,this.gameOver=!0,this.pauseCard.textContent="Caught by the yeti",this.pauseCard.hidden=!1),this.syncPlayerDataset()}updateTrails(){if(this.player.state===nt.CRASHED||this.player.actionTimer>0||this.player.y-this.lastTrailY<22)return;this.lastTrailY=this.player.y;const t=this.player.vx<-.25?ee.TRACK_LEFT:ee.TRACK_RIGHT,e={kind:Ht.MARKER,spriteId:t,x:this.player.x-this.player.vx*3,y:this.player.y-16,collidable:!1,renderScale:1};for(this.attachSprite(e),e.sprite.material=this.assets.material(t),e.sprite.renderOrder=Math.floor(e.y)-1e4,this.trails.push(e);this.trails.length>160;){const n=this.trails.shift();this.scene.remove(n.sprite)}}checkCollisions(){const t=this.player;if(t.actionTimer>0||t.state===nt.CRASHED)return;const e=this.boundsFor(t,.55);for(const n of this.objects)!n.collidable||n.hit||Math.abs(n.y-t.y)>60||Math.abs(n.x-t.x)>80||this.intersects(e,this.boundsFor(n,n.collisionScale||.7))&&(n.kind===Ht.RAMP||n.kind===Ht.MOGUL||n.kind===Ht.PATCH?(this.launchTrick(n.kind),n.hit=!0):n.kind===Ht.SIGN?(n.hit=!0,this.addStyleScore(5)):n.kind===Ht.MONSTER?this.startYetiAttack(n):this.crashInto(n))}launchTrick(t){this.player.pendingAction=t===Ht.RAMP?4:2,this.player.mode=1,this.player.actionTimer=t===Ht.RAMP?_p:es,this.player.speed=Math.max(this.player.speed,t===Ht.RAMP?4.55:4.05),this.setPlayerState(t===Ht.RAMP?nt.TRICK:nt.JUMP_LEFT),this.addStyleScore(t===Ht.RAMP?20:6)}crashInto(t){this.player.speed*=t.kind===Ht.MONSTER?.05:.25,this.player.vx*=-.25,this.player.actionTimer=0,this.player.mode=0,this.player.crashedUntil=t.kind===Ht.MONSTER?2.6:1.4,this.styleScore=Math.max(0,this.styleScore-15),this.setPlayerState(nt.CRASHED)}spawnCourseUntil(t){for(;this.nextSpawnY<t;)this.spawnChunk(this.nextSpawnY),this.nextSpawnY+=$a}spawnChunk(t){if(t<120)return;Math.abs(t-2200)<$a/2&&(this.addObject({kind:Ht.SIGN,spriteId:ee.FINISH_LEFT,x:-70,y:t,collidable:!1}),this.addObject({kind:Ht.SIGN,spriteId:ee.FINISH_RIGHT,x:70,y:t,collidable:!1}));const e=this.rng.int(3,t>1e3?7:5),n=Math.max(360,this.viewport.width*.62);for(let r=0;r<e;r+=1){const s=this.rng.range(-n,n),a=t+this.rng.range(-46,58);Math.abs(s)<72&&a<520||this.spawnWeightedObject(s,a)}}spawnWeightedObject(t,e){const n=this.rng.weighted([{weight:28,value:"tree"},{weight:14,value:"rock"},{weight:15,value:"stump"},{weight:18,value:"mogul"},{weight:9,value:"ramp"},{weight:5,value:"dog"},{weight:4,value:"fire"},{weight:7,value:"patch"}]);if(n==="tree"){const r=this.rng.weighted([{weight:5,value:ee.TREE_SMALL},{weight:2,value:ee.TREE_DEAD},{weight:3,value:ee.TREE_LARGE}]);this.addObject({kind:Ht.TREE,spriteId:r,x:t,y:e,collidable:!0,collisionScale:.58})}else n==="rock"?this.addObject({kind:Ht.ROCK,spriteId:ee.ROCK,x:t,y:e,collidable:!0,collisionScale:.62}):n==="stump"?this.addObject({kind:Ht.STUMP,spriteId:ee.STUMP,x:t,y:e,collidable:!0,collisionScale:.72}):n==="mogul"?this.addObject({kind:Ht.MOGUL,spriteId:27,x:t,y:e,collidable:!0,collisionScale:.74}):n==="ramp"?this.addObject({kind:Ht.RAMP,spriteId:this.rng.chance(.5)?31:32,x:t,y:e,collidable:!0,collisionScale:.68}):n==="dog"?this.addObject({kind:Ht.DOG,spriteId:33,x:t,y:e,collidable:!0,collisionScale:.66}):n==="fire"?this.addObject({kind:Ht.FIRE,spriteId:ee.FIRE_FIRST,x:t,y:e,collidable:!0,collisionScale:.66}):this.addObject({kind:Ht.PATCH,spriteId:ee.YELLOW_PATCH,x:t,y:e,collidable:!0,collisionScale:.82})}pruneObjects(){const t=this.player.y-this.viewport.height*1.35;this.objects=this.objects.filter(e=>e.y>=t||e.kind===Ht.MONSTER?!0:(this.removeSprite(e),!1)),this.trails=this.trails.filter(e=>e.y>=t?!0:(this.scene.remove(e.sprite),!1))}addObject(t){return t.renderScale=t.renderScale||1,this.attachSprite(t),this.objects.push(t),t}attachSprite(t){const e=new ap(this.assets.material(t.spriteId));t.sprite=e,this.scene.add(e),this.updateObjectSprite(t)}refreshSprite(t){t.sprite.material=this.assets.material(t.spriteId),this.updateObjectSprite(t)}removeSprite(t){t.sprite&&(this.scene.remove(t.sprite),t.sprite=null)}updateObjectSprite(t){const{width:e,height:n}=this.assets.size(t.spriteId);t.width=e,t.height=n,t.sprite.scale.set(e*t.renderScale,n*t.renderScale,1),this.positionSprite(t)}positionSprite(t){t.sprite&&(t.sprite.position.set(t.x,-t.y,0),t.sprite.renderOrder=Math.floor(t.y))}setPlayerState(t){if(this.player.state===t){this.syncPlayerDataset();return}this.player.state=t,this.player.spriteId=Ka(t),this.refreshSprite(this.player),this.syncPlayerDataset()}syncPlayerDataset(){if(!this.player)return;const t=this.activeCourseMode(),e=this.displayCourseMode();this.canvas.dataset.playerState=String(this.player.state),this.canvas.dataset.playerMode=String(this.player.mode),this.canvas.dataset.playerActionTimer=this.player.actionTimer.toFixed(3),this.canvas.dataset.simulationFps=String(Do),this.canvas.dataset.yetiChaseDistanceMeters=String(Uo),this.canvas.dataset.yetiChaseDistancePx=String(Za),this.canvas.dataset.courseMode=this.activeCourseName()||this.lastFinishedCourse||"",this.canvas.dataset.courseActive=t?"1":"0",this.canvas.dataset.courseFinished=e!=null&&e.finished?"1":"0",this.canvas.dataset.courseMissedGates=String((e==null?void 0:e.missedGates)||0),this.canvas.dataset.coursePenaltyMs=String(Math.floor((e==null?void 0:e.penaltyMs)||0)),this.canvas.dataset.courseMessage=this.courseMessage,this.canvas.dataset.yetiAttackActive=this.yetiAttack.active?"1":"0",this.canvas.dataset.yetiAttackFinished=this.yetiAttack.finished?"1":"0",this.canvas.dataset.gameOver=this.gameOver?"1":"0"}boundsFor(t,e=1){const n=(t.width||24)*e,r=(t.height||24)*e;return{left:t.x-n/2,right:t.x+n/2,top:t.y-r/2,bottom:t.y+r/2}}intersects(t,e){return t.left<e.right&&t.right>e.left&&t.top<e.bottom&&t.bottom>e.top}updateCamera(){this.camera.position.x=this.player.x,this.camera.position.y=-this.player.y-this.viewport.height*.16,this.camera.updateMatrixWorld()}render(){this.player&&this.positionSprite(this.player);for(const t of this.objects)this.positionSprite(t);for(const t of this.trails)this.positionSprite(t);this.renderer.render(this.scene,this.camera)}formatTime(t){const e=Math.max(0,Math.floor(t)),n=Math.floor(e%1e3/10),r=Math.floor(e/1e3),s=r%60,a=Math.floor(r/60)%60;return`${Math.floor(r/3600)}:${String(a).padStart(2,"0")}:${String(s).padStart(2,"0")}.${String(n).padStart(2,"0")}`}hudTimeMs(){const t=this.displayCourseMode();return t?t.finished?t.resultMs:t.elapsedMs+t.penaltyMs:this.elapsedMs}hudDistanceMeters(){const t=this.displayCourseMode();if(t!=null&&t.finished)return 0;const e=(t==null?void 0:t.finishY)||null,n=e==null?this.player.y:e-this.player.y;return Math.max(0,Math.floor(n/ds))}updateHud(){this.syncPlayerDataset();const t=this.hudDistanceMeters(),e=Math.max(0,this.player.speed*60/ds);this.hud.time.textContent=this.formatTime(this.hudTimeMs()),this.hud.distance.textContent=`${t}m`,this.hud.speed.textContent=`${e.toFixed(2)}m/s`,this.hud.style.textContent=`${Math.floor(this.styleScore)}`}onPointerMove(t){this.input.pointerActive=!0,this.input.pointerX=t.clientX,this.input.pointerY=t.clientY}onPointerDown(t){if(this.input.pointerActive=!0,this.input.pointerX=t.clientX,this.input.pointerY=t.clientY,this.gameOver||this.yetiAttack.finished){this.restart();return}if(this.paused){this.setPaused(!1);return}if(this.player.state===nt.CRASHED||this.player.state===nt.FALLEN){this.restart();return}if(this.player.mode===0)this.player.mode=1,this.player.pendingAction=4,this.player.actionTimer=Math.max(this.player.actionTimer,Qa),this.setPlayerState(nt.TRICK);else{const e={[nt.TRICK]:nt.SPIN,[nt.TRICK_LEFT]:nt.FLIP_LEFT,[nt.TRICK_RIGHT]:nt.FLIP_RIGHT,[nt.SPIN]:nt.SPIN_BACK,[nt.SPIN_BACK]:nt.TRICK};this.player.actionTimer=Math.max(this.player.actionTimer,Qa),this.setPlayerState(e[this.player.state]||nt.TRICK)}}onKeyDown(t){if(this.input.keys.add(t.code),t.code==="F2"||t.key==="r"){t.preventDefault(),this.restart();return}if(t.code==="F3"||t.code==="Escape"){t.preventDefault(),this.setPaused(!this.paused);return}if(t.key==="t"&&this.paused){t.preventDefault(),this.update(tr/1e3),this.render();return}if(t.key==="f"){t.preventDefault(),this.debugFast=!this.debugFast;return}if(this.paused||this.player.state===nt.CRASHED||this.player.state===nt.FALLEN)return;this.applyNavigationKey(t)&&t.preventDefault()}applyNavigationKey(t){var s,a;const e=t.code,n=this.player.state;let r=n;if(e==="ArrowLeft"||e==="Numpad4")r=((s=Ya[n])==null?void 0:s[1])??n,r===nt.HARD_RIGHT&&(this.player.turnVelocity=Math.min(8,this.player.turnVelocity+8));else if(e==="ArrowRight"||e==="Numpad6")r=((a=Ya[n])==null?void 0:a[0])??n,r===nt.HARD_LEFT&&(this.player.turnVelocity=Math.max(-8,this.player.turnVelocity-8));else if(e==="ArrowUp"||e==="Numpad8")r=this.upTransition(n);else if(e==="ArrowDown"||e==="Numpad2")r=this.downTransition(n);else if(e==="PageUp"||e==="Numpad9")r=nt.LEFT_3;else if(e==="PageDown"||e==="Numpad3")r=nt.LEFT_1;else if(e==="Home"||e==="Numpad7")r=nt.RIGHT_3;else if(e==="End"||e==="Numpad1")r=nt.RIGHT_1;else if(e==="Insert"||e==="Numpad0"||e==="Space")this.player.mode=1,this.player.pendingAction=2,this.player.actionTimer=Math.max(this.player.actionTimer,mp),r=nt.TRICK;else return!1;return this.setPlayerState(r),!0}upTransition(t){return[nt.LEFT_3,nt.HARD_LEFT,nt.RECOVERING].includes(t)?this.player.actionTimer===0?(this.player.actionTimer=es,nt.JUMP_LEFT):t:[nt.RIGHT_3,nt.HARD_RIGHT].includes(t)?this.player.actionTimer===0?(this.player.actionTimer=es,nt.JUMP_RIGHT):t:{[nt.TRICK]:nt.SPIN,[nt.TRICK_LEFT]:nt.FLIP_LEFT,[nt.TRICK_RIGHT]:nt.FLIP_RIGHT,[nt.SPIN]:nt.SPIN_BACK,[nt.SPIN_BACK]:nt.TRICK}[t]||t}downTransition(t){return this.player.mode===0?nt.STRAIGHT:{[nt.TRICK]:nt.SPIN_BACK,[nt.SPIN]:nt.TRICK,[nt.SPIN_BACK]:nt.SPIN,[nt.FLIP_LEFT]:nt.TRICK_LEFT,[nt.FLIP_RIGHT]:nt.TRICK_RIGHT}[t]||t}setPaused(t){this.started&&(this.gameOver||(this.paused=t,this.pauseCard.textContent="Paused",this.pauseCard.hidden=!t,document.title=t?"Ski Paused ... Press F3 to continue":"SkiFree"))}}const Fo=new Ep;window.skiFreeGame=Fo;Fo.start().catch(i=>{console.error(i);const t=document.querySelector("#load-card");t.textContent="Load failed"});

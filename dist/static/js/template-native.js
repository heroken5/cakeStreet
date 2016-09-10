"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};!function(){function e(e){return e.replace(v,"").replace(b,",").replace(w,"").replace(x,"").replace(S,"").split(T)}function n(e){return"'"+e.replace(/('|\\)/g,"\\$1").replace(/\r/g,"\\r").replace(/\n/g,"\\n")+"'"}function t(t,r){function o(e){return p+=e.split(/\n/).length-1,f&&(e=e.replace(/\s+/g," ").replace(/<!--[\w\W]*?-->/g,"")),e&&(e=h[1]+n(e)+h[2]+"\n"),e}function a(n){var t=p;if(l?n=l(n,r):i&&(n=n.replace(/\n/g,function(){return p++,"$line="+p+";"})),0===n.indexOf("=")){var o=s&&!/^=[=#]/.test(n);if(n=n.replace(/^=[=#]?|[\s;]*$/g,""),o){var a=n.replace(/\s*\([^\)]+\)/,"");d[a]||/^(include|print)$/.test(a)||(n="$escape("+n+")")}else n="$string("+n+")";n=h[1]+n+h[2]}return i&&(n="$line="+t+";"+n),y(e(n),function(e){if(e&&!g[e]){var n;n="print"===e?b:"include"===e?w:d[e]?"$utils."+e:$[e]?"$helpers."+e:"$data."+e,x+=e+"="+n+",",g[e]=!0}}),n+"\n"}var i=r.debug,u=r.openTag,c=r.closeTag,l=r.parser,f=r.compress,s=r.escape,p=1,g={$data:1,$filename:1,$utils:1,$helpers:1,$out:1,$line:1},m="".trim,h=m?["$out='';","$out+=",";","$out"]:["$out=[];","$out.push(",");","$out.join('')"],v=m?"$out+=text;return $out;":"$out.push(text);",b="function(){var text=''.concat.apply('',arguments);"+v+"}",w="function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);"+v+"}",x="'use strict';var $utils=this,$helpers=$utils.$helpers,"+(i?"$line=0,":""),S=h[0],T="return new String("+h[3]+");";y(t.split(u),function(e){e=e.split(c);var n=e[0],t=e[1];1===e.length?S+=o(n):(S+=a(n),t&&(S+=o(t)))});var E=x+S+T;i&&(E="try{"+E+"}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:"+n(t)+".split(/\\n/)[$line-1].replace(/^\\s+/,'')};}");try{var j=new Function("$data","$filename",E);return j.prototype=d,j}catch(e){throw e.temp="function anonymous($data,$filename) {"+E+"}",e}}var r=function(e,n){return"string"==typeof n?m(n,{filename:e}):i(e,n)};r.version="3.0.0",r.config=function(e,n){o[e]=n};var o=r.defaults={openTag:"<%",closeTag:"%>",escape:!0,cache:!0,compress:!1,parser:null},a=r.cache={};r.render=function(e,n){return m(e,n)};var i=r.renderFile=function(e,n){var t=r.get(e)||g({filename:e,name:"Render Error",message:"Template not found"});return n?t(n):t};r.get=function(e){var n;if(a[e])n=a[e];else if("object"==("undefined"==typeof document?"undefined":_typeof(document))){var t=document.getElementById(e);if(t){var r=(t.value||t.innerHTML).replace(/^\s*|\s*$/g,"");n=m(r,{filename:e})}}return n};var u=function e(n,t){return"string"!=typeof n&&(t="undefined"==typeof n?"undefined":_typeof(n),"number"===t?n+="":n="function"===t?e(n.call(n)):""),n},c={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},l=function(e){return c[e]},f=function(e){return u(e).replace(/&(?![\w#]+;)|[<>"']/g,l)},s=Array.isArray||function(e){return"[object Array]"==={}.toString.call(e)},p=function(e,n){var t,r;if(s(e))for(t=0,r=e.length;r>t;t++)n.call(e,e[t],t,e);else for(t in e)n.call(e,e[t],t)},d=r.utils={$helpers:{},$include:i,$string:u,$escape:f,$each:p};r.helper=function(e,n){$[e]=n};var $=r.helpers=d.$helpers;r.onerror=function(e){var n="Template Error\n\n";for(var t in e)n+="<"+t+">\n"+e[t]+"\n\n";"object"==("undefined"==typeof console?"undefined":_typeof(console))&&console.error(n)};var g=function(e){return r.onerror(e),function(){return"{Template Error}"}},m=r.compile=function(e,n){function r(t){try{return new c(t,u)+""}catch(r){return n.debug?g(r)():(n.debug=!0,m(e,n)(t))}}n=n||{};for(var i in o)void 0===n[i]&&(n[i]=o[i]);var u=n.filename;try{var c=t(e,n)}catch(e){return e.filename=u||"anonymous",e.name="Syntax Error",g(e)}return r.prototype=c.prototype,r.toString=function(){return c.toString()},u&&n.cache&&(a[u]=r),r},y=d.$each,h="break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",v=/\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|\s*\.\s*[$\w\.]+/g,b=/[^\w$]+/g,w=new RegExp(["\\b"+h.replace(/,/g,"\\b|\\b")+"\\b"].join("|"),"g"),x=/^\d[^,]*|,\d[^,]*/g,S=/^,+|,+$/g,T=/^$|,+/;"function"==typeof define?define(function(){return r}):"undefined"!=typeof exports?module.exports=r:this.template=r}();
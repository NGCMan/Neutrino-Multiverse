"use strict";var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}!function(e){var t=function(e,t,n){if(null==e||null==t)return e;var a=String(e),i=a.length;if(i>=t)return a;var r=null==n?"":String(n);""===r&&(r=" ");for(var s=t-i;r.length<s;)r+=r;return a+(r.length>s?r.substr(0,s):r)};Math.log10=Math.log10||function(e){return Math.log(e)*Math.LOG10E},Number.isInteger=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},Number.isSafeInteger=Number.isSafeInteger||function(e){return Number.isInteger(e)&&Math.abs(e)<=Number.MAX_SAFE_INTEGER},Math.trunc||(Math.trunc=function(e){return e=+e,isFinite(e)?e-e%1||(e<0?-0:0===e?e:0):e}),Math.sign||(Math.sign=function(e){return(e>0)-(e<0)||+e});var n=17,a=9e15,i=-324,r=[1e-323,1e-322,1e-321,1e-320,1e-319,1e-318,1e-317,1e-316,1e-315,1e-314,1e-313,1e-312,1e-311,1e-310,1e-309,1e-308,1e-307,1e-306,1e-305,1e-304,1e-303,1e-302,1e-301,1e-300,1e-299,1e-298,1e-297,1e-296,1e-295,1e-294,1e-293,1e-292,1e-291,1e-290,1e-289,1e-288,1e-287,1e-286,1e-285,1e-284,1e-283,1e-282,1e-281,1e-280,1e-279,1e-278,1e-277,1e-276,1e-275,1e-274,1e-273,1e-272,1e-271,1e-270,1e-269,1e-268,1e-267,1e-266,1e-265,1e-264,1e-263,1e-262,1e-261,1e-260,1e-259,1e-258,1e-257,1e-256,1e-255,1e-254,1e-253,1e-252,1e-251,1e-250,1e-249,1e-248,1e-247,1e-246,1e-245,1e-244,1e-243,1e-242,1e-241,1e-240,1e-239,1e-238,1e-237,1e-236,1e-235,1e-234,1e-233,1e-232,1e-231,1e-230,1e-229,1e-228,1e-227,1e-226,1e-225,1e-224,1e-223,1e-222,1e-221,1e-220,1e-219,1e-218,1e-217,1e-216,1e-215,1e-214,1e-213,1e-212,1e-211,1e-210,1e-209,1e-208,1e-207,1e-206,1e-205,1e-204,1e-203,1e-202,1e-201,1e-200,1e-199,1e-198,1e-197,1e-196,1e-195,1e-194,1e-193,1e-192,1e-191,1e-190,1e-189,1e-188,1e-187,1e-186,1e-185,1e-184,1e-183,1e-182,1e-181,1e-180,1e-179,1e-178,1e-177,1e-176,1e-175,1e-174,1e-173,1e-172,1e-171,1e-170,1e-169,1e-168,1e-167,1e-166,1e-165,1e-164,1e-163,1e-162,1e-161,1e-160,1e-159,1e-158,1e-157,1e-156,1e-155,1e-154,1e-153,1e-152,1e-151,1e-150,1e-149,1e-148,1e-147,1e-146,1e-145,1e-144,1e-143,1e-142,1e-141,1e-140,1e-139,1e-138,1e-137,1e-136,1e-135,1e-134,1e-133,1e-132,1e-131,1e-130,1e-129,1e-128,1e-127,1e-126,1e-125,1e-124,1e-123,1e-122,1e-121,1e-120,1e-119,1e-118,1e-117,1e-116,1e-115,1e-114,1e-113,1e-112,1e-111,1e-110,1e-109,1e-108,1e-107,1e-106,1e-105,1e-104,1e-103,1e-102,1e-101,1e-100,1e-99,1e-98,1e-97,1e-96,1e-95,1e-94,1e-93,1e-92,1e-91,1e-90,1e-89,1e-88,1e-87,1e-86,1e-85,1e-84,1e-83,1e-82,1e-81,1e-80,1e-79,1e-78,1e-77,1e-76,1e-75,1e-74,1e-73,1e-72,1e-71,1e-70,1e-69,1e-68,1e-67,1e-66,1e-65,1e-64,1e-63,1e-62,1e-61,1e-60,1e-59,1e-58,1e-57,1e-56,1e-55,1e-54,1e-53,1e-52,1e-51,1e-50,1e-49,1e-48,1e-47,1e-46,1e-45,1e-44,1e-43,1e-42,1e-41,1e-40,1e-39,1e-38,1e-37,1e-36,1e-35,1e-34,1e-33,1e-32,1e-31,1e-30,1e-29,1e-28,1e-27,1e-26,1e-25,1e-24,1e-23,1e-22,1e-21,1e-20,1e-19,1e-18,1e-17,1e-16,1e-15,1e-14,1e-13,1e-12,1e-11,1e-10,1e-9,1e-8,1e-7,1e-6,1e-5,1e-4,.001,.01,.1,1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13,1e14,1e15,1e16,1e17,1e18,1e19,1e20,1e21,1e22,1e23,1e24,1e25,1e26,1e27,1e28,1e29,1e30,1e31,1e32,1e33,1e34,1e35,1e36,1e37,1e38,1e39,1e40,1e41,1e42,1e43,1e44,1e45,1e46,1e47,1e48,1e49,1e50,1e51,1e52,1e53,1e54,1e55,1e56,1e57,1e58,1e59,1e60,1e61,1e62,1e63,1e64,1e65,1e66,1e67,1e68,1e69,1e70,1e71,1e72,1e73,1e74,1e75,1e76,1e77,1e78,1e79,1e80,1e81,1e82,1e83,1e84,1e85,1e86,1e87,1e88,1e89,1e90,1e91,1e92,1e93,1e94,1e95,1e96,1e97,1e98,1e99,1e100,1e101,1e102,1e103,1e104,1e105,1e106,1e107,1e108,1e109,1e110,1e111,1e112,1e113,1e114,1e115,1e116,1e117,1e118,1e119,1e120,1e121,1e122,1e123,1e124,1e125,1e126,1e127,1e128,1e129,1e130,1e131,1e132,1e133,1e134,1e135,1e136,1e137,1e138,1e139,1e140,1e141,1e142,1e143,1e144,1e145,1e146,1e147,1e148,1e149,1e150,1e151,1e152,1e153,1e154,1e155,1e156,1e157,1e158,1e159,1e160,1e161,1e162,1e163,1e164,1e165,1e166,1e167,1e168,1e169,1e170,1e171,1e172,1e173,1e174,1e175,1e176,1e177,1e178,1e179,1e180,1e181,1e182,1e183,1e184,1e185,1e186,1e187,1e188,1e189,1e190,1e191,1e192,1e193,1e194,1e195,1e196,1e197,1e198,1e199,1e200,1e201,1e202,1e203,1e204,1e205,1e206,1e207,1e208,1e209,1e210,1e211,1e212,1e213,1e214,1e215,1e216,1e217,1e218,1e219,1e220,1e221,1e222,1e223,1e224,1e225,1e226,1e227,1e228,1e229,1e230,1e231,1e232,1e233,1e234,1e235,1e236,1e237,1e238,1e239,1e240,1e241,1e242,1e243,1e244,1e245,1e246,1e247,1e248,1e249,1e250,1e251,1e252,1e253,1e254,1e255,1e256,1e257,1e258,1e259,1e260,1e261,1e262,1e263,1e264,1e265,1e266,1e267,1e268,1e269,1e270,1e271,1e272,1e273,1e274,1e275,1e276,1e277,1e278,1e279,1e280,1e281,1e282,1e283,1e284,1e285,1e286,1e287,1e288,1e289,1e290,1e291,1e292,1e293,1e294,1e295,1e296,1e297,1e298,1e299,1e300,1e301,1e302,1e303,1e304,1e305,1e306,1e307,1e308],s=323,u=function(){function e(t){_classCallCheck(this,e),t instanceof e?this.fromDecimal(t):"number"==typeof t?this.fromNumber(t):"string"==typeof t?this.fromString(t):(this.mantissa=0,this.exponent=0)}return _createClass(e,[{key:"normalize",value:function(){if(0==this.mantissa)return this.mantissa=0,void(this.exponent=0);if(!(this.mantissa>=1&&this.mantissa<10)){var e=Math.floor(Math.log10(Math.abs(this.mantissa)));return this.mantissa=this.mantissa/r[e+s],this.exponent+=e,this}}},{key:"fromMantissaExponent",value:function(e,t){return isFinite(e)&&isFinite(t)||(e=Number.NaN,t=Number.NaN),this.mantissa=e,this.exponent=t,this.normalize(),this}},{key:"fromMantissaExponent_noNormalize",value:function(e,t){return this.mantissa=e,this.exponent=t,this}},{key:"fromDecimal",value:function(e){return this.mantissa=e.mantissa,this.exponent=e.exponent,this}},{key:"fromNumber",value:function(e){return isNaN(e)?(this.mantissa=Number.NaN,this.exponent=Number.NaN):e==Number.POSITIVE_INFINITY?(this.mantissa=1,this.exponent=a):e==Number.NEGATIVE_INFINITY?(this.mantissa=-1,this.exponent=a):0==e?(this.mantissa=0,this.exponent=0):(this.exponent=Math.floor(Math.log10(Math.abs(e))),this.exponent==i?this.mantissa=10*e/1e-323:this.mantissa=e/r[this.exponent+s],this.normalize()),this}},{key:"fromString",value:function(e){if(-1!=e.indexOf("e")){var t=e.split("e");this.mantissa=parseFloat(t[0]),this.exponent=parseFloat(t[1]),this.normalize()}else if("NaN"==e)this.mantissa=Number.NaN,this.exponent=Number.NaN;else if(this.fromNumber(parseFloat(e)),isNaN(this.mantissa))throw Error("[DecimalError] Invalid argument: "+e);return this}},{key:"fromValue",value:function(t){return t instanceof e?this.fromDecimal(t):"number"==typeof t?this.fromNumber(t):"string"==typeof t?this.fromString(t):(this.mantissa=0,this.exponent=0,this)}}]),_createClass(e,[{key:"toNumber",value:function(){if(!isFinite(this.exponent))return Number.NaN;if(this.exponent>308)return this.mantissa>0?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;if(this.exponent<i)return 0;if(this.exponent==i)return this.mantissa>0?5e-324:-5e-324;var e=this.mantissa*r[this.exponent+s];if(!isFinite(e)||this.exponent<0)return e;var t=Math.round(e);return Math.abs(t-e)<1e-10?t:e}},{key:"mantissaWithDecimalPlaces",value:function(e){if(isNaN(this.mantissa)||isNaN(this.exponent))return Number.NaN;if(0==this.mantissa)return 0;var t=e+1,n=Math.ceil(Math.log10(Math.abs(this.mantissa))),a=Math.round(this.mantissa*Math.pow(10,t-n))*Math.pow(10,n-t);return parseFloat(a.toFixed(Math.max(t-n,0)))}},{key:"toString",value:function(){return isNaN(this.mantissa)||isNaN(this.exponent)?"NaN":this.exponent>=a?this.mantissa>0?"Infinity":"-Infinity":this.exponent<=-a||0==this.mantissa?"0":this.exponent<21&&this.exponent>-7?this.toNumber().toString():this.mantissa+"e"+(this.exponent>=0?"+":"")+this.exponent}},{key:"toExponential",value:function(e){if(isNaN(this.mantissa)||isNaN(this.exponent))return"NaN";if(this.exponent>=a)return this.mantissa>0?"Infinity":"-Infinity";if(this.exponent<=-a||0==this.mantissa)return"0"+(e>0?t(".",e+1,"0"):"")+"e+0";if(this.exponent>i&&this.exponent<308)return this.toNumber().toExponential(e);isFinite(e)||(e=n);var r=e+1,s=Math.max(1,Math.ceil(Math.log10(Math.abs(this.mantissa))));return(Math.round(this.mantissa*Math.pow(10,r-s))*Math.pow(10,s-r)).toFixed(Math.max(r-s,0))+"e"+(this.exponent>=0?"+":"")+this.exponent}},{key:"toFixed",value:function(e){return isNaN(this.mantissa)||isNaN(this.exponent)?"NaN":this.exponent>=a?this.mantissa>0?"Infinity":"-Infinity":this.exponent<=-a||0==this.mantissa?"0"+(e>0?t(".",e+1,"0"):""):this.exponent>=n?this.mantissa.toString().replace(".","").padEnd(this.exponent+1,"0")+(e>0?t(".",e+1,"0"):""):this.toNumber().toFixed(e)}},{key:"toPrecision",value:function(e){return this.exponent<=-7?this.toExponential(e-1):e>this.exponent?this.toFixed(e-this.exponent-1):this.toExponential(e-1)}},{key:"valueOf",value:function(){return this.toString()}},{key:"toJSON",value:function(){return this.toString()}},{key:"toStringWithDecimalPlaces",value:function(e){return this.toExponential(e)}},{key:"abs",value:function(){return e.fromMantissaExponent(Math.abs(this.mantissa),this.exponent)}},{key:"neg",value:function(){return e.fromMantissaExponent(-this.mantissa,this.exponent)}},{key:"negate",value:function(){return this.neg()}},{key:"negated",value:function(){return this.neg()}},{key:"sign",value:function(){return Math.sign(this.mantissa)}},{key:"sgn",value:function(){return this.sign()}},{key:"round",value:function(){return this.exponent<-1?new e(0):this.exponent<n?new e(Math.round(this.toNumber())):this}},{key:"floor",value:function(){return this.exponent<-1?Math.sign(this.mantissa)>=0?new e(0):new e(-1):this.exponent<n?new e(Math.floor(this.toNumber())):this}},{key:"ceil",value:function(){return this.exponent<-1?Math.sign(this.mantissa)>0?new e(1):new e(0):this.exponent<n?new e(Math.ceil(this.toNumber())):this}},{key:"trunc",value:function(){return this.exponent<0?new e(0):this.exponent<n?new e(Math.trunc(this.toNumber())):this}},{key:"add",value:function(t){return t=e.fromValue(t),0==this.mantissa?t:0==t.mantissa?this:(this.exponent>=t.exponent?(a=this,i=t):(a=t,i=this),a.exponent-i.exponent>n?a:e.fromMantissaExponent(Math.round(1e14*a.mantissa+1e14*i.mantissa*r[i.exponent-a.exponent+s]),a.exponent-14));var a,i}},{key:"plus",value:function(e){return this.add(e)}},{key:"sub",value:function(t){return t=e.fromValue(t),this.add(e.fromMantissaExponent(-t.mantissa,t.exponent))}},{key:"subtract",value:function(e){return this.sub(e)}},{key:"minus",value:function(e){return this.sub(e)}},{key:"mul",value:function(t){return t=e.fromValue(t),e.fromMantissaExponent(this.mantissa*t.mantissa,this.exponent+t.exponent)}},{key:"multiply",value:function(e){return this.mul(e)}},{key:"times",value:function(e){return this.mul(e)}},{key:"div",value:function(t){return t=e.fromValue(t),this.mul(t.recip())}},{key:"divide",value:function(e){return this.div(e)}},{key:"divideBy",value:function(e){return this.div(e)}},{key:"dividedBy",value:function(e){return this.div(e)}},{key:"recip",value:function(){return e.fromMantissaExponent(1/this.mantissa,-this.exponent)}},{key:"reciprocal",value:function(){return this.recip()}},{key:"reciprocate",value:function(){return this.recip()}},{key:"cmp",value:function(t){if(t=e.fromValue(t),0==this.mantissa){if(0==t.mantissa)return 0;if(t.mantissa<0)return 1;if(t.mantissa>0)return-1}else if(0==t.mantissa){if(this.mantissa<0)return-1;if(this.mantissa>0)return 1}return this.mantissa>0?t.mantissa<0?1:this.exponent>t.exponent?1:this.exponent<t.exponent?-1:this.mantissa>t.mantissa?1:this.mantissa<t.mantissa?-1:0:this.mantissa<0?t.mantissa>0?-1:this.exponent>t.exponent?-1:this.exponent<t.exponent?1:this.mantissa>t.mantissa?1:this.mantissa<t.mantissa?-1:0:void 0}},{key:"compare",value:function(e){return this.cmp(e)}},{key:"eq",value:function(t){return t=e.fromValue(t),this.exponent==t.exponent&&this.mantissa==t.mantissa}},{key:"equals",value:function(e){return this.eq(e)}},{key:"neq",value:function(t){return t=e.fromValue(t),this.exponent!=t.exponent||this.mantissa!=t.mantissa}},{key:"notEquals",value:function(e){return this.neq(e)}},{key:"lt",value:function(t){return t=e.fromValue(t),0==this.mantissa?t.mantissa>0:0==t.mantissa?this.mantissa<=0:this.exponent==t.exponent?this.mantissa<t.mantissa:this.mantissa>0?t.mantissa>0&&this.exponent<t.exponent:t.mantissa>0||this.exponent>t.exponent}},{key:"lte",value:function(t){return t=e.fromValue(t),0==this.mantissa?t.mantissa>=0:0==t.mantissa?this.mantissa<=0:this.exponent==t.exponent?this.mantissa<=t.mantissa:this.mantissa>0?t.mantissa>0&&this.exponent<t.exponent:t.mantissa>0||this.exponent>t.exponent}},{key:"gt",value:function(t){return t=e.fromValue(t),0==this.mantissa?t.mantissa<0:0==t.mantissa?this.mantissa>0:this.exponent==t.exponent?this.mantissa>t.mantissa:this.mantissa>0?t.mantissa<0||this.exponent>t.exponent:t.mantissa<0&&this.exponent<t.exponent}},{key:"gte",value:function(t){return t=e.fromValue(t),0==this.mantissa?t.mantissa<=0:0==t.mantissa?this.mantissa>0:this.exponent==t.exponent?this.mantissa>=t.mantissa:this.mantissa>0?t.mantissa<0||this.exponent>t.exponent:t.mantissa<0&&this.exponent<t.exponent}},{key:"max",value:function(t){return t=e.fromValue(t),this.gte(t)?this:t}},{key:"min",value:function(t){return t=e.fromValue(t),this.lte(t)?this:t}},{key:"cmp_tolerance",value:function(t,n){return t=e.fromValue(t),this.eq_tolerance(t,n)?0:this.cmp(t)}},{key:"compare_tolerance",value:function(e,t){return this.cmp_tolerance(e,t)}},{key:"eq_tolerance",value:function(t,n){return t=e.fromValue(t),e.lte(this.sub(t).abs(),e.max(this.abs(),t.abs()).mul(n))}},{key:"equals_tolerance",value:function(e,t){return this.eq_tolerance(e,t)}},{key:"neq_tolerance",value:function(t,n){return t=e.fromValue(t),!this.eq_tolerance(t,n)}},{key:"notEquals_tolerance",value:function(e,t){return this.neq_tolerance(e,t)}},{key:"lt_tolerance",value:function(t,n){return t=e.fromValue(t),!this.eq_tolerance(t,n)&&this.lt(t)}},{key:"lte_tolerance",value:function(t,n){return t=e.fromValue(t),!!this.eq_tolerance(t,n)||this.lt(t)}},{key:"gt_tolerance",value:function(t,n){return t=e.fromValue(t),!this.eq_tolerance(t,n)&&this.gt(t)}},{key:"gte_tolerance",value:function(t,n){return t=e.fromValue(t),!!this.eq_tolerance(t,n)||this.gt(t)}},{key:"log10",value:function(){return this.exponent+Math.log10(this.mantissa)}},{key:"log",value:function(e){return Math.LN10/Math.log(e)*this.log10()}},{key:"log2",value:function(){return 3.321928094887362*this.log10()}},{key:"ln",value:function(){return 2.302585092994046*this.log10()}},{key:"logarithm",value:function(e){return this.log(e)}},{key:"pow",value:function(t){t instanceof e&&(t=t.toNumber());var n=this.exponent*t;if(Number.isSafeInteger(n)){var a=Math.pow(this.mantissa,t);if(isFinite(a))return e.fromMantissaExponent(a,n)}var i=Math.trunc(n),r=n-i;a=Math.pow(10,t*Math.log10(this.mantissa)+r);return isFinite(a)?e.fromMantissaExponent(a,i):e.pow10(t*this.log10())}},{key:"pow_base",value:function(t){return(t=e.fromValue(t)).pow(this)}},{key:"factorial",value:function(){var t=this.toNumber()+1;return e.pow(t/Math.E*Math.sqrt(t*Math.sinh(1/t)+1/(810*Math.pow(t,6))),t).mul(Math.sqrt(2*Math.PI/t))}},{key:"exp",value:function(){var t,n,a=this.toNumber();return-706<a&&a<709?e.fromNumber(Math.exp(a)):(t=0,(n=this.exponent)>=0&&(t=Math.trunc(a/Math.LN10),(a-=t*Math.LN10)>=Math.LN10&&(++t,a-=Math.LN10)),a<0&&(--t,a+=Math.LN10),a=Math.exp(a),0!=t&&(n=Math.floor(t),a=e.fromMantissaExponent(a,n)),a)}},{key:"sqr",value:function(){return e.fromMantissaExponent(Math.pow(this.mantissa,2),2*this.exponent)}},{key:"sqrt",value:function(){return this.mantissa<0?new e(Number.NaN):this.exponent%2!=0?e.fromMantissaExponent(3.16227766016838*Math.sqrt(this.mantissa),Math.floor(this.exponent/2)):e.fromMantissaExponent(Math.sqrt(this.mantissa),Math.floor(this.exponent/2))}},{key:"cube",value:function(){return e.fromMantissaExponent(Math.pow(this.mantissa,3),3*this.exponent)}},{key:"cbrt",value:function(){var t=1,n=this.mantissa;n<0&&(t=-1,n=-n);var a=t*Math.pow(n,1/3),i=this.exponent%3;return 1==i||-1==i?e.fromMantissaExponent(2.154434690031884*a,Math.floor(this.exponent/3)):0!=i?e.fromMantissaExponent(4.641588833612779*a,Math.floor(this.exponent/3)):e.fromMantissaExponent(a,Math.floor(this.exponent/3))}},{key:"sinh",value:function(){return this.exp().sub(this.negate().exp()).div(2)}},{key:"cosh",value:function(){return this.exp().add(this.negate().exp()).div(2)}},{key:"tanh",value:function(){return this.sinh().div(this.cosh())}},{key:"asinh",value:function(){return e.ln(this.add(this.sqr().add(1).sqrt()))}},{key:"acosh",value:function(){return e.ln(this.add(this.sqr().sub(1).sqrt()))}},{key:"atanh",value:function(){return this.abs().gte(1)?Number.NaN:e.ln(this.add(1).div(new e(1).sub(this))).div(2)}},{key:"ascensionPenalty",value:function(e){return 0==e?this:this.pow(Math.pow(10,-e))}},{key:"egg",value:function(){return this.add(9)}},{key:"lessThanOrEqualTo",value:function(e){return this.cmp(e)<1}},{key:"lessThan",value:function(e){return this.cmp(e)<0}},{key:"greaterThanOrEqualTo",value:function(e){return this.cmp(e)>-1}},{key:"greaterThan",value:function(e){return this.cmp(e)>0}},{key:"m",get:function(){return this.mantissa},set:function(e){this.mantissa=e}},{key:"e",get:function(){return this.exponent},set:function(e){this.exponent=e}},{key:"s",get:function(){return this.sign()},set:function(e){0==e&&(this.e=0,this.m=0),this.sgn()!=e&&(this.m=-this.m)}}],[{key:"fromMantissaExponent",value:function(t,n){return(new e).fromMantissaExponent(t,n)}},{key:"fromMantissaExponent_noNormalize",value:function(t,n){return(new e).fromMantissaExponent_noNormalize(t,n)}},{key:"fromDecimal",value:function(t){return(new e).fromDecimal(t)}},{key:"fromNumber",value:function(t){return(new e).fromNumber(t)}},{key:"fromString",value:function(t){return(new e).fromString(t)}},{key:"fromValue",value:function(t){return t instanceof e?t:new e(t)}},{key:"abs",value:function(t){return(t=e.fromValue(t)).abs()}},{key:"neg",value:function(t){return(t=e.fromValue(t)).neg()}},{key:"negate",value:function(t){return(t=e.fromValue(t)).neg()}},{key:"negated",value:function(t){return(t=e.fromValue(t)).neg()}},{key:"sign",value:function(t){return(t=e.fromValue(t)).sign()}},{key:"sgn",value:function(t){return(t=e.fromValue(t)).sign()}},{key:"round",value:function(t){return(t=e.fromValue(t)).round()}},{key:"floor",value:function(t){return(t=e.fromValue(t)).floor()}},{key:"ceil",value:function(t){return(t=e.fromValue(t)).ceil()}},{key:"trunc",value:function(t){return(t=e.fromValue(t)).trunc()}},{key:"add",value:function(t,n){return(t=e.fromValue(t)).add(n)}},{key:"plus",value:function(t,n){return(t=e.fromValue(t)).add(n)}},{key:"sub",value:function(t,n){return(t=e.fromValue(t)).sub(n)}},{key:"subtract",value:function(t,n){return(t=e.fromValue(t)).sub(n)}},{key:"minus",value:function(t,n){return(t=e.fromValue(t)).sub(n)}},{key:"mul",value:function(t,n){return(t=e.fromValue(t)).mul(n)}},{key:"multiply",value:function(t,n){return(t=e.fromValue(t)).mul(n)}},{key:"times",value:function(t,n){return(t=e.fromValue(t)).mul(n)}},{key:"div",value:function(t,n){return(t=e.fromValue(t)).div(n)}},{key:"divide",value:function(t,n){return(t=e.fromValue(t)).div(n)}},{key:"recip",value:function(t){return(t=e.fromValue(t)).recip()}},{key:"reciprocal",value:function(t){return(t=e.fromValue(t)).recip()}},{key:"reciprocate",value:function(t){return(t=e.fromValue(t)).reciprocate()}},{key:"cmp",value:function(t,n){return(t=e.fromValue(t)).cmp(n)}},{key:"compare",value:function(t,n){return(t=e.fromValue(t)).cmp(n)}},{key:"eq",value:function(t,n){return(t=e.fromValue(t)).eq(n)}},{key:"equals",value:function(t,n){return(t=e.fromValue(t)).eq(n)}},{key:"neq",value:function(t,n){return(t=e.fromValue(t)).neq(n)}},{key:"notEquals",value:function(t,n){return(t=e.fromValue(t)).notEquals(n)}},{key:"lt",value:function(t,n){return(t=e.fromValue(t)).lt(n)}},{key:"lte",value:function(t,n){return(t=e.fromValue(t)).lte(n)}},{key:"gt",value:function(t,n){return(t=e.fromValue(t)).gt(n)}},{key:"gte",value:function(t,n){return(t=e.fromValue(t)).gte(n)}},{key:"max",value:function(t,n){return(t=e.fromValue(t)).max(n)}},{key:"min",value:function(t,n){return(t=e.fromValue(t)).min(n)}},{key:"cmp_tolerance",value:function(t,n,a){return(t=e.fromValue(t)).cmp_tolerance(n,a)}},{key:"compare_tolerance",value:function(t,n,a){return(t=e.fromValue(t)).cmp_tolerance(n,a)}},{key:"eq_tolerance",value:function(t,n,a){return(t=e.fromValue(t)).eq_tolerance(n,a)}},{key:"equals_tolerance",value:function(t,n,a){return(t=e.fromValue(t)).eq_tolerance(n,a)}},{key:"neq_tolerance",value:function(t,n,a){return(t=e.fromValue(t)).neq_tolerance(n,a)}},{key:"notEquals_tolerance",value:function(t,n,a){return(t=e.fromValue(t)).notEquals_tolerance(n,a)}},{key:"lt_tolerance",value:function(t,n,a){return(t=e.fromValue(t)).lt_tolerance(n,a)}},{key:"lte_tolerance",value:function(t,n,a){return(t=e.fromValue(t)).lte_tolerance(n,a)}},{key:"gt_tolerance",value:function(t,n,a){return(t=e.fromValue(t)).gt_tolerance(n,a)}},{key:"gte_tolerance",value:function(t,n,a){return(t=e.fromValue(t)).gte_tolerance(n,a)}},{key:"log10",value:function(t){return(t=e.fromValue(t)).log10()}},{key:"log",value:function(t,n){return(t=e.fromValue(t)).log(n)}},{key:"log2",value:function(t){return(t=e.fromValue(t)).log2()}},{key:"ln",value:function(t){return(t=e.fromValue(t)).ln()}},{key:"logarithm",value:function(t,n){return(t=e.fromValue(t)).logarithm(n)}},{key:"pow10",value:function(t){return Number.isInteger(t)?e.fromMantissaExponent_noNormalize(1,t):e.fromMantissaExponent(Math.pow(10,t%1),Math.trunc(t))}},{key:"pow",value:function(t,n){return 10==t&&Number.isInteger(n)?e.fromMantissaExponent(1,n):(t=e.fromValue(t)).pow(n)}},{key:"exp",value:function(t){return(t=e.fromValue(t)).exp()}},{key:"sqr",value:function(t){return(t=e.fromValue(t)).sqr()}},{key:"sqrt",value:function(t){return(t=e.fromValue(t)).sqrt()}},{key:"cube",value:function(t){return(t=e.fromValue(t)).cube()}},{key:"cbrt",value:function(t){return(t=e.fromValue(t)).cbrt()}},{key:"affordGeometricSeries",value:function(t,n,a,i){t=e.fromValue(t),n=e.fromValue(n),a=e.fromValue(a);var r=n.mul(e.pow(a,i));return e.floor(e.log10(t.div(r).mul(a.sub(1)).add(1))/e.log10(a))}},{key:"sumGeometricSeries",value:function(t,n,a,i){return n=e.fromValue(n),a=e.fromValue(a),n.mul(e.pow(a,i)).mul(e.sub(1,e.pow(a,t))).div(e.sub(1,a))}},{key:"affordArithmeticSeries",value:function(t,n,a,i){t=e.fromValue(t),n=e.fromValue(n),a=e.fromValue(a),i=e.fromValue(i);var r=n.add(e.mul(i,a)).sub(a.div(2)),s=r.pow(2);return e.floor(r.neg().add(e.sqrt(s.add(e.mul(a,t).mul(2)))).div(a))}},{key:"sumArithmeticSeries",value:function(t,n,a,i){t=e.fromValue(t),n=e.fromValue(n),a=e.fromValue(a),i=e.fromValue(i);var r=n.add(e.mul(i,a));return e.div(t,2).mul(e.mul(2,r).plus(t.sub(1).mul(a)))}},{key:"efficiencyOfPurchase",value:function(t,n,a){return t=e.fromValue(t),n=e.fromValue(n),a=e.fromValue(a),e.add(t.div(n),t.div(a))}},{key:"randomDecimalForTesting",value:function(t){if(20*Math.random()<1)return e.fromMantissaExponent(0,0);var n=10*Math.random();10*Math.random()<1&&(n=Math.round(n)),n*=Math.sign(2*Math.random()-1);var a=Math.floor(Math.random()*t*2)-t;return e.fromMantissaExponent(n,a)}}]),e}();if("function"==typeof define&&define.amd)define(function(){return u});else if("undefined"!=typeof module&&module.exports)module.exports=u;else{e||(e="undefined"!=typeof self&&self&&self.self==self?self:Function("return this")());var o=e.Decimal;u.noConflict=function(){return e.Decimal=o,u},e.Decimal=u}}(void 0);

!function(t,e){for(var r in e)t[r]=e[r]}(exports,function(t){var e={};function r(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,r),s.l=!0,s.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);class n{static get _eloBins(){return["401178","401179","431274","438935","451416","457393","457631","457632","504175","627780","636297","636368"]}static get _eloBinRanges(){return[[506699,506778],[509e3,509999],[650031,650033],[650035,650051],[650405,650439],[650485,650538],[650541,650598],[650700,650718],[650720,650727],[650901,650920],[651652,651679],[655e3,655019],[655021,655058]]}static get _hiperBins(){return["637095","637612","637599","637609","637568"]}static get _hipercardBins(){return["606282","384100","384140","384160"]}static get _masterCardRanges(){return[222100,272099]}static _isInEloBinRanges(t){const e=parseInt(t);for(let t=0;t<this._eloBinRanges.length;t++){const r=this._eloBinRanges[t][0],n=this._eloBinRanges[t][1];if(e>=r&&e<=n)return!0}return!1}static _isInMasterCardRanges(t){const e=parseInt(t);for(let t=0;t<this._masterCardRanges.length;t+=2){const r=this._masterCardRanges[t],n=this._masterCardRanges[t+1];if(e>=r&&e<=n)return!0}return!1}static normalizeCardNumber(t){return t?(t+="").replace(/[\s+|\.|\-]/g,""):t}static isValidNumber(t){const e=this.normalizeCardNumber(t),r=this.cardType(e);if(r){if("HIPERCARD"===r.brand)return!0;{let t=0;for(let r=2-e.length%2;r<=e.length;r+=2)t+=parseInt(e.charAt(r-1),10);for(let r=e.length%2+1;r<e.length;r+=2){let n=2*parseInt(e.charAt(r-1),10);t+=n<10?n:n-9}return t%10==0}}return!1}static isSecurityCodeValid(t,e){const r=this.cardType(t);if(!r)return!1;const n="AMEX"===r.brand?4:3,s=new RegExp(`[0-9]{${n}}`);return!!e&&e.length===n&&s.test(e)}static isExpiryDateValid(t,e){let r=parseInt(t,10),n=parseInt(e,10);return!(r<1||r>12)&&((2===(n+"").length||4===(n+"").length)&&(2===(n+"").length&&(n=n>80?"19"+n:"20"+n),!(n<1e3||n>=3e3)&&!this.isExpiredDate(r,n)))}static isExpiredDate(t,e){const r=new Date,n=("0"+(r.getMonth()+1)).slice(-2),s=r.getFullYear(),i=("0"+t).slice(-2);if(2===e.toString().length){if(e>80)return!0;e="20"+e}const a=s+n;return parseInt(e+i,10)<parseInt(a,10)}static isValid(t){const{number:e,cvc:r,expirationMonth:n,expirationYear:s}=t;return this.isValidNumber(e)&&this.isSecurityCodeValid(e,r)&&this.isExpiryDateValid(n,s)}static cardType(t,e){const r=this.normalizeCardNumber(t),n=t=>t.substring(0,6);let s={VISA:{matches:t=>/^4\d{15}$/.test(t)},MASTERCARD:{matches:t=>/^5[1-5]\d{14}$/.test(t)||null!==t&&16==t.length&&this._isInMasterCardRanges(n(t))},AMEX:{matches:t=>/^3[4,7]\d{13}$/.test(t)},DINERS:{matches:t=>/^3[0,6,8]\d{12}$/.test(t)},HIPERCARD:{matches:t=>null!==t&&(16==t.length||19==t.length)&&this._hipercardBins.indexOf(n(t))>-1},ELO:{matches:t=>null!==t&&16==t.length&&(this._eloBins.indexOf(n(t))>-1||this._isInEloBinRanges(n(t)))},HIPER:{matches:t=>null!==t&&t.length>=6&&this._hiperBins.indexOf(n(t))>-1}};return e&&(s={VISA:{matches:t=>/^4\d{3}\d*$/.test(t)},MASTERCARD:{matches:t=>/^5[1-5]\d{4}\d*$/.test(t)||null!==t&&16==t.length&&this._isInMasterCardRanges(n(t))},AMEX:{matches:t=>/^3[4,7]\d{2}\d*$/.test(t)},DINERS:{matches:t=>/^3(?:0[0-5]|[68][0-9])+\d*$/.test(t)},HIPERCARD:{matches:t=>null!==t&&t.length>=6&&this._hipercardBins.indexOf(n(t))>-1},ELO:{matches:t=>null!==t&&t.length>=6&&(this._eloBins.indexOf(n(t))>-1||this._isInEloBinRanges(n(t)))},HIPER:{matches:t=>null!==t&&t.length>=6&&this._hiperBins.indexOf(n(t))>-1}}),s.ELO.matches(r)?{brand:"ELO"}:s.HIPER.matches(r)?{brand:"HIPER"}:s.VISA.matches(r)?{brand:"VISA"}:s.MASTERCARD.matches(r)?{brand:"MASTERCARD"}:s.AMEX.matches(r)?{brand:"AMEX"}:s.HIPERCARD.matches(r)?{brand:"HIPERCARD"}:s.DINERS.matches(r)?{brand:"DINERS"}:null}}class s{static setEncrypter(t,e){this.encrypter=t,this.encrypterName=e}static encrypt(t,e){if(this.encrypter||this.encrypterName||"undefined"==typeof JSEncrypt||(this.encrypter=JSEncrypt,this.encrypterName="js"),this.encrypter&&this.encrypterName)switch(this.encrypterName.toLowerCase()){case"js":case"ionic":case"node":return this.jsEncrypt(t,e);case"react-native":return this.reactNativeRsa(t,e)}return Promise.resolve(null)}static jsEncrypt(t,e){return new Promise(r=>{const n=new this.encrypter({default_key_size:2048});return n.setPublicKey(e),r(n.encrypt(t))})}static reactNativeRsa(t,e){return this.encrypter.encrypt(t,e)}}class i{static setEncrypter(t,e){return s.setEncrypter(t,e),this}static setCreditCard(t){return t&&(this.creditCard=Object.assign(t,{number:n.normalizeCardNumber(t.number)})),this}static getCreditCard(){return this.creditCard}static setPubKey(t){return this.pubKey=t,this}static hash(){const{number:t,cvc:e,expirationMonth:r,expirationYear:n}=this.creditCard;if(!(this.pubKey&&t&&e&&r&&n))return Promise.resolve(null);const i=[`number=${t}`,`cvc=${e}`,`expirationMonth=${r}`,`expirationYear=${n}`].join("&");return s.encrypt(i,this.pubKey)}static isValid(){return n.isValid(this.creditCard)}static cardType(){const t=n.cardType(this.creditCard.number);return t?t.brand:null}}r.d(e,"MoipValidator",function(){return n}),r.d(e,"MoipCreditCard",function(){return i})}]));
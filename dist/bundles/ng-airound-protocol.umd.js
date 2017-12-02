!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("@angular/core"),require("util")):"function"==typeof define&&define.amd?define(["exports","@angular/core","util"],e):e(t["ng-airound-protocol"]={},t.ng.core,t.util)}(this,function(t,e,n){"use strict";function r(){return new a}var i={SGU:101,UVC:103,SGI:105,SGO:107,UPC:109,FPU:111,UDR:113,AUV:115,ASR:117,ASD:119,ASV:121,SRG:123,SAS:125,SDD:127,SLV:129,RAV:131,RHV:133,HAV:135,SHR:137,HHV:155,KAS:157},o={eid:-1};String.prototype.hexBitsLength=function(){return(8*this.length).toString(16)},String.prototype.toHex=function(){for(var t="",e=0;e<this.length;e++)t+=this.charCodeAt(e).toString(16);return t};var s;!function(t){!function(t){t.isInvalidInput=function(t,e){if(e instanceof String&&!e)throw"[QI.Error.isInvalidInput]: "+t+"=> Invalid input"},t.isEmptyValue=function(t,e){if(!e)throw"[QI.Error.isEmptyValue]: "+t+"=> Empty value"},t.isWithinRange=function(t,e,n){if(e instanceof String){if(8*e.length>=Math.pow(2,n))throw"[QI.Error.isWithinRange]: "+t+" "+8*e.length+" => Out of range (<"+Math.pow(2,n)+")"}else if(e instanceof Number&&e>=Math.pow(2,n))throw"[QI.Error.isWithinRange]: "+t+" "+e+" => Out of range (<"+Math.pow(2,n)+")"}}(t.Error||(t.Error={}))}(s||(s={}));var u,a=function(){function t(){}return Object.defineProperty(t.prototype,"CONFIG_EID",{get:function(){return o.eid},set:function(t){o.eid=t},enumerable:!0,configurable:!0}),t.prototype.SGU=function(t,e){return this.CONFIG_EID=t,new u.PROTO_SGU(e).generate()},t.prototype.UVC=function(t){return new u.PROTO_UVC(t).generate()},t.decorators=[{type:e.Injectable}],t.ctorParameters=function(){return[]},t}();!function(t){var e=function(){function t(t){this.body=new u.SGU(t),this.header=new a({_type_8:i.SGU,_length_16:this.body.value.length,_eid_24:o.eid})}return t.prototype.generate=function(){return"{"+this.header.value+", "+this.body.value+"}"},t}();t.PROTO_SGU=e;var r=function(){function t(t){this.body=new u.UVC(t),this.header=new a({_type_8:i.UVC,_length_16:this.body.value.length,_eid_24:o.eid})}return t.prototype.generate=function(){return"{"+this.header.value+","+this.body.value+"}"},t}();t.PROTO_UVC=r;var u;!function(t){var e=function(){function e(e){this.MAX_SIZE_BIRTHDATE=32,this.birthdate=e._birthdate_32,this.gender=e._gender_8,this.tlv=new t.SGU_TLV(e._email_tlv,e._password_tlv,e._firstname_tlv,e._lastname_tlv)}return Object.defineProperty(e.prototype,"birthdate",{get:function(){return s.Error.isEmptyValue("get birthdate",this._birthdate_32),this._birthdate_32},set:function(t){s.Error.isInvalidInput("set birthdate",t);for(var e="",n=-1,r=0,i=t.split("/");r<i.length;r++){e+=i[r]}try{n=Number(e)}catch(t){throw t}if(n<0||n>Math.pow(2,this.MAX_SIZE_BIRTHDATE))throw new RangeError;this._birthdate_32=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"gender",{get:function(){return s.Error.isEmptyValue("get gender",this._gender_8),this._gender_8},set:function(t){if("male"===t.toLowerCase())this._gender_8="m";else if("female"===t.toLowerCase())this._gender_8="f";else{if("other"!==t.toLowerCase())throw"invalid input";this._gender_8="o"}},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"tlv",{get:function(){return s.Error.isEmptyValue("get tlv",this._tlv),this._tlv},set:function(t){this._tlv=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){return'"body": {"birthdate": "'+this.birthdate+'", "gender": "'+this.gender+'", "tlv": "'+this.tlv.value+'"}'},enumerable:!0,configurable:!0}),e}();t.SGU=e;var r=function(){function t(t,e,n,r){this._id_type="01",this._password_type="02",this._firstname_type="03",this._lastname_type="04",this.id=t,this.password=e,this.firstname=n,this.lastname=r}return Object.defineProperty(t.prototype,"id",{set:function(t){this._id_length=t.hexBitsLength(),this._id=t.toHex()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"password",{set:function(t){this._password_length=t.hexBitsLength(),this._password=t.toHex()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"firstname",{set:function(t){this._firstname_length=t.hexBitsLength(),this._firstname=t.toHex()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"lastname",{set:function(t){this._lastname_length=t.hexBitsLength(),this._lastname=t.toHex()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"value",{get:function(){return this._id_type+this._id_length+this._id+this._password_type+this._password_length+this._password+this._firstname_type+this._firstname_length+this._firstname+this._lastname_type+this._lastname_length+this._lastname},enumerable:!0,configurable:!0}),t}();t.SGU_TLV=r;var i=function(){function t(t){this.MAX_SIZE_NR_OF_TRIES_DIFF_CODE_TRANS=8,this.MAX_SIZE_VERIFY_CODE=32,this.MAX_SIZE_AUTH_CODE=160,this.nrofTriesDiffCodeTrans=t._nrofTriesDiffCodeTrans_8,this.verifyCode=t._verifyCode_32,this.authCode=t._authCode_160}return Object.defineProperty(t.prototype,"nrofTriesDiffCodeTrans",{get:function(){return s.Error.isEmptyValue("get nrofTriesDiffCodeTrans",this._nrofTriesDiffCodeTrans_8),this._nrofTriesDiffCodeTrans_8},set:function(t){if(n.isUndefined(t)||t<-1)throw"Invalid input";s.Error.isWithinRange("set nrofTriesDiffCodeTrans",t,this.MAX_SIZE_NR_OF_TRIES_DIFF_CODE_TRANS),this._nrofTriesDiffCodeTrans_8=parseInt(t.toString(16))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"verifyCode",{get:function(){return s.Error.isEmptyValue("get verifyCode",this._verifyCode_32),this._verifyCode_32},set:function(t){s.Error.isInvalidInput("set verifyCode",t),s.Error.isWithinRange("set verifyCode",t,this.MAX_SIZE_VERIFY_CODE),this._verifyCode_32=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"authCode",{get:function(){return s.Error.isEmptyValue("get authCode",this._authCode_160),this._authCode_160},set:function(t){s.Error.isInvalidInput("set authCode",t),s.Error.isWithinRange("set authCode",t,this.MAX_SIZE_AUTH_CODE),this._authCode_160=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"value",{get:function(){return'"body": {"nrofTriesDiffCodeTrans": '+this._nrofTriesDiffCodeTrans_8+', "verifyCoe": "'+this._verifyCode_32+'", "authCode": "'+this._authCode_160+'"}'},enumerable:!0,configurable:!0}),t}();t.UVC=i;var o=function(){return function(){}}();t.SGI=o;var u=function(){return function(){}}();t.SGO=u;var a=function(){return function(){}}();t.UPC=a;var f=function(){return function(){}}();t.FPU=f;var h=function(){return function(){}}();t.UDR=h;var _=function(){return function(){}}();t.AUV=_;var d=function(){return function(){}}();t.ASR=d;var c=function(){return function(){}}();t.ASD=c;var l=function(){return function(){}}();t.ASV=l;var p=function(){return function(){}}();t.SRG=p;var g=function(){return function(){}}();t.SAS=g;var y=function(){return function(){}}();t.SDD=y;var v=function(){return function(){}}();t.SLV=v;var b=function(){return function(){}}();t.RAV=b;var m=function(){return function(){}}();t.RHV=m;var E=function(){return function(){}}();t.HAV=E;var C=function(){return function(){}}();t.SHR=C;var S=function(){return function(){}}();t.HHV=S;var O=function(){return function(){}}();t.KAS=O}(u=t.PROTO_BODY||(t.PROTO_BODY={}));var a=function(){function t(t){this.field1='"msg_type"',this.field2='"msg_length"',this.field3='"endpoint_id"',this.delimeter=" : ",this.seperator=", ",this._type_8=-1,this._length_16=-1,this._eid_24=-1,this._type_8=t._type_8,this._length_16=t._length_16,this._eid_24=t._eid_24}return Object.defineProperty(t.prototype,"value",{get:function(){try{if(this._type_8*this._length_16*this._eid_24<0)throw new RangeError;var t='"header": {';return t+=this.field1+this.delimeter+this._type_8+this.seperator,t+=this.field2+this.delimeter+this._length_16+this.seperator,t+=this.field3+this.delimeter+this._eid_24,t+="}"}catch(t){return t instanceof RangeError?console.log("Invalid value"):console.log("Unexpected error"),""}},enumerable:!0,configurable:!0}),t}();t.PROTO_HEADER=a}(u||(u={}));var f=function(){function t(){}return t.decorators=[{type:e.NgModule,args:[{providers:[{provide:a,useFactory:r}]}]}],t.ctorParameters=function(){return[]},t}();t.AiroundProtocolBuilder=a,t.AiroundProtocolModule=f,Object.defineProperty(t,"__esModule",{value:!0})});
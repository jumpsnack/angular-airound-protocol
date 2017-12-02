!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("@angular/core"),require("util")):"function"==typeof define&&define.amd?define(["exports","@angular/core","util"],e):e(t["ng-airound-protocol"]={},t.ng.core,t.util)}(this,function(t,e,n){"use strict";function r(){return new f}var i={SGU:101,UVC:103,SGI:105,SGO:107,UPC:109,FPU:111,UDR:113,AUV:115,ASR:117,ASD:119,ASV:121,SRG:123,SAS:125,SDD:127,SLV:129,RAV:131,RHV:133,HAV:135,SHR:137,HHV:155,KAS:157},o={eid:-1};String.prototype.hexBitsLength=function(){return(8*this.length).toString(16)},String.prototype.toHex=function(){for(var t="",e=0;e<this.length;e++)t+=this.charCodeAt(e).toString(16);return t};var u;!function(t){(t.Error||(t.Error={})).isUndefined=function(t){if(!t)throw"[QI.Error.isUndefined]: "+t._name+" => undefined"}}(u||(u={}));var s,f=function(){function t(){}return Object.defineProperty(t.prototype,"CONFIG_EID",{get:function(){return o.eid},set:function(t){o.eid=t},enumerable:!0,configurable:!0}),t.prototype.SGU=function(t,e){return this.CONFIG_EID=t,new s.PROTO_SGU(e).generate()},t.prototype.UVC=function(t){return new s.PROTO_UVC(t).generate()},t.decorators=[{type:e.Injectable}],t.ctorParameters=function(){return[]},t}();!function(t){var e=function(){function t(t){this.body=new s.SGU(t),this.header=new f({_type_8:i.SGU,_length_16:this.body.value.length,_eid_24:o.eid})}return t.prototype.generate=function(){return"{"+this.header.value+", "+this.body.value+"}"},t}();t.PROTO_SGU=e;var r=function(){function t(t){this.body=new s.UVC(t),this.header=new f({_type_8:i.UVC,_length_16:this.body.value.length,_eid_24:o.eid})}return t.prototype.generate=function(){return"{"+this.header.value+","+this.body.value+"}"},t}();t.PROTO_UVC=r;var s;!function(t){var e=function(){function e(e){this.MAX_SIZE_BIRTHDATE=32,this.birthdate=e._birthdate_32,this.gender=e._gender_8,this.tlv=new t.SGU_TLV(e._email_tlv,e._password_tlv,e._firstname_tlv,e._lastname_tlv)}return Object.defineProperty(e.prototype,"birthdate",{get:function(){if(n.isUndefined(this._birthdate_32))throw"Empty value";return this._birthdate_32},set:function(t){if(n.isUndefined(t))throw"Invalid input";for(var e="",r=-1,i=0,o=t.split("/");i<o.length;i++){e+=o[i]}try{r=Number(e)}catch(t){throw t}if(r<0||r>Math.pow(2,this.MAX_SIZE_BIRTHDATE))throw new RangeError;this._birthdate_32=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"gender",{get:function(){if(n.isUndefined(this._gender_8))throw"Empty value";return this._gender_8},set:function(t){if("male"===t.toLowerCase())this._gender_8="m";else if("female"===t.toLowerCase())this._gender_8="f";else{if("other"!==t.toLowerCase())throw"invalid input";this._gender_8="o"}},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"tlv",{get:function(){if(n.isUndefined(this._tlv))throw"Empty value";return this._tlv},set:function(t){this._tlv=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){return'"body": {"birthdate": "'+this.birthdate+'", "gender": "'+this.gender+'", "tlv": "'+this.tlv.value+'"}'},enumerable:!0,configurable:!0}),e}();t.SGU=e;var r=function(){function t(t,e,n,r){this._id_type="01",this._password_type="02",this._firstname_type="03",this._lastname_type="04",this.id=t,this.password=e,this.firstname=n,this.lastname=r}return Object.defineProperty(t.prototype,"id",{set:function(t){this._id_length=t.hexBitsLength(),this._id=t.toHex()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"password",{set:function(t){this._password_length=t.hexBitsLength(),this._password=t.toHex()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"firstname",{set:function(t){this._firstname_length=t.hexBitsLength(),this._firstname=t.toHex()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"lastname",{set:function(t){this._lastname_length=t.hexBitsLength(),this._lastname=t.toHex()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"value",{get:function(){return this._id_type+this._id_length+this._id+this._password_type+this._password_length+this._password+this._firstname_type+this._firstname_length+this._firstname+this._lastname_type+this._lastname_length+this._lastname},enumerable:!0,configurable:!0}),t}();t.SGU_TLV=r;var i=function(){function t(t){this.MAX_SIZE_NR_OF_TRIES_DIFF_CODE_TRANS=8,this.MAX_SIZE_VERIFY_CODE=32,this.MAX_SIZE_AUTH_CODE=160,this.nrofTriesDiffCodeTrans=t._nrofTriesDiffCodeTrans_8,this.verifyCode=t._verifyCode_32,this.authCode=t._authCode_160}return Object.defineProperty(t.prototype,"nrofTriesDiffCodeTrans",{get:function(){if(n.isUndefined(this._nrofTriesDiffCodeTrans_8))throw"Empty value";return this._nrofTriesDiffCodeTrans_8},set:function(t){if(n.isUndefined(t)||t<-1)throw"Invalid input";if(t>=Math.pow(2,this.MAX_SIZE_NR_OF_TRIES_DIFF_CODE_TRANS))throw"[nrofTriesDiffCodeTrans]: "+t+" => Out of range (<"+Math.pow(2,this.MAX_SIZE_NR_OF_TRIES_DIFF_CODE_TRANS)+")";this._nrofTriesDiffCodeTrans_8=parseInt(t.toString(16))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"verifyCode",{get:function(){if(n.isUndefined(this._verifyCode_32))throw"Empty value";return this._verifyCode_32},set:function(t){if(n.isUndefined(t))throw"Invalid input";if(8*t.length>=Math.pow(2,this.MAX_SIZE_VERIFY_CODE))throw"[verifyCode]: "+8*t.length+" => Out of range (<"+Math.pow(2,this.MAX_SIZE_VERIFY_CODE)+")";this._verifyCode_32=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"authCode",{get:function(){if(n.isUndefined(this._authCode_160))throw"Empty value";return this._authCode_160},set:function(t){if(u.Error.isUndefined(t),8*t.length>=Math.pow(2,this.MAX_SIZE_AUTH_CODE))throw"[authCode]: "+8*t.length+" => Out of range (<"+Math.pow(2,this.MAX_SIZE_AUTH_CODE)+")";this._authCode_160=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"value",{get:function(){return'"body": {"nrofTriesDiffCodeTrans": '+this._nrofTriesDiffCodeTrans_8+', "verifyCoe": "'+this._verifyCode_32+'", "authCode": "'+this._authCode_160+'"}'},enumerable:!0,configurable:!0}),t}();t.UVC=i;var o=function(){return function(){}}();t.SGI=o;var s=function(){return function(){}}();t.SGO=s;var f=function(){return function(){}}();t.UPC=f;var _=function(){return function(){}}();t.FPU=_;var a=function(){return function(){}}();t.UDR=a;var h=function(){return function(){}}();t.AUV=h;var d=function(){return function(){}}();t.ASR=d;var c=function(){return function(){}}();t.ASD=c;var l=function(){return function(){}}();t.ASV=l;var p=function(){return function(){}}();t.SRG=p;var g=function(){return function(){}}();t.SAS=g;var y=function(){return function(){}}();t.SDD=y;var v=function(){return function(){}}();t.SLV=v;var b=function(){return function(){}}();t.RAV=b;var m=function(){return function(){}}();t.RHV=m;var S=function(){return function(){}}();t.HAV=S;var C=function(){return function(){}}();t.SHR=C;var O=function(){return function(){}}();t.HHV=O;var w=function(){return function(){}}();t.KAS=w}(s=t.PROTO_BODY||(t.PROTO_BODY={}));var f=function(){function t(t){this.field1='"msg_type"',this.field2='"msg_length"',this.field3='"endpoint_id"',this.delimeter=" : ",this.seperator=", ",this._type_8=-1,this._length_16=-1,this._eid_24=-1,this._type_8=t._type_8,this._length_16=t._length_16,this._eid_24=t._eid_24}return Object.defineProperty(t.prototype,"value",{get:function(){try{if(this._type_8*this._length_16*this._eid_24<0)throw new RangeError;var t='"header": {';return t+=this.field1+this.delimeter+this._type_8+this.seperator,t+=this.field2+this.delimeter+this._length_16+this.seperator,t+=this.field3+this.delimeter+this._eid_24,t+="}"}catch(t){return t instanceof RangeError?console.log("Invalid value"):console.log("Unexpected error"),""}},enumerable:!0,configurable:!0}),t}();t.PROTO_HEADER=f}(s||(s={}));var _=function(){function t(){}return t.decorators=[{type:e.NgModule,args:[{providers:[{provide:f,useFactory:r}]}]}],t.ctorParameters=function(){return[]},t}();t.AiroundProtocolBuilder=f,t.AiroundProtocolModule=_,Object.defineProperty(t,"__esModule",{value:!0})});
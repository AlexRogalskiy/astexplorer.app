(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{SPmT:function(e,t,r){"use strict";e.exports=Object.assign({},r("SlqM"),r("ot2C"))},SlqM:function(e,t,r){"use strict";var a,n=r("TqRt"),i=n(r("lwsE")),u=n(r("W8MJ")),o=n(r("a1gu")),c=n(r("Nsbk")),l=n(r("7W2i")),p=n(r("oShl"));!function(){var r={float:new RegExp("-?(?=[0-9]*\\.|[0-9]+[eE])(([0-9]+\\.[0-9]*|[0-9]*\\.[0-9]+)([Ee][-+]?[0-9]+)?|[0-9]+[Ee][-+]?[0-9]+)","y"),integer:new RegExp("-?(0([Xx][0-9A-Fa-f]+|[0-7]*)|[1-9][0-9]*)","y"),identifier:new RegExp("[_-]?[A-Za-z][0-9A-Z_a-z-]*","y"),string:new RegExp('"[^"]*"',"y"),whitespace:new RegExp("[\\t\\n\\r ]+","y"),comment:new RegExp("((\\/(\\/.*|\\*([^*]|\\*[^/])*\\*\\/)[\\t\\n\\r ]*)+)","y"),other:new RegExp("[^\\t\\n\\r 0-9A-Za-z]","y")},n=["ByteString","DOMString","USVString"],s=["attribute","callback","const","deleter","dictionary","enum","getter","includes","inherit","interface","iterable","maplike","namespace","partial","required","setlike","setter","static","stringifier","typedef","unrestricted"],m=["-Infinity","FrozenArray","Infinity","NaN","Promise","boolean","byte","double","false","float","implements","legacyiterable","long","mixin","null","octet","optional","or","readonly","record","sequence","short","true","unsigned","void"].concat(s,n),v=["(",")",",","...",":",";","<","=",">","?","[","]","{","}"];var f=function(e){function WebIDLParseError(e,t,r,a){var n;return(0,i.default)(this,WebIDLParseError),(n=(0,o.default)(this,(0,c.default)(WebIDLParseError).call(this,e))).name=n.constructor.name,n.line=t,n.input=r,n.tokens=a,n}return(0,l.default)(WebIDLParseError,e),(0,u.default)(WebIDLParseError,[{key:"toString",value:function toString(){var e=JSON.stringify(this.tokens,null,4);return"".concat(this.message,"\n").concat(e)}}]),WebIDLParseError}((0,p.default)(Error));function _parse(e){var t=1;e=e.slice();var r=new Map,a=null,i="float",u="integer",o="identifier",c="string",l=Object.freeze({type:"operation",special:null,body:null}),p=Object.freeze({generic:null,nullable:null,union:!1,idlType:null,baseName:null,escapedBaseName:null,prefix:null,postfix:null,separator:null,extAttrs:null});function error(r){e[m]&&!probe("eof")&&(t+=count(e[m].trivia,"\n"));var n=function lastLine(e){var t=e.split("\n");return t[t.length-1]}(tokensToText(sliceTokens(-5),{precedes:!0})),i=sliceTokens(5),u=tokensToText(i),o=n+u.split("\n")[0]+"\n"+(" ".repeat(n.length)+"^ "+r),c=a?", since `".concat(a.partial?"partial ":"").concat(a.type," ").concat(a.name,"`"):"",l="Syntax error at line ".concat(t).concat(c,":\n").concat(o);throw new f(l,t,u,i);function sliceTokens(t){return t>0?e.slice(m,m+t):e.slice(Math.max(m+t,0),m)}function tokensToText(t){var r=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).precedes,a=t.map(function(e){return e.trivia+e.value}).join(""),n=e[m];return"eof"===n.type?a:r?a+n.trivia:a.slice(n.trivia.length)}}function sanitize_name(e,t){var a=unescape(e);return r.has(a)&&error('The name "'.concat(a,'" of type "').concat(r.get(a),'" was already seen')),r.set(a,t),a}var m=0;function probe(t){return e.length>m&&e[m].type===t}function consume(){for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];for(var i=0;i<a.length;i++){if(probe(a[i])){var u=e[m];return m++,t+=count(u.trivia,"\n"),u}}}function untyped_consume(){var e=consume.apply(void 0,arguments);if(e)return{value:e.value,trivia:e.trivia}}function unescape(e){return e.startsWith("_")?e.slice(1):e}function unconsume(r){for(;m>r;)t-=count(e[--m].trivia,"\n")}function count(e,t){for(var r=0,a=e.indexOf(t);-1!==a;a=e.indexOf(t,a+1))++r;return r}function primitive_type(){var e=function integer_type(){var e=untyped_consume("unsigned")||null,t=untyped_consume("short","long");if(t){var r=untyped_consume("long")||null;return{idlType:[e,t,r].filter(function(e){return e}).map(function(e){return e.value}).join(" "),prefix:e,postfix:r,baseName:t.value,escapedBaseName:t.value,trivia:{base:t.trivia}}}e&&error("Failed to parse integer type")}()||function float_type(){var e=untyped_consume("unrestricted")||null,t=untyped_consume("float","double");if(t)return{idlType:[e,t].filter(function(e){return e}).map(function(e){return e.value}).join(" "),prefix:e,baseName:t.value,escapedBaseName:t.value,trivia:{base:t.trivia}};e&&error("Failed to parse float type")}();if(e)return e;var t=consume("boolean","byte","octet");return t?{idlType:t.value,baseName:t.value,escapedBaseName:t.value,trivia:{base:t.trivia}}:void 0}function const_value(){var e=consume("true","false","null","Infinity","-Infinity","NaN",i,u);if(e){var t,r=e.trivia;switch(e.type){case"true":case"false":t={type:"boolean",value:"true"===e.type};break;case"Infinity":case"-Infinity":t={type:"Infinity",negative:e.type.startsWith("-")};break;case i:case u:t={type:"number",value:e.value};break;default:t={type:e.type}}return{data:t,trivia:r}}}function type_suffix(e){var t=consume("?");t&&(e.nullable={trivia:t.trivia}),probe("?")&&error("Can't nullable more than once")}function single_type(e){var t=Object.assign({type:e||null},p,{trivia:{}}),r=function generic_type(e){var t=consume("FrozenArray","Promise","sequence","record");if(t){var r={baseName:t.value,escapedBaseName:t.value,generic:{value:t.value,trivia:{}},trivia:{base:t.trivia}},a=consume("<")||error("No opening bracket after ".concat(t.type));switch(r.generic.trivia.open=a.trivia,t.type){case"Promise":probe("[")&&error("Promise type cannot have extended attribute"),r.idlType=[return_type(e)];break;case"sequence":case"FrozenArray":r.idlType=[type_with_extended_attributes(e)];break;case"record":probe("[")&&error("Record key cannot have extended attribute"),r.idlType=[];var i=consume.apply(void 0,n);i||error("Record key must be a string type");var u=untyped_consume(",")||error("Missing comma after record key type");r.idlType.push(Object.assign({type:e},p,{baseName:i.value,escapedBaseName:i.value,idlType:i.value,separator:u,trivia:{base:i.trivia}}));var o=type_with_extended_attributes(e)||error("Error parsing generic type record");r.idlType.push(o)}r.idlType||error("Error parsing generic type ".concat(t.type));var c=consume(">")||error("Missing closing bracket after ".concat(t.type));return r.generic.trivia.close=c.trivia,r}}(e)||primitive_type();if(r)Object.assign(t,r);else{var a=consume.apply(void 0,[o].concat(n));if(!a)return;t.baseName=t.idlType=unescape(a.value),t.escapedBaseName=a.value,t.trivia.base=a.trivia,probe("<")&&error("Unsupported generic type ".concat(a.value))}return t.generic&&"Promise"===t.generic.value&&probe("?")&&error("Promise type cannot be nullable"),type_suffix(t),t.nullable&&"any"===t.idlType&&error("Type `any` cannot be made nullable"),t}function union_type(e){var t=consume("(");if(t){for(var r={open:t.trivia},a=Object.assign({type:e||null},p,{union:!0,idlType:[],trivia:r});;){var n=type_with_extended_attributes()||error("No type after open parenthesis or 'or' in union type");"any"===n.idlType&&error("Type `any` cannot be included in a union type"),a.idlType.push(n);var i=untyped_consume("or");if(!i)break;n.separator=i}a.idlType.length<2&&error("At least two types are expected in a union type but found less");var u=consume(")")||error("Unterminated union type");return r.close=u.trivia,type_suffix(a),a}}function type_with_extended_attributes(e){var t=extended_attrs(),r=single_type(e)||union_type(e);return r&&(r.extAttrs=t),r}function argument(){var e=m,t={optional:null,variadic:null,default:null,trivia:{}},r=consume("optional");if(r&&(t.optional={trivia:r.trivia}),t.idlType=type_with_extended_attributes("argument-type"),t.idlType){if(!t.optional){var a=consume("...");a&&(t.variadic={trivia:a.trivia})}var n=consume.apply(void 0,[o].concat(s));if(n)return t.name=unescape(n.value),t.escapedName=n.value,t.trivia.name=n.trivia,t.optional&&(t.default=default_()||null),t;unconsume(e)}else unconsume(e)}function argument_list(){var e=[],t=argument();if(!t)return e;for(t.separator=untyped_consume(",")||null,e.push(t);t.separator;){var r=argument()||error("Trailing comma in arguments list");if(r.separator=untyped_consume(",")||null,e.push(r),!r.separator)break}return e}function simple_extended_attr(){var e=consume(o);if(e){var t={name:e.trivia},r={name:e.value,signature:null,type:"extended-attribute",rhs:null,trivia:t},a=consume("=");a&&(r.rhs=consume(o,i,u,c),r.rhs&&(r.rhs.trivia={assign:a.trivia,value:r.rhs.trivia}));var n=consume("(");if(n){var l={open:n.trivia};a&&!r.rhs?(l.assign=a.trivia,r.rhs={type:"identifier-list",value:identifiers(),trivia:l}):r.signature={arguments:argument_list(),trivia:l};var p=consume(")")||error("Unexpected token in extended attribute argument list");l.close=p.trivia}return a&&!r.rhs&&error("No right hand side to extended attribute assignment"),r}}function extended_attrs(){var e=consume("[");if(!e)return null;var t={trivia:{open:e.trivia},items:[]},r=simple_extended_attr()||error("Extended attribute with not content");for(r.separator=untyped_consume(",")||null,t.items.push(r);r.separator;){var a=simple_extended_attr()||error("Trailing comma in extended attribute");if(a.separator=untyped_consume(",")||null,t.items.push(a),!a.separator)break}var n=consume("]")||error("No end of extended attribute");return t.trivia.close=n.trivia,t}function default_(){var e=consume("=");if(e){var t={assign:e.trivia},r=const_value();if(r)return t.value=r.trivia,Object.assign(r.data,{trivia:t});var a=consume("[");if(a){var n=consume("]");return n||error("Default sequence value must be empty"),t.open=a.trivia,t.close=n.trivia,{type:"sequence",value:[],trivia:t}}var i=consume(c)||error("No value for default");return t.value=i.trivia,{type:"string",value:i.value.slice(1,-1),trivia:t}}}function const_(){var e=consume("const");if(e){var t={base:e.trivia},r={type:"const"},a=primitive_type();a||(a={idlType:(a=consume(o)||error("No type for const")).value,baseName:a.value,escapedBaseName:a.value,trivia:{base:a.trivia}}),r.idlType=Object.assign({type:"const-type"},p,a),type_suffix(r.idlType);var n=consume(o)||error("No name for const");r.name=n.value,t.name=n.trivia;var i=consume("=")||error("No value assignment for const");t.assign=i.trivia;var u=const_value()||error("No value for const");r.value=u.data,t.value=u.trivia;var c=consume(";")||error("Unterminated const");return t.termination=c.trivia,r.trivia=t,r}}function inheritance(){var e=consume(":");if(e){var t=consume(o)||error("No type in inheritance");return{name:unescape(t.value),escapedName:t.value,trivia:{colon:e.trivia,name:t.trivia}}}}function attribute(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.noInherit,r=void 0!==t&&t,a=e.readonly,n=void 0!==a&&a,i=m,u={type:"attribute",special:null,readonly:null,trivia:{}};r||(u.special=untyped_consume("inherit")||null);var c=consume("readonly");c?u.readonly={trivia:c.trivia}:n&&probe("attribute")&&error("Attributes must be readonly in this context");var l=function attribute_rest(e){var t=consume("attribute");if(!t)return;switch(e.trivia.base=t.trivia,e.idlType=type_with_extended_attributes("attribute-type")||error("No type in attribute"),e.idlType.generic&&e.idlType.generic.value){case"sequence":case"record":error("Attributes cannot accept ".concat(e.idlType.generic.value," types"))}var r=consume(o,"required")||error("No name in attribute");e.name=unescape(r.value),e.escapedName=r.value,e.trivia.name=r.trivia;var a=consume(";")||error("Unterminated attribute");return e.trivia.termination=a.trivia,e}(u);return l||unconsume(i),l}function return_type(e){var t=function type(e){return single_type(e)||union_type(e)}(e||"return-type");if(t)return t;var r=consume("void");return r?Object.assign({type:"return-type"},p,{idlType:"void",baseName:"void",escapedBaseName:"void",trivia:{base:r.trivia}}):void 0}function operation(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).regular,t=void 0!==e&&e,r=Object.assign({},l,{body:{}});return t||(r.special=untyped_consume("getter","setter","deleter")||null),r.body.idlType=return_type()||error("Missing return type"),function operation_rest(e){var t=e.body;t.trivia={};var r=consume(o);t.name=r?{value:unescape(r.value),escaped:r.value,trivia:r.trivia}:null;var a=consume("(")||error("Invalid operation");t.trivia.open=a.trivia,t.arguments=argument_list();var n=consume(")")||error("Unterminated operation");t.trivia.close=n.trivia;var i=consume(";")||error("Unterminated operation");return e.trivia={termination:i.trivia},e}(r),r}function static_member(){var e=untyped_consume("static");if(e){var t=attribute({noInherit:!0})||operation({regular:!0})||error("No body in static member");return t.special=e,t}}function stringifier(){var e=untyped_consume("stringifier");if(e){var t=consume(";");if(t)return Object.assign({},l,{special:e,trivia:{termination:t.trivia}});var r=attribute({noInherit:!0})||operation({regular:!0})||error("Unterminated stringifier");return r.special=e,r}}function identifiers(){var e=[],t=untyped_consume(o)||error("Expected identifiers but none found");for(t.separator=untyped_consume(",")||null,e.push(t);t.separator;){var r=untyped_consume(o)||error("Trailing comma in identifiers list");if(r.separator=untyped_consume(",")||null,e.push(r),!r.separator)break}return e}function iterable_type(){return consume("iterable","maplike","setlike")}function readonly_iterable_type(){return consume("maplike","setlike")}function iterable(){var e=m,t={type:null,idlType:null,readonly:null,trivia:{}},r=consume("readonly");r&&(t.readonly={trivia:r.trivia});var a=(t.readonly?readonly_iterable_type:iterable_type)();if(a){t.trivia.base=a.trivia;var n="maplike"===a.value,i=n||"iterable"===a.value;t.type=a.value,"maplike"!==t.type&&"setlike"!==t.type&&delete t.readonly;var u=consume("<")||error("Error parsing ".concat(a.value," declaration"));t.trivia.open=u.trivia;var o=type_with_extended_attributes()||error("Error parsing ".concat(a.value," declaration"));t.idlType=[o],i&&(o.separator=untyped_consume(",")||null,o.separator?t.idlType.push(type_with_extended_attributes()):n&&error("Missing second type argument in ".concat(a.value," declaration")));var c=consume(">")||error("Unterminated ".concat(a.value," declaration"));t.trivia.close=c.trivia;var l=consume(";")||error("Missing semicolon after ".concat(a.value," declaration"));return t.trivia.termination=l.trivia,t}unconsume(e)}function interface_rest(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.typeName,r=void 0===t?"interface":t,n=e.partialModifier,i=void 0===n?null:n,u=consume(o)||error("No name for interface"),c={base:null,name:u.trivia},l=a={type:r,name:i?u.value:sanitize_name(u.value,"interface"),escapedName:u.value,partial:i,members:[],trivia:c};i||(l.inheritance=inheritance()||null);var p=consume("{")||error("Bodyless interface");for(c.open=p.trivia;;){var s=consume("}");if(s){c.close=s.trivia;var m=consume(";")||error("Missing semicolon after interface");return c.termination=m.trivia,l}var v=extended_attrs(),f=const_()||static_member()||stringifier()||iterable()||attribute()||operation()||error("Unknown member");f.extAttrs=v,l.members.push(f)}}function interface_(e){var t=consume("interface");if(t){var r=function mixin_rest(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).partialModifier,t=void 0===e?null:e,r=consume("mixin");if(r){var n={base:null,mixin:r.trivia},i=consume(o)||error("No name for interface mixin");n.name=i.trivia;var u=a={type:"interface mixin",name:t?i.value:sanitize_name(i.value,"interface mixin"),escapedName:i.value,partial:t,members:[],trivia:n},c=consume("{")||error("Bodyless interface mixin");for(n.open=c.trivia;;){var l=consume("}");if(l){n.close=l.trivia;var p=consume(";")||error("Missing semicolon after interface mixin");return n.termination=p.trivia,u}var s=extended_attrs(),m=const_()||stringifier()||attribute({noInherit:!0})||operation({regular:!0})||error("Unknown member");m.extAttrs=s,u.members.push(m)}}}(e)||interface_rest(e)||error("Interface has no proper body");return r.trivia.base=t.trivia,r}}function namespace(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).partialModifier,t=void 0===e?null:e,r=consume("namespace");if(r){var n={base:r.trivia},i=consume(o)||error("No name for namespace");n.name=i.trivia;var u=a={type:"namespace",name:t?i.value:sanitize_name(i.value,"namespace"),escapedName:i.value,partial:t,members:[],trivia:n},c=consume("{")||error("Bodyless namespace");for(n.open=c.trivia;;){var l=consume("}");if(l){n.close=l.trivia;var p=consume(";")||error("Missing semicolon after namespace");return n.termination=p.trivia,u}var s=extended_attrs(),m=attribute({noInherit:!0,readonly:!0})||operation({regular:!0})||error("Unknown member");m.extAttrs=s,u.members.push(m)}}}function dictionary(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).partialModifier,t=void 0===e?null:e,r=consume("dictionary");if(r){var n={base:r.trivia},i=consume(o)||error("No name for dictionary");n.name=i.trivia;var u=a={type:"dictionary",name:t?i.value:sanitize_name(i.value,"dictionary"),escapedName:i.value,partial:t,members:[],trivia:n};t||(u.inheritance=inheritance()||null);var c=consume("{")||error("Bodyless dictionary");for(n.open=c.trivia;;){var l=consume("}");if(l){n.close=l.trivia;var p=consume(";")||error("Missing semicolon after dictionary");return n.termination=p.trivia,u}var s=extended_attrs(),m=consume("required"),v=type_with_extended_attributes("dictionary-type")||error("No type for dictionary member"),f=consume(o)||error("No name for dictionary member"),d=default_()||null;m&&d&&error("Required member must not have a default");var b={type:"field",name:unescape(f.value),escapedName:f.value,required:m?{trivia:m.trivia}:null,idlType:v,extAttrs:s,default:d,trivia:{name:f.trivia}};u.members.push(b);var _=consume(";")||error("Unterminated dictionary member");b.trivia.termination=_.trivia}}}function definition(){return function callback(){var e,t=consume("callback");if(t){var r=consume("interface");if(r)return(e=interface_rest({typeName:"callback interface"})).trivia.callback=t.trivia,e.trivia.base=r.trivia,e;var n={base:t.trivia},i=consume(o)||error("No name for callback");n.name=i.trivia,e=a={type:"callback",name:sanitize_name(i.value,"callback")};var u=consume("=")||error("No assignment in callback");n.assign=u.trivia,e.idlType=return_type()||error("Missing return type");var c=consume("(")||error("No arguments in callback");n.open=c.trivia,e.arguments=argument_list();var l=consume(")")||error("Unterminated callback");n.close=l.trivia;var p=consume(";")||error("Unterminated callback");return n.termination=p.trivia,e.trivia=n,e}}()||interface_()||function partial(){var e=consume("partial");if(e){var t={trivia:e.trivia};return dictionary({partialModifier:t})||interface_({partialModifier:t})||namespace({partialModifier:t})||error("Partial doesn't apply to anything")}}()||dictionary()||function enum_(){var e=consume("enum");if(e){var t={base:e.trivia},r=consume(o)||error("No name for enum");t.name=r.trivia;var n=a={type:"enum",name:sanitize_name(r.value,"enum"),escapedName:r.value,values:[],trivia:t},i=consume("{")||error("Bodyless enum");t.open=i.trivia;for(var u=!0;;){var l=consume("}");if(l){t.close=l.trivia,n.values.length||error("No value in enum");var p=consume(";")||error("No semicolon after enum");return t.termination=p.trivia,n}u||error("No comma between enum values");var s=consume(c)||error("Unexpected value in enum"),m=untyped_consume(",")||null;n.values.push({type:"enum-value",value:s.value.slice(1,-1),trivia:s.trivia,separator:m}),u=!!m}}}()||function typedef(){var e=consume("typedef");if(e){var t={base:e.trivia},r={type:"typedef"};r.idlType=type_with_extended_attributes("typedef-type")||error("No type in typedef");var n=consume(o)||error("No name in typedef");r.name=sanitize_name(n.value,"typedef"),r.escapedName=n.value,t.name=n.trivia,a=r;var i=consume(";")||error("Unterminated typedef");return t.termination=i.trivia,r.trivia=t,r}}()||function includes(){var e=m,t=consume(o);if(t){var r={target:t.trivia},a=consume("includes");if(a){r.includes=a.trivia;var n={type:"includes",target:unescape(t.value),escapedTarget:t.value},i=consume(o)||error("Incomplete includes statement");r.mixin=i.trivia,n.includes=unescape(i.value),n.escapedIncludes=i.value,n.trivia=r;var u=consume(";")||error("No terminating ; for includes statement");return r.termination=u.trivia,n}unconsume(e)}}()||namespace()}var v=function definitions(){if(!e.length)return[];for(var t=[];;){var r=extended_attrs(),a=definition();if(!a){r&&error("Stray extended attributes");break}a.extAttrs=r,t.push(a)}return t.push(consume("eof")),t}();return m<e.length&&error("Unrecognised tokens"),v}var d={parse:function parse(e){return _parse(function tokenise(e){for(var t=[],a=0,n="";a<e.length;){var i=e.charAt(a),u=-1;if(/[\t\n\r ]/.test(i)?u=attemptTokenMatch("whitespace",{noFlushTrivia:!0}):"/"===i&&(u=attemptTokenMatch("comment",{noFlushTrivia:!0})),-1!==u)n+=t.pop().value;else if(/[-0-9.A-Z_a-z]/.test(i)){if(-1===(u=attemptTokenMatch("float"))&&(u=attemptTokenMatch("integer")),-1===u){u=attemptTokenMatch("identifier");var o=t[t.length-1];-1!==u&&m.includes(o.value)&&(o.type=o.value)}}else'"'===i&&(u=attemptTokenMatch("string"));for(var c=0;c<v.length;c++){var l=v[c];if(e.startsWith(l,a)){t.push({type:l,value:l,trivia:n}),n="",u=a+=l.length;break}}if(-1===u&&(u=attemptTokenMatch("other")),-1===u)throw new Error("Token stream not progressing");a=u}return t.push({type:"eof",value:"",trivia:n}),t;function attemptTokenMatch(i){var u=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).noFlushTrivia,o=r[i];o.lastIndex=a;var c=o.exec(e);return c?(t.push({type:i,value:c[0],trivia:n}),u||(n=""),o.lastIndex):-1}}(e))}};void 0!==e.exports?e.exports=d:void 0===(a=function(){return d}.apply(t,[]))||(e.exports=a)}()},VkAN:function(e,t){e.exports=function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}},oShl:function(e,t,r){var a=r("Nsbk"),n=r("SksO"),i=r("xfeJ"),u=r("sXyB");function _wrapNativeSuper(t){var r="function"==typeof Map?new Map:void 0;return e.exports=_wrapNativeSuper=function _wrapNativeSuper(e){if(null===e||!i(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(e))return r.get(e);r.set(e,Wrapper)}function Wrapper(){return u(e,arguments,a(this).constructor)}return Wrapper.prototype=Object.create(e.prototype,{constructor:{value:Wrapper,enumerable:!1,writable:!0,configurable:!0}}),n(Wrapper,e)},_wrapNativeSuper(t)}e.exports=_wrapNativeSuper},ot2C:function(e,t,r){"use strict";var a,n=r("TqRt"),i=n(r("VkAN")),u=n(r("RIqP"));function _templateObject48(){var e=(0,i.default)(["","callback",""]);return _templateObject48=function _templateObject48(){return e},e}function _templateObject47(){var e=(0,i.default)(["","","","","",";"]);return _templateObject47=function _templateObject47(){return e},e}function _templateObject46(){var e=(0,i.default)(["","<","",">"]);return _templateObject46=function _templateObject46(){return e},e}function _templateObject45(){var e=(0,i.default)(['"','"']);return _templateObject45=function _templateObject45(){return e},e}function _templateObject44(){var e=(0,i.default)(["","","",""]);return _templateObject44=function _templateObject44(){return e},e}function _templateObject43(){var e=(0,i.default)(["","","enum","","",""]);return _templateObject43=function _templateObject43(){return e},e}function _templateObject42(){var e=(0,i.default)(["","","","=","",";"]);return _templateObject42=function _templateObject42(){return e},e}function _templateObject41(){var e=(0,i.default)(["","","(","",")"]);return _templateObject41=function _templateObject41(){return e},e}function _templateObject40(){var e=(0,i.default)(["","callback","",""]);return _templateObject40=function _templateObject40(){return e},e}function _templateObject39(){var e=(0,i.default)(["","","","","includes","","",";"]);return _templateObject39=function _templateObject39(){return e},e}function _templateObject38(){var e=(0,i.default)(["","","",";"]);return _templateObject38=function _templateObject38(){return e},e}function _templateObject37(){var e=(0,i.default)(["","","","",";"]);return _templateObject37=function _templateObject37(){return e},e}function _templateObject36(){var e=(0,i.default)(["","=","",""]);return _templateObject36=function _templateObject36(){return e},e}function _templateObject35(){var e=(0,i.default)(["","","","","",";"]);return _templateObject35=function _templateObject35(){return e},e}function _templateObject34(){var e=(0,i.default)(["","","",""]);return _templateObject34=function _templateObject34(){return e},e}function _templateObject33(){var e=(0,i.default)(["","","","",""]);return _templateObject33=function _templateObject33(){return e},e}function _templateObject32(){var e=(0,i.default)(["","interface","mixin","",""]);return _templateObject32=function _templateObject32(){return e},e}function _templateObject31(){var e=(0,i.default)(["","{","","}",";"]);return _templateObject31=function _templateObject31(){return e},e}function _templateObject30(){var e=(0,i.default)(["","","","","",""]);return _templateObject30=function _templateObject30(){return e},e}function _templateObject29(){var e=(0,i.default)(["","","","",""]);return _templateObject29=function _templateObject29(){return e},e}function _templateObject28(){var e=(0,i.default)(["",":","",""]);return _templateObject28=function _templateObject28(){return e},e}function _templateObject27(){var e=(0,i.default)(["","","","","",""]);return _templateObject27=function _templateObject27(){return e},e}function _templateObject26(){var e=(0,i.default)(["","","",";"]);return _templateObject26=function _templateObject26(){return e},e}function _templateObject25(){var e=(0,i.default)(["","","",""]);return _templateObject25=function _templateObject25(){return e},e}function _templateObject24(){var e=(0,i.default)(["","","","",";"]);return _templateObject24=function _templateObject24(){return e},e}function _templateObject23(){var e=(0,i.default)(["","","",""]);return _templateObject23=function _templateObject23(){return e},e}function _templateObject22(){var e=(0,i.default)(["","(","",")"]);return _templateObject22=function _templateObject22(){return e},e}function _templateObject21(){var e=(0,i.default)(["","[","","]"]);return _templateObject21=function _templateObject21(){return e},e}function _templateObject20(){var e=(0,i.default)(["","","",""]);return _templateObject20=function _templateObject20(){return e},e}function _templateObject19(){var e=(0,i.default)(["","","",""]);return _templateObject19=function _templateObject19(){return e},e}function _templateObject18(){var e=(0,i.default)(["","(","",")"]);return _templateObject18=function _templateObject18(){return e},e}function _templateObject17(){var e=(0,i.default)(["","=","",""]);return _templateObject17=function _templateObject17(){return e},e}function _templateObject16(){var e=(0,i.default)(["","=","(","",")"]);return _templateObject16=function _templateObject16(){return e},e}function _templateObject15(){var e=(0,i.default)(["","","",""]);return _templateObject15=function _templateObject15(){return e},e}function _templateObject14(){var e=(0,i.default)(["","","","","","","",""]);return _templateObject14=function _templateObject14(){return e},e}function _templateObject13(){var e=(0,i.default)(["","",""]);return _templateObject13=function _templateObject13(){return e},e}function _templateObject12(){var e=(0,i.default)(["","","",""]);return _templateObject12=function _templateObject12(){return e},e}function _templateObject11(){var e=(0,i.default)(["","","[","]"]);return _templateObject11=function _templateObject11(){return e},e}function _templateObject10(){var e=(0,i.default)(["","="]);return _templateObject10=function _templateObject10(){return e},e}function _templateObject9(){var e=(0,i.default)(["","","","",""]);return _templateObject9=function _templateObject9(){return e},e}function _templateObject8(){var e=(0,i.default)(["","",""]);return _templateObject8=function _templateObject8(){return e},e}function _templateObject7(){var e=(0,i.default)(["","","",""]);return _templateObject7=function _templateObject7(){return e},e}function _templateObject6(){var e=(0,i.default)(["","",""]);return _templateObject6=function _templateObject6(){return e},e}function _templateObject5(){var e=(0,i.default)(["","",""]);return _templateObject5=function _templateObject5(){return e},e}function _templateObject4(){var e=(0,i.default)(["","","<","",">"]);return _templateObject4=function _templateObject4(){return e},e}function _templateObject3(){var e=(0,i.default)(["","",""]);return _templateObject3=function _templateObject3(){return e},e}function _templateObject2(){var e=(0,i.default)(["","(","",")"]);return _templateObject2=function _templateObject2(){return e},e}function _templateObject(){var e=(0,i.default)(["","",""]);return _templateObject=function _templateObject(){return e},e}!function(){function noop(e){return e}var r={wrap:function wrap(e){return e.join("")},trivia:noop,name:noop,reference:noop,type:noop,valueLiteral:noop,inheritance:noop,definition:noop,extendedAttribute:noop,extendedAttributeReference:noop};var n={write:function write(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).templates,a=void 0===t?r:t;function wrap(e){for(var t,r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return a.wrap((t=[]).concat.apply(t,(0,u.default)(e.map(function(e,t){return[e,n[t]||""]}))))}function reference(e,t){return a.reference(e,t||e)}function extract_trivia(e){var t={};for(var r in e.trivia)t[r]=a.trivia(e.trivia[r]);return t}function token(e,t){return e?wrap(_templateObject(),a.trivia(e.trivia),t||e.value):""}function type(e){var t=extended_attributes(e.extAttrs),r=function type_body(e){var t=extract_trivia(e);if(e.union){var r=a.wrap(e.idlType.map(type));return wrap(_templateObject2(),t.open,r,t.close)}if(e.generic){var n=wrap(_templateObject3(),t.base,reference(e.generic.value)),i=a.wrap(e.idlType.map(type)),u=extract_trivia(e.generic);return wrap(_templateObject4(),n,u.open,i,u.close)}if(!e.prefix&&!e.postfix)return wrap(_templateObject5(),t.base,reference(e.escapedBaseName,e.baseName));var o=e.prefix?a.trivia(e.prefix.trivia):t.base,c=e.prefix?wrap(_templateObject6(),e.prefix.value,t.base):"",l=reference(wrap(_templateObject7(),c,e.baseName,token(e.postfix)),e.idlType);return wrap(_templateObject8(),o,l)}(e),n=token(e.nullable,"?"),i=token(e.separator);return wrap(_templateObject9(),t,r,n,i)}function const_value(e){var t=e.type;return"boolean"===t?e.value?"true":"false":"null"===t?"null":"Infinity"===t?(e.negative?"-":"")+"Infinity":"NaN"===t?"NaN":"number"===t?e.value:'"'.concat(e.value,'"')}function default_(e,t){if(!e)return"";var r=extract_trivia(e),n=wrap(_templateObject10(),r.assign);return"sequence"===e.type?wrap(_templateObject11(),n,r.open,r.close):wrap(_templateObject12(),n,r.value,a.valueLiteral(const_value(e),t))}function argument(e){var t=extended_attributes(e.extAttrs),r=token(e.optional,"optional"),n=a.type(type(e.idlType)),i=token(e.variadic,"..."),u=wrap(_templateObject13(),a.trivia(e.trivia.name),a.name(e.escapedName,{data:e})),o=default_(e.default,e),c=token(e.separator);return wrap(_templateObject14(),t,r,n,i,u,o,c)}function identifier(e){return wrap(_templateObject15(),a.trivia(e.trivia),reference(e.value),token(e.separator))}function make_ext_at(e){var t=a.extendedAttributeReference(e.name),r="";if(e.rhs){var n=extract_trivia(e.rhs);r="identifier-list"===e.rhs.type?wrap(_templateObject16(),n.assign,n.open,a.wrap(e.rhs.value.map(identifier)),n.close):wrap(_templateObject17(),n.assign,n.value,reference(e.rhs.value))}var i=e.signature?wrap(_templateObject18(),a.trivia(e.signature.trivia.open),a.wrap(e.signature.arguments.map(argument)),a.trivia(e.signature.trivia.close)):"",u=token(e.separator);return wrap(_templateObject19(),a.trivia(e.trivia.name),a.extendedAttribute(wrap(_templateObject20(),t,r,i)),u)}function extended_attributes(e){if(!e)return"";var t=a.wrap(e.items.map(make_ext_at)),r=extract_trivia(e);return wrap(_templateObject21(),r.open,t,r.close)}function typed_head(e,t,r){return wrap(_templateObject27(),e.base,t.type,a.type(type(t.idlType)),e.name,r)}function container(e){return function(t){var r=extract_trivia(t),n=extended_attributes(t.extAttrs),i=token(t.partial,"partial"),u=a.name(t.escapedName,{data:t}),o=wrap(_templateObject29(),r.base,e,r.name,u),c=function inheritance(e){if(!e)return"";var t=extract_trivia(e);return wrap(_templateObject28(),t.colon,t.name,a.inheritance(reference(e.escapedName,e.name)))}(t.inheritance),l=brace_body(r,iterate(t.members,t));return a.definition(wrap(_templateObject30(),n,i,o,c,l),{data:t})}}function brace_body(e,t){return wrap(_templateObject31(),e.open,t,e.close,e.termination)}function iterable_like(e,t){var r=extract_trivia(e),n=token(e.readonly,"readonly"),i=wrap(_templateObject46(),r.open,a.wrap(e.idlType.map(type)),r.close);return a.definition(wrap(_templateObject47(),n,r.base,e.type,i,r.termination),{data:e,parent:t})}a=Object.assign({},r,a);var n={interface:container("interface"),"interface mixin":function interface_mixin(e){var t=extract_trivia(e),r=extended_attributes(e.extAttrs),n=token(e.partial,"partial"),i=a.name(e.escapedName,{data:e}),u=wrap(_templateObject32(),t.base,t.mixin,t.name,i),o=brace_body(t,iterate(e.members,e));return a.definition(wrap(_templateObject33(),r,n,u,o),{data:e})},namespace:container("namespace"),operation:function operation(e,t){var r=extended_attributes(e.extAttrs),n=token(e.special),i="";if(e.body){var u=e.body,o=extract_trivia(e.body),c=a.type(type(u.idlType)),l=u.name?token(u.name,a.name(u.name.escaped,{data:e,parent:t})):"",p=wrap(_templateObject22(),o.open,a.wrap(u.arguments.map(argument)),o.close);i=wrap(_templateObject23(),c,l,p)}return a.definition(wrap(_templateObject24(),r,n,i,a.trivia(e.trivia.termination)),{data:e,parent:t})},attribute:function attribute(e,t){var r=extended_attributes(e.extAttrs),n=token(e.special),i=token(e.readonly,"readonly"),u=wrap(_templateObject25(),r,n,i),o=a.name(e.escapedName,{data:e,parent:t}),c=extract_trivia(e);return a.definition(wrap(_templateObject26(),u,typed_head(c,e,o),c.termination),{data:e,parent:t})},dictionary:container("dictionary"),field:function field(e,t){var r=extract_trivia(e),n=extended_attributes(e.extAttrs),i=token(e.required,"required"),u=a.name(e.escapedName,{data:e,parent:t}),o=wrap(_templateObject34(),a.type(type(e.idlType)),r.name,u),c=default_(e.default,e);return a.definition(wrap(_templateObject35(),n,i,o,c,r.termination),{data:e,parent:t})},const:function const_(e,t){var r=extract_trivia(e),n=extended_attributes(e.extAttrs),i=typed_head(r,e,a.name(e.name,{data:e,parent:t})),u=wrap(_templateObject36(),r.assign,r.value,a.valueLiteral(const_value(e.value),e));return a.definition(wrap(_templateObject37(),n,i,u,r.termination),{data:e,parent:t})},typedef:function typedef(e){var t=extract_trivia(e),r=extended_attributes(e.extAttrs),n=a.name(e.escapedName,{data:e});return a.definition(wrap(_templateObject38(),r,typed_head(t,e,n),t.termination),{data:e})},includes:function includes(e){var t=extract_trivia(e),r=extended_attributes(e.extAttrs),n=reference(e.escapedTarget,e.target),i=reference(e.escapedIncludes,e.includes);return a.definition(wrap(_templateObject39(),r,t.target,n,t.includes,t.mixin,i,t.termination),{data:e})},callback:function callback(e){var t=extract_trivia(e),r=extended_attributes(e.extAttrs),n=a.name(e.name,{data:e}),i=wrap(_templateObject40(),t.base,t.name,n),u=a.wrap(e.arguments.map(argument)),o=wrap(_templateObject41(),a.type(type(e.idlType)),t.open,u,t.close);return a.definition(wrap(_templateObject42(),r,i,t.assign,o,t.termination),{data:e})},enum:function enum_(e){var t=extract_trivia(e),r=extended_attributes(e.extAttrs),n=a.name(e.escapedName,{data:e}),i=iterate(e.values,e);return a.definition(wrap(_templateObject43(),r,t.base,t.name,n,brace_body(t,i)),{data:e})},"enum-value":function enum_value(e,t){return wrap(_templateObject44(),a.trivia(e.trivia),a.definition(wrap(_templateObject45(),a.name(e.value,{data:e,parent:t})),{data:e,parent:t}),token(e.separator))},iterable:iterable_like,legacyiterable:iterable_like,maplike:iterable_like,setlike:iterable_like,"callback interface":function callbackInterface(e){return a.definition(wrap(_templateObject48(),a.trivia(e.trivia.callback),container("interface")(e)),{data:e})},eof:function eof(e){return a.trivia(e.trivia)}};function iterate(e,t){if(e){var r=e.map(function(e){return function dispatch(e,t){if(!n[e.type])throw new Error('Type "'.concat(e.type,'" is unsupported'));return n[e.type](e,t)}(e,t)});return a.wrap(r)}}return iterate(e)}};void 0!==e.exports?e.exports=n:void 0===(a=function(){return n}.apply(t,[]))||(e.exports=a)}()},sXyB:function(e,t,r){var a=r("SksO");function _construct(t,r,n){return!function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?e.exports=_construct=function _construct(e,t,r){var n=[null];n.push.apply(n,t);var i=new(Function.bind.apply(e,n));return r&&a(i,r.prototype),i}:e.exports=_construct=Reflect.construct,_construct.apply(null,arguments)}e.exports=_construct},xfeJ:function(e,t){e.exports=function _isNativeFunction(e){return-1!==Function.toString.call(e).indexOf("[native code]")}}}]);
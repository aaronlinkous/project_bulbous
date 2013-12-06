function Class(obj,args){for(var key in ClassFn){this[key]=ClassFn[key]}for(key in obj){this[key]=obj[key]}try{if(typeof(this.construct)=="function"){this.construct.apply(this,args)}}catch(err){}}ClassFn={merge:function(obj){for(var key in obj){this[key]=obj[key]}}};
function Extend(obj1,obj2){var o=obj2;for(var key in obj1){o[key]=obj1[key]}return o}
/**************************************************/
/*                 GLOBAL LOGIC                   */
/**************************************************/
var MasterClass = {
	pagetype: 0,
	_init:function () {
		var classname = typeof(this);
		$(document).ready(function(){
			typeof builder.ready=='function' ? builder.ready() : builder._ready();
		});
	},
	_ready:function() {
		if(builder.master_readied) return;
		builder.masterReady=true;
	}
};
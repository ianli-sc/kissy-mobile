KISSY.add("mobile/bottom-box/1.0/index",function(c,f){function d(b,a){if(this instanceof d)this.con=c.one(b),d.superclass.constructor.call(this,a),this.init();else return new d(b,a)}d.ATTRS={id:{value:"BB-Wrapper-"+c.now()},zIndex:{value:1E3},duration:{value:0.2},container:{setter:function(b){return c.one(b)},value:null},className:{value:""},modalOpacity:{value:0.6},modalFade:{value:!0}};c.extend(d,c.Base,{init:function(){this.id=this.get("id");this.zIndex=this.get("zIndex");this.duration=this.get("duration");
this.className=this.get("className");this.container=this.get("container");this.modalOpacity=this.get("modalOpacity");this.modalFade=this.get("modalFade");this.con=c.Node('<div id="'+this.id+'" class="'+this.className+'"></div>');this.con.css({display:"none"}).appendTo("body");this.initMask()},initMask:function(){this.mask=new f({opacity:this.modalOpacity,fade:this.modalFade})},destroy:function(){},doAnimIn:function(b){var a=this,d=b.height(),e=a.con;e.css({display:"block",width:window.innerWidth+
"px",height:d+"px",position:"fixed","z-index":a.zIndex,top:window.innerHeight+"px"});b.css({display:"block"});c.Anim(e,{top:window.innerHeight-d+"px"},a.duration,"easeIn",function(){a.fire("boxShow",{container:b})}).run()},doAnimOut:function(){var b=this,a=b.con;c.Anim(a,{top:window.innerHeight+"px"},b.duration,"none",function(){b.fire("boxHide",{container:b.container});a.css({display:"none"});b.container.css({display:"none"})}).run()},hide:function(){this.doAnimOut();this.mask.masked()&&this.mask.removeMask()},
show:function(b){var a=this,d=a.con;if(!a.isShow()){if(c.isUndefined(b)){if(c.isUndefined(a.container))throw"\u5bb9\u5668\u672a\u5b9a\u4e49,\u8bf7\u4f20\u5165\u53c2\u6570:show(container)";b=a.container}b=c.one(b);c.isUndefined(a.container)||c.isNull(a.container)?a.container=b:a.container!==b&&(a.container.css({display:"none"}).appendTo("body"),a.container=b);b.parent()!==d&&d.append(b);a.doAnimIn(b);a.mask.addMask();a.mask.getMask().on("click",function(){a.hide();a.mask.removeMask()})}},isShow:function(){return"block"==this.con.css("display")?!0:
!1}});return d},{requires:["mobile/simple-mask/1.0/","base","node"]});

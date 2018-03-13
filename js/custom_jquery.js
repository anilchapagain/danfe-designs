(function(c){function g(b,a){this.element=b;this.options=c.extend({},h,a);c(this.element).data("max-height",this.options.maxHeight);c(this.element).data("height-margin",this.options.heightMargin);delete this.options.maxHeight;if(this.options.embedCSS&&!k){var d=".readmore-js-toggle, .readmore-js-section { "+this.options.sectionCSS+" } .readmore-js-section { overflow: hidden; }",e=document.createElement("style");e.type="text/css";e.styleSheet?e.styleSheet.cssText=d:e.appendChild(document.createTextNode(d));
document.getElementsByTagName("head")[0].appendChild(e);k=!0}this._defaults=h;this._name=f;this.init()}var f="readmore",h={speed:500,maxHeight:200,heightMargin:16,moreLink:'<a href="#">expand +</a>',lessLink:'<a href="#">collapse -</a>',embedCSS:!0,sectionCSS:"display: block; width: 100%;",startOpen:!1,expandedClass:"readmore-js-expanded",collapsedClass:"readmore-js-collapsed",beforeToggle:function(){},afterToggle:function(){}},k=!1;g.prototype={init:function(){var b=this;c(this.element).each(function(){var a=
c(this),d=a.css("max-height").replace(/[^-\d\.]/g,"")>a.data("max-height")?a.css("max-height").replace(/[^-\d\.]/g,""):a.data("max-height"),e=a.data("height-margin");"none"!=a.css("max-height")&&a.css("max-height","none");b.setBoxHeight(a);if(a.outerHeight(!0)<=d+e)return!0;a.addClass("readmore-js-section "+b.options.collapsedClass).data("collapsedHeight",d);a.after(c(b.options.startOpen?b.options.lessLink:b.options.moreLink).on("click",function(c){b.toggleSlider(this,a,c)}).addClass("readmore-js-toggle"));
b.options.startOpen||a.css({height:d})});c(window).on("resize",function(a){b.resizeBoxes()})},toggleSlider:function(b,a,d){d.preventDefault();var e=this;d=newLink=sectionClass="";var f=!1;d=c(a).data("collapsedHeight");c(a).height()<=d?(d=c(a).data("expandedHeight")+"px",newLink="lessLink",f=!0,sectionClass=e.options.expandedClass):(newLink="moreLink",sectionClass=e.options.collapsedClass);e.options.beforeToggle(b,a,f);c(a).animate({height:d},{duration:e.options.speed,complete:function(){e.options.afterToggle(b,
a,f);c(b).replaceWith(c(e.options[newLink]).on("click",function(b){e.toggleSlider(this,a,b)}).addClass("readmore-js-toggle"));c(this).removeClass(e.options.collapsedClass+" "+e.options.expandedClass).addClass(sectionClass)}})},setBoxHeight:function(b){var a=b.clone().css({height:"auto",width:b.width(),overflow:"hidden"}).insertAfter(b),c=a.outerHeight(!0);a.remove();b.data("expandedHeight",c)},resizeBoxes:function(){var b=this;c(".readmore-js-section").each(function(){var a=c(this);b.setBoxHeight(a);
(a.height()>a.data("expandedHeight")||a.hasClass(b.options.expandedClass)&&a.height()<a.data("expandedHeight"))&&a.css("height",a.data("expandedHeight"))})},destroy:function(){var b=this;c(this.element).each(function(){var a=c(this);a.removeClass("readmore-js-section "+b.options.collapsedClass+" "+b.options.expandedClass).css({"max-height":"",height:"auto"}).next(".readmore-js-toggle").remove();a.removeData()})}};c.fn[f]=function(b){var a=arguments;if(void 0===b||"object"===typeof b)return this.each(function(){if(c.data(this,
"plugin_"+f)){var a=c.data(this,"plugin_"+f);a.destroy.apply(a)}c.data(this,"plugin_"+f,new g(this,b))});if("string"===typeof b&&"_"!==b[0]&&"init"!==b)return this.each(function(){var d=c.data(this,"plugin_"+f);d instanceof g&&"function"===typeof d[b]&&d[b].apply(d,Array.prototype.slice.call(a,1))})}})(jQuery);



$(document).ready(function(){

		$("a.dropdown-toggle").click(function(){
			$(this).parents("li.dropdown").find("ul.dropdown-menu").toggleClass("shownav")
		});

		$("ul.dropdown-menu span.nav_title").click(function(){
			$(this).parents("ul.dropdown-menu li ul").find("ul.nav_list").toggleClass("shownavlist")
		});

		$("li.skype a").tooltip();

		$(".carousel").carousel({
			interval:12E3,pause:"false"
		});

		/*$(".banner .pause").click(function(){
			$(".carousel").carousel("pause");
			$(this).hide();$(".banner .play").show()
		});

		$(".banner .play").click(function(){
			$(".carousel").carousel("cycle");
			$(this).hide();
			$(".banner .pause").show()
		});*/
		
		$(".client_comment").readmore({maxHeight:91});

		$("a#go_top").click(function(){
			$("html, body").animate({
				scrollTop:"0px"
			},
			1E3);
			return!1
		});

		$(window).scroll(function(){
			0<$(document).scrollTop()?$(".header").addClass("small"):$(".header").removeClass("small")
		});

		$(".project_details .selector").append('<span class="arrow arrow_btm icon-down-open"></span>');

		$(".list ul li .selector").append('<span class="arrow arrow_btm icon-down-open"></span>');

		$(".project_details .dropbox").append('<cite class="icon-right-circled"></cite>');

		$("ul.pay_opt li .recalculate").append('<cite><span class="fa fa-refresh"></span></cite>');

		$(".client_login ul li .login").append('<span class="fa fa-arrow-circle-right"></span>');

		$(".package_thumb_cont ul li").click(function(){
			$(this).hasClass("selected")||($(".package_thumb_cont ul li").removeClass("selected"),
				$(".offer_despcription").slideUp(),
				$(this).addClass("selected"),
				$(this).find(".offer_despcription").slideToggle()
			)
		});

		$(function(a){
			$(".package_thumb ul li a").each(function(a){
				a+=1;$(this).click(function(){
					$(".package_thumb ul li a").removeClass("selected");
					$(".tabdetails").fadeOut(100);
					$("#tabCont_"+a).fadeIn(100);
					$(this).addClass("selected");
					return!1
				})
			})
		});

		var b=$(".sections > div"),
		f=$(".order_page_steps ul li"),
		g=f.outerHeight()+0;

		$(window).on("scroll",function(){
			var a=$(this).scrollTop();b.each(function(){
				var c=$(this).offset().top-g,
				h=c+$(this).outerHeight();
				a>=c-130&&a<=h-130&&(
					f.find("a").removeClass("active"),
					b.removeClass("active"),
					$(this).addClass("active"),
					f.find('a[href="#'+$(this).attr("id")+'"]').addClass("active")
				)
			})
		});

		f.find("a").on("click",function(){
			var a=$(this).attr("href");
			$("html, body").animate({
				scrollTop:$(a).offset().top-g
			},500);
			return!1
		});

		var k=$(".header").height();

		if($(".order_page_steps").offset()){
			var l=$(".order_page_steps").offset().top;
			$(window).scroll(function(){
				var a=$(window).scrollTop()+k-35;
				l<a?($(".order_page_steps").addClass("nav-fixed"),
					$(".content .sections").addClass("pad_top")):($(".order_page_steps").removeClass("nav-fixed"),
					$(".content .sections").removeClass("pad_top"))
				})
		}

		$(".firstpane2 li:has(ul) > a").click(function(){
			$(this).toggleClass("selected");
			$(this).parents("li").find("ul").slideToggle();
			return!1
		});

		equalheight=function(a){
			var c=0,b=0,e=[],d;
			$(a).each(function(){
				d=$(this);
				$(d).height("auto");
				topPostion=d.position().top;
				if(b!=topPostion){
					for(currentDiv=0;currentDiv<e.length;currentDiv++)
						e[currentDiv].height(c);e.length=0;b=topPostion;c=d.height();e.push(d)
				}
				else e.push(d),
					c=c<d.height()?d.height():c;

				for(currentDiv=0;currentDiv<e.length;currentDiv++)
					e[currentDiv].height(c)
			})
		};

		$(window).load(function(){
			equalheight("ul.feature_list li, .team_xchop ul li")
		});

		$(window).resize(function(){
			equalheight("ul.feature_list li, .team_xchop ul li")
		});

		$("ul.feature_list li").click(function(){
			if(767>=$(window).width())
				return $(this).toggleClass("selected"),
						$(this).find(".feature_txt p").slideToggle(),
						$(".feature_txt p").addClass("parablock"),!1
		});

		$(".question_list ul.que_list_ul li strong").click(function(){
			$(this).parents("li").toggleClass("selected");
			$(this).parents("li").find("ul.answer").slideToggle()
		});

		$(function(){
			$("ul.package_list li:has(ul) > a").click(function(){
				var a=$(this);
				$(a).parent().find("ul:first").is(":hidden")?(
					$(a).parent().siblings().find("a").removeClass("selected"),
					$(a).parent().parent().find("li ul:visible").slideUp(),
					$(a).addClass("selected"),$(a).parent().find("ul:first").slideDown()
				):(
					$(a).removeClass("selected"),
					$(a).parent().find("ul:first").slideUp()
				);
				return!1
			})
		});

		$(".testimonial_page li").each(function(){
			2<$(this).index()&&$(this).hide()
		});

		$(".testimonial_page a.read_more").live("click",function(){
			var a=$(this).parents(".testimonial_page");
			$(this).hasClass("act")?(
				$(this).removeClass("act").html("<cite>Load More</cite>"),
				a.find(".testimonials_li li").each(function(){
					2<$(this).index()&&$(this).hide()
				})
			):(
				$(this).addClass("act").html("<cite>Show Less</cite>"),
				a.find(".testimonials_li li").fadeIn(500),
				$(".client_comment").readmore({maxHeight:91})
			);
			return!1
		});

		$(".form_list ul li:even").addClass("even");

		$(".form_list ul li:odd").addClass("odd");

		$(".faq_list ul.faq_list_ul li strong").click(function(){
			$(this).parents("li").toggleClass("selected");
			$(this).parents("li").find("ul.answer").slideToggle()
		});

		$(function(){
			$(window).resize(function(){
				$(".equal_height").height($(".ft_lft").height())
			});
			$(window).trigger("resize")
		});
});

$(document).ready(function(){
	$(".project_details .textbox2").focus(function(){
		$(this).addClass("txtactive")
	});

	$(".project_details .textbox2").blur(function(){});

	$(".contactus_wrap .form_list ul li input, .contactus_wrap .form_list textarea").focus(function(){
		$(this).addClass("txtactive")
	});

	$(".contactus_wrap .form_list ul li input, .contactus_wrap .form_list textarea").blur(function(){});

	$(".detail_quote_form ul li .textbox1").focus(function(){
		$(this).addClass("txtactive")
	});

	$(".detail_quote_form ul li .textbox1").blur(function(){});


	var b=window.location.href,b=b.replace(/\s+/g,"");

	console.log(b.length);
});

$(document).ready(function(){
	/*$(".navmenu ul li.dropdown").hover(function(){
		$(".banner, .content, .footer").css("opacity","0.5")
	},

	function(){
		$(".banner, .content, .footer").css("opacity","1")
	});*/

	$(".upload_files a.click_upload").click(function(){
		$(this).toggleClass("selected");
		$(".upload_open").toggleClass("openact");
		$(".upload_open").slideToggle(500);
		return!1
	});
	
	$(".upload_file_bx a.order_tool").tooltip();
});

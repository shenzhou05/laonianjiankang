// JavaScript Document
	//导航搜索
//	$('input.nav-inbox').checkValue({            
//		focusCss: {	
//			color: '#333'
//		},
//		blurCss: {
//			color: '#999'
//		}
//	});	
	$(function(){
		$('.zz-loop').loopSlide({auto: true});	
	})
	//jib-tab
	$('.jib-rec-tab').tab({panelClass: 'jib-item'});
	/*//jib-loop
	$('.loop-slide').loopSlide({ opacity:true, time:4000});*/
	
	//jib-blood-tab
	$('.jib-blood-tab').tab();
	$('.blood-item ').find('.loop-tag:last').removeClass('bor-dash');
	//yy-tab
	$('.yy-tab').tab({type: 'click',panelClass: 'yy-item'});
	//good-yy-tab
	$('.good-yy-tab').tab({type: 'click',panelClass: 'yy-item'});
	//china-tab
	$('.china-tab').tab({panelClass: 'city-item', type:'click'})
	//read-tab
	$('.read-tab').tab({panelClass: 'read-item'});
	//food-tab
	$('.food-tab').tab({panelClass: 'food-item'});
	//diet-tab
	$('.jib-diet-tab').tab({panelClass: 'diet-item'});
	//food-scrool
    var sLength = $('.badfood-list').find('li').length,
        sWidth = sLength * (142 + 10),
        tLength = $('.menu-list').find('li').length,
        tWidth = tLength * (142 + 10);
        
    $('.badfood-list > ul').width(sWidth);
    $('.menu-list > ul').width(tWidth);
	$('.scroll-list').loopScroll({leftButton: '.leftbutton', rightButton: '.rightbutton', auto:false});
	$('.badfood-list').loopScroll({leftButton: '.left-btn', rightButton: '.right-btn', auto:false});
	$('.menu-list').loopScroll({leftButton: '.lt-btn', rightButton: '.rt-btn', auto:false});
	
	
	
	//illness-nav
	$('.illness-list>li').mouseenter(function(){
		$(this).addClass('current').siblings('li').removeClass('current');	
		$(this).find('.illness-item').removeClass('none');
	}).mouseleave(function(){
		$(this).removeClass('current');
		$(this).find('.illness-item').addClass('none');
	});
	
	//peo-model
	$('.zb-tab>span:eq(1)').bind({
	click: function(){
		$(this).addClass('current').siblings('span').removeClass('current');
		$('.modpeo-three').show().siblings('.modpeo-con').hide();	
		}
	});
	$('.zb-tab>span:eq(0)').bind({
	click: function(){
		$(this).addClass('current').siblings('span').removeClass('current');
		$('.modpeo-one').show().siblings('.modpeo-con').hide();	
		}
	});
	
	$('.sex-tab>span:eq(0)').bind({
		click: function(){
			$('.zb-tab>span:eq(1)').removeClass('current').siblings('span').addClass('current');
			$(this).addClass('current').siblings('span').removeClass('current');
			$('.modpeo-one').show().siblings('.modpeo-con').hide();	
			$('.zb-tab>span:eq(0)').bind({
			click: function(){
				$(this).addClass('current').siblings('span').removeClass('current');
				$('.modpeo-one').show().siblings('.modpeo-con').hide();	
				}
			});
			$('.zb-tab>span:eq(1)').bind({
			click: function(){
				$(this).addClass('current').siblings('span').removeClass('current');
				$('.modpeo-three').show().siblings('.modpeo-con').hide();	
				}
			});	
			
		}
	});
	
	$('.sex-tab>span:eq(1)').bind({
		click: function(){
			$('.zb-tab>span:eq(1)').removeClass('current').siblings('span').addClass('current');
			$(this).addClass('current').siblings('span').removeClass('current');
			$('.modpeo-two').show().siblings('.modpeo-con').hide();
			$('.zb-tab>span:eq(0)').bind({
			click: function(){
				$(this).addClass('current').siblings('span').removeClass('current');
				$('.modpeo-two').show().siblings('.modpeo-con').hide();	
				}
			});
			$('.zb-tab>span:eq(1)').bind({
			click: function(){
				$(this).addClass('current').siblings('span').removeClass('current');
				$('.modpeo-four').show().siblings('.modpeo-con').hide();	
				}
			});	
			
		}
	});
	
	
	//man-z
	
	$('.nz-hd').mouseenter(function(){
		$('.mz-hd').show().siblings('div').hide();
		$('.modmz-hd').show().siblings('div').hide();	
	});
	$('.nz-chest').mouseenter(function(){
		$('.mz-chest').show().siblings('div').hide();
		$('.modmz-chest').show().siblings('div').hide();	
	});
	$('.nz-belly').mouseenter(function(){
		$('.mz-belly').show().siblings('div').hide();
		$('.modmz-belly').show().siblings('div').hide();	
	});
	$('.nz-msex').mouseenter(function(){
		$('.mz-msex').show().siblings('div').hide();
		$('.modmz-msex').show().siblings('div').hide();	
	});
	$('.nz-leg').mouseenter(function(){
		$('.mz-leg').show().siblings('div').hide();
		$('.modmz-leg').show().siblings('div').hide();	
	});
	$('.nz-arm').mouseenter(function(){
		$('.mz-larm,.mz-rarm').show().siblings('div:not(.mz-larm,.mz-rarm)').hide();
		$('.modmz-arm').show().siblings('div').hide();	
	});
	//wowen-z
	$('.nv-hd').mouseenter(function(){
		$('.wz-hd').show().siblings('div').hide();
		$('.modwz-hd').show().siblings('div').hide();	
	});
	$('.nv-neck').mouseenter(function(){
		$('.wz-neck').show().siblings('div').hide();
		$('.modwz-neck').show().siblings('div').hide();	
	});
	$('.nv-chest').mouseenter(function(){
		$('.wz-chest3,.wz-chest1,.wz-chest2').show().siblings('div:not(.wz-chest3,.wz-chest1,.wz-chest2)').hide();
		$('.modwz-chest').show().siblings('div').hide();	
	});
	$('.nv-belly').mouseenter(function(){
		$('.wz-belly').show().siblings('div').hide();
		$('.modwz-belly').show().siblings('div').hide();	
	});
	$('.nv-sex').mouseenter(function(){
		$('.wz-msex').show().siblings('div').hide();
		$('.modwz-msex').show().siblings('div').hide();	
	});
	$('.nv-arm').mouseenter(function(){
		$('.wz-larm,.wz-rarm').show().siblings('div:not(.wz-larm,.wz-rarm)').hide();
		$('.modwz-arm').show().siblings('div').hide();	
	});
	$('.nv-leg').mouseenter(function(){
		$('.wz-leg').show().siblings('div').hide();
		$('.modwz-leg').show().siblings('div').hide();	
	});
	//man-b
	$('.nb-waist').mouseenter(function(){
		$('.mb-waist').show().siblings('div').hide();
		$('.modmb-waist').show().siblings('div').hide();	
	});
	$('.nb-buttocks').mouseenter(function(){
		$('.mb-buttocks').show().siblings('div').hide();
		$('.modmb-buttocks').show().siblings('div').hide();	
	})
	$('.nb-skin').mouseenter(function(){
		$('.mb-skin1,.mb-skin2,.mb-skin3,.mb-skin4').show().siblings('.mb-waist,.mb-buttocks').hide();
		$('.modmb-skin').show().siblings('div').hide();	
	});
	//women-b
	$('.nv-waist').mouseenter(function(){
		$('.wb-waist').show().siblings('div').hide();
		$('.modwb-waist').show().siblings('div').hide();	
	});
	$('.nv-buttocks').mouseenter(function(){
		$('.wb-buttocks').show().siblings('div').hide();
		$('.modwb-buttocks').show().siblings('div').hide();	
	})
	$('.nv-skin').mouseenter(function(){
		$('.wb-skin').show().siblings('.wb-waist,.wb-buttocks').hide();
		$('.modwb-skin').show().siblings('div').hide();	
	});
	
    
	//pub-nav
	$('.j-nav').mouseenter(function(){
		$(this).children('.j-nav-menu').show();	
	}).mouseleave(function(){
		$(this).children('.j-nav-menu').hide();
	});
	
	//jib-list-menu
	$('.jbk-nav-list>li').mouseenter(function(){
		$(this).children('a').addClass('current');
		$(this).children('.jbk-sed-menu').show();	
	}).mouseleave(function() {
		$(this).children('a').removeClass('current');
        $(this).children('.jbk-sed-menu').hide();
    });
	
	
	
	
	
$(document).ready(function(){
			
	var scrollTop= $(window).scrollTop();
	//開場動畫
	$(".wrap").hide();	
	$('.img').hide();
	$('.prologue').hide();		
	setTimeout(function(){ 
		$(".img").show();
		$(".img").css("animation","down 1s linear 1 forwards");
		$('.prologue').fadeIn("slow");    	
	},50);			
	$(".continueBtn").click(function(){			  	
		$(".left").css("animation","");
    	$(".right").css("animation","");
    	$(".img").css("animation","");
	   	setTimeout(function(){
	   		$(".continueBtn").hide();
	   		$('.prologue').hide();
	   		$(".left").css("animation","left 1s linear 1 forwards");
	    	$(".right").css("animation","right 1s linear 1 forwards");
	   },500);			       
	    setTimeout(function(){$(".wrap").show()},700);			    		    
	    setTimeout(function(){$(".sec1").animate({height:"0"},800)},900);			    
	    setTimeout(function(){
	    	$(".left").hide();
	    	$(".right").hide();	    	
	    },1100);	    
	    setTimeout(function(){ 
	    	$(".left").css("animation","");
	    	$(".right").css("animation","");
	    	$(".img").css("animation","");
	    	// $('.about').click();
	    },1600);
	});

	//按下左上角按鈕返回首頁
	$('.home').click(function(){
		$('.img').hide();
		$('.prologue').hide();						
		$('html,body').animate({scrollTop:$('#about').offset().top-80}, 500);
		$(".sec1").animate({height:"100vh"},1200);
		setTimeout(function(){$('html,body').css('paddingTop', 0);},600);								
		setTimeout(function(){
			$(".wrap").hide();
			$(".right").css("animation","right 1s linear 1 backwards reverse");
			$(".left").css("animation","left 1s linear 1 backwards reverse");
		},900);
		setTimeout(function(){
			$(".right").show();
			$(".left").show();
		},1000);		
		setTimeout(function(){
			$(".img").show();
			$(".img").css("animation","down 1s linear 1 forwards");
			$('.prologue').fadeIn("slow");
			$(".continueBtn").show();
		},2000); 
	});

	
	$('.about').click(function(){
		var navbarHeight = $('.navbar').height();  //導覽列的高度
		$('html,body').animate({scrollTop:$('#about').offset().top-navbarHeight}, 500);				
		$('.contentBox').removeClass('contentAni');
		setTimeout(function(){$('.contentBox').addClass('contentAni');},100);				
	});				
	$('.skills').click(function(){
		$('html,body').animate({scrollTop:$('#skills').offset().top}, 500);				
		$('.skillContent').removeClass('skillAni');
		setTimeout(function(){$('.skillContent').addClass('skillAni');},100);				
	});
	$('.works').click(function(){
		$('html,body').animate({scrollTop:$('#works').offset().top}, 500);				
	});
	$('.contact').click(function(){
		$('html,body').animate({scrollTop:$('#contact').offset().top}, 500);				
	});
					
	$('.phoneBar').click(function(){
		$('.phoneMenu').slideToggle();
	});
	$(window).scroll(function(){
	    var scrollTop= $(window).scrollTop(); //捲軸距上方的高度
	    var aboutTop = $('#about').offset().top; //第一個section的最上方
	    var skillTop = $('#skills').offset().top; //第二個section的最上方
	    var workTop = $('#works').offset().top;		//第三個section的最上方
	    var contactTop = $('#contact').offset().top;  //第四個section的最上方	
	    var footerTop =  $('footer').offset().top;   
	    var navbarHeight = $('.navbar').height();  //導覽列的高度
	    //導覽列"about"顯示底線，內容由右進入
	    if(scrollTop > aboutTop - 90 && scrollTop < skillTop -100){      
	    	$('.about').css('border-bottom','3px solid brown');			    	
			setTimeout(function(){$('.contentBox').addClass('contentAni');},100);			      
	    }else {      
	    	$('.about').css('border-bottom','0px solid brown');
	    	$('.contentBox').removeClass('contentAni');		               
	    }
	    //當頁面移到第二個section最上方時,固定導覽列
	    if(scrollTop > skillTop -80){      
	      $('.navbar').addClass('fixed');   
	      $('body').css('paddingTop', navbarHeight);    //body向下一個導覽列高度，讓section內容可維持100vh			      
	    }else {      
	      $('.navbar').removeClass('fixed');
	      $('body').css('paddingTop', 0);			               
	    }
	    //導覽列"skills"顯示底線，技能圖表動畫			    
	    if(scrollTop > skillTop - 500 && scrollTop < workTop -500){
	    	$('.bar').each(function () {
                var thisValue = $(this).data('progress');		                		                
                $(this).css('width', thisValue + '%');
    		});
    		$('.skillContent').addClass('skillAni');
    		$('.skills').css('border-bottom','3px solid brown');
	    }else{
	    	$('.bar').each(function () {		                		                		                
                $(this).css('width', 0);
    		});            		
    		$('.skillContent').removeClass('skillAni');
    		$('.skills').css('border-bottom','0px solid brown'); 
	    }
	    //導覽列"works"顯示底線，作品列表從左右進入動畫
	    if(scrollTop > workTop - 500 && scrollTop < contactTop -100){
	    	$('.works').css('border-bottom','3px solid brown'); 
	    	$('.leftIn').addClass('bounceInLeft');
	    	$('.rightIn').addClass('bounceInRight');
	    	$('.topIn').addClass('bounceInTop');
	    	$('.bottomIn').addClass('bounceInBottom');
	    }else{
	    	$('.works').css('border-bottom','0px solid brown');
	    	$('.leftIn').removeClass('bounceInLeft');
	    	$('.rightIn').removeClass('bounceInRight');
	    	$('.topIn').removeClass('bounceInTop');
	    	$('.bottomIn').removeClass('bounceInBottom');
	    }
	    //導覽列"contact"顯示底線，聯絡資訊左右進入動畫
	    if(scrollTop > contactTop - 300 && scrollTop < footerTop ){
	    	$('.contact').css('border-bottom','3px solid brown'); //導覽列"contact"顯示底線
	    	$('.contactImgWrap').addClass('bounceInLeft');
	    	$('.contactArticle').addClass('bounceInRight');
	    }else{
	    	$('.contact').css('border-bottom','0px solid brown');
	    	$('.contactImgWrap').removeClass('bounceInLeft');
	    	$('.contactArticle').removeClass('bounceInRight');
	    }			    
	});		  
});
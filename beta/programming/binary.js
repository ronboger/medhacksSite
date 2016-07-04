
String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}

function randomChar(mix) {
	var num = parseInt(Math.random() * 36);
    
    if (parseInt(Math.random() * 10) < mix){
        num = parseInt(Math.random() * 10);
	}
    
    if (num >= 10) {
        num += 7;
    }

    return String.fromCharCode(num + 48);
}

var redraw = function() {
    $(".land, .title-border").each(function( index ) {
        if(!$(this).hasClass("location")) {
    	   var text = $(this).text();
    	
    	   for(i = 0; i < text.length; i++) {
    		  if(parseInt(Math.random() * 3) < 1) {
    		      text = text.replaceAt(i, randomChar(7));
    		  }
    	   }

    	   $(this).html(text);
        }
	});

    $(".water, .sponsor-border, .border, .about-border, .contact-border").each(function( index ) {
        if(!$(this).hasClass("location")) {
    	   var text = $(this).text();
    	
    	   for(i = 0; i < text.length; i++) {
    		  if(parseInt(Math.random() * 10) < 1) {
    		      text = text.replaceAt(i, randomChar(7));
    		  }
    	   }

    	   $(this).html(text);
        }
	});
};

setInterval(redraw, 75);
 
$('.header-navbar').css('opacity', 1);
$('body').css('font-size', 30);
setTimeout(function() {
        $('.header-navbar').css('opacity', 0);        
    }, 1000);
$(".header-navbar").hover(function() {
        $(this).css("opacity", 1)
            }, function() {
        $(this).css("opacity", 0)
    });

$('.info').css('width', $(window).width() * 0.85);
removeStyles();


function removeStyles() {
        $('.numbers').removeClass('marginTen');
        $(".middle-half").removeClass('shadow-bottom');
        $(".middle-half").removeClass('shadow-top');
        $(".top-half").removeClass('shadow-bottom');
        $(".bottome-half").removeClass('shadow-top');


        $('#faq-content').css('position', 'relative');
        $('#faq-content').css('opacity', 1);

        $('#about-content').css('position', 'relative');
        $('#about-content').css('opacity', 1);
}

$('#title, .title-border, .back').click(function(e) {
        $('.info').animate({ height: 0 });
        $('.numbers').animate({ height: 0 });
        $('.filler-div').animate({ height: 0});
        setTimeout(removeStyles, 350);
    });

$('#apply, .border').click(function(e) {
        $(".bottom-half").addClass('shadow-top');
        $('#bottom-info').animate({ height: $('#apply-content').outerHeight() });
        $('#bottom-numbers').animate({ height: $('#apply-content').height() });
        $('#bottom-numbers').addClass('marginTen');
        $(".middle-half").addClass('shadow-bottom');
    });

$('#about, .about-border').click(function(e) {
        $(".middle-half").addClass('shadow-top');
        $('#top-info').animate({ height: $(window).height() - $('.header-navbar').outerHeight() - 308 });
        $('#top-numbers').animate({ height: $('#about-content').outerHeight() * 1.015});
        $('#top-numbers').addClass('marginTen');
        $(".top-half").addClass('shadow-bottom');
        
        $('#faq-content').css('position', 'absolute');
        $('#faq-content').css('opacity', 0);

        $('.info').scrollTop(0);
    });

$('#faq, .faq-border').click(function(e) {
        $(".middle-half").addClass('shadow-top');
        $('#top-info').animate({ height: $(window).height() - $('.header-navbar').outerHeight() - 308 });
        $('#top-numbers').animate({ height: $('#faq-content').outerHeight() * 1.015});
        $('#top-numbers').addClass('marginTen');
        $(".top-half").addClass('shadow-bottom');

        $('#about-content').css('position', 'absolute');
        $('#about-content').css('opacity', 0);

        $('.info').scrollTop(0);
    });


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

$('.info').css('width', $(window).width() * 0.85);

function removeStyles() {
        $('.numbers').removeClass('marginTen');
        $(".middle-half").removeClass('shadow-bottom');
        $(".middle-half").removeClass('shadow-top');
        $(".top-half").removeClass('shadow-bottom');
        $(".bottome-half").removeClass('shadow-top');
}

$('#title, .title-border, .back').click(function(e) {
        $('.info').animate({ height: 0 });
        $('.numbers').animate({ height: 0 });
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
        $('#top-info').animate({ height: $('#about-content').outerHeight() });
        $('#top-numbers').animate({ height: $('#about-content').outerHeight() });
        $('#top-numbers').addClass('marginTen');
        $(".top-half").addClass('shadow-bottom');
    });

$('#contact, .contact-border').click(function(e) {
        $(".bottom-half").animate({ top: 200  });
        $(".middle-half").animate({ top: 200 });
        $(".middle-half").addClass('shadow-top');
        $(".top-half").animate({ top: -200  });
        $(".top-half").addClass('shadow-bottom');
    });

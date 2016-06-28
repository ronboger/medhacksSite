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
    $(".land").each(function( index ) {
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

    $(".water").each(function( index ) {
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


//resizeFont();

//$(window).resize(resizeFont());

function resizeFont() {
	var height = $(window).height();
	var width = $(window).width();
	$('.world-container').css('font-size', parseInt(width)/48.0 + 'px');
    console.log(parseInt(width)/48.0);

    /**if (width < $('.world').width()) {
        $('.world-container').css('font-size', parseInt(width)/55.0 + 'px');
        }**/
}
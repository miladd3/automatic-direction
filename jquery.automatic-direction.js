/*!
 * automatic Direction v1.2
 * By Milad Dehghan (http://dehghan.net)
 * github: https://github.com/miladd3/automatic-direction
 */
$(function() {	
	
	$(".dir-auto").keyup(function(){

		var textareavalue = $(this).val(); //Getting input value
		var arabic = /[\u0600-\u06FF]/g; //setting arabic unicode
		var match = textareavalue.match(arabic); 
		var spacesMatch = textareavalue.match(new RegExp(" ", 'g'));
		allcount = textareavalue.length;
		farsicount = match ? match.length : 0;
		spacesCount = spacesMatch ? spacesMatch.length : 0;
		Englishcount = allcount - farsicount - spacesCount;

    	if (farsicount > Englishcount) {
    		$(this).attr('dir','rtl');
    	}else {
    		$(this).attr('dir','ltr');
    	}

		//Showing character count on front-end
    	$(this).parent().find('.count-f').text(farsicount);
    	$(this).parent().find('.count-e').text(Englishcount);
    	$(this).parent().find('.count-all').text(allcount);
	});
});
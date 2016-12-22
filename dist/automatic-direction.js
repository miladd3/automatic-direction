/*!
 * automatic Direction v1.00
 * By Milad Dehghan (http://dehghan.net)
 * github: https://github.com/miladd3/automatic-direction
 */
$(function() {
	$(".dir-auto").keyup(function(){
		var textareavalue = $(this).val(); // Getting input value
		var arabic = /[\u0600-\u06FF]/g; // setting arabic unicode
		var match = textareavalue.match(arabic); // comparing with textbox value
		allcount = textareavalue.length; // get all characters count
		farsicount = match ? match.length : 0; // get arabic or farsi characters count
		Englishcount = allcount - farsicount; // get English or latin characters count
    	if (farsicount > Englishcount) { // comparing and setting html dir attribute
    		$(this).attr('dir','rtl');
    	}else {
    		$(this).attr('dir','ltr');
    	}
	});
});
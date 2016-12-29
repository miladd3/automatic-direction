/*!
 * automatic Direction v1.2
 * By Milad Dehghan (http://dehghan.net)
 * github: https://github.com/miladd3/automatic-direction
 */
window.addEventListener('load', function() {

	var elements = [].slice.call(document.querySelectorAll('.dir-auto'));

	elements.forEach(function(el) {
		var farsiCountNode = el.parentNode.querySelector('.count-f'),
			latinCountNode = el.parentNode.querySelector('.count-e'),
			countNode = el.parentNode.querySelector('.count-all');

		el.addEventListener('keyup', function(e) {
			var value = e.target.value,
				farsiChars = value.match(/[\u0600-\u06FF]/g),
				spaceChars = value.match(/\s/g),
				count = value.length,
				farsiCount = farsiChars ? farsiChars.length : 0,
				spaceCount = spaceChars ? spaceChars.length : 0,
				latinCount = count - farsiCount - spaceCount;
			
			e.target.setAttribute('dir', (farsiCount > latinCount) ? 'rtl' : 'ltr');

			if(farsiCountNode) farsiCountNode.innerHTML = farsiCount;
			if(latinCountNode) latinCountNode.innerHTML = latinCount;
			if(countNode) countNode.innerHTML = count;
		});
	});

});

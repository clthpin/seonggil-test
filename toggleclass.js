(function(el, cls) {
	var el = document.querySelector('.'+el);
	el.onclick = function() {
		if (el.className.match(cls) == null) {
			el.className += ' '+cls;
		} else {
			 el.className = el.className.replace(" "+cls, "");
		}
	}
})('test-color', 'lime');
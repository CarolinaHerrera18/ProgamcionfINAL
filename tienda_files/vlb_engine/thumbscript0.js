jQuery(document).ready(function(){
	var $=jQuery;
	$('#vlightbox0 .vlightbox0')
		.mouseenter(function(){
			var descr = $("div.vlb_zoom",this);
			if (!descr.length){
				descr = $('<div class="vlb_zoom" style="position:absolute">')
					.hide()
					.appendTo(this);
				$("img:first",descr).detach();
			};
			descr.fadeIn("fast");
		})
		
		.mouseleave(function(){
			$("div",this).fadeOut("fast")
		});
});

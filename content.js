$(document).ready(function () {
	$("#superbutton").on("click", function() {
		var superbutton = $(this);
		superbutton.toggleClass('clicked');
		if (superbutton.hasClass('clicked')) {
			superbutton.text('ON')
					alert('superbutton clicked');
		} else {
			superbutton.text('OFF')
		}
	});
});

// Highlights Hovered element
$(window).on({
	"mouseenter":function(e){
	$(e.target).css("background-color", "rgba(255,0,255,0.2)");
}, "mouseleave":function(e){$(e.target).css("background-color", "")}
});

// // Click to eliminate Element
// var PBKiller = $(window).on("click", function(e){
// 	var target = $(e.target);
// 	// if (target.attr('id') !== 'superbutton' && $("#superbutton").hasClass('clicked')) {
// 		e.preventDefault();
// 		target.remove();
// 	// }
// });
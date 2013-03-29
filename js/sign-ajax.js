(function($) {
    $('#sign-in-ajax').ready(function(){
        $("#sign-in-ajax").click(function(){
			$.get("signin-ajax", function(data){
			  $('#signin-ajax-msg').text(data.message);
			},'json');
			return false;
		});
    });
})(jQuery);
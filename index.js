$('#login').live('pageinit', function(event) {
	
	$('#form-login').submit(function(event) {
		event.preventDefault();
		var usuario = $('#usuario').val();
		var clave = $('#pass').val();

		authData(usuario, clave);
		return false;
	});
	
	if (localStorage.getItem("userId") != "" && localStorage.getItem("userId")) {
		
		init();
		
		var usuario = localStorage.getItem("usuario");
		var clave = localStorage.getItem("clave");

		authData(usuario, clave);
		return false;
		
	}
	
});

$('#ini').live('pageinit', function(event) {
	
	$('#btn-logout').click(function() {
		
		localStorage.setItem("userId", "");
		localStorage.setItem("usuario", "");
		localStorage.setItem("clave", "");
		
		location.href="index.html";
		
	});
	
	if (localStorage.getItem("userId") != "" && localStorage.getItem("userId")) {
		$('#btn-logout').show();
		$('#btn-user').show(function(){
			$(this).append(localStorage.getItem("usuario"));
		});
	}
	
});

$('#contact').live('pageinit', function(event) {
	$('#form-contact').submit(function(event){
		event.preventDefault();
	
		var cnames = $('#cnames').val();
		var cemail = $('#cemail').val();
		var cmobilephone = $('#cmobilephone').val();
		var cmessage = $('#cmessage').val();
		
		var nombres = localStorage.getItem("name");
		var email = localStorage.getItem("userEmail");
		
		dataString = 'cnames=' + cnames + '&cemail=' + cemail + '&cmobilephone=' + cmobilephone + '&cmessage=' + cmessage;

		$.ajax({
			type: "POST",
			url: "http://www.mywowmobile.com/send-contact.php",
			data: dataString,
		});
		
		$.mobile.changePage( $('#ini') );
		
		return false;
	});
});
$(function(){



$('form').submit(function(e){

	e.preventDefault();
	
	const nome = $('input[name="nome"]').val();
    const email = $('input[name="email"]').val();
    const mensagem = $('textarea[name="mensagem"]').val();

    
	
	$.ajax({
	url: 'http://localhost:8081/send',
	method: 'POST',
	data: {nome: nome, email: email, mensagem: mensagem},
	success: function(response) {
			$('.containerform').hide();

			$('.resposta').html('<div class="resposta" style ="text-align:center;margin: 30% 0"><h2>'+response+'</h2>'+'<br><button class="botao" style="border: 0;background-color: #ff703d;width: 165px;height: 44px;font-size: 13px;color: white;cursor: pointer;margin-top: 40px;border-radius: 30px;">ENVIAR NOVA MENSAGEM</button></div>');
            
		 	$('.botao').click(function() {
		 		
   				$('.resposta').hide();

   				$('.containerform').show();


 			 });
				
		
        },
    error: function(xhr, status, error) {
    		$('.containerform').hide();
           
            $('.resposta').html('<div class="resposta" style ="text-align:center;margin: 30% 0"><h2>'+xhr.responseText+'</h2>'+'<br><button class="botao" style="border: 0;background-color: red;width: 165px;height: 44px;font-size: 13px;color: white;cursor: pointer;margin-top: 40px;border-radius: 30px;">TENTAR NOVAMENTE</button></div>');
    		
    		$('.botao').click(function() {
		 	
   				$('.resposta').hide();

   				$('.containerform').show();

 			 });
          	
				
        }
});
  return false;
});



});
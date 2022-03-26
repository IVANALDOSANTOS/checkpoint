$(document).ready(function() {

    var botao = $('.bt1');//classe no que vai ser clicado
    var dropDown = $('.Galeria-fotos');    
   botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });
   $(document).ready(function() {

    var botao = $('.bt2');//classe no que vai ser clicado
    var dropDown = $('.ul-serv');    
   botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });
   $(document).ready(function() {

    var botao = $('.bt3');//classe no que vai ser clicado
    var dropDown = $('.ul-sobre');    
   botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });


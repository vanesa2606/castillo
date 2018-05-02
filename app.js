$( document ).ready(function() {    /* Esto tiene que estar siempre si no no funciona*/
    
    $('#miboton1').on('click', function(){
        $('#miboton3').removeClass().addClass('btn btn-success'); /*El remove quita el  nombre de la clase y el add la añade*/
        $('#miboton3').text('Activado');  /*Esto es para añadir un texto*/
        $('#miboton3').on('click', function(){
        $('img').hide();
    });
});

    $('#miboton2').on('click', function(){
        $('#miboton3').off('click');
        
    });


});
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    /* $('img').on('mousedown',function(){
        $(this).height(300);
    });

    $('img').on('mouseup mousemove',function(){
        $(this).height(200); /*Al poner el this solo se aplica a esooooo que es lo que quiere decir el this*/
    
   
























    /*$( "button" ).click(function() {/*click es para cuando haces click en el boton*/

       // $("#mitexto").text("Has pinchado en el botón");
        // $("#mitexto").css('color','blue');
        //$('img').height('300px');
        //$('img').toggle();

      /*  $('img').fadeOut(1600, function() {           

        });

        function completado() {                        

        }
        $('img').fadeOut(1600, completado);*/


   /* $('#mitexto').toggleClass('miestilo');*/

        /*$('#micapa').toggleClass('interruptor'
           
    );

        $('button').removeClass('btn-outline-danger').addClass('btn-info');

    });*/   

    //Pasar por encima del boton y que cambie

    /*$('#miboton1').mouseover(function(){

        $('#micapa').append('<p>Este es el nuevo texto</p>');

    
    });*/

    /*$('#miboton2').mouseover(function(){

        $( "#micapa > p:last-child").remove();

    });*/


// Esto es para quite la palabra HOY en este caso si lo lleva o ponerlo si no lo tiene

    /*$('#miboton3').click(function(){
        console.log ($('#micapa > p:first-child').text());  //Esto es para saber si estas comparando y si lo estas haciendo bien
        if ($('#micapa > p:first-child').text()=='HOY'){
            $('#micapa > p:first-child').remove();*/


       /* }*/

/* });*/
 // Este es para cambiar un texto por otro
    /*$('#miboton3').click(function(){
        console.log ($('#micapa > p:first-child').text());  
        if ($('#micapa > p:first-child').text()=='HOY'){
            $('#micapa > p:first-child').text('Hola');


        }*/



 


$( document ).ready(function() {
    $('#plantilla').hide(); //.hide() significa esconconder y lo que estamos haciendo aqui es esconder la plantila que hemos creado
    var cargarUsuarios = function (numero) {
        $.ajax({
            url: 'https://randomuser.me/api/?results=' + numero,
            dataType: 'json',
            success: function(datos) {
                $('#personas')//.empty(); Es para que vacie 
                $.each(datos.results, function(k, v) {
                    plantilla = $('#plantilla > div').clone();
                    plantilla.find('.col-md-9 > p > b').text(v.name.first +' '+ v.name.last);
                    plantilla.find('.col-md-9 > p:last-child').html(v.email+'<br>'+v.phone+'<br>'+v.location.city);
                    plantilla.find('.col-md-3 > img').attr('src',v.picture.large);
                    plantilla.show();
                    $('#personas').append(plantilla);
                });
            }
        });
    }

    

//GESTION DE CONTROLES

    $('.row > div:first-child > button').on('click', function () {
        cargarUsuarios(1);
    });


    $('.row > div:nth-child(2) > button').on('click', function () {
         var minumero = $('#numpersonas').val(); //.val() Es el valor. Que coga el valor que le estamos diciendo en el input que tenemos en el html
        cargarUsuarios(minumero);
    });

    $('.row > div:nth-child(3) > button').on('click', function () {
        $('#personas > div:first-child').remove();
    });

    $('.row > div:nth-child(4) > button').on('click', function () {
        $('#personas > div:last-child').remove();
    });

    $('.row > div:nth-child(5) > button').on('click', function () {
        $('#personas > div').hide();
    });

    $('.row > div:nth-child(6) > button').on('click', function () {
        $('#personas > div').show();
    });

    $('.row > div:nth-child(7) > button').on('click', function () {
        $('#personas  p:first-child > b').text($('.row > .col:nth-child(7) > input').val());
    });

    $('.row > div:nth-child(8) > button').on('click', function () {
        $('#personas > .row > .col-md-3 > img').toggle();
        
    });

    $('.row > div:nth-child(9) > button').on('click', function () {  //Poner la ultima posicion en la primera
         $('#personas ').prepend( $('#personas > div:last-child') );
        
    });
   




    
   // $('li').on('click', function(){ /*Solo se pone uno en "este"*/
        //$(this).css("background-color",'yellow');
   // });

    //$('li').on('click', function(){ /*Solo se pone uno en "padre" el padre es ul por lo tanto todos los hijos se ponen en amarillo il*/
       // $(this).parent().css("background-color",'yellow');
    //});

   /* $('li').on('click', function(){ /*Se pone toda la lista*/
       //$('ul').css("background-color",'yellow');
    //});

    //$('li').on('click', function(){ /*Todos los li hermanos del que pinchas*/
       // $(this).siblings().css("background-color",'yellow');
    // });

   // $('li').on('click', function(){ /*Todos los ul hermanos es decir los padres ul pero los hermanos son los div por lo tanto subimos hasta los padres y nos quedamos con los div que son los hermanos*/
       // $(this).parent().parent().siblings().find('ul').css("background-color",'yellow');/*el ul es para identificar con cual te quieres quedar*/
    // });

    //$('li').on('click', function(){ /*Todos los li de las demas listas*/
       // $(this).parent().parent().siblings().find('ul > li').css("background-color",'yellow');
    //});

    //$('li').on('click', function(){ /*El closest se queda con el mas cercano hacia arriba*/
       // $(this).closest('div').css("background-color",'yellow');
    //});

    //$('li').on('click', function(evento){ /*El primer li de las otras dos listas*/
       // $(this).parent().parent().siblings().find('ul > li:nth-child(1)').css("background-color",'yellow');
       // console.log(evento);
    //});

   });



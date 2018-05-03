$( document ).ready(function() {  
    $('#plantilla').hide();

    $('#miboton').on('click', function(){
       var aux = $('#numpersonas').val();
        
       $.ajax({
            url: 'https://randomuser.me/api/?results=' + aux,
            dataType: 'json',
            success: function(datos) {
                $('#personas').empty(); /*Empty es vacio*/
                $.each(datos.results, function(k, v){
                    plantilla = $('#plantilla > div').clone();
                    plantilla.find('.col-md-9 > p > b').text(v.name.first + ' '+ v.name.last);
                    plantilla.find('.col-md-9 > p:nth-child(2)').html(v.email +'<br>'+ v.phone +'<br>'+ v.location.city);
                    plantilla.find('.col-md-3 > img').attr("src",v.picture.large);
                    plantilla.show();
                    $('#personas').append(plantilla);
                    
                       });
                
            }
        });
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

    $('li').on('click', function(evento){ /*El primer li de las otras dos listas*/
        $(this).parent().parent().siblings().find('ul > li:nth-child(1)').css("background-color",'yellow');
        console.log(evento);
    });

    



});
 


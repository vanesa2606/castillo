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
    

});
 


$( document ).ready(function() {  
    $('#miboton').on('click', function(){
       var aux = $('#numpersonas').val();
        $.ajax({
            url: 'https://randomuser.me/api/?results=' + aux,
            dataType: 'json',
            success: function(datos) {
                $('#personas').empty(); /*Empty es vacio*/
                $.each(datos.results, function(k, v){
                    $('#personas').append(v.name.first+' '+v.email+' '+v.phone+' '+v.location.city);
                    $('#personas').append('<img  class="rounded-circle" src="'+v.picture.large+'" alt="">');
                    $('#personas').append('<br>');
                });
                
            }
        });

    });
});
    


 


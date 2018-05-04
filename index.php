<!doctype html>

<html lang="en">

  <head>

    <!-- Required meta tags -->

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">



    <!-- Bootstrap CSS -->

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">


    <title>Hello, world!</title>

  </head>
  
  <body>

        <!--  <div class="row">
                <div class="col">
                    <ul>
                        <li>UNO</li>
                        <li>DOS</li>
                        <li>TRES</li>
                        <li>CUATRO</li>
                        <li>CINCO</li>
                    </ul>
                </div>
                <div class="col">
                    <ul>
                        <li>UNO</li>
                        <li>DOS</li>
                        <li>TRES</li>
                        <li>CUATRO</li>
                        <li>CINCO</li>
                    </ul>
                </div>
                <div class="col">
                    <ul>
                        <li>UNO</li>
                        <li>DOS</li>
                        <li>TRES</li>
                        <li>CUATRO</li>
                        <li>CINCO</li>
                    </ul>
                </div>
            </div>
        -->
    <div class="row">
        <div class="col">
            <button class="btn btn-dark">Añadir uno</button>
        </div>
        <div class="col">
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#miModal">
            Más personas
            </button>
            
            
        </div>
        <div class="col">
            <button class="btn btn-danger">Borrar primero</button>    
        </div>
        <div class="col">
            <button class="btn btn-danger">Borrar ultimo</button>
        </div>
        <div class="col">
            <button class="btn btn-warning">Ocultar todos</button>
        </div>
        <div class="col">
            <button class="btn btn-warning">Mostrar todos</button>
        </div>
        <div class="col">
            <button class="btn btn-primary">Cambiar Nombre</button>
            <input type="text"/>
        </div>
        <div class="col">
            <button class="btn btn-warning">Mostrar Ocultar fotos</button>
        </div>
        <div class="col">
            <button class="btn btn-warning">Ultimo a primero</button>
        </div>


        
    </div>
    <h1> Listado de personas</h1>
    <p>
        <input type="number" id = "numpersonas"/>        
        <button id="miboton" class="btn btn-success">Cargar personas...</button>
    </p>

    <div id = "personas">

    </div>
    <div id = "plantilla" >
        <div  class = "row usuario">
            <div class = "col-md-3 text-center">
                  <img src = "https://randomuser.me/api/portraits/men/73.jpg">
            </div>
            <div class = "col-md-9 text-left">
                  <p><b>Julio Garcia</b></p>
                  <p>
                      juliogarcia@gmail.com <br>
                      555 254 5487 <br>
                      Valencia <br>
                  </p>
            </div>
        </div>
    </div>
    
    <?php include_once('modal.php'); // Esto es para que coga la pagina que hemos creado con modal.php que es donde esta el modal
    ?>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->

    <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="app.js"></script>
    <script src="appajax.js"></script>
  </body>


</html>
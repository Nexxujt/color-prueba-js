function cambiarColor() {
    // Obtener el valor del campo de entrada
    const color = document.getElementById('colorInput').value;

    // Usar switch para cambiar el color de fondo
    switch (color) {
        case 'violeta':
            document.body.style.backgroundColor = 'violet';
            if (color){
                document.getElementById('menu').style.backgroundColor = 'violet';
                document.getElementById('menu').style.color = 'white';   
            }
            break;
        case 'rojo':
            document.body.style.backgroundColor = 'red';
            if (color){
                document.getElementById('menu').style.backgroundColor = 'red';
                document.getElementById('menu').style.color = 'white';   
            }
            break;

        case 'amarillo':
            document.body.style.backgroundColor = 'yellow';
            if (color){
                document.getElementById('menu').style.backgroundColor = 'yellow';
                document.getElementById('menu').style.color = 'black ';   
            }
            break;
        case 'naranja':
            document.body.style.backgroundColor = 'orange';
            if (color){
                document.getElementById('menu').style.backgroundColor = 'orange';
                document.getElementById('menu').style.color = 'white';   
            }
            break;

            case 'verde':
                document.body.style.backgroundColor = 'green';
                if (color){
                    document.getElementById('menu').style.backgroundColor = 'green';
                    document.getElementById('menu').style.color = 'white';   
                }
                break;

            case 'por defecto':
                document.body.style.backgroundColor = 'white';
                if (color){
                    document.getElementById('menu').style.backgroundColor = 'liamarllgthgrey';
                    document.getElementById('menu').style.color = 'black';   
                }
                break;
        default:
            alert('Color no reconocido. Intenta con rojo, azul, verde, amarillo, negro o blanco.');
            break;
    }
}















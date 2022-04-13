window.onload = function(){
    //JavaScript del Index
    let container = document.querySelector('.container');
    let subtitulo = document.querySelector('.subtitulo');
    let destacado = document.querySelectorAll('p');
    let fondo = document.querySelector('body');
    let enlace = document.querySelector('a');
    let logo = document.querySelector('.logoDH');
    let menu = document.querySelector('#menu');
    
    let nombre = prompt('Ingrese su nombre');
    console.log(nombre);
    if(nombre !=''){
        subtitulo.innerHTML += nombre;
    }else{
        subtitulo.innerHTML += 'INVITADO';
    }
        
    subtitulo.style.textTransform = 'uppercase';
    let confirmar = confirm('Desea colocar un fondo de pantalla ')
    if(confirmar){
        fondo.classList.add('fondo');
        enlace.style.color = '#E51B3E';
    }
    console.log(destacado);
    for(let i = 0 ; i < destacado.length; i++){
        if(i % 2 == 0){
            destacado[i].classList.add('destacadoPar');
        }else{
            destacado[i].classList.add('destacadoImpar');
        }
    }
    

    logo.onclick = (e)=>{
        menu.classList.toggle('mostrar');
    }

    menu.addEventListener('mouseout', (e)=> {
        menu.classList.remove('mostrar');
    })

    container.style.display = 'block';
}

/* ● En index.ejs, agregar un evento que permita ocultar el menú lateral cuando el
mouse deje el área del menú.
● En movies.ejs, modificar el práctico de la clase anterior para que el modo oscuro se
aplique si el usuario pasa el mouse sobre el logo de Digital House, en la vista del
listado de películas.
● En moviesAdd.ejs, establecer que, cada vez que se pase el mouse por el título
'AGREGAR PELÍCULA', este cambie su color.
*/
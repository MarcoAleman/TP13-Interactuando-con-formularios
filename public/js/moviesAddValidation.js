function qs(e){
    return document.querySelector(e);
}

window.onload = function() {
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');
    
    let $form = qs('form');
    let elements = $form.elements;
    let ul = document.querySelector('.errores');
    ul.classList.add('alert-warning');

    let errors = [false, false, false, false, false, false];

    function errorInput(message) {
        ul.innerHTML+= `<li>${message}</li>`
    }

    function notEmpty (element, i) {
        if(element.value.trim() == ''){
            element.classList.remove('is-valid');
            element.classList.add('is-invalid');
            errors[i] = true;
            errorInput(`El ${element.name} es obligatorio`);
        } else {
            element.classList.remove('is-invalid');
            element.classList.add('is-valid');
            errors[i] = false;
        }
    }

    for(let i = 0; i < elements.length - 1; i++){
        elements[i].addEventListener('blur', ()=> {
            switch (i) {
                case 1 || 2 :
                    if(elements[i].value.trim() > 10 || elements[i].value.trim() < 0){
                        errorInput('Ingrese un número entre 1 y 10');
                        elements[i].classList.add('is-invalid');
                        errors[i] = true; 
                    } else {
                        notEmpty(elements[i], i);
                    }
                    break;
                case 4:
                    if(elements[i].value.trim() > 360 || elements[i].value.trim() < 60){
                        errorInput('Ingrese un número entre 60 y 360');
                        elements[i].classList.add('is-invalid');
                        errors[i] = true; 
                    } else {
                        notEmpty(elements[i], i);
                    }
                    break;
                default:
                    notEmpty(elements[i], i);
                    break;
            }
        })
    }

    $form.addEventListener('submit', e=>{
        e.preventDefault()
        elements.forEach((element, i)=>{
            notEmpty(element, i);
        })

        
        if (!errors.includes(true)) {
            $form.submit()
        } else {
            errorMessage("Complete los campos vacios")
        }
    })

}


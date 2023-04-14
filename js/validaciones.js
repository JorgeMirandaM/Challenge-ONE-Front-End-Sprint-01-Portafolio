export const validaInput=(input)=>{
    console.log(input.validity)
    const tipoDeInput= input.dataset.tipo;
    

    if(input.validity.valid){
        input.parentElement.classList.remove("input-contenedor--invalido");
        input.parentElement.querySelector(".input-mensaje-error").innerHTML=""
    } else{
        input.parentElement.classList.add("input-contenedor--invalido");
        input.parentElement.querySelector(".input-mensaje-error").innerHTML=mostrarMensajeDeError(tipoDeInput,input)
    }



    
}

export const validaTextarea=(textarea)=>{
    console.log(textarea.validity)
    const tipoDetextarea= textarea.dataset.tipo;
    

    if(textarea.validity.valid){
        textarea.parentElement.classList.remove("textarea-contenedor--invalido");
        textarea.parentElement.querySelector(".input-mensaje-error").innerHTML=""
    } else{
        textarea.parentElement.classList.add("textarea-contenedor--invalido");
        textarea.parentElement.querySelector(".input-mensaje-error").innerHTML=mostrarMensajeDeError(tipoDetextarea,textarea)
    }
    
}



const tipoDeErroes=[
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError"
]

const mensajesDeError={
    nombre:{
        valueMissing:"El campo nombre no puede estar vacio"
    },
    email:{
        valueMissing:"El campo correo no puede estar vacio",
        typeMismatch:"El correo no es valido"
    },
    asunto:{
        valueMissing:"El campo asunto no puede estar vacio",
    },
    mensaje:{
        valueMissing:"El campo asunto no puede estar vacio",
    },
}


const mostrarMensajeDeError=(tipoDeInput,input)=>{
    let mensaje = "";
    tipoDeErroes.forEach(error=>{
        if(input.validity[error]){
            mensaje=mensajesDeError[tipoDeInput][error]
        }
    })


    return mensaje;
}


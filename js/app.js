import { validaInput,validaTextarea } from "./validaciones.js";

const inputs= document.querySelectorAll("input");
const textarea=document.querySelectorAll('textarea');

inputs.forEach(input=>{
    input.addEventListener('blur',input =>{
        validaInput(input.target)
    })
})

textarea.forEach(item=>{
    item.addEventListener('blur',item =>{
        validaTextarea(item.target)
    })
})
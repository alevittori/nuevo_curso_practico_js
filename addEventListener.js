// obtengamos los selectores
var valor_1 = (document.querySelector('#valor_1'));
var valor_2 = (document.querySelector('#valor_2'));
var resultado = document.querySelector('#resultado');
var btn_calcular = document.querySelector('#btn_calcular');



// escuchando eventos 
function btnOnclick(){
    // swal('HOLA JANET', 'Te Amoo!!');
    if(valor_1.value == "" && valor_2.value == ""){
        resultado.innerHTML = 'Resultado: ' + 0;
    }else{
        resultado.innerHTML = 'Resultado: ' + parseInt(valor_1.value) + parseInt(valor_2.value);

    }
    
    // console.log(parseInt(valor_1.value) + parseInt(valor_2.value));
    valor_1.value = "";
    valor_2.value = "";
}

btn_calcular.addEventListener('click', btnOnclick)
$(document).ready(function(){
    $('#calculadorAsado input').keyup(function(){
        calcular();
    });
});

let productos = {
    'asadosurtido': [1,0.5, 0.5],
    'chorizosymorcillas': [2,0.5, 0.5],
    'colitacuadril': [2,0.5, 0.5],
    'achuras': [12,0.5, 0.5],
};

function calcular(){
    items = $('#items');
    hombres = $('#calculadorAsado input[name="hombres"]').val();
    mujeres = $('#calculadorAsado input[name="mujeres"]').val();
    menores = $('#calculadorAsado input[name="menores"]').val();


    if (!hombres) {
        hombres = 0;
    }
    if (!mujeres) {
        mujeres = 0;
    }
    if (!menores) {
        menores = 0;
    }
    
    Object.keys(productos).forEach(element => {

    });

}
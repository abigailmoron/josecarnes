$(document).ready(function(){
    $('#calculadorAsado input').keyup(function(){
        calcular();
    });
});

let productos = [
    {
        'texto': 'Asado Surtido',
        'cantidades': [3, 2, 1]
    },
    {
        'texto': 'Chorizos y Morcillas',
        'cantidades': [1,0.5, 0.5]
    },
    {
        'texto': 'Colita de Cuadril',
        'cantidades': [1,0.5, 0.5]
    },
];

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

    items.html('');

    productos.forEach(element => {
        var cant = element['cantidades'][0]*hombres + element['cantidades'][1]*mujeres + element['cantidades'][2]*menores;
        var texto = element['texto'];

        var item = '<div class="col-md-6 px-3 mb-md-3 border-bottom">';
        item += '<h5><span class="font-weight-bold">'+ cant + ' Kg</span>&nbsp;'+ texto + '</h5>';
        item += '</div>';

        items.append(item);
    });

}
$(document).ready(function(){
    calcular();
    
    $('#calculadorAsado input').keyup(function(){
        calcular();
    });
});

let productos = [
    {
        'texto': 'Costilla',
        'cantidades': [0.2,0.2, 0.1],
        'unidad': 'Kg',
    },
    {
        'texto': 'Vacio',
        'cantidades': [0.2,0.2, 0.1],
        'unidad': 'Kg',
    },
    {
        'texto': 'Chorizo',
        'cantidades': [0.1,0.1, 0.1],
        'unidad': 'Kg',
    },
    {
        'texto': 'Morcilla',
        'cantidades': [0.1,0.1, 0.1],
        'unidad': 'Kg',
    },
    {
        'texto': 'Pollo',
        'cantidades': [0.2,0.2, 0.1],
        'unidad': 'Kg',
    },
    {
        'texto': 'Lechuga y Tomate',
        'cantidades': [0.2,0.2, 0.2],
        'unidad': 'Kg',
    },
    {
        'texto': 'Pan',
        'cantidades': [0.2,0.2, 0.1],
        'unidad': 'Kg',
    },
    {
        'texto': 'Vino',
        'cantidades': [0.5,0.5, 0],
        'unidad': 'Lt',
    },
    {
        'texto': 'Gaseosa o Agua',
        'cantidades': [0.5,0.5, 0.5],
        'unidad': 'Lt',
    },
    {
        'texto': 'Carbon',
        'cantidades': [0.5,0.5, 0.5],
        'unidad': 'Kg',
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

        var cantidad = element['cantidades'][0]*hombres + element['cantidades'][1]*mujeres + element['cantidades'][2]*menores;
        var cant = Number(cantidad.toFixed(10).slice(0, 3));
        var texto = element['texto'];
        var unidad = element['unidad'];

        var item = '<div class="col-md-6 px-3 mb-md-3 border-bottom">';
        item += '<h5><span class="font-weight-bold">'+ cant + ' '+ unidad +'</span>&nbsp;'+ texto + '</h5>';
        item += '</div>';

        items.append(item);
    });

}
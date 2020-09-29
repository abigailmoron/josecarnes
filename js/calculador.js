$(document).ready(function(){
    calcular();
    
    $('#calculadorAsado input').keyup(function(){
        calcular();
    });
});

let productos = [
    {
        'texto': 'Corte Americano',
        'cantidades': [1,0.5, 0.5]
    },
    {
        'texto': 'Costilla Comun',
        'cantidades': [1,0.5, 0.5]
    },
    {
        'texto': 'Costilla Palomita',
        'cantidades': [1,0.5, 0.5]
    },
    {
        'texto': 'Entraña',
        'cantidades': [3,2, 1]
    },
    {
        'texto': 'Marucha',
        'cantidades': [3,2.5, 1.5]
    },
    {
        'texto': 'Matambre',
        'cantidades': [2,1, 0.5]
    },
    {
        'texto': 'Tapa de Asado',
        'cantidades': [2,1, 0.5]
    },
    {
        'texto': 'Tapa de Nalga',
        'cantidades': [2,1, 0.5]
    },
    {
        'texto': 'Vacio',
        'cantidades': [2,1, 0.5]
    },
    {
        'texto': 'Chorizo',
        'cantidades': [1,0.5, 0.5]
    },
    {
        'texto': 'Morcilla',
        'cantidades': [1,0.5, 0.5]
    },
    {
        'texto': 'Achuras',
        'cantidades': [2,1, 0.5]
    },
    {
        'texto': 'Lechuga y Tomate',
        'cantidades': [1,1, 0.5]
    },
    {
        'texto': 'Pan',
        'cantidades': [1,0.5, 0.5]
    },
    {
        'texto': 'Vino',
        'cantidades': [1,1, 0.5]
    },
    {
        'texto': 'Gaseosa o Agua',
        'cantidades': [1,1, 0.5]
    },
    {
        'texto': 'Carbon',
        'cantidades': [2,1, 0.5]
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
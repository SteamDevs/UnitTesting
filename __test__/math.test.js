import { sumar, restar, multiplicar } from '../math.js';

//Prueba unitaria de la suma

describe('1 + 1 = 2', ()=>{
    test('Prueba de la suma', ()=>{
        expect( sumar(1,1)).toBe(2);
    })
});


//Prueba de la multiplicacion 

describe(' 2 * 3 = 6 ', ()=>{
    test('Prueba de la multiplicacion', ()=>{
        expect( multiplicar(2, 3)).toBe(6);
    })
});
import { arrayLan } from '../array';

describe('Prueba Unitria para arrays', ()=>{
    test('este arreglo contiene cobol?', ()=>{
        expect( arrayLan()).toContain('cobol');
    });
    test('No contiene C#', ()=>{
        expect( arrayLan()).not.toContain('C#');
    });
});
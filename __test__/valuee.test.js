import { isNull,
    isTrue,
    isUndefinded,
    isFalse
    } from '../defaultval';


    describe('Valores no controlados', ()=>{
        test('Es nullo', ()=>{
            expect( isNull()).toBeNull();
        });
        test('Es verdadero', ()=>{
            expect( isTrue()).toBeTruthy();
        });
    });

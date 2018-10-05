import { num } from '../num'


describe('Comparando nummeros TestUnit', ()=>{
    test('mayor que', ()=>{
        expect( num(2,2)).toBeGreaterThan(3);
    });
    test('Mayor o igual', ()=>{
        expect( num(2,2)).toBeGreaterThanOrEqual(4);
    });
    test('Menor o igual', ()=>{
        expect( num(2,2)).toBeLessThan(5);
    });
});
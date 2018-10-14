import { fckCallback } from '../callback';
import { fkcallback2  } from '../callback';

describe('Testing Demo Callbacks', ()=>{
    test('Test del nombre', done =>{
        function otraCallback(data){
            expect(data).toBe('Hola Devs'); //Este valor debe de ser igual que el de fckCallback
            done();
        };
        fckCallback(otraCallback);
    });  
});

//Describe de otro callback
describe('Testing de calllbacks 2', ()=>{
    test('Callback data 2', done =>{
        function callback2(data2){
            expect(data2).toBeGreaterThan(24);
            done();
        }
    });
});

//Realizando el callback de otra funcion no utilizable
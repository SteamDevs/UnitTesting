import { fckCallback } from '../callback'

describe('Testing Demo Callbacks', ()=>{
    test('Test del nombre', done =>{
        function otraCallback(data){
            expect(data).toBe('Hola Devs'); //Este valor debe de ser igual que el de fckCallback
            done();
        };
        fckCallback(otraCallback);
    });  
});
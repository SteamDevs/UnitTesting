import { getDataFromAPI } from '../promise'

describe('Consumiendo un api externo', ()=>{
    test('probando el api de R&M', done=>{
        const API_URL = 'https://rickandmortyapi.com/api/character/'
        getDataFromAPI(API_URL).then(data =>{
            //console.log(data)
            expect(data.results.length).toBeGreaterThan(0); //Si esta es mayor a 0 
            done();
        });
    });

    test('Prueba de un resolve', ()=>{
      return expect(Promise.resolve('holaDevs')).resolves.toBe('holaDevs');
    });

    test('Prueba de reject', ()=>{
        return expect(Promise.reject('Fatal Err')).rejects.toBe('Fatal Err');
    });
});
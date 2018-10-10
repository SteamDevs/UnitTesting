import { getDataFromAPI } from '../promise';

describe('probando valores por Async/await', ()=>{
    //Provando toda la data
    test('Async', async () =>{
        const  API_URL = 'https://rickandmortyapi.com/api/character/';
        await getDataFromAPI(API_URL).then(data =>{
            expect(data.results.length).toBeGreaterThan(0);
        });    
    });
    //Probando un nombre en especifico
    test('Obteniendo un solo dato', async ()=>{
        const API_URL_NAME = 'https://rickandmortyapi.com/api/character/5';
        await getDataFromAPI(API_URL_NAME).then(data =>{
            expect(data.name).toEqual('Jerry Smith');
        });    
    });
    

});
//Desoues de cada prueba
afterEach(()=> console.log('ddespues de cada prueba'));
afterAll(()=> console.log('despues de todas las pruebas'));

//Antes de cada prueba

beforeEach(()=>console.log('Antes de cada prueba'));
beforeAll(()=> console.log('Antes de todas pruebas'));

//Prueba Demo para comprobar la integridad
describe('Prueba de valores', ()=>{
    test('La prueba valor verdadero', ()=>{
        expect(true).toBeTruthy();
    });
});
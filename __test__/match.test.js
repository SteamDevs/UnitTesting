describe('Comparacion de dos objetos', ()=>{
    let lang = {
        nombre: "JavaScript",
        nivel: "Alto",
        compilado: false
    }
    let lang2 = {        //Con este falla 
        nombre: "Java",  //Esto difiere de el otro
        nivel:  "Alto",
        compilado: true   //Igual que esto
    }
    let lang3 = {
        nombre: "JavaScript",
        nivel: "Alto",
        compilado: false
    } 
    
    test("Los elementos son iguales", ()=>{
        expect(lang).toEqual(lang3);
    });
});
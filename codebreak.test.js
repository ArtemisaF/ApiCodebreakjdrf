const { TestScheduler } = require("jest");
const Codebreak = require("./codebreak");

describe('Resultado completo',()=>{

    test('Todas las numeros y posiciones correctas XXXX',()=>{
        let value = Codebreak.verificar("1234");
        expect(value).toBe("XXXX");
    });
    
    test('Cuando falta un resultado',()=>{
        let value = Codebreak.verificar("1235");
        expect(value).toBe("XXX_");
    });  
   
});

describe('Resultados desordenados',()=>{

    test('Correctos pero fuera de su posicion',()=>{
        let value = Codebreak.verificar("3421");
        expect(value).toBe("----");
    });
    
});

describe('Resultados desordenados e incompeltos',()=>{

    test('Correctos fuera de posicion y errados',()=>{
        let value = Codebreak.verificar("3829");
        expect(value).toBe("-_-_");
    });
    
});

describe('Ninguno correcto',()=>{

    test('Todos incorrectos',()=>{
        let value = Codebreak.verificar("9568");
        expect(value).toBe("____");
    });
    
});
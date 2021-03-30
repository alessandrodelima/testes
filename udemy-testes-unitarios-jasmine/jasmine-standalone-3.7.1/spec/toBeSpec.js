describe("Comparador toBe", function() {
    var obj1 = {valor: true};
    var obj2 = {valor: true};

    it("deve validar o uso do toBe", function() {
        expect(true).toBe(true);
        expect("Teste").toBe("Teste");
        //expect(obj1).toBe(obj2); //erro. porque ele verifica se apenas se a referência é a mesma e não se contém o mesmo valor. 
        expect(obj1).not.toBe(obj2);
    });
});


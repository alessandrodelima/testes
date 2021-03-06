describe("Testes do objeto Spy", function() {

    var Calculadora = {
        somar: function(n1, n2) {
            return n1 + n2;
        }
    };

    beforeAll(function() {
        spyOn(Calculadora, "somar")
    });

    // it("deve possuir o método somar como não definido.", function() {
    //     expect(Calculadora.somar(1,1)).toBeUndefined();
    // });

    it("deve chamar o método somar ao menos uma vez", function() {
        expect(Calculadora.somar).not.toHaveBeenCalled(); // não é recomendado. Tem que fazer separado. 
        Calculadora.somar(1,1);
        expect(Calculadora.somar).toHaveBeenCalled();
    });
});

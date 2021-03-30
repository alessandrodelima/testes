describe("Testes do objeto Spy com and.returnValue", function(){
    var Calculadora = {
        somar: function(n1, n2) {
            return n1 + n2;
        },

        subtrair: function(n1, n2) {
            return n1 - n2;
        }
    };

    beforeAll(function(){
        spyOn(Calculadora, "somar").and.returnValue(10);
        spyOn(Calculadora, "subtrair");
    });

    it("deve retornar 10 para o método somar", function() {
        expect(Calculadora.somar(1, 2)).toEqual(10);
    });
});
describe("Testes do objeto Spy com and.throwError", function(){
    var Calculadora = {
        somar: function(n1, n2) {
            return n1 + n2;
        },

        subtrair: function(n1, n2) {
            return n1 - n2;
        }
    };

    beforeAll(function(){
        spyOn(Calculadora, "somar").and.throwError("erro");
        spyOn(Calculadora, "subtrair");
    });

    it("deve lançar um erro ao somar.", function() {
        expect(function() {Calculadora.somar(1, 1);
        }).toThrowError("erro");
    
    });
});
describe("Testes do objeto Spy com calls.argsFor", function(){
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

    it("deve demonstrar o uso do calls.argsFor.", function() {
        Calculadora.somar(1, 1);
        Calculadora.somar(2, 2);
        expect(Calculadora.somar.calls.argsFor(0)).toEqual([1, 1]);
        expect(Calculadora.somar.calls.argsFor(1)).toEqual([2, 2]);
    });
});
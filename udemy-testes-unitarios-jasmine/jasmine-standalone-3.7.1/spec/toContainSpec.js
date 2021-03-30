describe("Teste do toContain", function(){
    it("deve demonstrar o uso do toContain", function(){

        var texto = "Meu nome é Alessandro";
        var frutas = ["laranja", "banana", "pera"];

        expect(texto).toContain("Alessandro");
        expect(texto).not.toContain("alessandro");
        expect(frutas).toContain("laranja");
        expect(frutas).not.toContain("uva");
    });
});
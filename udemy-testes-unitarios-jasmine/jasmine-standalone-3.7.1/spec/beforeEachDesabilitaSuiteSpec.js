xdescribe("Teste do beforeEach", function(){

    var contador = 0;

    beforeEach(function() {
        contador++;
    });

    it("deve incrementar o contador para 1", function(){
        expect(contador).toEqual(1);
    });

    it("deve incrementar o contador para 2", function(){
        expect(contador).toEqual(5);
        //pending("teste ainda pendente")
    });

    it("deve incrementar o contador para 2"); // Outra maneira de comentar. Só o texto sem o expect.
});



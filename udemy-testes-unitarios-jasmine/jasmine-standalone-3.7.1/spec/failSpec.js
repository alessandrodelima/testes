describe("Teste do fail", function(){
    it("deve demonstrar o uso do fail", function(){
        var operacao = function(executar, callback) {
            if(executar) {
                callback();
            }
        }
        operacao(false, function(){
            fail("Não deve executar função de callback");
            
        });
    });
});
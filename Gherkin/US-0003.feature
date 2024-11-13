#language: pt

Funcionalidade: API de cupons  

Cenário: Listar todos os cupons cadastrados  
  Dado que o admin acessa a listagem de cupons  
  Quando realizar uma requisição GET para "/coupons"  
  Então deve retornar um status 200  
  E uma lista com todos os cupons cadastrados  

Cenário: Listar cupom por ID  
  Dado que o admin acessa a listagem de cupons  
  Quando realizar uma requisição GET para "/coupons/${id}" com um ID válido  
  Então deve retornar um status 200  
  E os dados do cupom correspondente devem ser exibidos  

Cenário: Cadastrar um novo cupom com sucesso  
  Dado que o admin possui os dados necessários para criar um cupom  
  Quando realizar uma requisição POST para "/coupons" com os campos obrigatórios 
  Então deve retornar um status 201  
  E o cupom criado deve estar disponível na listagem de cupons
  
Cenário: Impedir cadastro de cupom com código repetido 
  Dado que já existe um cupom com o código "Ganhe10"  
  Quando realizar uma requisição POST para "/coupons" com o mesmo código  
  Então deve retornar um status 400  
  E a mensagem "Código do cupom já existente" deve ser exibida  





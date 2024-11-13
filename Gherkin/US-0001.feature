 #language: pt

Funcionalidade: Adicionar item ao carrinho  

Cenário: Adicionar um produto ao carrinho com sucesso  
  Dado que o cliente está na página de um produto  
  Quando clicar no botão "Adicionar ao carrinho"  
  E o produto deve ser exibido no carrinho  
  Então a quantidade deve ser atualizada corretamente  

Cenário: Impedir que adicione mais de 10 itens do mesmo produto  
  Dado que o cliente tem 10 unidades de um produto no carrinho  
  Quando tentar adicionar mais uma unidade do mesmo produto  
  Então uma mensagem de erro "Não é possível adicionar mais de 10 itens" deve ser exibida  

Cenário: Impedir que o valor total ultrapasse R$ 990,00  
  Dado que o valor total no carrinho é R$ 990,00  
  Quando o cliente tenta adicionar um produto que ultrapassa o limite  
  Então uma mensagem de erro "Valor máximo do carrinho excedido" deve ser exibida  

Cenário: Aplicar cupom de desconto automaticamente baseado no valor  
  Dado que o cliente tem um total entre R$ 200,00 e R$ 600,00 no carrinho  
  Quando visualizar o resumo do carrinho  
  Então o cupom de 10% deve ser aplicado automaticamente  
  E o valor total deve ser atualizado com o desconto  

Cenário: Aplicar cupom de desconto automaticamente baseado no valor  
  Dado que o cliente tem um total acima de R$ 600,00 no carrinho  
  Quando visualizar o resumo do carrinho  
  Então o cupom de 15% deve ser aplicado automaticamente  
  E o valor total deve ser atualizado com o desconto  

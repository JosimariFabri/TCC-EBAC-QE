 #language: pt

 Funcionalidade: Login na plataforma  

Cenário: Login válido para usuário ativo  
  Dado que o cliente está na página de login  
  Quando informar <usuario> e <senha> corretamente de um usuário ativo  
  Então deve acessar a conta com sucesso   

Cenário: Mostrar mensagem de erro para email e senhas incorretos 
  Dado que o cliente está na página de login  
  Quando informar <usuario> e <senha> incorretos  
  Então uma mensagem de erro "Usuário ou senha incorretos" deve ser exibida  

Cenário: Bloquear login após três tentativas sem sucesso  
  Dado que o cliente falhou 2 vezes ao inserir a senha incorreta  
  Quando falhar novamente na terceira tentativa  
  Então o login deve ser bloqueado por 15 minutos  
  E uma mensagem "Sua conta foi temporariamente bloqueada" deve ser exibida  

Cenário: Impedir login para usuários inativos  
  Dado que o cliente possui uma conta inativa  
  Quando tentar fazer login  
  Então uma mensagem "Usuário inativo" deve ser exibida  
  
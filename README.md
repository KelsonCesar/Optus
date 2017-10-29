# Optus

Criei um branch tloiola e alguns files pra poder trabalhar neles. Vou push pro meu branch e ai voce pode merge para um branch temporario como 
havia te dito ou pra dentro to master se voce preferir. Voce tem que clicar New pull request pra poder merge dois branchs juntos.
Comparing Changes, se estar tudo verde voce so precisa clicar merge,caso contrario voce precisa no seu branch e no gitbash terminal e entrar com comandos:
git add . [click enter], git commit -m 'escreva alguma coisa aqui relacionada ao que tem feito addicionado entre aspas' [click enter], git push origin 
master [click enter]ou git push origin [pro branch que vc esteja trabalhando, por exemplo eu criei um branch e vou estar git push origin tloiola].
Depois troca pro master branch ou temporario branch  e ainda no erminal vc faz git merge que ai voce vai merge o seu branch com o master/temporario, 
porexemplo: quando eu push pro meu branch tloiola, eu troco de branch master/temporario, git merge nisso meu tloiola e master/temporario estao juntos 
no mesmo file quando eu abrir meu js.fileposso ver algo assim parecido

1 >>>>>>> new head
2 var something = 4;
3
4 >>>>>>>>
5 
6 var something = 10;

isso quer dizer que alguem mudou algo e tenho que deletar tudo que esta entre linhas 1 e 5 pra limpar os conflitos.
Se tudo estiver bem e nada de comflitos ai nao vera nada.

Vai testando ai. Acho que o importante e` estarmos confiantes no que estamos fazendo. Por muitas vezes eu tinha que estar texting um de meus TAs 
pra saber se estava fazendo correto pois ficava com duvidas se eu estava ou nao correto os passos que tomava. Abracos.
ps: nao esqueca de pesquisar sobre Issues que vc pode criar pra que eu possa trabalhar neles. 

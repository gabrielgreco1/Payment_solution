# Validador de arquivo CNAB
Repositório destinado para demonstração dos códigos para evitar erros em pagamentos tipo CNAB.

Realizamos atualmente cerca de 1000 pagamentos mensais, e todos são feitos via arquivo CNAB, um arquivo gerado pelo sistema que consiste basicamente em carregar todas as informações necessárias dos pagamentos que serão enviadas para o banco. Normalmente cada arquivo contém 250 a 500 pagamentos. 
Como o sistema não informa erros no arquivo (erros como: fornecedores sem chave de pagamento pix, fornecedores com chave pix diferente do CNPJ do mesmo, etc) e estávamos tendo uma grande recorrência de erros quando se tratava desse tipo de pagamentos pagamentos, realizei a criação deste projeto que valida os erros.

Sabemos que o processo de cadastro dos fornecedores é delicado, pois envolve diversos setores, o que acabava ocasionando em inúmeros erros. Devido a isto, eu realizei o desenvolvimento de uma ferramenta de validação dos arquivos de pagamento. 
 
Atualmente, a ferramenta valida com precisão apenas arquivos PIX, pois é o que mais utilizamos para realização de pagamentos no grupo atualmente. Ela também realiza uma pequena validação em arquivos de pagamento TED, como será demonstrado no decorrer deste Readme.

Obs. 1. Você deve ter o Node.js instalado em sua máquina 
     2. Você pode utilizar a extensão Live Viewer do VScode para utiliza-lo.
    
   1. Para realizar validão de arquivos PIX, primeiro abra a página inicial:
![image](https://github.com/gabrielgreco1/ValidadorCNAB/assets/110870588/cfddf42c-a4d9-473f-bc90-0b6288221aaf)
   2.Clique em "Escolher arquivo", procure o arquivo em seu computador, e selecione-o corretamente
            OBS. A ferramenta ainda não tem a funcionalidade para arrastar e soltar, apenas procurar.
            
   3. Perceba que o arquivo selecionado abriu na janela da esquerda:
   ![image](https://github.com/gabrielgreco1/ValidadorCNAB/assets/110870588/f86d5d1c-ef5a-43e2-ad12-14ffe48fb956)

   4. Clique no botão "VALIDAR". Agora, o sistema vai ler o seu arquivo, retirando pagamento por pagamento e validar, entregando apenas os errados e com o seu motivo, como podemos ver abaixo:
   ![image](https://github.com/gabrielgreco1/ValidadorCNAB/assets/110870588/af3f943a-9219-47cd-9e32-d78bad2489ac)


Tratativa de erros:
      Como tipos de erros temos apenas 2, sendo eles:
            "CNPJ divergente da chave pix" ou
            "Não tem chave pix cadastrada no TOTVS"

      6. Caso não tenham erros ele retornará:
      ![image](https://github.com/gabrielgreco1/ValidadorCNAB/assets/110870588/a4e7ebd6-808d-4a5e-bcca-1ba62e8ea2f2)

      




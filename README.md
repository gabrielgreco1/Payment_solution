# Payment_solution
Repositório destinado para demonstração dos códigos para evitar erros em pagamentos tipo CNAB.

Realizamos atualmente cerca de 1000 pagamentos mensais, e todos são feitos via arquivo CNAB, um arquivo gerado pelo sistema que consiste basicamente em carregar todas as informações necessárias dos pagamentos que serão enviadas para o banco. Normalmente cada arquivo contém 250 a 500 pagamentos. 
Como o sistema não informa erros no arquivo (erros como: fornecedores sem chave de pagamento pix, fornecedores com chave pix diferente do CNPJ do mesmo, etc) realizei a criação deste projeto que valida os erros.

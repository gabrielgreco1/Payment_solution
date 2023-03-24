var fileReader;
var fileContentes = document.getElementById("filecontents" /* && "filecontentsTED"*/);
var validacao = document.getElementById("validacao"); 

window.onload = function () {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        var fileSelected = document.getElementById("txtfiletoread");

        fileSelected.addEventListener('change', function (e) {
            var fileExtension = /text.*/;
            var fileTobeRead = fileSelected.files[0];

            if (fileTobeRead.type.match(fileExtension)) {
                fileReader = new FileReader();

                fileReader.onload = function (e) {
                    fileContentes.innerText = fileReader.result;
                }

                fileReader.readAsText(fileTobeRead);
            } else {
                alert("Por favor selecione arquivo texto")
            }

        }, false);
    } else {
        alert("Arquivo(s) não suportado(s)")
    }
}

    // Traz apenas os errados:
    //Chama o evento de click do botão
    const btn2 = document.getElementById("Roda");
    btn2.addEventListener("click", function () {

        //Cria a variavel de conteudo e iguala ela ao resultado da leitura do TXT
         const fileContent = fileReader.result;
         let validacaoHtml = "";
         //Cria a variavel de linhas e divide o conteudo do TXT por linha
           const lines = fileContent.split(/\r?\n/);
           let LastInterval1 = "";

           //Loop que lê linha a linha do arquivo (com base na variavel lines))
            for (let i = 2; i < lines.length; i += 2) {
               const line1 = lines[i];

                //Retira o primeiro intervalo e pula uma linha
                     if (line1 && line1.length >= 218) {
                     const interval1 = line1.substring(203, 218);
                     const line2 = lines[i + 1];
                     //Retira o segundo intervalo, cria a variavel de "condicao" para verificar os que tiverem errados e cria a variavel igualdade para verificar os que se repetem
                         if (line2 && line2.length >= 160) {
                         const interval2 = line2.substring(127, 142);
                         let condicao = (interval1 != interval2) ? 'Errado' : 'Correto';
                         let igualdade = (interval1 == LastInterval1) ? 'Igual' : 'Diferente';

                         //Verifica se as condições são verdadeiras
                                if (condicao == 'Errado' && igualdade != 'Igual'){
                                     LastInterval1 = interval1;
                                     //Verifica se há apenas números na chave pix
                                    if (!isNaN(interval2) && !interval2.includes("+")) {
                                        //Verifica se é nulo e cria as situações
                                        if (/^[^a-zA-Z0-9]+$/.test(interval2)) {
                                            condicao = "| Não tem chave pix cadastrada no TOTVS";
                                          
                                        } else {
                                            condicao = "| CNPJ divergente da chave pix";
                                            
                                        }
                                        //Da valor a variavel
                                        validacaoHtml += '<span class = "CNPJ1">' + interval1 + '</span>' + '<span class = "condicao">'+ condicao + " " + '</span>'+"<br>";
                                        
                                    }   
                                        
                                        
                                } 
                                         
                                
                        }
                    }
            }
                //Entrega o valor final da varivel "validacaoHtml" a DIV "validacao", que é a box de texto na direita da tela
                   const validacao = document.getElementById("validacao");
                   validacao.innerHTML = validacaoHtml;
     });

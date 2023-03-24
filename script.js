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

const btn2 = document.getElementById("Roda");
    btn2.addEventListener("click", function () {
         const fileContent = fileReader.result;
         let validacaoHtml = "";
           const lines = fileContent.split(/\r?\n/);
           validacaoHtml += '<pre class = "titulo">' + "          CNPJ         "  +  "|                SITUAÇÃO" + '</pre>';
            for (let i = 2; i < lines.length; i += 2) {
               const line1 = lines[i];
                     if (line1 && line1.length >= 218) {
                     const interval1 = line1.substring(203, 218);
                     const line2 = lines[i + 1];
                         if (line2 && line2.length >= 160) {
                         const interval2 = line2.substring(127, 142);
                         let condicao = (interval1 != interval2) ? 'Errado' : 'Correto';
                                if (condicao != 'Correto'){
                                    if (!isNaN(interval2) && !interval2.includes("+")) {
                                        if (/^[^a-zA-Z0-9]+$/.test(interval2)) {
                                         condicao = " | Não tem chave pix cadastrada no TOTVS";
                                         validacaoHtml += '<span class = "CNPJ1">' + interval1 + '</span>' + " " + '<span class = "condicao">'+ condicao + '</span>'+"<br>";
                                        }
                                    } 
                                         
                                }
                        }
                    }
            }
            
                   const validacao = document.getElementById("validacao");
                   validacao.innerHTML = validacaoHtml;
     });


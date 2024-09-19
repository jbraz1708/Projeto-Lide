// Script para coletar as informações dos selects do html e gerar uma tabela
document.getElementById('adicionar').addEventListener('click',function(){
    const funcao1 = document.getElementById('funcao').value;
    const funcao2 = document.getElementById('funcao2').value;
    const funcao3 = document.getElementById('funcao3').value;
    const funcao4 = document.getElementById('funcao4').value;
    const funcao5 = document.getElementById('funcao5').value;
//Condição para preencher a tabela
    if (funcao1 && funcao2 && funcao3 && funcao4){
        const tabelaBody = document.querySelector('#tabela tbody');
        const novaLinha = document.createElement('tr');
        novaLinha.innerHTML = `<td>${funcao1}</td><td>${funcao2}</td><td>${funcao3}</td><td>${funcao4}</td><td>${funcao5}</td>`;
        tabelaBody.appendChild(novaLinha);
    } else {
        alert('Por Favor, selecione todas as funções.');
    }
});

//Script para exportar a tabela para o arquivo csv 
document.getElementById('exportarCsv').addEventListener('click', function() {
    const tabela = document.getElementById('tabela');
    const rows = tabela.querySelectorAll('tr');
    
    let csvContent = "data:text/csv;charset=utf-8,";
    rows.forEach(row => {
        const cols = row.querySelectorAll('td, th');
        const rowData = Array.from(cols).map(col => col.innerText).join(',');
        csvContent += rowData + "\r\n"; // Adiciona nova linha
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "tabela.csv");
    document.body.appendChild(link);

    link.click();
    document.body.removeChild(link);
});

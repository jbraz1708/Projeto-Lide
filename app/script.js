// Script para coletar as informações dos selects do html e gerar uma tabela
document.getElementById('adicionar').addEventListener('click',function(){
    const funcao1 = document.getElementById('funcao').value;
    const funcao2 = document.getElementById('funcao2').value;
    const funcao3 = document.getElementById('funcao3').value;
    const funcao4 = document.getElementById('funcao4').value;
//Condição para preencher a tabela
    if (funcao1 && funcao2 && funcao3 && funcao4){
        const tabelaBody = document.querySelector('#tabela tbody');
        const novaLinha = document.createElement('tr');
        novaLinha.innerHTML = '<td>${funcao1}</td><td>${funcao2}</td><td>${funcao3}</td><td>${funcao4}</td>';
        tabelaBody.appendChild(novaLinha);
    } else {
        alert('Por Favor, selecione todas as funções.');
    }
});
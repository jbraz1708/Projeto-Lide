// Script para coletar as informações dos selects do html e gerar uma tabela
document.getElementById("adicionar").addEventListener("click", function () {
  const funcao1 = document.getElementById("funcao").value;
  const funcao2 = document.getElementById("funcao2").value;
  const funcao3 = document.getElementById("funcao3").value;
  const funcao4 = document.getElementById("funcao4").value;
  const funcao5 = document.getElementById("funcao5").value;
  const funcao6 = document.getElementById("funcao6").value;
  const funcao7 = document.getElementById("funcao7").value;
  const funcao8 = document.getElementById("funcao8").value;
  const funcao9 = document.getElementById("funcao9").value;
  const funcao10 = document.getElementById("funcao10").value;
  const funcao11 = document.getElementById("funcao11").value;
  const funcao12 = document.getElementById("funcao12").value;
  const funcao13 = document.getElementById("funcao13").value;
  const funcao14 = document.getElementById("funcao14").value;
  const funcao15 = document.getElementById("funcao15").value;
  const funcao16 = document.getElementById("funcao16").value;
  const funcao17 = document.getElementById("funcao17").value;
  const funcao18 = document.getElementById("funcao18").value;
  const funcao19 = document.getElementById("funcao19").value;
  const funcao20 = document.getElementById("funcao20").value;

  //Condição para preencher a tabela
  if (funcao1 && funcao2 && funcao3 && funcao4) {
    const tabelaBody = document.querySelector("#tabela tbody");
    const novaLinha = document.createElement("tr");
    novaLinha.innerHTML = `<td>${funcao1}</td><td>${funcao2}</td><td>${funcao3}</td><td>${funcao4}</td><td>${funcao5}</td><td>${funcao6}</td><td>${funcao7}</td><td>${funcao8}</td><td>${funcao9}</td><td>${funcao10}</td><td>${funcao11}</td><td>${funcao12}</td><td>${funcao13}</td><td>${funcao14}</td><td>${funcao15}</td><td>${funcao16}</td><td>${funcao17}</td><td>${funcao18}</td><td>${funcao19}</td><td>${funcao20}</td>`;
    tabelaBody.appendChild(novaLinha);

    // looping para atualizar o select
    const selectIds = ["funcao", "funcao2", "funcao3", "funcao4", "funcao5","funcao6", "funcao7",
      "funcao8", "funcao9", "funcao10", "funcao11", "funcao12", "funcao13", "funcao14", "funcao15",
      "funcao16", "funcao17", "funcao18", "funcao19", "funcao20"
     ];
    selectIds.forEach(function (id) {
      document.getElementById(id).selectedIndex = 0;
    });
  } else {
    alert("Por Favor, selecione todas as funções.");
  }
});

//Script para exportar a tabela para o arquivo csv
document.getElementById("exportarCsv").addEventListener("click", function () {
  const tabela = document.getElementById("tabela");
  const rows = tabela.querySelectorAll("tr");

  let csvContent = "data:text/csv;charset=utf-8,";
  rows.forEach((row) => {
    const cols = row.querySelectorAll("td, th");
    const rowData = Array.from(cols)
      .map((col) => col.innerText)
      .join(",");
    csvContent += rowData + "\r\n";
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "tabela.csv");
  document.body.appendChild(link);

  link.click();
  document.body.removeChild(link);
});

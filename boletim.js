function calcularMedia() {
  const nota1 = parseFloat(document.getElementById("nota1").value);
  const nota2 = parseFloat(document.getElementById("nota2").value);
  const nota3 = parseFloat(document.getElementById("nota3").value);
  const nota4 = parseFloat(document.getElementById("nota4").value);
  const nota5 = parseFloat(document.getElementById("nota4").value);


  const media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;

  let mensagem = "A sua média é: ";

  document.getElementById("resultado").innerHTML = mensagem + media;
}
  
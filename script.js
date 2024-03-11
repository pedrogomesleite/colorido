window.onload = function () {
    var conteiner = document.createElement("div");
    conteiner.setAttribute("class", "conteiner");
  
    for (let i = 1; i <= 1000; i++) {
      for (let j = 1; j <= 1000; j++) {
        var quadrado = document.createElement("div");
        quadrado.style.backgroundColor = corAleatoria();
        quadrado.style.gridRow = `${i}/${i+1}`;
        quadrado.style.gridColumn = `${j}/${j+1}`;
        
        conteiner.appendChild(quadrado);
      }
    }
  
    document.body.appendChild(conteiner);
  };
  
  function corAleatoria() {
    // Gera valores aleatórios para as componentes RGB
    var red = Math.floor(Math.random() * 256); // Valor entre 0 e 255
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
  
    // Formata os valores RGB em uma string hexadecimal
    var corHex =
      "#" +
      red.toString(16).padStart(2, "0") +
      green.toString(16).padStart(2, "0") +
      blue.toString(16).padStart(2, "0");
  
    return corHex;
  }
  
function adivinarNumeroSecreto() {
    // num aleatorio entre 1 y 100 (random)
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
  
    const numerosIntroducidos = []; //lista para almacenar num
  
    function solicitarNumero() {
      //para que ingresen el num
      let inputNumero = prompt("Intenta adivinar el número secreto (entre 1 y 100):");
  
      const numeroIngresado = parseInt(inputNumero);
  
      if (!isNaN(numeroIngresado)) { // ve que sea num
        
        numerosIntroducidos.push(numeroIngresado); //agrega num a la lista
  
        if (numeroIngresado === numeroSecreto) { //si adivina
          alert("Felicidades, adivinaste el número secreto.");
  
          console.log("Números introducidos:", numerosIntroducidos);
        } else { //si no lo adivina
          
          alert("Ups, el número secreto es incorrecto. Vuelve a intentarlo.");
          solicitarNumero();
        }
      } else { //si lo que pone no cumple con ser num
        
        alert("Error: Ingresa un número válido.");
        solicitarNumero();
      }
    }
  
    solicitarNumero();
  }
  